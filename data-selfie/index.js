const { response } = require('express');
const express = require('express');

const app = express();
app.listen(3000, () => console.log('listening on port 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const allData = [];

app.post('/api', (req, res) => {
  const data = req.body;
  allData.push(data);
  res.json(allData);
  console.log(allData);
});