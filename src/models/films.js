const Request = require('../helper/request.js');
const PubSub = require('../helper/pub_sub.js');

const Films = function (){
  this.data = null;
}

Films.prototype.getData = function () {
  const url = 'https://ghibliapi.herokuapp.com/films'
    const request = new Request(url);
    request.get()
      .then((data) => {
        this.data = data;
      console.log(data);
      PubSub.publish('Films:data-ready', this.data);
  })
};

module.exports = Films;
