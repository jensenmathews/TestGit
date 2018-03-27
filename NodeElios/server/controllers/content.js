const content = require('../models').Content;

module.exports = {
    list(req, res){
        return content
            .all(
                {
                    attributes: ['Text'],
                }
            )
            .then(content => res.status(200).send(content))
            .catch(error => res.status(400).send(error));
    },
}