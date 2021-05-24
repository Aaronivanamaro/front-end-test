//Show/Hide Modal from MicroModal Library

MicroModal.init();

//API Media Display Data
//I let the API in this JS file in order to facilitate the reading and testing of the page

const baseURL = 'http://api.mediastack.com/v1/news';
const API_KEY = '95e42e0744c4c0546336f3b84789b5b6';
const checkAuthor = (author) => {
    if (author === null)  {
        return "-";
    } else {
        return author;
    }
}
    axios({
        method: 'GET',
        url: `${baseURL}?access_key=${API_KEY}&countries=us,au`
    }).then(res => {
        const displayData = document.querySelector('.new-table-1');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Title :" class="table-info">${res.data.data[0].title}</div>
            <div data-label="Author :" class="table-info">${checkAuthor(res.data.data[0].author)}</div>
            <div data-label="Category :" class="table-info">${res.data.data[0].category}</div>
            <div data-label="Source :" class="table-info">${res.data.data[0].source}°C</div>
        </div>
        `;
    })
    axios({
        method: 'GET',
        url: `${baseURL}?access_key=${API_KEY}&countries=us,au`
    }).then(res => {
        const displayData = document.querySelector('.new-table-2');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Title :" class="table-info">${res.data.data[1].title}</div>
            <div data-label="Author :" class="table-info">${checkAuthor(res.data.data[1].author)}</div>
            <div data-label="Category :" class="table-info">${res.data.data[1].category}</div>
            <div data-label="Source :" class="table-info">${res.data.data[1].source}°C</div>
        </div>
        `;
    })
    axios({
        method: 'GET',
        url: `${baseURL}?access_key=${API_KEY}&countries=us,au`
    }).then(res => {
        const displayData = document.querySelector('.new-table-3');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Title :" class="table-info">${res.data.data[2].title}</div>
            <div data-label="Author :" class="table-info">${checkAuthor(res.data.data[2].author)}</div>
            <div data-label="Category :" class="table-info">${res.data.data[2].category}</div>
            <div data-label="Source :" class="table-info">${res.data.data[2].source}°C</div>
        </div>
        `;
    })
    axios({
        method: 'GET',
        url: `${baseURL}?access_key=${API_KEY}&countries=us,au`
    }).then(res => {
        const displayData = document.querySelector('.new-table-4');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Title :" class="table-info">${res.data.data[3].title}</div>
            <div data-label="Author :" class="table-info">${checkAuthor(res.data.data[3].author)}</div>
            <div data-label="Category :" class="table-info">${res.data.data[3].category}</div>
            <div data-label="Source :" class="table-info">${res.data.data[3].source}°C</div>
        </div>
        `;
    })
    axios({
        method: 'GET',
        url: `${baseURL}?access_key=${API_KEY}&countries=us,au`
    }).then(res => {
        const displayData = document.querySelector('.new-table-5');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Title :" class="table-info">${res.data.data[4].title}</div>
            <div data-label="Author :" class="table-info">${checkAuthor(res.data.data[4].author)}</div>
            <div data-label="Category :" class="table-info">${res.data.data[4].category}</div>
            <div data-label="Source :" class="table-info">${res.data.data[4].source}°C</div>
        </div>
        `;
    })
    axios({
        method: 'GET',
        url: `${baseURL}?access_key=${API_KEY}&countries=us,au`
    }).then(res => {
        const displayData = document.querySelector('.new-table-6');
        displayData.innerHTML = `
        <div class="table-section display-flex">
            <div data-label="Title :" class="table-info">${res.data.data[5].title}</div>
            <div data-label="Author :" class="table-info">${checkAuthor(res.data.data[5].author)}</div>
            <div data-label="Category :" class="table-info">${res.data.data[5].category}</div>
            <div data-label="Source :" class="table-info">${res.data.data[5].source}°C</div>
        </div>
        `;
    })
