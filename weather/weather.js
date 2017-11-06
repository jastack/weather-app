const request = require('request');

// dc02dd7596335826f42ce78cb4c912c7

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/dc02dd7596335826f42ce78cb4c912c7/${lat},${lng}`,
    json: true
  },(error, response, body) => {
    if (!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemp: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
};



module.exports = {
  getWeather
};
