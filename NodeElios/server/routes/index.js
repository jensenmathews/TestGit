const contentController = require('../controllers').content;

module.exports = (app) => {
    app.get('/api', (req, res)=> res.status(200).send({
        message: 'Welcome to the downloaded API!',
    }));

    app.get('/api/content', contentController.list);
}