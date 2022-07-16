module.exports = (sequelize, DataTypes) => {
    const userInterests = sequelize.define('userInterests', {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        interests: {
            type: DataTypes.JSON,
        },
    })
    return userInterests
}
