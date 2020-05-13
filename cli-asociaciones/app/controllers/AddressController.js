const { Address } = require('../models/index');

module.exports = {

    async all(req, res) {
        let address = await Address.findAll({
            attributes: ['street'],
            include: {
                association: 'residente',
                attributes: ['name']
            }
        });

        res.json(address);
    }

}