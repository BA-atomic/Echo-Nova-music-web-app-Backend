const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./@api-itunes/itunes');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

// comment this one out in development
app.use(cors({ origin: [ process.env.PROD_FRONTEND_ORIGIN ] }));

// comment this one out in production
// app.use(cors({ origin: [ process.env.LOCAL_FRONTEND_ORIGIN, process.env.IOS_LOCAL_FRONTEND_ORIGIN ] }));

app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
