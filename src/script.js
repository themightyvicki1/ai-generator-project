//const photosDisplayed = document.querySelector("#pexels-contents");
//let cardTag;

//step 5 - function from axios call - receiving a response from axios
function displayPoem(response) {
  console.log(response.data);

  //step 6 - create type writer animation that'll store the data once we create api and call
  //stores inside an array that's why ,  not ;
  new Typewriter("#poem-contents", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

// pexels function from axios call - receiving a response
/*function handlePexelsResponse(response) {
  console.log(response.data);

  cardTag = `<div class="card">
              <img src=${response.data.photos[0].src.original} />
              <img src=${response.data.photos[1].src.original} />
         </div>`;

  photosDisplayed.innerHTML += cardTag;
}

/*function getPhotos(images) {
  images.map((image) => {
    cardTag = `<div class="card">
              <img src=${image.src.tiny} />
         </div>`;
    photosDisplayed.innerHTML += cardTag;
  });
}*/

//step 2 - go to generatePoem function to make the api call
//this function receives an event b/c event listener in step 1
function generatePoem(event) {
  //prevent page from reloading on submit
  event.preventDefault();

  //step 4 - install axios in index.html, create api call w/ key, url, context, prompt, axios call w/next function call
  let apiKey = `0d7079af8c9adb3t72540o1c3a7eb56d`;
  // step 4.5- select the user's input to be used in the ai prompt
  // selecting the input from the form with .value below to access the value stored in the element
  let instructionInput = document.querySelector("#user-input");
  let context =
    "You find beauty in poetry, spending your extra time reading from all the great poets, and enjoy writing your own poetry on any topic. Your mission is to create a unique five line poem and display it in poetic form with line breaks. Do not include a title. Make sure to follow the user's input.";
  let prompt = `User input: create a short poem with the topic of ${instructionInput.value} and display the answer in a HTML format without a title.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
  //step 3 - select the field where the poem is stored, remove the hidden class so it'll display the poem and not display an empty box before poem is generated
  let poemField = document.querySelector(".hidden");
  poemField.classList.remove("hidden");
  //step 3.5 select the innerHTML of this div's id to display a loading message, it'll be replaced with actual poem
  poemField.innerHTML = `generating poem about ${instructionInput.value}`;

  /*
  //pexels api key, url, and axios calls
  let pexelsKey = "NaGQDyK82WUlaGzbKFRWYtgGDFvZNnEBEpSajlhzaJcpZrv2pIWO1dyX";

  //used to authenticate api for images
  let headers = {
    "Content-Type": "application/json",
    Authorization: pexelsKey,
  };

  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${instructionInput.value}&per_page=6`;
  axios.get(pexelsApiUrl, { headers }).then(handlePexelsResponse);

  //using fetch instead of axios call
  /*fetch(
    `https://api.pexels.com/v1/search?query=${instructionInput.value}&per_page=6`,
    {
      headers: {
        Authorization:
          "NaGQDyK82WUlaGzbKFRWYtgGDFvZNnEBEpSajlhzaJcpZrv2pIWO1dyX",
      },
    }
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      getPhotos(data.photos);
    });*/
}

// step 1 - select the form's id, once selected, add event listener, listen for submit not click
let formElement = document.querySelector("#search-bar-form");
formElement.addEventListener("submit", generatePoem);
