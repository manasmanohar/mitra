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
        joined: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        approval: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    })
    return helpPosts
}
