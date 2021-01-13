module.exports = {
    HOST : "localhost", // Your Host
    USER : "postgres", // Your Usernam
    PASSWORD : "bismillah123", // Your password
    DB : "db_kompas", //Your Database
    dialect : "postgres",
    pool : {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}