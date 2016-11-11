var Utils = function() {};

Utils.prototype.getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

Utils.prototype.pickSingleValueFromArray = function(array) {
  var index = this.getRandomInt(0, array.length)
  return array[index];
};

Utils.prototype.getGuid = function() 
{
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

Utils.prototype.getAge = function(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Utils.prototype.getSlashFormattedDate = function(date) {
  var year = date.getFullYear();
  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  return month + '/' + day + '/' + year;
};

Utils.prototype.getRandomInitial = function() {
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return possible.charAt(Math.floor(Math.random() * possible.length))
};


module.exports = Utils;
