//API Weather Display Data
//I let the API in this JS file in order to facilitate the reading and testing of the page

const baseURL = 'http://api.weatherstack.com/';
const API_KEY = 'e913d11ba268db0158274fc77ff03da1';
const cities = [
    {city: 'Buenos Aires'},
    {city: 'Quito'},
    {city: 'Asuncion'},
    {city: 'La Paz'},
    {city: 'Caracas'},
    {city: 'New York'},
    {city: 'Madrid'},
    {city: 'Paris'},
    {city: 'Rome'},
    {city: 'Barcelona'},
]

    axios({
        method: 'GET',
        url: `${baseURL}current?access_key=${API_KEY}&query=${cities[0].city}`
    }).then(res => {
        const displayData = document.querySelector('.new-table-1');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Country :" class="table-info">${res.data.location.country}</div>
            <div data-label="City :" class="table-info">${res.data.location.name}</div>
            <div data-label="Region :" class="table-info">${res.data.location.region}</div>
            <div data-label="Temperature :" class="table-info">${res.data.current.temperature}°C</div>
            <div data-label="Visibility :" class="table-info">${res.data.current.wind_speed} km/h</div>
            <div data-label="Humidity: " class="table-info">${res.data.current.humidity}%</div>
        </div>
        `;
    })
    axios({
        method: 'GET',
        url: `${baseURL}current?access_key=${API_KEY}&query=${cities[1].city}`
    }).then(res => {
        const displayData = document.querySelector('.new-table-2');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Country :" class="table-info">${res.data.location.country}</div>
            <div data-label="City :" class="table-info">${res.data.location.name}</div>
            <div data-label="Region :" class="table-info">${res.data.location.region}</div>
            <div data-label="Temperature :" class="table-info">${res.data.current.temperature}°C</div>
            <div data-label="Visibility :" class="table-info">${res.data.current.wind_speed} km/h</div>
            <div data-label="Humidity: " class="table-info">${res.data.current.humidity}%</div>
        </div>
        `;
    })
    axios({
        method: 'GET',
        url: `${baseURL}current?access_key=${API_KEY}&query=${cities[2].city}`
    }).then(res => {
        const displayData = document.querySelector('.new-table-3');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Country :" class="table-info">${res.data.location.country}</div>
            <div data-label="City :" class="table-info">${res.data.location.name}</div>
            <div data-label="Region :" class="table-info">${res.data.location.region}</div>
            <div data-label="Temperature :" class="table-info">${res.data.current.temperature}°C</div>
            <div data-label="Visibility :" class="table-info">${res.data.current.wind_speed} km/h</div>
            <div data-label="Humidity: " class="table-info">${res.data.current.humidity}%</div>
        </div>
        `;
    })
    axios({
        method: 'GET',
        url: `${baseURL}current?access_key=${API_KEY}&query=${cities[3].city}`
    }).then(res => {
        const displayData = document.querySelector('.new-table-4');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Country :" class="table-info">${res.data.location.country}</div>
            <div data-label="City :" class="table-info">${res.data.location.name}</div>
            <div data-label="Region :" class="table-info">${res.data.location.region}</div>
            <div data-label="Temperature :" class="table-info">${res.data.current.temperature}°C</div>
            <div data-label="Visibility :" class="table-info">${res.data.current.wind_speed} km/h</div>
            <div data-label="Humidity: " class="table-info">${res.data.current.humidity}%</div>
        </div>
        `;
    })
    axios({
        method: 'GET',
        url: `${baseURL}current?access_key=${API_KEY}&query=${cities[4].city}`
    }).then(res => {
        const displayData = document.querySelector('.new-table-5');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Country :" class="table-info">${res.data.location.country}</div>
            <div data-label="City :" class="table-info">${res.data.location.name}</div>
            <div data-label="Region :" class="table-info">${res.data.location.region}</div>
            <div data-label="Temperature :" class="table-info">${res.data.current.temperature}°C</div>
            <div data-label="Visibility :" class="table-info">${res.data.current.wind_speed} km/h</div>
            <div data-label="Humidity: " class="table-info">${res.data.current.humidity}%</div>
        </div>
        `;
    })
    axios({
        method: 'GET',
        url: `${baseURL}current?access_key=${API_KEY}&query=${cities[5].city}`
    }).then(res => {
        const displayData = document.querySelector('.new-table-6');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Country :" class="table-info">${res.data.location.country}</div>
            <div data-label="City :" class="table-info">${res.data.location.name}</div>
            <div data-label="Region :" class="table-info">${res.data.location.region}</div>
            <div data-label="Temperature :" class="table-info">${res.data.current.temperature}°C</div>
            <div data-label="Visibility :" class="table-info">${res.data.current.wind_speed} km/h</div>
            <div data-label="Humidity: " class="table-info">${res.data.current.humidity}%</div>
        </div>
        `;
    })
    axios({
        method: 'GET',
        url: `${baseURL}current?access_key=${API_KEY}&query=${cities[6].city}`
    }).then(res => {
        const displayData = document.querySelector('.new-table-7');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Country :" class="table-info">${res.data.location.country}</div>
            <div data-label="City :" class="table-info">${res.data.location.name}</div>
            <div data-label="Region :" class="table-info">${res.data.location.region}</div>
            <div data-label="Temperature :" class="table-info">${res.data.current.temperature}°C</div>
            <div data-label="Visibility :" class="table-info">${res.data.current.wind_speed} km/h</div>
            <div data-label="Humidity: " class="table-info">${res.data.current.humidity}%</div>
        </div>
        `;
    })
    axios({
        method: 'GET',
        url: `${baseURL}current?access_key=${API_KEY}&query=${cities[7].city}`
    }).then(res => {
        const displayData = document.querySelector('.new-table-8');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Country :" class="table-info">${res.data.location.country}</div>
            <div data-label="City :" class="table-info">${res.data.location.name}</div>
            <div data-label="Region :" class="table-info">${res.data.location.region}</div>
            <div data-label="Temperature :" class="table-info">${res.data.current.temperature}°C</div>
            <div data-label="Visibility :" class="table-info">${res.data.current.wind_speed} km/h</div>
            <div data-label="Humidity: " class="table-info">${res.data.current.humidity}%</div>
        </div>
        `;
    })
    axios({
        method: 'GET',
        url: `${baseURL}current?access_key=${API_KEY}&query=${cities[8].city}`
    }).then(res => {
        const displayData = document.querySelector('.new-table-9');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Country :" class="table-info">${res.data.location.country}</div>
            <div data-label="City :" class="table-info">${res.data.location.name}</div>
            <div data-label="Region :" class="table-info">${res.data.location.region}</div>
            <div data-label="Temperature :" class="table-info">${res.data.current.temperature}°C</div>
            <div data-label="Visibility :" class="table-info">${res.data.current.wind_speed} km/h</div>
            <div data-label="Humidity: " class="table-info">${res.data.current.humidity}%</div>
        </div>
        `;
    })
    axios({
        method: 'GET',
        url: `${baseURL}current?access_key=${API_KEY}&query=${cities[9].city}`
    }).then(res => {
        const displayData = document.querySelector('.new-table-10');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Country :" class="table-info">${res.data.location.country}</div>
            <div data-label="City :" class="table-info">${res.data.location.name}</div>
            <div data-label="Region :" class="table-info">${res.data.location.region}</div>
            <div data-label="Temperature :" class="table-info">${res.data.current.temperature}°C</div>
            <div data-label="Visibility :" class="table-info">${res.data.current.wind_speed} km/h</div>
            <div data-label="Humidity: " class="table-info">${res.data.current.humidity}%</div>
        </div>
        `;
    })
