'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Kegiatans', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			OlahragaId: {
				type: Sequelize.INTEGER,
			},
			tanggal: {
				type: Sequelize.STRING,
			},
			jumlah: {
				type: Sequelize.INTEGER,
			},
			jam: {
				type: Sequelize.STRING,
			},
			keterangan: {
				type: Sequelize.TEXT,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Kegiatans');
	},
};
