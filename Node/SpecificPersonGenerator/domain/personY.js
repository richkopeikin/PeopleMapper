var PersonY = function(params) {

  this.type = 'PersonY';
  this.name = params.name;      // lastname, firstname
  this.dob = params.dob;        // January 01, 1994
  this.emailAddress = params.emailAddress; // "June 02"
  this.street = params.street
  this.city = params.city;
  this.pets = params.pets;      //[] names
  this.areaCode = params.areaCode; //312
  this.phone = params.phone;    //XXX-XXXX

}

module.exports = PersonY;
