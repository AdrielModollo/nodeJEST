module.exports = {
    host: '127.0.0.1',
    username: 'docker',
    password: 'docker',
    database: 'nodeauth',
    dialect: 'postgres',
    operatiorsAliases: false,
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true, //userEmail -> user_email
    }
};