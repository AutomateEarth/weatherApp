const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=daee8029d5db056020599978117e83cb&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})