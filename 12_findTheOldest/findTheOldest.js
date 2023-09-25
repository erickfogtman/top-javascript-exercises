// Find the oldest person in the array of objects
const findTheOldest = function (arr) {
    let oldestPerson = arr[0];
    arr.forEach((person) => {
        if (getAge(person) > getAge(oldestPerson)) {
            oldestPerson = person;
        }
    });
    return oldestPerson;
};

const getAge = function (person) {
    let death = person.yearOfDeath;
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
