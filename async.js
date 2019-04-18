let button = document.querySelector("button")

let secondsInput = document.querySelector("input")

// parse input into an integer
button.addEventListener('click',  () => asyncCall(parseInt(secondsInput.value)))

let remaining = document.querySelector("#remaining")

// this fn is called each iteration to countdown the second
function resolveAfter1Second() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 1000);
  });
}

// decrements for each second.
async function asyncCall(x) {
   remaining.innerHTML = x;
  while (x > 0) {
    // await lets us write this fn so that it looks syncronous
    let result = await resolveAfter1Second();
    x--;
    remaining.innerHTML = x;
  }
}
