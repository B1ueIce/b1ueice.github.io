function createButton(text, imageUrl,linkUrl) {
    var button = document.createElement('button');
    var image = document.createElement('img');
    if (imageUrl !== "") {
        image.src = imageUrl;
    } else {
        image.src = `${linkUrl}/favicon.ico`
    }
    var buttonText = document.createElement('span');
    button.style.height = "140px"
    button.style.width = "140px"
    button.style.margin = "7px"
    buttonText.style.zIndex = "10000";
    buttonText.style.display = "inline"
    buttonText.style.color = "#ffffff";
    buttonText.style.fontSize = "20px";
    buttonText.textContent = text;
    button.appendChild(image);
    button.appendChild(buttonText);
    var container = document.getElementById('myContainer');
    container.appendChild(button);
    if (linkUrl !== "") {
        var link = document.createElement('a');
        link.href = `run.html?url=${linkUrl}`;
        link.appendChild(button);
        container.appendChild(link);
    } else {
        container.appendChild(button);
    }
}


document.addEventListener("DOMContentLoaded", function(){
 
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
  searchInput.addEventListener('input', filterButtons);

  
    
    function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12 || 12;

    const timeDisplay = `${hours}:${minutes}:${seconds} ${meridiem}`;
    
    document.getElementById('clock').innerHTML = timeDisplay;
}

        updateClock()
setInterval(updateClock, 1000);  
});

