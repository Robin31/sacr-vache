const userInfo = require('./ossekour');
var cowsay = require("cowsay");

console.log(cowsay.say({
  text: `Hello I'm ${userInfo.name} and i come from ${userInfo.city}`,
  e: "oO",
  T: "U "
}));
