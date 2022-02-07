'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Kegiatan extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Kegiatan.init(
		{
			OlahragaId: DataTypes.INTEGER,
			tanggal: DataTypes.STRING,
			jam: DataTypes.STRING,
			jumlah: DataTypes.INTEGER,
			keterangan: DataTypes.TEXT,
		},
		{
			sequelize,
			modelName: 'Kegiatan',
		}
	);
	return Kegiatan;
};
