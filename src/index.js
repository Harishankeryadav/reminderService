const express = require('express')
const bodyparser = require('body-parser');

const { PORT } = require('./config/serverConfig');
// const { sendBasicEmail } = require('./services/email-service');
const cron = require('node-cron');
const setUpAndStartServer = () => {
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);

        // sendBasicEmail(
        //     'support@gmail.com',
        //     'harishankeryadav927@gmail.com',
        //     'testing',
        //     'hello world'
        // )

        cron.schedule('*/2 * * * *', () => {
            console.log('running after every two minutes');
        });
    });
}

setUpAndStartServer();