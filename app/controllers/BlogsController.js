'use strict'
let Controller = require('./Controller')
const USER = require('../models/blog')
class BlogsController extends Controller {

constructor() {
  super(USER)
}


}

module.exports = BlogsController
