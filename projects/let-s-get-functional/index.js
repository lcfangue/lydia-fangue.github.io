// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./lydia-fangue.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace < with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var males = _.filter(array, function(customer) {
        return customer.gender === 'male';
    });
    return males.length;
};

var femaleCount = function(array) {
    var females = _.reduce(array, function(customer) {
        return customer.gender === 'female';
    });
    return females.length;
};

var oldestCustomer = function(array) {
    let oldest = {};
    let oldestAge = 0;
  for (let i = 0; i < array.length; i++) {
    let age = array[i].age;
    if (age >= oldestAge) {
       oldestAge = age;
       oldest = array[i].name;
    }
  }
  return oldest;
};

var youngestCustomer = function(array) {
    

};

var averageBalance = function(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i].balance;
    }
    let average = total / array.length;
    return average;
};

var firstLetterCount = function(array, letter) {
    var names = [];
    let lowerLetter = letter.toLowerCase();
    for (let i = 0; i < array.length; i++) {
        let lowerName = array[i].name.toLowerCase();
        if (lowerName[0] === lowerLetter) {
            
            names.push(lowerName);
        }
    }
    return names.length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    var friends = [];
    let lowerLetter = letter.toLowerCase();
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array[i].friends.length; k++) {
            let lowerFriend = array[k].friends.name.toLowerCase();
            if (lowerFriend[0] === lowerLetter) {
                friends.push(lowerFriend);
            }
        }
    }
    return friends.length;

};

var friendsCount = function(array, name) {

};

var topThreeTags = function(array) {

};

var genderCount = function(array) {

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
