const connection = require('../configs/dbConnection')
class IndexController {

    // [GET] /news
    index = async (req,res) => {
        try {
            const pool = connection.promise();

            const queryMascots = pool.query('SELECT * FROM `mascots`');
            const queryUsers = pool.query('SELECT * FROM `users`');

            const results = await Promise.all([queryMascots,queryUsers]);
            let data =[];
            results.forEach(([rows,fields]) => {
                data.push(rows)
            })
            res.render('pages/index', {
                mascots: data[0],
                users: data[1]
            })
        }
        catch (err) {
            console.error(err)
        }
}
}

module.exports = new IndexController