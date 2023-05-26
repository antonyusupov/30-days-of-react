import React from "react";



// Number generator
const isPrime= (num) => {
  // Check if num is less than 2, because 0 and 1 are not prime
  if (num < 2) {
    return false;
  }
  // Check if num is 2 or 3, because they are prime
  if (num === 2 || num === 3) {
    return true;
  }
  // Check if num is divisible by 2 or 3, because then it's not prime
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  // Check if num is divisible by any other number up to its square root
  for (var i = 5; i <= Math.sqrt(num); i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  // If num is not divisible by any other number, then it's prime
  return true;
}




const NumsList = ({numsArray}) => {
  const evenBg = {
    backgroundColor: 'green'
  }
  const oddBg = {
    backgroundColor: 'yellow'
  }
  const primeBg = {
    backgroundColor: 'red'
  }
  const numbersSeparated = numsArray.map((number) => {
    if (isPrime(number)) {
      return <li style={primeBg} key={number}>{number}</li>;
    } else if (number % 2 === 0) {
      return <li style={evenBg} key={number}>{number}</li>;
    } else {
      return <li style={oddBg} key={number}>{number}</li>;
    }
  });
  return <ul>{numbersSeparated}</ul>;
}

const Numbers = ({numsArray}) => {
    const numDisplay = <div className='number-check-container'>
       <h3>Number Generater</h3>
       <NumsList numsArray = {numsArray}/>
     </div>;
   return numDisplay;
   }

export default Numbers;