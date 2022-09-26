const connection = require('../configs/dbConnection')
class UsersController {

    // [GET] /news
    detail = (req,res,next) => {
        const sql = 'SELECT * FROM `users` WHERE id = ?'
        const adr = req.params.id
        connection.promise().query(sql,[adr], function (err,result) {
            if (err) throw err;
            return result;
        })
            .then((user) => {
                res.render('pages/users/user', {
                    user: user[0][0]
                })
            })
            .catch(next);
    }

    //[GET] create a new user
    create = (req, res, next) => {
        res.render('pages/users/create');
    }

    stored = (req, res, next) => {
        const sql = "INSERT INTO users (name, address, email) VALUES(?,?,?)"
        const formData = req.body;
        let values =[]
        values = Object.values(formData)
        connection.promise().query(sql,values, function (err,result) {
            if(err) throw err;

        }).then(() => {
            res.redirect('/')
        })
    }

    edit = (req, res, next) => {
        const sql = 'SELECT * FROM `users` WHERE id = ?'
        const adr = req.params.id
        connection.promise().query(sql,[adr], function (err,result) {
            if (err) throw err;
            return result;
        })
            .then((user) => {
                res.render('pages/users/edit', {
                    user: user[0][0]
                })
            })
            .catch(next);
    }

    update = (req, res, next) => {
        const formData = req.body;
        const adr = req.params.id;
        console.log(formData)
        const sql = `UPDATE users SET
            name = '${formData.name}',
            address = '${formData.address}',
            email = '${formData.email}'
            where id=?
        `
        connection.promise().query(sql,[adr], function (err,result) {
            if (err) throw err;
        })
        .then(() => {
            res.redirect('/')
        })
        .catch(next)
    }
}

module.exports = new UsersController