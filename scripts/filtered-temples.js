document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;

    // Crear las cards para los templos
    const templeGallery = document.querySelector('.temple-gallery');
    function displayTemples(filter = 'all') {
        templeGallery.innerHTML = '';

        temples.filter(temple => {
            if (filter === 'old') return new Date(temple.dedicated).getFullYear() < 1900;
            if (filter === 'new') return new Date(temple.dedicated).getFullYear() > 2000;
            if (filter === 'large') return temple.area > 90000;
            if (filter === 'small') return temple.area < 10000;
            return true;
        }).forEach(temple => {
            const templeCard = `
                <figure>
                    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                    <figcaption>
                        <h3>${temple.templeName}</h3>
                        <p>Location: ${temple.location}</p>
                        <p>Dedicated: ${temple.dedicated}</p>
                        <p>Area: ${temple.area} sq ft</p>
                    </figcaption>
                </figure>
            `;
            templeGallery.innerHTML += templeCard;
        });
    }

    displayTemples();

    const filterLinks = document.querySelectorAll('nav ul li a');
    filterLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');
            displayTemples(filter);
        });
    });
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, Juanuary, 19",
        area: 30659,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
      },
      {
        templeName: "Mendoza Argentina",
        location: "Mendoza, Argentina",
        dedicated: "2024, September, 22",
        area: 21999,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-51739-main.jpg"
      },
      {
        templeName: "Lima Peru Los Olivos",
        location: "Lima, Perú",
        dedicated: "2024, January, 14",
        area: 47413,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42524-main.jpg"
      }
];
