module.exports = {
  development: {
    storage: process.env.DB_FILE,
    dialect: "sqlite", // you can change this to postgres if you learn to use postgres in dev
    seederStorage: "sequelize",
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    // logging: false
  },
};
