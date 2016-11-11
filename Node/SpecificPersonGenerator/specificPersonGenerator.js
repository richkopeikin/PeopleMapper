var Utils = require("./utils.js");
var RandomPersonGenerator = require("./randomPersonGenerator.js");
var RandomPetGenerator = require("./randomPetGenerator.js");

//http://stackoverflow.com/questions/5364928/node-js-require-all-files-in-a-folder
var PersonX = require("./domain/personX.js");
var PersonY = require("./domain/personY.js");
var PersonZ = require("./domain/personZ.js");
var PersonalInfo = require("./domain/personalInfo.js");
var ContactInfo = require("./domain/contactInfo.js");
var Address = require("./domain/address.js");
var Pet = require("./domain/pet.js");

var utils = new Utils();
var randomPetGenerator = new RandomPetGenerator();

var SpecificPersonGenerator = function () {};

SpecificPersonGenerator.prototype.generateSpecificPeople = function(numberOfPeople, callbackFunction) {
    var randomPersonGenerator = new RandomPersonGenerator();

    randomPersonGenerator.generateRandomPeople(numberOfPeople, (randomPeople) => {
        var specificPeople = [];

        for (var i = 0; i < randomPeople.length; i++) {
            var specificPerson;
            var personType = utils.getRandomInt(0, 3);
             switch(personType) {
                case 0: specificPerson = GetNewPersonXFromRandomPerson(randomPeople[i]);
                break;
                case 1: specificPerson = GetNewPersonYFromRandomPerson(randomPeople[i]);
                break;
                case 2: specificPerson = GetNewPersonZFromRandomPerson(randomPeople[i]);
                break;
            }
            specificPeople.push(specificPerson);        
        }

        callbackFunction(specificPeople);
    });
}

//SpecificPersonGenerator.prototype.GenerateSpecificPeopleFromRandomPeople = function(randomPeople) {}

var GetNewPersonXFromRandomPerson = function(randomPerson)
{
    var simplePhone = randomPerson.phone.replace(/\D/g,'');

    var addressParams = {street:randomPerson.location.street, city:randomPerson.location.city, zip:randomPerson.location.postcode};

    var address = new Address(addressParams);

    var params = {
      type:'PersonX',
      fullName: randomPerson.name.first + " " + randomPerson.name.last, //First Last
      age: utils.getAge(new Date(randomPerson.dob)),
      birthday: new Date(randomPerson.dob).toLocaleDateString('en-us', {month:'long', day:'numeric'}), // "June 02"
      email: randomPerson.email,
      address: address,
      pet1: randomPetGenerator.getRandomPet(),
      pet2: randomPetGenerator.getRandomPet(),
      pet3: randomPetGenerator.getRandomPet(),
      phone: simplePhone.substr(0,3) + ' ' + simplePhone.substr(3,3) + ' ' + simplePhone.substr(6,4)  //XXX XXX XXXX
    }

    return new PersonX(params);
}

var GetNewPersonYFromRandomPerson = function(randomPerson)
{
    var simplePhone = randomPerson.phone.replace(/\D/g,'');

    var numberOfPets = utils.getRandomInt(0, 10) 

    var params = {
        type: 'PersonY',
        name: randomPerson.name.last + ', ' + randomPerson.name.first,     // lastname, firstname
        dob: new Date(randomPerson.dob).toLocaleDateString('en-us', {year:'numeric', month:'long', day:'numeric'}),      // January 01, 1994
        emailAddress: randomPerson.email,
        street: randomPerson.location.street,
        city: randomPerson.location.city,
        pets: randomPetGenerator.getRandomPets(numberOfPets),
        areaCode: simplePhone.substr(0,3),
        phone: simplePhone.substr(3,3) + '-' + simplePhone.substr(6,4)
    }

    return new PersonY(params);
}

var GetNewPersonZFromRandomPerson = function(randomPerson)
{
    var simplePhone = randomPerson.phone.replace(/\D/g,'');

    var numberOfDogs = utils.getRandomInt(0, 10);

    var personalInfoParams = 
        {
            name: randomPerson.name.first + ' ' + utils.getRandomInitial() + ' ' + randomPerson.name.last
            , birthday:  utils.getSlashFormattedDate(new Date(randomPerson.dob))
            , dogs: randomPetGenerator.getRandomDogs(numberOfDogs)
        };

    var personalInfo = new PersonalInfo(personalInfoParams);

    var contactInfoParams =
        {
            email:randomPerson.email
            , streetAddress:randomPerson.location.street
            , city:randomPerson.location.city
            , phone: simplePhone.substr(0,3) + '.' + simplePhone.substr(3,3) + '.' + simplePhone.substr(6,4) 
        };
    
    var contactInfo = new ContactInfo(contactInfoParams);

    var params = { 
      type:'PersonZ',
      personalInfo: personalInfo,
      contactInfo: contactInfo 
    }

  return new PersonZ(params);
}

module.exports = SpecificPersonGenerator;

