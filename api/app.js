const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json([
    {
      id: 'gggggggggg',
      title: 'First title',
    },
    {
      id: 'fffffff',
      title: 'Second titleeee',
    },
  ]);
});

app.listen(4000, () => {
  console.log('listening for request on port 4000');
});
