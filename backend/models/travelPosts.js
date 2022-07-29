module.exports = (sequelize, DataTypes) => {
    const travelPosts = sequelize.define('travelPosts', {
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
            allowNull: true,
        },
        modeOfTravel: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        destination: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        noParticipants: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        currentLocation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateOfTravel: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        timeOfTravel: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        joinedUsers: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        userQueue: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    })

    return travelPosts
}
