module.exports = (sequelize, DataTypes) => {
    const eventPosts = sequelize.define('eventPosts', {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        event_location: {
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
        dateOfEvent: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        timeOfEvent: {
            type: DataTypes.TIME,
            allowNull: false,
        },
    })
    return eventPosts
}
