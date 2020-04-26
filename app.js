const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=daee8029d5db056020599978117e83cb&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current)

    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees outside, and it feels like ' + response.body.current.feelslike + '.')
})