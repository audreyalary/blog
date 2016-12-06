((app)=>{


    'use strict'
    app.service('blogService', function($http) {
        return {

            get() {
                return $http.get('/api/blogs') //promise

            },
            add: function(blog) {
                return $http.post('/api/blogs', blog) // (url, objet)
            },
            edit(blog) {
                return $http.put('/api/blogs/' + blog._id, blog) // (url+id, objet)

            },
            delete(blog) {
                return $http.delete('/api/blogs/' + blog._id)

            }
        }
    })


})(angular.module('app.services'))
