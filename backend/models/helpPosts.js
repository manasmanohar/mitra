module.exports = (sequelize, DataTypes) => {
    const helpPosts = sequelize.define('helpPosts', {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        currentLocation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateOfEvent: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    })
    return helpPosts
}