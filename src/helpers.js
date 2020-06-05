//It is going to take an array and return a random number
function choice(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export {choice}