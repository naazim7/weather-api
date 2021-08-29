const input = document.getElementById('name-input')
const button = document.getElementById('btn')


const getdata = () => {

    let inputValue = input.value

    if(inputValue=='')
    {
      alert('Please Type Your City name')
    }
    else{

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${'9d28f4114d4efde298977640d329a518'}`
        console.log(url)
    
        fetch(url)
            .then(res => res.json())
    
            .then(data =>display(data))
        input.value = ''
    
    }

}

const display=(data)=>{


    const city=document.getElementById('city')
    const tempmax=document.getElementById('tempmax')
    const desc=document.getElementById('desc')

console.log(data)
if(data.message=='city not found')
{
    city.innerText=`${'City Not Found In earth'}`
    tempmax.style.display='none'
    desc.style.display='none'
   
}
   else{
    city.innerText=`${data.name}`
    tempmax.innerText= (data.main.temp_max-273.15).toFixed(2)
    desc.innerText= data.weather[1].main
  
   
 
   }
   
}


button.addEventListener('click', function () {

    getdata()

})