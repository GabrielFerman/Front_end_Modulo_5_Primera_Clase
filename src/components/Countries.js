import getCountryName from '../services'

const app = document.getElementById("app");
const p = document.createElement('p'); 

const Countries = () => {
    getCountryName().then (data => {
        let num = prompt("Por favor provee el numero del pais del que deseas ver el nombre");
        p.textContent = JSON.stringify(data[num].name.official)
        app.appendChild(p);
    })
    getCountryName();

    return ``
}

export default Countries;

