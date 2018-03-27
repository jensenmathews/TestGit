const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const models = require('./server/models');
const Content = models.Content;;


var actuals = Content.findAll(
    {
        attributes: ['Text']
    }
)
    .then(projects => {
        return projects;
    })
    .catch((error) => {
        console.log('Error getting values from table', error)
      });

    //   actuals.then(console.log);
module.exports = actuals;