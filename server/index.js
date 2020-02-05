const express = require('express');
const ejs = require('ejs');
const bp = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bp.json());
app.engine('html', ejs.renderFile);
app.get('/:id', (req, res) => {
  res.render('../public/index.html');
});
app.set('view engine', 'html');

const port = process.env.PORT || 4000;
app.listen(port, () => { console.log(`Listening on port ${port}`); });