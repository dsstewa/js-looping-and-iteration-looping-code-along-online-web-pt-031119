// Code your solutions in this file


function writeCards(names,event) {
 let  giftarray = []
  for (let i = 0; i < names.length; i++)  {
    giftarray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
 return  giftarray
}


function countdown(number) {
  let num = 0
  while (num <= number){
    console.log(`${number - num}`)
    num++
  }
  
}
