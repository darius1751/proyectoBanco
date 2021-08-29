const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRouters = require('./routers/userRouters.js');
const transactionRouters = require('./routers/transactionsRouters');
function Server(){
    const app = express();
    const init = ()=>{
        app.listen(app.get('port'),()=>{
            console.log('Server on port ',app.get('port'));
        });
    }
    const config = ()=>{
        app.use(cors());
        app.use(express.json());
        app.use(morgan('dev'));
        app.set('port',process.env.PORT || 4000);
    }
    const configRouters = ()=>{
        app.use('/user',userRouters());
        app.use('/transaction',transactionRouters());
    }
    config();
    configRouters();
    init();
};
const server = new Server();
