module.exports = {
    HOST : "localhost",
    USER : "postgres",
    PASSWORD : "bismillah123",
    DB : "db_kompas",
    dialect : "postgres",
    pool : {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}