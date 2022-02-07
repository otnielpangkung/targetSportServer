const { Olahraga, Kegiatan } = require('./models');

class Controller {
	static addOlahraga(req, res) {
		Olahraga.findAll({
			where: {
				namaOlahraga: req.body.namaOlahraga,
			},
		}).then((data) => {
			if (!data) {
				Olahraga.create({
					namaOlahraga: req.body.namaOlahraga,
					target: req.body.target,
				});
			} else {
				res.status(404).json({ msg: 'Periksa Kembali Data Anda' });
			}
		});
	}
	static getAllOlahraga(req, res) {
		Olahraga.findAll()
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((err) => {
				res.status(404).json(err);
			});
	}
	static addKegiatan(req, res) {
		Kegiatan.create({
			OlahragaId: req.body.OlahragaId,
			tanggal: req.body.tanggal,
			jam: req.body.jam,
			jumlah: req.body.jumlah,
			keterangan: req.body.keterangan,
		})
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((err) => {
				res.status(404).json(err);
			});
	}
	static getAllKegiatan(req, res) {
		Kegiatan.findAll()
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((err) => {
				res.status(404).json(err);
			});
	}
}

module.exports = Controller;
