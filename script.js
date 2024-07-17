const row = document.querySelector('.row');
const countriesUrl = 'https://restcountries.com/v3.1/all';

    let countries = [];

    fetch(countriesUrl)
        .then(res => res.json())
        .then(data => {
            countries = data;
            displayCountries(countries);
        })


    const displayCountries = (countries) => {
        row.innerHTML = countries.map(country => {
            return `
                <div class="col-4 card-container">
                    <div class="card" data-capital="${country.capital}" data-flag="${country.flags.png}">
                        
                            <img src="${country.flags.png}" class="card-img-top" alt="Country flag">
                            <div class="card-body">
                                <h3 class="card-title">Страна: ${country.translations.rus?.official || country.name.common}</h3>
                                <p>Регион: ${country.region}</p>
                                <p class="card-text">Столица: ${country.capital}</p>
                                 
                            </div>
                      
                    </div>
                </div>`;
        }).join('');
    }





