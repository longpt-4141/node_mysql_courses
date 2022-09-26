const express = require('express');
const { Op } = require("sequelize");
const connection = require('../configs/dbConnection')
const db = require('../models/index');

class AboutController {

    // [GET] /news
    index = (req,res,next) => {
        db.Users.findAll({
            where : {
                id: [1,2,5]
            }
        })
            .then((users) => {
                console.log(users)
                res.render('pages/about', {users})
            })
            .catch((e) => console.log(e))
    }

}

module.exports = new AboutController