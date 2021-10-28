// Instructions:

// You are tasked with organizing a gift exchange among friends; every member of the group has to both give and receive a gift randomly from among the others.

// The only rule is that one can not receive a gift from the same person to whom they give a gift.

// Write a solution for the above requirements for groups of varying sizes using Javascript. Remember to account for edge cases that would make the above rules impossible to follow.

// example input:
// ['Susan', 'Beth', 'Abe', 'Ardi', 'Quan']

// example output:
// Abe gives a gift to Quan
// Ardi gives a gift to Beth
// Susan gives a gift to Abe
// Quan gives a gift to Ardi
// Beth gives a gift to Susan

const quickExchange = (people = []) => {
    //Check if this task is possible
    const length = people.length
    if (length < 3) {
        throw new Error("Need more than 2 people for gift exchange");
    }
    if (!Array.isArray(people)) {
        throw new Error("Input people is not an array");
    }

    const result = {};
    const shuffledPeople = [...people];
    shuffledPeople.sort(() => Math.random() - 0.5);
    
    let i = length;
    while (--i) {
        result[shuffledPeople[i]] = shuffledPeople[i - 1];
    }
    result[shuffledPeople[0]] = shuffledPeople[length - 1];

    return result
}

//Sample Test Case
// const people = ['Susan', 'Beth', 'Abe', 'Ardi', 'Quan'];
// const instruction = quickExchange(people);
// console.log(instruction);