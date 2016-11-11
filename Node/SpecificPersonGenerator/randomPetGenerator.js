var fs = require('fs');
var Utils = require("./utils.js");

var utils = new Utils();

var RandomPetGenerator = function() {

    this.petBreeds = JSON.parse(fs.readFileSync('./SpecificPersonGenerator/json/dog-breeds.json', 'utf8'));

    this.petNames = JSON.parse(fs.readFileSync('./SpecificPersonGenerator/json/dog-names.json', 'utf8'));  
}

RandomPetGenerator.prototype.getRandomPetBreed = function()
{
    return utils.pickSingleValueFromArray(this.petBreeds);
};

RandomPetGenerator.prototype.getRandomPetName = function() {  
    return utils.pickSingleValueFromArray(this.petNames);
};

RandomPetGenerator.prototype.getRandomDog = function() {
    return this.getRandomPetName() + ', ' + this.getRandomPetBreed();
};

RandomPetGenerator.prototype.getRandomDogs = function(numberOfDogs) {
    var dogs = [];
    
    for(var i=0; i<numberOfDogs; i++) {
      dogs.push(this.getRandomDog());
    }
    return dogs;
};

RandomPetGenerator.prototype.getRandomPet = function() {
    return {name:this.getRandomPetName(), breed:this.getRandomPetBreed()};
};

RandomPetGenerator.prototype.getRandomPets = function(numberOfPets) {
    var pets = [];
        
    for(var i=0; i<numberOfPets; i++) {
      pets.push(this.getRandomPet());
    }
    return pets;
};

module.exports = RandomPetGenerator;

