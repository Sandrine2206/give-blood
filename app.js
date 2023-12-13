
//Menu
menu.addEventListener('click', () => {
    if (menu.textContent == 'close') {
        menu.textContent = 'menu'
    } else {
        menu.textContent = 'close'
    }
    nav.classList.toggle('open');
});

//Map

mapboxgl.accessToken = 'pk.eyJ1IjoicGV0cnljYSIsImEiOiJjazd6eGFxajEwOW5rM2RydW5rb3pzcmtiIn0.eFkGZsTPafVGw_E9bXI8aA';

let gps = [14.426155630556389, 50.082770803929805];

let map = new mapboxgl.Map({
    container: 'mymap',
    center: gps,
    zoom: 13,
    style: 'mapbox://style/mapbox/dark-v10'
});

map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

let pin = document.createElement('div');
pin.className = 'pin';

let html = '<div class=popup>Give your blood here</div>';

let popup = new mapboxgl.Popup().setHTML(html);

new mapboxgl.Marker({
    element: pin,
    anchor:'bottom'
}).setLngLat(gps).addTo(map).setPopup(popup);

//Drop

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (event) {
        let dropElement = event.target.closest('.drop');

        if (dropElement) {
            let text = dropElement.getAttribute('data-text');

            let textElement = document.createElement('p');
            textElement.textContent = text;
            textElement.classList.add('overlay-text');

            dropElement.style.display = 'none';

            dropElement.parentNode.appendChild(textElement);

            setTimeout(function () {
                dropElement.style.display = 'block';
                dropElement.parentNode.removeChild(textElement);
            }, 800);
        }
    });
});


//Form

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Name:', sender.value);
    console.log('Email:', email.value);
    console.log('Date:', date.value);
    console.log('Blood type:', btype.value);

    form.reset();
    response.style.display = 'flex';

    setTimeout(() => {
        response.style.display = 'none';
    }, 5000);
});