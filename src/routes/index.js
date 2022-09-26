const indexRouter = require('./index/index.route');
const aboutRouter = require('./about/about.route')
const usersRouter = require('./users/users.route')

function route(app) {
    app.use('/about', aboutRouter);
    app.use('/user', usersRouter);
    app.use('/', indexRouter);
}

module.exports = route;