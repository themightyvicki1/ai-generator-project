//step 2 - go to generatePoem function to make the api call
//this function receives an event b/c event listener in step 1
function generatePoem(event) {
  //prevent page from reloading on submit
  event.preventDefault();

  //step 3 - create type writer animation that'll store the data once we create api and call
  //stores inside an array that's why ,  not ;
  new Typewriter("#poem-contents", {
    strings: "a poem about flowers goes here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

// step 1 - select the form's id, once selected, add event listener, listen for submit not click
let formElement = document.querySelector("#search-bar-form");
formElement.addEventListener("submit", generatePoem);
