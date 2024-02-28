import express from 'express';
import { resolve } from 'path';

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.get('/', (_req, res) => {
  res.sendFile(resolve(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`page strted on ${PORT} http://localhost:3000/`);
});
