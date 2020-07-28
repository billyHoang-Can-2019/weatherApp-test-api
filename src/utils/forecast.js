const request = require('request')
const weatherstack_token = 'f71e373ce819f2b2b12971f3592186f8';

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key='+encodeURIComponent(weatherstack_token)+'&query='+latitude+','+longitude;
    console.log(url);
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current)
            //test
        }
    })
}

module.exports = forecast