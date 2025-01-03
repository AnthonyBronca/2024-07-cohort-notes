module.exports = {
  development: {
    storage: process.env.DB_FILE,
    dialect: "sqlite", // change this to be sqlite/postgres
    seederStorage: "sequelize",
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    // logging: false
  },
};
