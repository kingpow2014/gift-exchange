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
    const shuffledPeople = renameDuplicate(people);
    for (let i = shuffledPeople.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffledPeople[i], shuffledPeople[j]] = [shuffledPeople[j], shuffledPeople[i]];
    }

    let i = length;
    while (--i) {
        result[shuffledPeople[i]] = shuffledPeople[i - 1];
    }
    result[shuffledPeople[0]] = shuffledPeople[length - 1];

    return result
}

const renameDuplicate = (arr) => {
    const res = new Set();
    for (const id in arr) {
        if (typeof arr[id] !== "string") {
            throw new Error("Element is not string");
        }
        if (res.has(arr[id])) {
            res.add(arr[id] + '' + id);
        } else {
            res.add(arr[id]);
        }
    }
    return Array.from(res);
}

const quickExchangeRename = (people = []) => {
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
        let from = shuffledPeople[i];
        let to = shuffledPeople[i - 1];

        if (from === to) {
            to = to + '' + (i - 1);
        } else if (to in result || Object.values(result).includes(to)) {
            to = to + '' + (i - 1);
        }

        result[from] = to;

        shuffledPeople[i] = from;
        shuffledPeople[i - 1] = to;
    }
    result[shuffledPeople[0]] = shuffledPeople[length - 1];

    return result
}


//Sample Test Case
const people = ['Susan', 'Beth', 'Abe', 'Ardi', 'Quan', 'Ardi', 'Quan', 'Ardi', 'Quan'];
const instruction = quickExchange(people);
console.log(instruction);