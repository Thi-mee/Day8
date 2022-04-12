function palindromeCheck(array){
  const result = []
  array.forEach(str => {
    let string = str.toLowerCase()
    let reverse = str.split('').reverse().join('')
    if(string === reverse){
      result.push('true')
    }
    else{
      result.push('false')
    }
  });
  return result
}


console.log(palindromeCheck(['aba','crap','madam','racecar','1001']))
