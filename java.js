const url="http://api.weatherstack.com/current?access_key=1a8ebfbf572cb18c9c9046de80da2e29&query=Tehran";
async function weather() {
    const dat= await fetch(url);

    const data=await dat.json();
    console.log(data.current.pressure);
    
}
weather();