require('datejs');
function combineUsers(...args) {
  
  const combinedObject = {
    users: []
  };

  for (let userArray of args) {
    combinedObject.users.push(...userArray);
  }
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  return combinedObject;
}

const combineUsers = require('./combineUsers');

const siteA = ['alice', 'bob'];
const siteB = ['charlie', 'diana'];
const siteC = ['eve'];

console.log(combineUsers(siteA, siteB, siteC));




module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};