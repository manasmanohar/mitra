'use strict'









ALTER TABLE travelPosts
ADD COLUMN joinedUsers VARCHAR(60) AFTER name;

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn(
                    'travelPosts',
                    'joinedUsers',
                    {
                        type: Sequelize.DataTypes.STRING,
                    },
                    { transaction: t }
                ),
                queryInterface.addColumn(
                    'travelPosts',
                    'userQueue',
                    {
                        type: Sequelize.DataTypes.STRING,
                    },
                    { transaction: t }
                ),
                queryInterface.addColumn(
                    'travelPosts',
                    'status',
                    {
                        type: Sequelize.DataTypes.Boolean,
                    },
                    { transaction: t }
                ),
            ])
        })
    },
    down: (queryInterface, Sequelize) => {},
}
