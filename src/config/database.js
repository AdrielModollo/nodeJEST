module.exports = {
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    database: 'postgres',
    dialect: 'postgres',
    port: 5433,
    operatorsAliases: false,
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true, //userEmail -> user_email
    },
};