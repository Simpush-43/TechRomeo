console.log("kya mai agya?");
const noButton = document.querySelector('.Btn2');
console.log('button mil gya no ka');
const yesButton = document.querySelector('.Btn1');
console.log('yes button mil gya')
const gif = document.getElementById('content');
console.log('gif button mil gya no ka');
const text = document.querySelector('.text');
const audio = new Audio('theme music.mp3');
const Body = document.querySelector('body');
const gifs = [
  "bubu-dudu.gif",
  "please.gif",
  "last.gif"
]
let currentIndex1 = 0;
const texts = [
  `Please Ja Yaar 🥹😞 `,
  `Please yrr Maan bhi jaoo 😔😞`,
  `Aaab Maan na hi <span style="color:red">Pdegaa</span> 😼😏`
]
let currentIndex2 = 0;
let dateInputCreated = false;
let dateSelected = false;
let dateInput;
let foodSelected = false;
function moveRandom() {
  console.log('Postion of button is changing');
  const BtnWidth = noButton.offsetWidth;
  const BtnHeight = noButton.offsetHeight;

  const ViewWidth = window.innerWidth;
  const viewHeight = window.innerHeight

  const RandomX = Math.random() * (ViewWidth - BtnWidth);
  const RandomY = Math.random() * (viewHeight - BtnHeight);

  noButton.style.position = 'absolute';
  noButton.style.left = `${RandomX}px`;
  noButton.style.top = `${RandomY}px`;
}

yesButton.addEventListener('click', () => {
  console.log("Yes button is clicked")
  if (dateSelected) {
    console.log('user is ready to process');
    text.innerHTML = `let's go 💞`
    foodSelect(dateSelected);
  }
  else if (yesButton.innerHTML !== 'Select a date') {
    gif.innerHTML = `<img src="love.gif" alt="loading.." srcset="">`
    text.innerHTML = 'Thankuu 🤩😻 lets select a date day😁😘';
    noButton.style.display = 'none';
    yesButton.innerHTML = 'Select a date';
  } else if (!dateInputCreated) {
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.classList.add('centre');
    document.body.appendChild(dateInput);
    dateInputCreated = true;
    dateInput.addEventListener('change', function () {
      const newDate = dateInput.value;
      if (newDate) {
        text.classList.add('fade');
        setTimeout(() => {
          dateInput.style.display = 'none'
          yesButton.innerHTML = `Let's go >>>3`
          Body.style.backgroundImage = "url('carauosel-3.png')";
          Body.style.backgroundSize = 'cover';
          Body.style.backgroundPosition = 'center';
          text.innerHTML = '<span style="color:rgb(235, 87, 112)">The theme is changed to love 💘💞</span>';
          text.classList.remove('fade');
          audio.play();
          setTimeout(() => {
            text.innerHTML = `The date of metting is " <span style = "color:red">${new Date(newDate).toLocaleDateString()}</span> "😘😻`;
            dateSelected = true;
          }, 3000);
        }, 1000);
      }
    })
  }
})
noButton.addEventListener('click', () => {
  console.log("button is clicked");
  console.log(`current Index: ${currentIndex1}`)
  console.log(`current gif =${gifs.length}`)
  if (currentIndex1 < gifs.length) {
    gif.innerHTML = `<img src="${gifs[currentIndex1]}" alt="loading">`
    currentIndex1++;
  } if (currentIndex2 < texts.length) {
    text.innerHTML = `${texts[currentIndex2]}`
    currentIndex2++;
  }
  if (currentIndex1 === 3) {
    gif.innerHTML = `<img src="${gifs[2]}" alt="loading">`
    moveRandom();
    setInterval(moveRandom, 1000);
    if (currentIndex1 === gifs.length) {
      currentIndex1 = 0;
    }
  };
});

function foodSelect(dateSelected) {
  yesButton.innerHTML = 'Select Food'
  yesButton.removeEventListener('click', arguments.callee);
  yesButton.addEventListener('click', () => {
    if (!foodSelected) {
      console.log('we are going');
      text.innerHTML = 'What we will eat? 🍽️🍕'
      const FoodOption = ['Bhelpuri', 'Dosa', 'ChattPapri', 'Mango-lassi', 'AaluuChatt', 'Shahi-Panner', 'Panner-Paratha'];
      const optionElement = document.createElement('select');

      FoodOption.forEach(option => {
        const selectElement = document.createElement('option');
        selectElement.value = option.toLowerCase();
        selectElement.textContent = option;
        optionElement.appendChild(selectElement);
        optionElement.classList.add('centre')
      });
      document.body.appendChild(optionElement);
      optionElementCreated = true;
      optionElement.addEventListener('change', function () {
        const selectedFood = optionElement.value;
        text.innerHTML = `We will eat <span style="color:green">${selectedFood}😁🤗</span>`
        foodSelected = true
        document.body.removeChild(optionElement);
      });
    } else {
      text.innerHTML = 'food is already selected'
    }
  })
}
