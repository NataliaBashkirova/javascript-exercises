const findTheOldest = function(peopleArray) {
  return peopleArray.reduce(getOldest, peopleArray[0]);
};

function getOldest(oldest, current) {
    if (getAge(current) > getAge(oldest)) {
        return current;
    } else {
        return oldest;
    }


}

function getAge(person) {
    const CURRENT_YEAR = 2024;

    if (!person.yearOfDeath) {
        return CURRENT_YEAR - person.yearOfBirth;
    } else {
        return person.yearOfDeath - person.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
