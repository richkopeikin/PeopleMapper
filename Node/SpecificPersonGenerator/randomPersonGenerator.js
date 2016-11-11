var https = require("https");

function RandomPersonGenerator() {

    this.generateRandomPeople = function (numberOfPeople, callbackFunction) {
      
        var requestOptions = {
            host: 'randomuser.me',
            path: '/api/?nat=us&results=' + numberOfPeople,
            method: 'GET',
            scheme: 'https'
        }

        https.request(requestOptions, function (res) {
            var randomPeople = "";
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                randomPeople += chunk;
            });
            res.on('end', function (chunk) {
                var randomPeopleArray = JSON.parse(randomPeople).results;
                callbackFunction(randomPeopleArray);
            });
        }).end();
    }
}

module.exports = RandomPersonGenerator;
