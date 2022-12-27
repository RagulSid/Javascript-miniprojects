const main = document.querySelector(".main");
console.log(main);

const card = document.createElement('div');
card.classList = 'card';

const movieCard = `

    <img src="#" alt="poster">
    <div class="info">
        <h3>God Father</h3>
        <span>8.4</span>
    </div>
`

card.innerHTML += movieCard;
main.appendChild(card);