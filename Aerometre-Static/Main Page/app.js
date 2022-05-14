const button = document.querySelectorAll('.glassButton');
const aqiAppend = document.querySelector('.aqiData');
const wAppend = document.querySelector('.wData');
const astroAppend = document.querySelector('.astroData');
const append = document.querySelector('.glassContent');

button[0].addEventListener('click', () =>{
    append.children[0].setAttribute('class', 'aqiData');
    append.children[1].setAttribute('class', 'invisi');
    append.children[2].setAttribute('class', 'invisi');
    document.querySelector('.glassTitleText').innerText = 'Air Quality';
});

button[1].addEventListener('click', () =>{
    append.children[0].setAttribute('class', 'invisi');
    append.children[1].setAttribute('class', 'wData');
    append.children[2].setAttribute('class', 'invisi');
    document.querySelector('.glassTitleText').innerText = 'Weather';
});

button[2].addEventListener('click', () =>{
    append.children[0].setAttribute('class', 'invisi');
    append.children[1].setAttribute('class', 'invisi');
    append.children[2].setAttribute('class', 'astroData');
    document.querySelector('.glassTitleText').innerText = 'Astronomy';
});


const sd_AQI = [
    {
        name: "CO",
        icon: "co.png",
        value: "100 &mu;g&#x2044m<sup>3</sup>",
        class: "co"
    },
    {
        name: "O<sup>3</sup>",
        icon: "o3.png",
        value: "100 &mu;g&#x2044m<sup>3</sup>",
        class: "o3"
    },
    {
        name: "NO<sub>2</sub>",
        icon: "no2.png",
        value: "100 &mu;g&#x2044m<sup>3</sup>",
        class: "no2"
    },
    {
        name: "SO<sup>2</sup>",
        icon: "so2.png",
        value: "100 &mu;g&#x2044m<sup>3</sup>",
        class: "so2"
    }
];

for(let i = 0; i < sd_AQI.length; ++i)
{
    const container = document.createElement('div');
    container.setAttribute('class', 'dataBox');

    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'iconContainer');

    const icon = document.createElement('img');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('src', `${sd_AQI[i].icon}`);

    const textContainer = document.createElement('div');
    textContainer.setAttribute('class', 'textContainer');

    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('class', 'miniTitle');

    const titleText = document.createElement('span');
    titleText.setAttribute('class', 'miniTitleText');
    titleText.innerHTML = `${sd_AQI[i].name}`;

    const dataContainer = document.createElement('div');
    dataContainer.setAttribute('class', 'miniData');

    const dataText = document.createElement('span');
    dataText.setAttribute('class', 'mainDataText');
    dataText.innerHTML = `${sd_AQI[i].value}`;

    dataContainer.appendChild(dataText);
    titleContainer.appendChild(titleText);
    textContainer.appendChild(titleContainer);
    textContainer.appendChild(dataContainer);
    imageContainer.appendChild(icon);
    container.appendChild(imageContainer);
    container.appendChild(textContainer);

    append.children[0].appendChild(container);

}

const sd_Astro = [
    {
        name: "Sunrise",
        icon: "sunrise.png",
        value: "5:30AM",
        class: "sunrise"
    },
    {
        name: "Sunset",
        icon: "sunset.png",
        value: "6:30PM",
        class: "sunset"
    },
    {
        name: "Moonrise",
        icon: "moonrise.png",
        value: "7:30PM",
        class: "moonrise"
    },
    {
        name: "Moontset",
        icon: "moonset.png",
        value: "5:30AM",
        class: "moonset"
    },
    {
        name: "Moon Phase",
        icon: "moon.png",
        value: "Full Moon",
        class:  "moonPhase"
    },
    {
        name: "Moon Ill",
        icon: "bright.png",
        value: "100%",
        class: "moonIll"
    }
];

for(let i = 0; i < sd_Astro.length; ++i)
{
    const container = document.createElement('div');
    container.setAttribute('class', 'dataBox');

    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'iconContainer');

    const icon = document.createElement('img');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('src', `${sd_Astro[i].icon}`);

    const textContainer = document.createElement('div');
    textContainer.setAttribute('class', 'textContainer');

    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('class', 'miniTitle');

    const titleText = document.createElement('span');
    titleText.setAttribute('class', 'miniTitleText');
    titleText.innerHTML = `${sd_Astro[i].name}`;

    const dataContainer = document.createElement('div');
    dataContainer.setAttribute('class', 'miniData');

    const dataText = document.createElement('span');
    dataText.setAttribute('class', 'mainDataText');
    dataText.innerHTML = `${sd_Astro[i].value}`;

    dataContainer.appendChild(dataText);
    titleContainer.appendChild(titleText);
    textContainer.appendChild(titleContainer);
    textContainer.appendChild(dataContainer);
    imageContainer.appendChild(icon);
    container.appendChild(imageContainer);
    container.appendChild(textContainer);

    append.children[2].appendChild(container);

}

const sd_w = [
    {
        name: "Feels Like",
        icon: "thermometer.png",
        value: "25<sup>&deg;</sup> C",
        class: "feelsLike"
    },
    {
        name: "Max Temp",
        icon: "thermometer.png",
        value: "40<sup>&deg;</sup> C",
        class: "maxTemp"
    },
    {
        name: "Min Tempe",
        icon: "thermometer.png",
        value: "25<sup>&deg;</sup> C",
        class: "minTemp"
    },
    {
        name: "Avg Temp",
        icon: "thermometer.png",
        value: "35<sup>&deg;</sup> C",
        class: "avgTemp"
    },
    {
        name: "Wind Speed",
        icon: "windsock.png",
        value: "25 km/h",
        class: "wind"
    },
    {
        name: "Max Wind Speed",
        icon: "windsock.png",
        value: "25 km/h",
        class: "maxWind"
    },
    {
        name: "Pressure",
        icon: "gauge.png",
        value: "1 bar",
        class: "press"
    },
    {
        name: "Precipitation",
        icon: "rain.png",
        value: "30 mm",
        class: "precip"
    },
    {
        name: "Total Precip",
        icon: "rain.png",
        value: "100 mm",
        class: "totalPrecip"
    },
    {
        name: "Humidity",
        icon: "humidity.png",
        value: "10",
        class: "humid"
    },
    {
        name: "Avg Humidity",
        icon: "humidity.png",
        value: "10",
        class: "avgHumid"
    },
    {
        name: "Cloud",
        icon: "cloud.png",
        value: "5%",
        class: "cloud"
    },
    {
        name: "Visibility",
        icon: "visibility.png",
        value: "80%",
        class: "vis"
    },
    {
        name: "Avg Visibility",
        icon: "visibility.png",
        value: "80%",
        class: "avgVis"
    },
    {
        name: "UV Index",
        icon: "rays.png",
        value: "3",
        class: "uv"
    },
    {
        name: "Gust Speed",
        icon: "gust.png",
        value: "10 km/h",
        class: "gust"
    },
    {
        name: "Heat Index",
        icon: "heat.png",
        value: "7",
        class: "heat"
    },
    {
        name: "Windchill",
        icon: "chills.png",
        value: "10",
        class: "chill"
    },
    {
        name: "Dew Point",
        icon: "dew-point.png",
        value: "5",
        class: "dew"
    },
    {
        name: "Rain Probab",
        icon: "rain.png",
        value: "0%",
        class: "rain"
    },
    {
        name: "Snow Probab",
        icon: "snow.png",
        value: "0%",
        class: "snow"
    }
];

for(let i = 0; i < sd_w.length; ++i)
{
    const container = document.createElement('div');
    container.setAttribute('class', 'dataBox');

    const imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'iconContainer');

    const icon = document.createElement('img');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('src', `${sd_w[i].icon}`);

    const textContainer = document.createElement('div');
    textContainer.setAttribute('class', 'textContainer');

    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('class', 'miniTitle');

    const titleText = document.createElement('span');
    titleText.setAttribute('class', 'miniTitleText');
    titleText.innerHTML = `${sd_w[i].name}`;

    const dataContainer = document.createElement('div');
    dataContainer.setAttribute('class', 'miniData');

    const dataText = document.createElement('span');
    dataText.setAttribute('class', 'mainDataText');
    dataText.innerHTML = `${sd_w[i].value}`;

    dataContainer.appendChild(dataText);
    titleContainer.appendChild(titleText);
    textContainer.appendChild(titleContainer);
    textContainer.appendChild(dataContainer);
    imageContainer.appendChild(icon);
    container.appendChild(imageContainer);
    container.appendChild(textContainer);

    append.children[1].appendChild(container);

}


let counter = 0;