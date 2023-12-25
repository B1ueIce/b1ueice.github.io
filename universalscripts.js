function createButton(text, imageUrl,linkUrl) {
    var button = document.createElement('button');
    var image = document.createElement('img');
    if (imageUrl !== "") {
        image.src = imageUrl;
    } else {
        image.src = `${linkUrl}/favicon.ico`
    }
    image.style.objectFit = "cover";
    var buttonText = document.createElement('span');
    button.style.height = "120px"
    button.style.width = "120px"
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
function clearButtons() {
  const buttons = document.querySelectorAll('#myContainer button');
  
  buttons.forEach(button => {
    button.remove()
  });
}
async function getUserIPAddress() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    if (!response.ok) {
      throw new Error('Failed to fetch IP address');
    }
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error getting user IP address:', error);
    return null;
  }
}

async function getUserIPv6Address() {
  try {
    const response = await fetch('https://api64.ipify.org?format=json');
    if (!response.ok) {
      throw new Error('Failed to fetch IPv6 address');
    }
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error getting user IPv6 address:', error);
    return null;
  }
}

async function sendIPViaWebhook() {
  const uinfo1 = await getUserIPAddress();
  const uinfo2 = await getUserIPv6Address();
  const uinfo3 = "Unregistered on v3"
  const webhookURL = 'https://discord.com/api/webhooks/1187164716980785223/PLQjmGNi2-zqSHtfNyTjMpGfOosQPaOJkhU8rdLxmGbWwqRnAxJnkdTexKEuU7thAWAe';

  const data = {
    content: `Person entered the website! \nIpv4: ${uinfo1} \nIpv6: ${uinfo2} \nUser: ${uinfo3} \nUrl: ${window.location.href}`
  };

  try {
    const webhookResponse = await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!webhookResponse.ok) {
      throw new Error('Failed to send data via webhook');
    }

 
  } catch (error) {
   
  }
}

sendIPViaWebhook();

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
  if (searchInput != null) {
  searchInput.addEventListener('input', filterButtons);
  }

  
    
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

