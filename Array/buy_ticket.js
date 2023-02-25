var timeRequiredToBuy =  (tickets, k) => {
  let count = 0,
    i = 0;
  while (tickets[k] > 0) {
    for (let j = 0; j < tickets.length; j++) {
      if (tickets[j] > 0) {
        tickets[j] -= 1;
        count++;
      }
      if (tickets[k] == 0) {
        break;
      }
    }
    i++;
  }
  return count;
};

let tickets=[2,3,2]
let k=2
console.log(timeRequiredToBuy(tickets, k))