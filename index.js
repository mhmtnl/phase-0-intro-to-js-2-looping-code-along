
let arr = [];
function writeCards(groupName, reason){
    groupName.forEach(element => {
        arr.push(`Thank you, ${element}, for the wonderful ${reason} gift!`);
    })
    return arr;
}

function countDown(num){
    while (0 <= num){
        console.log(num);
        num--;
    }
}