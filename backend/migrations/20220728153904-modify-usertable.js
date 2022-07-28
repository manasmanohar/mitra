'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
        queryInterface.changeColumn('Users', 'userId', {
            type: DataTypes.FLOAT,
            defaultValue: 3.14,
            allowNull: false,
        })

        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
}
