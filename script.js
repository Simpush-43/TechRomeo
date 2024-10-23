console.log("kya mai agya?");
const noButton = document.querySelector('.Btn2');
console.log('button mil gya no ka');
const yesButton = document.querySelector('.Btn1');
console.log('yes button mil gya')
const gif = document.getElementById('content');
console.log('gif button mil gya no ka');
const text = document.querySelector('.text');
const gifs = [
  "bubu-dudu.gif",
  "please.gif",
  "last.gif"
]
let currentIndex1 = 0;
const texts = [
  `Please Maan Ja Yaar 🥹😞 `,
  `Please yrr Maan bhi jaoo 😔😞`,
  `Aaab Maan na hi <span style="color:red">Pdegaa</span> 😼😏`
]
let currentIndex2 = 0;
let dateInputCreated = false;
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
  if (yesButton.innerHTML !== 'Select a date') {
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
    dateInput.addEventListener('change',function(){
      const newDate = dateInput.value;
      if(newDate){
        text.innerHTML =`The date of metting is " <span style = "color:red">${new Date(newDate).toLocaleDateString()}</span> "😘😻`;
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

