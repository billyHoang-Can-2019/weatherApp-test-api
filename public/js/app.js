console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const result = document.querySelector('result');
//result.appendChild(document.createTextNode('this fetch'));
var z = document.createElement('p'); // is a node
var c = document.createElement('p'); // is a node
const mOne = document.querySelector('#messageOne');
const mTwo = document.querySelector('#messageTwo');
mOne.textContent='Loading... ';//test textContent works with script or not
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    //if location empty-> messOne
    if (!location) {
        mOne.textContent='empty location'
    } else {

        fetch('http://localhost:3000/weather?address=' + location).then((response={}) => {
            response.json().then((data={}) => {
                if(!data){console.log(`NO DATA`)}
                if (data.error) {
                    console.log(data.error)
                    mTwo.textContent="Error: "+data.error
                    mOne.textContent='';//test textContent works with script or not
                } else {
                    mTwo.textContent=""
                    mOne.textContent='';//test textContent works with script or not
                    console.log(data.location)
                    console.log(data.forecast)
                    //append child

                    //data.forecast.current is the answer
                    z.innerHTML = 'Result: '+data.forecast.weather_descriptions+' at '+data.location
                    +'<br> It is currently '+data.forecast.temperature+' celsius degrees.<br>There is '+ data.forecast.humidity+'% humidity' 
                    //this code for reviewing basic domobject
                    document.getElementById('result').appendChild(z);//append once

                }
            })
        })
    }
    //dom
    //have id add this data. querySelector 

    //fetch is send url request, callback: then get response(weather temp) to do something
     
})
