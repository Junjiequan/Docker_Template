const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json([
    {
      id: '111111',
      title: 'First',
    },
    {
      id: '2222222',
      title: 'Second',
    },
  ]);
});

app.listen(4000, () => {
  console.log('listening for request on port 4000');
});
