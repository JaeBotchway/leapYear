

let calc = () => {

    let year = document.getElementById('yr').value;
    
     if(year >= 1 && year <= 9999)
  {
    console.log(year)
     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 )
     {
        document.querySelector('h1').innerHTML= (`the year ${year} is a leap year`)
          
     }
     else
      {
        document.querySelector('h1').innerHTML = (`the year ${year} is not a leap year`)
     }

 }
}