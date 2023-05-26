// write a function to convert a 1d array of size 9 to a 2d array of size 3x3
// e.g. [1,2,3,4,5,6,7,8,9] -> [[1,2,3],[4,5,6],[7,8,9]]
export function convert1dTo2d(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += 3) {
        newArr.push(arr.slice(i, i + 3));
    }
    console.log("after conversion", newArr);
    return newArr;
}