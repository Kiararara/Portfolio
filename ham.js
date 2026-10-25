//Hamburger 
function myFunction(element) {
  element.classList.toggle("change");
  const mobileElement = document.querySelector("#mobile");
  mobileElement.classList.toggle("show");
}

const mobileElement = document.querySelector("#mobile");
mobileElement.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
      mobileElement.classList.remove("show");
      document.querySelector("#hamburger").classList.remove("change");
  }
});

// Blinking animation
const img = document.getElementById('me');

const me1 = document.getElementById('me1');
const me2 = document.getElementById('me2');

let clicked = false;

function blink() {
  function goBack() {
    me1.classList.remove("hidden")
    me2.classList.remove("visible")
    me1.classList.add('visible')
    me2.classList.add('hidden')

  }
  clicked = true;
  me1.classList.remove("visible")
  me2.classList.remove("hidden")
  me1.classList.add('hidden')
  me2.classList.add('visible')

  setTimeout(goBack, 200);

  console.log('hi')
}

img.addEventListener('click', blink);
img.addEventListener('mouseover', blink);

