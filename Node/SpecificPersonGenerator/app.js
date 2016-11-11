var fs = require('fs');

var SpecificPersonGenerator =  require("./specificPersonGenerator.js");
var Utils = require("./utils.js");

var utils = new Utils();

var saveSpecificPeopleToFiles = function(specificPeople)
{
    for(var i=0; i<specificPeople.length; i++) {
        var fileName = utils.getGuid();
        fs.writeFile('./SpecificPersonGenerator/generatedPeople/'+ fileName + '.json', JSON.stringify(specificPeople[i]) );
    }
}

var numberOfPeoleToGenerate = process.argv[2];

var specificPersonGenerator = new SpecificPersonGenerator();
specificPersonGenerator.generateSpecificPeople(numberOfPeoleToGenerate, saveSpecificPeopleToFiles);

//specificPersonGenerator.generateSpecificPeople(3, saveSpecificPeopleToFiles);




