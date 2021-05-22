const URL = 'https://gateway.marvel.com/v1/public/characters?ts=1621698447381&apikey=9dae20d7dae29e7dab30fadb40aeb3c1&hash=cd0956a9cb9025a0dd1306898e560654';

const heroe = document.getElementById('heroe');
const ref = document.getElementById('ref');

console.log(URL);

const getHeroeMarvel = () => {
    fetch(URL)
    .then(res => {
        console.log(res);
        if (res.status === 200) {
            res.json().then (res => {
                console.log(res);
                res.data.results.forEach(e => {
                    console.log('1 entro en el forEach' + e.name);
                    objHeroe(e);
                });
            });       
        };
    });
};

const objHeroe = e => {
    console.log('2 entra en drawHero', e.name );
    const image = `${e.thumbnail.path}/portrait_uncanny.${e.thumbnailextension}`;
    const hero = `
        <tr>
            <td data-label="Id Heroe">${e.id}</td>
            <td data-label="Nombre">${e.name}</td>
            <td data-label="Descripcion" class ="sin-dato">${e.description}</td>
        </tr>
    `;
    
    heroe.insertAdjacentHTML('beforeend', hero);
    
};

getHeroeMarvel();

const referencia = `
    <h3>Referencia REST API: ${URL}</h3>
`;
ref.insertAdjacentHTML('beforeend', referencia);