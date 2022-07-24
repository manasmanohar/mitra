module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userLocation: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        interests: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    })
    return Users
}
