var PersonX = function(params) {

  this.type = 'PersonX';
  this.fullName =params.fullName;     //First Last
  this.age = params.age;
  this.birthday = params.birthday;    // "June 02"
  this.email = params.email;
  this.address = params.address;      //{street:, city:, zip:}
  this.pet1 = params.pet1;            // {breed:, name:}
  this.pet2 = params.pet2;
  this.pet3 = params.pet3;
  this.phone = params.phone;          //XXX XXX XXXX
}

module.exports = PersonX;