// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //create an empty object to store the key/val pairs
    var contact = {};

    //use dot notation to add keys to the object
    //values are represented by the function's parameters
    contact.id = id;
    contact.nameFirst = nameFirst;
    contact.nameLast = nameLast;

    //return the object
    return contact;
    };

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    //create an empty array to store the objects
    var contacts = [];

    
    
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },

        //create add contact function, push the contact object to the contacts array
        addContact: function(contact) {
            contacts.push(contact);
        },

        //create findContact function? pass fullName through the argument?
        findContact: function(fullName) {
            //loop through contacts-list?
            for (var i = 0; i < contacts.length; i++) {
                var full = contacts[i].nameFirst + " " + contacts[i].nameLast; 
                if (fullName === full) {
                    return contacts[i];
                }
            }
            return undefined;
        },

        //create removeContact function
        removeContact: function(contact) {
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i] === contact) {
                    return contacts.splice(i, 1);
                }
                
            }
        },

        //create printAllContactNames function

        printAllContactNames: function() {
            //create array to store full names
            var names = [];

            //loop through contacts
            for (var i = 0; i < contacts.length; i++) {

                //create fullName var to store first and last names as a string
                var fullName = contacts[i].nameFirst + " " + contacts[i].nameLast;

                //push full names to empty array
                    names.push(fullName);

                //create if else statement to single out last fullName in array
                if (i === contacts.length - 1) {
                    return names.length - 1;
                } else {
                    return names.join("\n");
            }
        }

    }
}
}


/**
 * add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 * 
 */




//YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
