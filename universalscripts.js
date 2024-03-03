
const betaV = localStorage.getItem("betaversion")

function createButton(text, imageUrl, linkUrl) {
  var button = document.createElement('button');
  var image = document.createElement('img');
  if (imageUrl !== "") {
      image.src = imageUrl;
  } else {
      image.src = `${linkUrl}/favicon.ico`;
  }
  image.style.objectFit = "cover";
  var buttonText = document.createElement('span');
  button.style.height = "110px";
  button.style.width = "110px";
  button.style.margin = "7px";
  buttonText.style.zIndex = "10000";
  buttonText.style.display = "inline";
  buttonText.style.color = "#ffffff";
  buttonText.style.fontSize = "17px";
  buttonText.textContent = text;

  button.appendChild(image);
  button.appendChild(buttonText);
  var container = document.getElementById('myContainer');
  container.appendChild(button);

  button.addEventListener('click', function() {
      if (linkUrl !== "") {
          window.location.href = `run.html?url=${linkUrl}`;
      }
  });
}


document.addEventListener("DOMContentLoaded", function(){

  initializeDarkbgSwitch();
  updateBackgroundImage();

  
const height = 20
const topbar = document.createElement('div');
topbar.classList.add('topbar');

const homeButton = document.createElement('button');
homeButton.setAttribute('onclick', "location.href='main.html'");
const homeImg = document.createElement('img');
homeImg.src = 'icons/home.png';
homeImg.height = height;
homeButton.appendChild(homeImg);

const appsButton = document.createElement('button');
appsButton.setAttribute('onclick', "location.href='apps.html'");
const appsImg = document.createElement('img');
appsImg.src = 'icons/apps.png';
appsImg.height = height;
appsButton.appendChild(appsImg);

const gamesButton = document.createElement('button');
gamesButton.setAttribute('onclick', "location.href='games.html'");
const gamesImg = document.createElement('img');
gamesImg.src = 'icons/games.png';
gamesImg.height = height;
gamesButton.appendChild(gamesImg);

const settingsButton = document.createElement('button');
settingsButton.setAttribute('onclick', "location.href='settings.html'");
const settingsImg = document.createElement('img');
settingsImg.src = 'icons/settings.png';
settingsImg.height = height;
settingsButton.appendChild(settingsImg);

const lineImg = document.createElement('img');
lineImg.src = 'icons/line.png';
lineImg.height = height;

const clockDiv = document.createElement('div');
clockDiv.classList.add('clock');
clockDiv.id = 'clock';


topbar.appendChild(homeButton);
topbar.appendChild(appsButton);
topbar.appendChild(gamesButton);
topbar.appendChild(settingsButton);
topbar.appendChild(lineImg);
topbar.appendChild(clockDiv);


document.body.appendChild(topbar);


function filterButtons() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toLowerCase();
    const buttons = document.querySelectorAll('#myContainer button');
  
    buttons.forEach(button => {
      const buttonText = button.querySelector('span').textContent.toLowerCase();
      const buttonImg = button.querySelector('img');
      if (buttonText.includes(filter)) {
        button.style.display = 'flex';
        buttonImg.style.display = 'flex'; 
      } else {
        button.style.display = 'none';
        buttonImg.style.display = 'none'; 
      }
    });
  }
  





  
  const searchInput = document.getElementById('searchInput');
  if (searchInput != null) {
  searchInput.addEventListener('input', filterButtons);
  }

  
    
    function updateClock() {
    if (betaV === "true"){
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const meridiem = hours >= 12 ? 'PM' : 'AM';
      
      hours = hours % 12 || 12;

      const timeDisplay = `${hours}:${minutes}:${seconds} ${meridiem} BETA VERSION`;
      
      document.getElementById('clock').innerHTML = timeDisplay;
    } else {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const meridiem = hours >= 12 ? 'PM' : 'AM';
      
      hours = hours % 12 || 12;
  
      const timeDisplay = `${hours}:${minutes}:${seconds} ${meridiem} 1.9.3`;
      
      document.getElementById('clock').innerHTML = timeDisplay;
  }
}

      updateClock()
setInterval(updateClock, 1000);  


 function checkAndToggleMode() {
  const h4Elements = document.getElementsByTagName('h4');
  for (let i = 0; i < h4Elements.length; i++) {
      if (h4Elements[i].textContent.includes("Beta Mode") && betaV === "true") {
          h4Elements[i].textContent = "Normal Mode";
          return; 
      }
  }
  const pElements = document.getElementsByTagName('p');
  for (let i = 0; i < pElements.length; i++) {
      if (pElements[i].textContent.includes("Blue") && betaV === "true") {
          pElements[i].textContent = "Blue Beta Version";
          pElements[i].style.fontSize = " 105px"
          return; 
      }
  }
 }
 




checkAndToggleMode();
});

if (betaV === null) {
  localStorage.setItem("beta", false);
}

function wait(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

function beta() {
  wait(500).then(() => {
    if (betaV === "false") {
      localStorage.setItem("betaversion", true);
      window.location.href = "beta/main.html";
    } else {
      localStorage.setItem("betaversion", false);
      window.location.href = "../main.html";
    }
    
  });
}
wait(500).then(() => {
  if (!window.location.href.includes("beta") &&  window.location.href.includes("main.html") && betaV === "true") {
    console.log("attempt change");
    window.location.href = "beta/main.html";
  }
  if (window.location.href.includes("beta") &&  window.location.href.includes("main.html") && betaV === "false") {
    console.log("attempt change");
    window.location.href = "../main.html";
  }
});

 function updateBackgroundImage() {
  if (localStorage.getItem('darkbg') === 'true') {
    document.body.style.setProperty('--background-image', "url('images/BACKGROUND-DARK.png')");
  } else {
    document.body.style.setProperty('--background-image', "url('images/BACKGROUND.png')");
  }
}


function initializeDarkbgSwitch() {
  const darkbgSwitch = document.getElementById('darkbgSwitch');
  if (!darkbgSwitch) {
    return; 
  }

  const currentDarkBGValue = localStorage.getItem('darkbg');

  if (currentDarkBGValue === 'true') {
    darkbgSwitch.checked = true;
  } else {
    darkbgSwitch.checked = false; 
  }

}
 function toggleDarkbg() {
    
  var currentDarkBGValue = localStorage.getItem('darkbg');

  if (!currentDarkBGValue || currentDarkBGValue === 'false') {
    localStorage.setItem('darkbg', 'true');
    darkbgSwitch.checked = true; 
  } else {
    localStorage.setItem('darkbg', 'false');
    darkbgSwitch.checked = false; 
  }

  
  updateBackgroundImage();
}