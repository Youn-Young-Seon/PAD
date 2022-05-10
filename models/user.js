const { sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.STRING,
            allowNull:false
        },
        password: DataTypes.STRING,
        eMail: DataTypes.STRING,
    },
    {
        sequelize,
        timestamps: true
    });
};