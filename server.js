const express = require('express');
const server = express();
server.all('/', (req, res) => {
  res.send(`Rhythmia Level Rewards Up!`);
});



function keepAlive() {
  server.listen(3000, () => {console.log(`Server Ready!`)});
}

module.exports = keepAlive;