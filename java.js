const url="http://api.weatherstack.com/current?access_key=1a8ebfbf572cb18c9c9046de80da2e29&query=Tehran";
async function weather() {
    const dat= await fetch(url);

    const data=await dat.json();
    console.log(data.current);
 liEl1.textContent= `observation_time: ${data.current.observation_time}`;
 liEl2.textContent= `temperature:${data.current.temperature}`;  
}
weather();
const liEl1=document.querySelector('.li1');
const liEl2=document.querySelector('.li2');
const liEl3=document.querySelector('.li3');

// liEl1.textContent= data.current.observation_time