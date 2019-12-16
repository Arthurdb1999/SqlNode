module.exports = {
    dialect: 'postgres',
    host:'localhost',
    username:'postgres',
    password: 'postgres',
    database: 'sqlnode',
    define: {
        timestamps: true,     //created_at, updated_at - timestamps das instâncias
        underscored: true,    //underline
    },
};

