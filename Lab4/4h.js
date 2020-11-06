const secondLowest = array => [...new Set(array)].sort((a, b) => a - b)[1];
const secondGreatest = array => {
    const cleaned = [...new Set(array)].sort((a, b) => a - b);
    return cleaned[cleaned.length-2]
};


const testArr = [1, 5, 7, 34, 5, 2, 6, 7, 1, 13, 43];


console.log(secondLowest(testArr));
console.log(secondGreatest(testArr)); 
