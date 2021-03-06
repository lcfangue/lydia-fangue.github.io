//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

    var keyStore = Object.keys(object);

    return keyStore.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
////////////////////////////////////////////////////////////////////
//Should take an object and return all its string values in a string each separated with a space

function valuesToString(object) {
    var arr = [];
    for (var key in object) {
        if (typeof object[key] === 'string') {
            arr.push(object[key]);
        }
    } return arr.join(" ");
};

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array";
    } else if (typeof collection === "object") {
        return "object";
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var lowerStr = string.toLowerCase().split(" ");

    for (var i = 0; i < lowerStr.length; i++) {
        lowerStr[i] = lowerStr[i].charAt(0).toUpperCase() + lowerStr[i].substring(1);
        
    }
    return lowerStr.join(" ");

};    

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    var myName = object.name;
    myName = myName.charAt(0).toUpperCase() + myName.slice(1);
    
    
    return "Welcome " + myName + "!";
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'

function profileInfo(object) {
    var myName = object.name;
        myName = myName.charAt(0).toUpperCase() + myName.slice(1);

    var mySpecies = object.species;
        mySpecies = mySpecies.charAt(0).toUpperCase() + mySpecies.slice(1);

    return myName + " is a " + mySpecies;


}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, if this object has a noises array return them 
//as a string separated by a space, if there are no noises return 'there are no noises'"

function maybeNoises(object) {
    
    if (object && object.noises) { 
        if (Array.isArray(object.noises)) { 
            if (object.noises.length > 0) { 
                return object.noises.join(' ');
            }
        }
    }
    return 'there are no noises';
}


 

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if (string.includes(word)) {
        return true;
    } else {
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    if (object.hasOwnProperty('friends')) {
        object.friends.push(name)
    }
    return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//Should take a name and an object and return true if <name> is a friend of
// <object> and false otherwise
   
function isFriend(name, object) {
  if (Array.isArray(object.friends)) { 
    for (var i = 0; i < object.friends.length; i++) {
          
              if (object.friends[i] === name) {
        return true;
      }
     } 
 }
 return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
////////////////////////////////////////////////////////////////////
//Should take a name and a list of people, and return a list of 
//all the names that <name> is not friends with"

function nonFriends(name, array) {
    //create empty array to store nonfriends
    var nonArr = [];
    //loop through array
    for (var i = 0; i < array.length; i++) {
        if (array[i].name !== name) {
        //if statement to find out if name is included in list
            if (!array[i].friends.includes(name)) {
            
            //push nonfriends to array? how do you know they aint friends?
            nonArr.push(array[i].name);
        }
     }
    }
    return nonArr;
    }



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
////////////////////////////////////////////////////////////////////
//Should take an object, a key and a value. Should update the property 
//<key> on <object> with new <value>. If <key> does not exist on <object> create it."

function updateObject(object, key, value) {
   if (object.hasOwnProperty(key)) { 
        object[key] = value;
        return object;
   } else {
        object[key] = value;
        return object;     
    
   }
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
////////////////////////////////////////////////////////////////////
//Should take an object and an array of strings. Should remove any 
//properties on <object> that are listed in <array>"

function removeProperties(object, array) {
    for (var key in object) {
       if (array.includes(key)) {
         delete object[key]; 
       } 
     }
   } 
    


//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var newArr = [...new Set(array)];
    return newArr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}