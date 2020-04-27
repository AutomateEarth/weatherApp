const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=daee8029d5db056020599978117e83cb&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees outside, and it feels like ' + response.body.current.feelslike + '.')
    }
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianBzdHJhdGVneSIsImEiOiJjazlnZDF6bmYwYWo0M2ZyN3Y0aXUxNXIxIn0.MaNKk4fAEt5zDpd-t89o7g&limit=1'

request({ url: geocodeURL , json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to the geocoding serivce')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find coordinates')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
})