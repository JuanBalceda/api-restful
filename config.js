process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
process.env.PORT = process.env.PORT || 3000

if(process.env.NODE_ENV === 'dev'){
    process.env.URL_DB = 'mongodb://edteam:123456@localhost:27017/marathon_app';
}else{
    process.env.URL_DB = 'mongodb://jbalceda:edteam123456@ds119024.mlab.com:19024/jb-marathons';
}