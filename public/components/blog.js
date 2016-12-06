((app) => {
    'use strict'
    // creation du component
    app.component('blog', {

        templateUrl: 'components/blog.html',

        controller: ['blogService', function(blogService) {

            blogService.get().then((res) => {
                this.blogs = res.data
            })

            this.display = (blog, index) => {
                //FONCTION LIRE LA SUITE
                this.blog = blog
                this.blog.index = index // mémoriser la position (index dans this.blogs) du blog que l'on selectionne
            }

            this.delete = function(blog, index) {
                blogService.delete(blog).then((res) => {
                    this.blogs.splice(index, 1);
                })
            }

            this.add = () => {
                this.blog = {}
                this.blog.addMode = true
            }

            this.saveNew = () => {
                if (this.blog.editMode) {
                    //edition
                    blogService.edit(this.blog).then((res) => {
                        this.blog = null
                    })
                } else {
                    //Nouveau
                    blogService.add(this.blog).then((res) => {
                        this.blog.addMode = false
                        this.blogs.push(res.data)
                        this.blog = null
                    })
                }

            }

            let previous = {}

            this.edit = () => {
                previous = angular.copy(this.blog) //mémorise l'ancienne ou valeur courante du blog
                this.blog.editMode = true // on passe le blog en mode edition
            }

            this.cancel = () => {
                this.blog = previous
                this.blogs[this.blog.index] = previous // on remplace également dans la liste le blog par l'ancienne version grace à sa position (index)
            }

        }]
    })

})(angular.module('app.blogs', []))
