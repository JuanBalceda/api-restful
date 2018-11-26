const c = console.log;
const app = require('./app');

app.listen(
    app.get('port'),
    () => c(`Starting RESTful API at port ${app.get('port')} `)
);

c('ENV:\n',process.env.PORT,'\n',process.env.NODE_ENV,'\n',process.env.DB)