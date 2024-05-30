import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { BACK_PORT } from './config.js';
import defaultRoute from './routes/routes-list.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use('/', defaultRoute);

app.listen(BACK_PORT, () => {
  console.log(`Backend emulator is listening on port ${BACK_PORT}`);
});
