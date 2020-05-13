const { Address } = require('../database/db');

module.exports = {

    async all(req, res) {
        let address = await Address.findAll({
            attributes: ['street']
        });

        res.json(address);
    }

}