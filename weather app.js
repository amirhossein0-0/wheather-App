const input = document.querySelector(".head-container input");
const btn = document.querySelector(".head-container button");
const container = document.querySelector(".body-container");
const msg = document.querySelector(".msg")
// https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=852eb8f44a5d2a2bfe7973728218d3f8

const token = `852eb8f44a5d2a2bfe7973728218d3f8`;
btn.addEventListener("click" , (event) => {
    event.preventDefault();
    const inputVal = input.value ;
    const weatherShow = document.createElement("div");
    weatherShow.classList.add("list-container");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${token}&units=metric`
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data)
            const {main , name , sys , weather} = data ;
            const label = ` <p class="cities">${inputVal}<span class="country">(${sys.country})</span></p>
            <p class="temp">${Math.round(main.temp)}</p>
            <p class="cloud">${weather[0]["description"]}</p>`;
            weatherShow.innerHTML = label ;
            msg.innerText = "" ;
        })
         
        .catch(() => {
            msg.innerText = "//please type a valid city";
            weatherShow.remove();
        })

        input.value = "" ;







    container.appendChild(weatherShow)
})