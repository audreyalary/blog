'use strict'
let mongoose = require('mongoose')


// Create du schéma User Attention NOMMER AU SINGULIER :> c'est la structure d'un document
let blogModel = mongoose.model('Blog', new mongoose.Schema({
            title: {
                type: String,
                unique: true
            },

            content: {
                type: String

            }
          },{
                timestamps: true
            }))

module.exports = blogModel
