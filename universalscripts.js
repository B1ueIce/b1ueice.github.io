
const xor = {
    encode(str) {
        if (!str) return str;
        return encodeURIComponent(
            str
                .toString()
                .split('')
                .map((char, ind) =>
                    ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char
                )
                .join('')
        );
    },
    decode(str) {
        if (!str) return str;
        let [input, ...search] = str.split('?');

        return (
            decodeURIComponent(input)
                .split('')
                .map((char, ind) =>
                    ind % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char
                )
                .join('') + (search.length ? '?' + search.join('?') : '')
        );
    },
};

const dataUrl = "data:text/html;base64,PHNjcmlwdD52YXIgcz0iPVwiRVBEVVpRRiFpdW5tPw4LPWl1bm0/Dgs9aWZiZT8OCyEhISE9dWp1bWY/T2Z4IVViYz0wdWp1bWY/Dgs9dHV6bWY/DgtpdW5tLSFjcGV6IXwOCyEhbmJzaGpvOyExPA4LISFxYmVlam9oOyExPA4LISF4amV1aTshMjExJjwOCyEhaWZqaGl1OyEyMTEmPA4LISFwd2ZzZ21weDshaWplZWZvPA4Lfg4LamdzYm5mIXwOCyEhcXB0anVqcG87IWJjdHBtdnVmPA4LISF1cHE7ITE8DgshIW1mZ3U7ITE8DgshIXhqZXVpOyEyMTEmPA4LISFpZmpoaXU7ITIxMSY8DgshIWNwc2Vmczshb3BvZjwhDgt+Dgs9MHR1em1mPw4LPXRkc2pxdT8OC3hqb2VweC9wb21wYmUhPiFndm9kdWpwbykqIXwOCyEhd2JzIWZvZHBlZmVWU00hPiEoYklTMWRJTjdNejpqTllXbWJYT21NbmVxZUhpMlpqNnFjejp1Wlhtdk1uaTFjWHg+KDwOCyEhd2JzIWVmZHBlZmVWU00hPiFidXBjKWZvZHBlZmVWU00qPA4LISFlcGR2bmZvdS9ydmZzelRmbWZkdXBzKShqZ3NibmYoKi90ZnVCdXVzamN2dWYpKHRzZCgtIWVmZHBlZmVWU00qPA4LfjwOCz0wdGRzanF1Pw4LPTBpZmJlPw4LPWNwZXo/Dgs9amdzYm5mIXRzZD4oKD89MGpnc2JuZj8OCz0wY3Blej8OCz0waXVubT8OCyI7dmFyIG09IiI7Zm9yKHZhciBpPTA7aTxzLmxlbmd0aDtpKyspbSs9U3RyaW5nLmZyb21DaGFyQ29kZShzLmNoYXJDb2RlQXQoaSktMSk7ZG9jdW1lbnQud3JpdGUobSk7PC9zY3JpcHQ+PG5vc2NyaXB0PllvdSBtdXN0IGVuYWJsZSBKYXZhU2NyaXB0IHRvIHNlZSB0aGlzIHRleHQuPC9ub3NjcmlwdD4="
document.addEventListener("DOMContentLoaded", function(){
    var box = document.getElementById("Box");
    if (window.top.url !== dataUrl) {
        var darkMode = localStorage.getItem("DarkBg");
        var body = document.body;
        var darkModeSwitch = document.getElementById("dark-mode-switch");
        
        function setDarkMode(e) {
            darkMode = e;
            localStorage.setItem("DarkBg", e);
            var buttons = document.querySelectorAll(".dufhisdf");
            buttons.forEach(function(button) {
                if (darkMode === true) {
                    button.style.filter = "brightness(70%)";
                } else {
                    button.style.filter = "brightness(100%)";
                }
            });
    
            if (darkMode === true) {
                box.style.background = "#000";
            } else {
                box.style.background = "linear-gradient(to bottom right, #1900ff, #B3E5FC)";
            }
    
            if (e) {
                body.style.backgroundImage = "url('images/Background-dark.png')";
            } else {
                body.style.backgroundImage = "url('images/Background.png')";
            }
        }
        
        // Corrected condition for checking darkMode
        if (darkMode === "true") {
            setDarkMode(true);
            darkModeSwitch.checked = true; 
        } else {
            setDarkMode(false);
        }
        
        function toggleDarkMode() {
            // Toggle the dark mode status
            setDarkMode(!darkMode);
            darkModeSwitch.checked = darkMode; // Update checkbox state
        }
        
    }
    
    // Corrected addEventListener
    darkModeSwitch.addEventListener("change", toggleDarkMode);
    
    function updateClock() {

          const now = new Date();
          let hours = now.getHours();
          const minutes = now.getMinutes().toString().padStart(2, '0');
          const seconds = now.getSeconds().toString().padStart(2, '0');
          const meridiem = hours >= 12 ? 'PM' : 'AM';
          
          hours = hours % 12 || 12;
    
          const timeDisplay = `${hours}:${minutes}:${seconds} ${meridiem} 2.1.0`;
          
          document.getElementById('clock').innerHTML = timeDisplay;
 
    }
    
    updateClock()
    setInterval(updateClock, 1000);   
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
    button.style.height = "calc(10vh)";
    button.style.width = "calc(10vh)";
    button.style.clipPath = "circle(50% at 50% 50%)"
    button.style.borderRadius = "50%"
    button.style.margin = "calc(1vh)";
    button.classList = 'dufhisdf'
    buttonText.style.zIndex = "10000";
    buttonText.style.display = "inline";
    buttonText.style.color = "#ffffff";
    buttonText.style.fontSize = "calc(1.7vh)";
    buttonText.textContent = text;
    if (darkMode === true) {
        button.style.filter = "brightness(70%)"
        
       }
    button.appendChild(image);
    button.appendChild(buttonText);
    buttonsContainer = document.getElementById("buttonscontainer");
    buttonsContainer.appendChild(button);
  
    button.addEventListener('click', function() {
        if (linkUrl !== "") {
            if (linkUrl !== "https://poki.com/" 
                && !linkUrl.includes("crazygames")
                && !linkUrl.includes("coolmathgames")
                && linkUrl !== "https://demo.os-js.org/"
                && linkUrl !== "https://play.geforcenow.com/mall/"
                && linkUrl !== "https://play.google.com/store/games?hl=en_US&gl=US"
                && linkUrl !== "https://vscode.dev/"
                && linkUrl !== "https://sflix.to/"
                && linkUrl !== "https://www.emugames.net/"
                && linkUrl !== "https://music.youtube.com/"
                && linkUrl !== "https://www.youtube.com/"
                && linkUrl !== "https://sites.google.com/site/unblockedgame76/"
                && linkUrl !== "https://sites.google.com/site/classroom6x/"
                && linkUrl !== "https://sandboxels.r74n.com/"
                && linkUrl !== "https://slither.io"
                && linkUrl !== "https://orteil.dashnet.org/cookieclicker/"
                && linkUrl !== "https://open.spotify.com/search"
                && linkUrl !== "https://www.chess.com/"
                && linkUrl !== "https://classic.minecraft.net/"
                && linkUrl !== "https://discord.com/app"
                && linkUrl !== "https://anura.pro/"
            ) {
                createWindow(text, linkUrl);
            } else {
                createWindow(text, "https://intoabyss.org/classes/english/" + xor.encode(linkUrl));
            }
        }
    });
    
  }
  let zIndexCounter = 1003; 

function createWindow(title, url) {
    const windowElement = document.createElement('div');
    windowElement.classList.add('window');
    windowElement.style.left = '20px';
    windowElement.style.top = '10px';
    windowElement.style.width = 'calc(60vw)';
    windowElement.style.height = 'calc(70vh)';
    windowElement.style.zIndex = zIndexCounter;
    windowElement.style.backgroundImage = "url('images/Background.png')";
    if (darkMode === true) {
        windowElement.style.backgroundImage = "url('images/Background-dark.png')";

    }
    windowElement.style.backgroundSize = "cover";

   
  
    zIndexCounter++;

 
    windowElement.addEventListener('mousedown', () => {
        
        windowElement.style.zIndex = 2147483000;
       
        zIndexCounter = 1003;
      
        document.querySelectorAll('.window').forEach((win) => {
            if (win !== windowElement) {
                win.style.zIndex = zIndexCounter;
                zIndexCounter++;
            }
        });
    });

    const titleBar = document.createElement('div');
    titleBar.classList.add('title-bar');
    windowElement.appendChild(titleBar);

    const windowTitle = document.createElement('div');
    windowTitle.classList.add('window-title');
    windowTitle.innerText = title;
    titleBar.appendChild(windowTitle);

    const fullscreenButton = document.createElement('button');
    fullscreenButton.classList.add('fullscreen-button');
    fullscreenButton.innerHTML = '&#x26F6;';
    fullscreenButton.id = 'fullscreenButton';
    titleBar.appendChild(fullscreenButton);

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&#10005;';
    titleBar.appendChild(closeButton);

    const content = document.createElement('iframe');
    content.classList.add('content');
    content.src = url;
    content.style.position = 'absolute';
    content.style.width = '100%';
    content.style.border = "0"
    content.style.zIndex = "-1000"
    content.style.overflow = "hidden"
    content.style.height = `95.9%`;
    content.style.left = "-10px"
    content.style.top = `15px`
    windowElement.appendChild(content);

    const resizeHandle = document.createElement('div');
    resizeHandle.classList.add('resize-handle');
    windowElement.appendChild(resizeHandle);

    document.body.appendChild(windowElement);

    let isDragging = false;
    let startX, startY;

    titleBar.addEventListener('mousedown', startDrag);
    closeButton.addEventListener('click', closeWindow);
    resizeHandle.addEventListener('mousedown', startResize);

    function startDrag(e) {
        isDragging = true;
        startX = e.clientX - windowElement.offsetLeft;
        startY = e.clientY - windowElement.offsetTop;

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
    }

    function drag(e) {
        if (!isDragging) return;
        let newX = e.clientX - startX;
        let newY = e.clientY - startY;


        newY = Math.max(newY, 0);
        newY = Math.min(newY, window.innerHeight * 1.6 - windowElement.offsetHeight);

        windowElement.style.left = newX + 'px';
        windowElement.style.top = newY + 'px';
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
    }

    function closeWindow() {
        document.body.removeChild(windowElement);
    }

    let stopResizeTimeout;

    function startResize(e) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;

        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);


        resizeHandle.addEventListener('mouseleave', handleMouseLeave);
    }

    function handleMouseLeave() {

        clearTimeout(stopResizeTimeout);


        stopResizeTimeout = setTimeout(() => {
            isDragging = false;
            document.removeEventListener('mousemove', resize);
            document.removeEventListener('mouseup', stopResize);
        }, 500);
    }


    function resize(e) {
        if (!isDragging) return;
        const newWidth = e.clientX - windowElement.offsetLeft;
        const newHeight = e.clientY - windowElement.offsetTop;
        width = Math.max(newWidth, 300);
        height = Math.max(newHeight, 200);
        windowElement.style.width = width + 'px';
        windowElement.style.height = height + 'px';
    }

    function stopResize() {
        isDragging = false;
        document.removeEventListener('mousemove', resize);
        document.removeEventListener('mouseup', stopResize);
    }

    fullscreenButton.addEventListener('click', toggleFullScreen);

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            if (windowElement.requestFullscreen) {
                windowElement.requestFullscreen();
            } else if (windowElement.webkitRequestFullscreen) { /* Safari */
                windowElement.webkitRequestFullscreen();
            } else if (windowElement.msRequestFullscreen) { /* IE11 */
                windowElement.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }
        }
    }
    
    document.addEventListener("fullscreenchange", adjustContent);
    document.addEventListener("webkitfullscreenchange", adjustContent);
    document.addEventListener("mozfullscreenchange", adjustContent);
    document.addEventListener("MSFullscreenChange", adjustContent);
    
    function adjustContent() {
        const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        if (fullscreenElement === windowElement) {
            content.style.width = '100%';
            content.style.height = '97.5%';
        } else {
            content.style.width = '100%';
            content.style.height = `95%`;
            content.style.top = `15px`
        }
    }
   
}

  function clear() {
    var container = document.getElementById('Box');

    if (container) {
        var buttons = container.getElementsByClassName('dufhisdf');
        // Convert buttons NodeList to array
        var buttonArray = Array.from(buttons);
        
        // Remove each button
        buttonArray.forEach(button => {
            button.parentNode.removeChild(button);
        });

        // Remove elements if they exist
        removeIfExists("Searchybar");
        removeIfExists("GAMESLABELE");
        removeIfExists("dfygsuygosdlf");
        removeIfExists("buttonscontainer")
    }
}

function removeIfExists(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.parentNode.removeChild(element);
    }
}

function initializeIconContainerClick() {
   
    var iconContainers = document.querySelectorAll('.icon-container');

 
    iconContainers.forEach(function(container) {
        container.addEventListener('click', function() {
            
            growBox();
        });
    });
}

function openGames() {
    
     var searchContainer = document.createElement("div");
     searchContainer.style.width = "100%";
     searchContainer.style.height = "20%";
     searchContainer.style.display = "flex";
     searchContainer.id = "dfygsuygosdlf"
     searchContainer.style.flexDirection = "column";
     searchContainer.style.justifyContent = "center";
     searchContainer.style.alignItems = "center";


     var gamesLabel = document.createElement("div");
     gamesLabel.textContent = "Games";
     gamesLabel.id = "GAMESLABELE"
     gamesLabel.style.color = "rgb(166, 203, 255)"
     gamesLabel.style.fontFamily = "Comfortaa"
     gamesLabel.style.fontSize = "2.5em";


     var searchBar = document.createElement("input");
     searchBar.type = "text";
     searchBar.id = "Searchybar"
     searchBar.placeholder = "Search...";
     searchBar.style.color = "rgb(166, 203, 255)"
     searchBar.style.width = "60%";
     searchBar.style.border = "0"
     searchBar.style.borderRadius = "10px"
     searchBar.style.backgroundColor = "rgb(50, 50, 50)"
     searchBar.style.padding = "10px";
     searchBar.style.marginTop = "10px";

    
     searchContainer.appendChild(gamesLabel);
     searchContainer.appendChild(searchBar);

   
     box.appendChild(searchContainer);


     var buttonsContainer = document.createElement("div");
     buttonsContainer.id = "buttonscontainer"
     buttonsContainer.style.height = "80%";
     buttonsContainer.style.width= "100%";
     buttonsContainer.style.overflowY = "scroll"; 
     buttonsContainer.style.overflowX = "hidden";

     setTimeout(function() {
         createButton("Dino Game", "images/dino.png", "https://offline-dino-game.firebaseapp.com/")
         createButton("FNF", "images/fnf.png", "https://static.playunblocked.com/2021/04/friday-night-funkin/")
         createButton("Chess", "images/chess.png", "https://toytheater.com/chess.php")
         createButton("2d Minecraft", "images/2dmc.webp", "https://turbowarp.org/10128407/embed")
         createButton("Checkers", "images/checkers.webp", "https://toytheater.com/checkers.php")
         createButton("Subway Surfers", "images/surf.webp", "https://superteamxx.github.io/Subway-Surfers/")
         createButton("GD Scratch", "images/gd.webp", "https://turbowarp.org/105500895/embed")
         createButton("Mario", "images/mario.webp", "https://jcw87.github.io/c2-smb1/")
         createButton("Riddle School", "images/rs1.webp", "https://sz-games.github.io/games/ridd");
         createButton("Riddle School 2", "images/rs2.webp", "https://sz-games.github.io/games/ridd2");
         createButton("Riddle School 3", "images/rs3.webp", "https://sz-games.github.io/games/ridd3");
         createButton("Riddle School 4", "images/rs4.webp", "https://sz-games.github.io/games/ridd4");
         createButton("Riddle School 5", "images/rs5.webp", "https://sz-games.github.io/games/ridd5");
         createButton("Riddle Transfer", "images/rs6.webp", "https://sz-games.github.io/games/ridd6");
         createButton("Riddle Transfer 2", "images/rs7.webp", "https://sz-games.github.io/games/ridd7");
         createButton("Smash Karts", "images/smash-karts.webp", "https://games.crazygames.com/en_US/smash-karts/index.html");
         createButton("Agar.io", "images/agar.webp", "https://emupedia.net/emupedia-game-agar.io/");
         createButton("Stack", "images/stack.webp", "https://sz-games.github.io/games/stack");
         createButton("Bloxorz", "images/bloxorz.webp", "https://bloxorzunblocked.github.io/");
         createButton("Crossy Road", "images/crossyroad.webp", "https://sz-games.github.io/cr/")
         createButton("Fluids", "images/fluids.png", "https://sz-games.github.io/storage3/1/")
         createButton("Temple Run 2", "images/temple.webp", "https://just-fall.github.io/j0/temple-run-2")
         createButton("Doodle Jump", "images/Doodle_Jump.webp", "https://mr-funkinguy.github.io/gfile/doodle/index.html")
         createButton("BTD", "images/bloons1.webp", "https://files.crazygames.com/ruffle/bloonstd.html");
         createButton("BTD2", "images/bloons2.webp", "https://files.crazygames.com/ruffle/bloonstd2.html");
         createButton("BTD3", "images/bloons3.webp", "https://files.crazygames.com/ruffle/bloonstd3.html");
         createButton("BTD4", "images/bloons4.webp", "https://games.crazygames.com/en_US/bloons-tower-defense-4/index.html");
         createButton("BTD5", "images/bloons5.webp", "https://www.miniplay.com/embed/bloons-td-5");
         createButton("Paper.io 2", "images/paper-io-2.webp", "https://paper-io.com/")
         createButton("Google Snake!", "images/snake.webp", "https://mr-funkinguy.github.io/gfile/snake/index.html")
         createButton("Tiny Fishing", "images/fishing.webp", "https://tinyfishing.io/iframe/")
         createButton("The Impossible Quiz", "images/quiz.webp", "https://cdn2.addictinggames.com/addictinggames-content/ag-assets/content-items/html5-games/theimpossiblequiz/index.html")
         createButton("Stupid Clicker", "images/button.webp", "https://turbowarp.org/774324107/embed")
         createButton("Lil Oasis", "images/liloasis.png", "https://turbowarp.org/859599778/embed")
         createButton("Lil Oasis Expanded", "images/liloasisEXPANDED.png", "https://turbowarp.org/860600597/embed")
         createButton("Blackjack", "images/cards.webp", "https://browsergames.awap.tv/blackjack-hl/")
         createButton("Are you kidding me?", "images/aykm.png",  "https://turbowarp.org/836226987/embed")
         createButton("AYKM Hard Mode", "images/aykmhm.png", "https://turbowarp.org/846897438/embed")
         createButton("AYKM Easy Mode", "images/aykmez.png", "https://turbowarp.org/863130622/embed")
         createButton("AYKM Cursed Mode", "images/aykmcr.png", "https://turbowarp.org/863109457/embed")
         createButton("AYKM Sanic Mode", "images/aykmsnc.png", "https://turbowarp.org/863584949/embed")
         createButton("AYKM Lots of Stuff Mode", "images/aykmlos.png", "https://turbowarp.org/863553943/embed")
         createButton("AYKM Dark Mode", "images/aykmdm.png", "https://turbowarp.org/863602237/embed")
         createButton("AYKM Ice Mode", "images/aykmice.png", "https://turbowarp.org/915310339/embed")
         createButton("FNAF Remake", "images/fnaf1.jpg", "https://sz-games.github.io/Games9/fnaf-1/index.html")
         createButton("FNAF 2 Remake", "images/fnaf2.jpg", "https://sz-games.github.io/Games4//fnaf-2/index.html")
         createButton("FNAF 3 Remake", "images/fnaf3.jpg", "https://sz-games.github.io/Games9/fnaf-3/index.html")
         createButton("FNAF 4 Remake", "images/fnaf4.jpg", "https://sz-games.github.io/Games9/fnaf-4/index.html")
         createButton("Little Alchemy", "images/littlealchemy.png","https://littlealchemy.com")
         createButton("Little Alchemy 2","images/littlealchemy2.jpg", "https://littlealchemy2.com")
         createButton("Flappy 2048" , "images/2048f.png" , "https://hczhcz.github.io/Flappy-2048/")
         createButton("2048", "images/2048.png" , "https://play2048.co")
         createButton("2048 Cupcake", "", "https://0x0800.github.io/2048-CUPCAKES/")
         createButton("90071992 54740992", "images/20489.png" , "https://dmitrykuzmenko.github.io/2048/")
         createButton("11", "images/204811.png" , "https://2048-variations.net/en/eleven")
         createButton("590295810 358705700000", "images/20485.png" , "https://thereal23.github.io/590295810358705700000/")
         createButton("2048 Alphabet", "images/2048k.png" , "https://vdmitriyev.github.io/2048/")
         createButton("Mario 64", "images/Mario64.jpg" , "https://sm64webbackup--collintyes.repl.co/")
         createButton("Old Minecraft", "images/mc.jpg" ,"https://ubg100.github.io/games/eaglercraft/index.html")
         createButton("Tunnel Rush", "images/tunnel.png","https://sz-games.github.io/games/tunnel-rush/")
         createButton("Slope", "images/slope.jpg" , "https://slope2.online/1.embed")
         createButton("Pinball" , "images/pinball.jpg" , "https://toytheater.com/space-pinball.php")
         createButton("Basket Random", "images/basket.jpg", "https://files.twoplayergames.org/files/games/other/Basket_Random/index.html")
         createButton("Volley Random", "images/volley.jpg", "https://www.twoplayergames.org/gameframe/volley-random")
         createButton("Soccer Random", "images/soccer.jpg", "https://www.twoplayergames.org/gameframe/soccer-random")
         createButton("Boxing Random", "images/boxing.jpg", "https://www.twoplayergames.org/gameframe/boxing-random")
         createButton("Tomb of the Mask", "images/mask.png" ,"https://tombofthemask.github.io/g8/tomb-of-the-mask/")
         createButton("Bitlife", "images/bitlife.jpg", "https://ubg365.github.io/bitlife-life-simulator/play.html")
         createButton("1v1.lol", "images/1v1.jpg", "https://1v1.lol/")
         createButton("Smash 64 (Has Ads)", "images/s64.jpg", "https://gamesfrog.com/games/n64/super-smash-bros/iframe")
         createButton("Smash Melee Light", "images/melee.png", "https://ikneedata.com/meleelight.html")
         createButton("Flappy Bird", "images/flappy.jpg", "https://mr-funkinguy.github.io/gfile/flappy/index.html")
         createButton("Uno Ripoff" , "images/uno.jpg" , "https://sz-games.github.io/Games9/uno/index.html")
         createButton("Crazy 8s", "images/8s.jpg", "https://files.acticdn.com/278374/25673/index.html?an_game_version=201810030933")
         createButton("Wordle", "images/wordle.png","https://sz-games.github.io/Games2/wordle")
         createButton("Stickman Hook", "images/stickmanhook.jpg", "https://sz-games.github.io/Games5/stickman-hook")
         createButton("MOTO X3M", "images/moto.jpg", "https://tbg95.github.io/moto-x3m/game")
         createButton("Cut the Rope", "images/cutrope.jpg", "https://sz-games.github.io/Games5/ctr")
         createButton("Cell Machine", "images/cellmachine.png", "https://html-classic.itch.zone/html/2472216/index.html")
         createButton( "Street Fighter II", "images/streetfighter.jpg", "https://sz-games.github.io/games3/fighter2")
         createButton("5 nights at winstons", "", "https://g.deev.is/fnaw/")
         createButton("Stackball", "images/stackball.jpg",  "https://sz-games.github.io/Games7/stackball/")
         createButton("Paper Fold", "images/fold.jpg", "https://sz-games.github.io/Games8/paper-fold")
         createButton("Sand Game", "", "https://sz-games.github.io/Games6/sand-game")
         createButton("Sandboxels", "images/sandboxels.png", "https://sandboxels.r74n.com/")
         createButton("SANS FIGHT", "images/sans.png", "https://jcw87.github.io/c2-sans-fight/")
         createButton("Run 3", "images/run3.png", "https://sz-games.github.io/Games-2/run3/")
         createButton("Cookie Clicker", "images/cookie.jpg" ,"https://orteil.dashnet.org/cookieclicker/")
         createButton("Antimatter Dimensions", "images/ad.jpg", "https://ivark.github.io/AntimatterDimensions/")
         createButton("Clicker Heroes", "images/clickerheroes.jpg", "https://games-online.io/game/ClickerHeroes/")
         createButton("Idle Breakout", "images/idlebreak.png", "https://html-classic.itch.zone/html/9150519/index.html")
         createButton("Money Rush", "images/moolah.jpg", "https://sz-games.github.io/Games8/MONEYRUSH")
         createButton("There is no game", "images/nogame.jpg","https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://590384729-104728463944275026.preview.editmysite.com/uploads/b/139890129-446136497302390429/files/ting.xml")
         createButton("Vex", "images/vex.png","https://www.gameflare.com/embed/vex/")
         createButton("Vex 2", "images/vex.png","https://www.gameflare.com/embed/vex-2/")
         createButton("Vex 3", "images/vex.png","https://sz-games.github.io/Games7/vex3")
         createButton("Vex 4", "images/vex.png" , "https://sz-games.github.io/Games7/vex4")
         createButton("Vex 5", "images/vex.png", "https://sz-games.github.io/Games7/vex5")
         createButton("Vex 6", "images/vex.png" ,"https://sz-games.github.io/Games7/vex6")
         createButton("Getting Over It Scratch", "images/gettingoverit.png" ,"https://turbowarp.org/389464290/embed")
         createButton("Backrooms", "images/backrooms.png" ,"https://sz-games.github.io/Games/backrooms")
         createButton("We Become What We Behold", "images/wbwwb.png" ,"https://mr-funkinguy.github.io/gfile/wbwwb/index.html")
         createButton("Big Tower Tiny Square", "images/btts.png" ,"https://html-classic.itch.zone/html/345957/index.html?v=1542781903")
         createButton("Big Ice Tower Tiny Square", "images/bitts.jpg" ,"https://files.acticdn.com/278374/23864/index.html")
         createButton("Big Flappy Tower Tiny Square", "images/bftts.jpg" ,"https://www.miniplay.com/embed/big-flappy-tower-vs-tiny-square-game")
         createButton("Big Neon Tower Tiny Square", "images/bntts.jpg" ,"https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://835140793-361837406927483175.preview.editmysite.com/uploads/b/139890129-331646845806169131/files/bntower.xml")
         createButton("Big Tower Tiny Square 2", "images/btts2.jpg" ,"https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://183662057-183305820582754925.preview.editmysite.com/uploads/b/139890129-258428596653956378/files/btts2.xml")
         createButton("OvO", "images/OVO.png" ,"https://sz-games.github.io/Games5/ovo")
         createButton("Breaking the Bank" , "images/btb.jpg", "https://stickman.pro/iframe/breaking-the-bank/")
         createButton("Escaping the Prison" , "images/etp.jpg", "https://stickman.pro/iframe/escaping-the-prison")
         createButton("Stealing the Diamond" , "images/std.jpg", "https://stickman.pro/iframe/stealing-the-diamond/")
         createButton("Infiltrating the Airship" , "images/ita.jpg", "https://stickman.pro/iframe/infiltrating-the-airship/")
         createButton("Grindcraft" , "images/GrindCraft.jpg", "https://sz-games.github.io/Games2/grindcraft")
         createButton("Buckshot Roulette (Can be seen)", "images/buckshot.jpg", "https://rankdle.io/buckshot-roulette.embed")
         createButton("Pokemon Fire Red", "images/firered.jpg" , "https://picklekid31.github.io/GBA-unblocked-games/launcher.html#pokemonred")
         createButton("Pokemon Gold", "images/pokemongold.jpg", "https://static.arcadespot.com/retroemulator.php?system=gbc&game=2016/07/pokemon-gold.zip")
         createButton("Pokemon Diamond", "images/pokemondiamond.jpg", "https://static.arcadespot.com/retroemulator.php?system=nds&game=2017/10/pokemon-diamond-version.zip")
         createButton("Ocarina of Time", "images/oot.jpg", "https://static.arcadespot.com/retroemulator.php?system=n64&game=2017/06/the-legend-of-zelda-ocarina-of-time.zip")
         createButton("Tetris", "images/tetris.jpg", "https://turbowarp.org/21230772/embed")
         createButton("Baldi's Basics", "images/baldi.jpg" , "https://railingames.github.io/files/BaldisBasics/")
         createButton("Black", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAACgCAMAAAD95eqgAAAAYFBMVEUAAAD///+FhYWZmZmvr68mJiZ4eHjAwMDx8fHb29vOzs6NjY24uLiVlZXU1NSSkpJLS0tqampwcHBRUVHi4uL5+fk5OTlZWVkvLy8TExOnp6c0NDRAQEDp6eljY2MdHR3DbkdPAAADCElEQVR4nO3Z6W7bOhAFYA5XLdQumSat5f3fspQTFG2cXqW3tgS15/tjIwCBOeaiEcME+1f9u8kBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAttxq5+rb0VUc4MaFKfu+NEJfj65lZ1U20LvE8OXocnbUme/J39KPXx/byh9/qYVz9fTyXmlO6YP+sj2KJ8MwcSbpxz2iTPkbv9vxXP8xOtHkN4dxEryf3Jp9qe+BlVPKZCNTpzkxxuwxOlG6OY7TfA19F7MvlFDvmKFhamx2CVTtUPZTVJ9FJ+Jb4zhNE8n7mp/HnHhDMk68yUJS7FH2M9TJmnRIHsJvDeQkRbnOu+qkyUiLdeMrk9C0R9lPka85M2MezruthctpjIO5JJ8NTUW6oia2CSaxJHYp/M/5NbPJy9T97o7PqTRTX9uYnWRG/Ea9sbMpL5baXUr/Y35N2ZZk2o/Zk43TejbGio5x42tjuGjiH7Jwy4VS9iQTX8eUIsRVP30PXb4t/6T575FeKRWfhEvsZZRiPn5V14UtCzvNM07HZ3lr6H3hpyEbgpZ9JQcaNk/6s+NxnuOSj9GLzBZuLIOoO9HzhIb86NperYnbfY7dzTCn0vB0HFpp82DXeddH1/ZqY4xdFGlvOW9bnmhR6KSsnI373R1d26ut5/xU8Tyl+6vc2/vckMQXu/O0KP+X/7Sbv/c7R5f2evpX2eetka2fvS4urBDsyvn1/lnpRVWnOSRvD83s19o6xgLTs9BN3tahK/JZuLloeN6EOT9JX/fLid+8ghCpkVwvPFPetHOnzZVl+bXR8uLtHnU/gw+fRd9sS/2cS9Vqn2eLN9qNb9lVw8OFmT3qforFPkaX26OMzpyrZh262jquW+lGG3dAE1xzmhf4T8IP4Qs3tZzlbKxkx2SoRxG6MdhllKJ2xWmW/J346cqu/+s7+Z/Usny/uZmyUB9dzd5GLoKUQegvXE//jfz2zTQAAAAAnN5J/tP0AuIbsm0iJDZyy3wAAAAASUVORK5CYII=", "https://black.game-files.crazygames.com/black/2/index.html")
         createButton("Monkey Mart", "images/mkmart.jpg", "https://www.phantomgames.dev/game/monkey-mart/index.html")
         createButton("Ball Blast", "images/ballblast.png", "https://ext.minijuegosgratis.com/ball-blast/gameCode/index.html")
         createButton("Aquapark.io", "images/aquapark.jpg", "https://totallyscience.co/assets/games/aquapark-slides/index.html")
         createButton("Economical", "images/economical.png" , "https://howtomath.org/math/hvtrs8%2F-rcdmn%2Cgcmgs-cfn-ulivy%2Chvmn%3Fkd%3Feaolooiaan")
         createButton("Frogger", "images/frogger.jpg", "https://frogger.game-files.crazygames.com/ruffle/frogger/1/frogger.html?v=1.271")
         createButton("Duck Hunt", "images/duckhunt.png", "https://duck-hunt.game-files.crazygames.com/duck-hunt/1/index.html")
         createButton("Duck Life", "images/duck1.png", "https://games.crazygames.com/en_US/ducklife/index.html?v=1.271")
         createButton("Duck Life 2", "images/duck2.jpg", "https://games.crazygames.com/en_US/ducklife-2/index.html?v=1.271")
         createButton("Duck Life 3", "images/duck3.jpg", "https://games.crazygames.com/en_US/ducklife-3/index.html?v=1.271")
         createButton("Duck Life 4", "images/duck4.jpg", "https://games.crazygames.com/en_US/ducklife-4/index.html?v=1.271")
         createButton("Unfair Undyne", "images/unfairfish.jpg", "https://doodle-pile.gitlab.io/unfair-undyne/v0.99/")
         createButton("Worlds Hardest Game", "images/hardestgame.png", "https://www.coolmathgames.com/0-worlds-hardest-game/play")
         createButton("Worlds Hardest Game 2", "images/hardestgame.png", "https://www.coolmathgames.com/0-worlds-hardest-game-2/play")
         createButton("PacMan", "images/pac.png", "https://www.google.com/logos/2010/pacman10-hp.html#bg=black&autoplay")
         createButton("Interactive Buddy", "images/buddy.jpg", "https://interactive-buddy.game-files.crazygames.com/ruffle/interactive-buddy/2/interactivebuddy.html?v=1.271")
         createButton("This is the Only Level", "images/1level.jpg", "https://this-is-the-only-level.game-files.crazygames.com/ruffle/thisistheonlylevel.html?v=1.271")
         createButton("Moto X3m Winter", "images/moto.jpg", "https://moto-x3m-4.game-files.crazygames.com/moto-x3m-4/5/index.html")
         createButton("A Dark Room", "images/adarkroom.jpg", "https://wtool.org/adarkroom/")
         createButton("Slither.io", "images/slither.jpg", "https://slither.io")
         createButton("Superhot", "images/superhot.jpg", "https://sz-games.github.io/Games9/superhot/index.html")
         createButton("Incredibox", "", "https://sz-games.github.io/incredibox-v9/")
         createButton("Snowbattle.io", "images/snowbattle.jpg", "https://sz-games.github.io/Games7/snowbattle")
         createButton("Going Balls", "images/goingballs.png", "https://sz-games.github.io/Games8/goingballs")
         createButton("Connect 4","images/c4.jpg","https://www.cbc.ca/kidscbc2/content/games/connect_four/index.html")
         createButton("Rolling Sky", "images/rolling.jpg", "https://html5.gamedistribution.com/rvvASMiM/3aba864889404f028dcef6403b7caabd/index.html?gd_sdk_referrer_url=https%3A%2F%2Fslitherio.online%2Frolling-sky.embed&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3NsaXRoZXJpby5vbmxpbmUvcm9sbGluZy1za3kuZW1iZWQiLCJwYXJlbnREb21haW4iOiJzbGl0aGVyaW8ub25saW5lIiwidG9wRG9tYWluIjoic2xpdGhlcmlvLm9ubGluZSIsImhhc0ltcHJlc3Npb24iOmZhbHNlLCJsb2FkZXJFbmFibGVkIjp0cnVlLCJob3N0IjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJ2ZXJzaW9uIjoiMS41LjE3In0%253D")
         createButton("Bloons Player Pack 2", "images/blooons.jpg", "https://bloons-player-pack-2.game-files.crazygames.com/ruffle/bloons-player-pack-2/1/bloonspp2.html?v=1.271")
         createButton("Pandemic 2", "images/pandemic.png", "https://pandemic-2.game-files.crazygames.com/ruffle/pandemic-2/1/pandemic2.html?v=1.271")
         createButton("Celeste Classic", "images/celeste.png", "https://html-classic.itch.zone/html/235259/Celeste/index.html?v=1542780913")
         createButton("BreakLock", "images/breaklock.jpg", "https://www.mathsisfun.com/games/a/breaklock/index.html")
         createButton("Friendly Fire", "images/ff.jpg", "https://html-classic.itch.zone/html/3759980/index.html")
         createButton("Bloons Super Monkey", "images/supermonkey.avif", "https://bloons-super-monkey.game-files.crazygames.com/ruffle/bloonssupermonkey.html?v=1.271")
         createButton("Plants Vs Zombies", "data:image/jpeg;base64,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","https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fplants-vs-zombies.xml&container=ig")
         createButton("Space Invaders", "images/space.png", "https://whitespider.dev/player?name=Space%20Invaders&type=2&url=%2Fr%2F5d865490-bd09-499b-a827-e408acd6bc59")
         createButton("QWOP", "images/qwop.jpg", "https://whitespider.dev/player?name=QWOP&type=1&url=%2Fr%2Fd4c98998-7a97-4bca-996b-37c3eb448297")
         createButton("Classic Minecraft", "images/mc.jpg", "https://classic.minecraft.net/")
         createButton("Krunker", "images/krunker.jpg", "https://krunker.io/")
         createButton("Hobo 1", "images/hobo.jpg", "https://whitespider.dev/player?name=Hobo&type=1&url=%2Fr%2F4776c70f-8913-4ef7-b6ad-e95f15e6febb")
         createButton("Hobo 2", "images/hobo.jpg", "https://whitespider.dev/player?name=Hobo%202&type=1&url=%2Fr%2Fbb678b6d-4205-43c4-9846-8f3d1e0a6f48")
         createButton("Hobo 3", "images/hobo.jpg", "https://whitespider.dev/player?name=Hobo%203&type=1&url=%2Fr%2F67167c0e-353a-4322-b162-a2dabcae4ad8")
         createButton("Hobo 4", "images/hobo.jpg", "https://whitespider.dev/player?name=Hobo%204&type=1&url=%2Fr%2Fd243a78e-7e3f-4076-953a-08c41cd6e537")
         createButton("Doom", "images/doom.jpg", "https://whitespider.dev/player?name=Doom&type=2&url=%2Fr%2Fb9c16a78-2a9b-42dd-89c0-3a3eca935e28")
         createButton("Angry Birds", "images/angrybirds.jpg", "https://whitespider.dev/player?name=Angry%20Birds&type=1&url=%2Fr%2Fc3486f03-a7e6-41d1-8476-e53f69afb83f")
         createButton("1 on 1 Soccer", "images/1v1e.jpg", "https://whitespider.dev/player?name=1%20on%201%20Soccer&type=1&url=%2Fr%2F6ff7ebe3-9d33-4a3c-8ab2-6ff15713e2b6")
        }, 200);

     box.appendChild(buttonsContainer);


     searchBar.addEventListener("keyup", function() {
         var searchValue = this.value.toLowerCase();
         var buttons = buttonsContainer.querySelectorAll("button"); 
         buttons.forEach(function(button) {
             if (button.textContent.toLowerCase().includes(searchValue)) {
                 button.style.display = ""; 
             } else {
                 button.style.display = "none"; 
             }
         });
     });
 }
 function openApps() {
    
    var searchContainer = document.createElement("div");
    searchContainer.style.width = "100%";
    searchContainer.style.height = "20%";
    searchContainer.style.display = "flex";
    searchContainer.id = "dfygsuygosdlf"
    searchContainer.style.flexDirection = "column";
    searchContainer.style.justifyContent = "center";
    searchContainer.style.alignItems = "center";


    var gamesLabel = document.createElement("div");
    gamesLabel.textContent = "Apps";
    gamesLabel.id = "GAMESLABELE"
    gamesLabel.style.color = "rgb(166, 203, 255)"
    gamesLabel.style.fontFamily = "Comfortaa"
    gamesLabel.style.fontSize = "2.5em";


    var searchBar = document.createElement("input");
    searchBar.type = "text";
    searchBar.id = "Searchybar"
    searchBar.placeholder = "Search...";
    searchBar.style.color = "rgb(166, 203, 255)"
    searchBar.style.width = "60%";
    searchBar.style.border = "0"
    searchBar.style.borderRadius = "10px"
    searchBar.style.backgroundColor = "rgb(50, 50, 50)"
    searchBar.style.padding = "10px";
    searchBar.style.marginTop = "10px";

   
    searchContainer.appendChild(gamesLabel);
    searchContainer.appendChild(searchBar);

  
    box.appendChild(searchContainer);


    var buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttonscontainer"
    buttonsContainer.style.height = "80%";
    buttonsContainer.style.width= "100%";
    buttonsContainer.style.overflowY = "scroll"; 
    buttonsContainer.style.overflowX = "hidden";

    setTimeout(function() {
        createButton("Bypass 1", "images/2.png", "https://b1ueice.github.io/404/")
        createButton("Bypass 2", "images/2.png", "https://b1ueice.github.io/Bypass2/main.html")
        createButton("Bypass 3 version 1.9.3", "images/2.png", "https://b1ueice.github.io/BluesBypass1.9.3/main")
        createButton("Bored Button", "", "https://www.boredbutton.com/")
        createButton("Rammer-head Browser", "images/rammerhead.png", "https://browser.rammerhead.org/")
        createButton("SZ Games", "images/sz.jpg" ,"https://sz-games.github.io/")
        createButton("GBA games","images/gba.jpg", "https://bobzgames.github.io/GBA/")
        createButton("Clockwork", "images/clockwork.png", "https://clockwork-os.vercel.app/os/")
        createButton("Terbium", "images/tb.png", "https://terbium-46q.pages.dev/")
        createButton("Sodium", "images/sodium.svg", "https://v2.sodium-5h8.pages.dev/welcome")
        createButton("BruhProx", "images/uv.png", "https://bruhprox.pages.dev/")
        createButton("Zatoga", "images/zatoga.png", "https://zatoga.net/")
        createButton("z1g project", "images/z1g.png", "https://z1g-project.pages.dev/")
        createButton("Utopia", "images/utopia.png", "https://utopiaweb.org/")
        createButton("Neal.fun", "images/neal.jpg", "https://neal.fun")
        createButton("Paint", "", "https://jspaint.app/")
        createButton("Noclip", "images/noclip.png", "https://noclip.website/")
        createButton("Phantom Games", "images/phantom.png", "https://www.phantomgames.dev/")
        createButton("Totally Science", "", "https://totallyscience.co/")
        createButton("Abyss Browser", "images/abyss.png", "https://intoabyss.org/")
        createButton("Nebula Browser", "images/nebula.png", "https://nebulaproxy.io/")
        createButton("Cookieduck", "images/cookieduck.png", "https://cookieduck.com/games")
        createButton("Remove GoGuardian Tutorial", "images/yt.svg", "https://www.youtube.com/embed/XB48jXNoYXw")
        createButton("ubg100", "images/ubg100.png", "https://ubg100.github.io/games.html")
        createButton("Anura OS", "images/anura.png", "https://anura.pro/")
        createButton("Flow Works OS", "images/flow.png", "https://www.flow-works.me/")
        createButton("Unblocked Games 76", "images/classroom.png", "https://sites.google.com/site/unblockedgame76/")
        createButton("Classroom 6x", "images/classroom.png", "https://sites.google.com/site/classroom6x/")
        createButton("Youtube in Google Drive", "images/yt.svg", "https://speedtesting.herokuapp.com/videodrive/")
        createButton("Youtube", "images/yt.svg", "https://www.youtube.com/")
        createButton("Youtube Music", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAWlBMVEX/AAD/////+fn/j4//HBz/s7P/PT3/7+//3t7/QkL/cXH/mZn/wsL/2dn/z8//tbX/ior/Cwv/TU3/Zmb/gYH/Jib/LCz/dXX/VFT/FBT/vb3/5ub/X1//oKANu9JaAAABw0lEQVRIiaWX22KDIAyGE9CiFcHW2tO293/NodZDAqJjuSqHT5LwAylgyIq8acsMICvbJi+CU8Dv0mdgdtb7oKg4NVol4uAGNqAR0Fy2OYCL2QJvMay3WxAUpz0O4CR8UEXdnN1VHFRHsN4UBcWh9YY1BQEPxDfZaQ3u5nNttwU0f+EAzAyGArxKq7WV18DQZQJ9nd2ty1dtTO0yYe/ecDWCwhvIUclu/NlJhdabIAaQL+jk8Vi3H76oqgFknU8/VwafrKcHNVuPd/Sm+UZrB7LzLoJ7Y1gizg6kPXZsv17ct5y1oSDt+ycvHUo68YF0VwqgX7KfU5K589KSEUU3JYeGeiBnELEuVyOSxtQA+e4VuxWI+F5C7ZCor4X1V0FOycumg76oQ5CoS8jWTVtzENWkopoESTC3r8YDEb/GSSYgjCj49YmNg3uuzlnnrsaTo5e08uTEtkN9L0PedkQE8EOc4QLYlFxNxelJbkvk5BIIiZwdq/zwsUo/yN7V8fa5d+jqSL6s0q/H3Qs59yaI/z0B6Y9O+jOX/LCmP+XpxUNyuZJeIKWXZEdyGy4CMb3sDKpvtlihi+mldW9pxfxoB/4+/AJ1YxHo0oXN2QAAAABJRU5ErkJggg==", "https://music.youtube.com/")
        createButton("Emulator Games", "images/emulator.png", "https://www.emugames.net/")
        createButton("SFlix", "images/sflix.jpg", "https://sflix.to/")
        createButton("123Movies", "", "https://ww16.0123movie.net/")
        createButton("FMovies", "images/fmovies.jpg", "https://ww4.fmovies.co/24/")
        createButton("VSCode", "data:image/jpeg;base64,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", "https://vscode.dev/")
        createButton("Microsoft Store", "images/msstore.jpg", "https://apps.microsoft.com/")
        createButton("Play Store", "images/googlestore.png", "https://play.google.com/store/games?hl=en_US&gl=US")
        createButton("GeForce NOW", "images/geforceNOW.png", "https://play.geforcenow.com/mall/")
        createButton("WhiteSpider", "", "https://whitespider.dev/")
        createButton("SHSgames", "images/shs.png", "https://shsgames.github.io/")
        createButton("Native", "images/native.png", "https://nativegames.net/")
        createButton("artclass.site", "images/artclass.jpg", "https://artclass.site/")
        createButton("OS-js", "images/osjs.png", "https://demo.os-js.org/")
        createButton("Eigth Grade", "data:image/png;base64,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", "https://69.eightgrade.com/")
        createButton("Incognito Proxy", "images/incog.jpg", "https://unblocker.netlify.app/")
        createButton("monkey3 three","images/3.jpg", "https://monkey3three.github.io/unblocked88.github.io/index2.html")
        createButton("selenite", "", "https://selenite.cc/")
        createButton("BCHS", "images/black.png", "https://bchs.pages.dev/")
        createButton("Crazy Games", "images/crazy.png", "https://www.crazygames.com/")
        createButton("Poki", "images/poki.png", "https://poki.com/")
        createButton("Turtle Games", "", "https://turtlegames.org/")
        createButton("Chess.com", "", "https://www.chess.com/")
        createButton("Discord", "images/discord.png", "https://discord.com/app")
            }, 200);

    box.appendChild(buttonsContainer);


    searchBar.addEventListener("keyup", function() {
        var searchValue = this.value.toLowerCase();
        var buttons = buttonsContainer.querySelectorAll("button"); 
        buttons.forEach(function(button) {
            if (button.textContent.toLowerCase().includes(searchValue)) {
                button.style.display = ""; 
            } else {
                button.style.display = "none"; 
            }
        });
    });
}
initializeIconContainerClick()
function growBox() {
    var defaultIcon = document.getElementById("defaultIcon");
    var closeIcon = document.getElementById("closeIcon");
  
    if (box.style.width === "calc(75vw)") {
        box.style.width = "0";
        box.style.height = "0";
        defaultIcon.style.opacity = 1;
        closeIcon.style.opacity = 0;
        if (darkMode === true) {
            box.style.background = "#000";
        } else {
            box.style.background = "linear-gradient(to bottom right, #1900ff, #B3E5FC)";
        }
        setTimeout(function(){
            clear();
            removeIfExists("appaspsbutton");
            removeIfExists("gamememeasbutton");
        }, 200);
    } else {
        box.style.width = "calc(75vw)";
        box.style.height = "calc(80vh)";
        if (darkMode === true) {
            box.style.background = "#000";
        } else {
            box.style.background = "linear-gradient(to bottom right, #1900ff, #B3E5FC)";
        }
        defaultIcon.style.opacity = 0;
        closeIcon.style.opacity = 1;
        openGames();
    
        var appsButton = document.createElement("button");
        appsButton.style.position = "absolute";
        appsButton.id = "appaspsbutton";
        appsButton.style.top = "0";
        appsButton.style.left = "0";
        appsButton.style.width = "50px"; 
        appsButton.style.height = "50px";
        appsButton.style.backgroundSize = "contain";
        appsButton.style.backgroundRepeat = "no-repeat";
        appsButton.style.backgroundImage = "url(images/icons/apps2.png)";
        appsButton.addEventListener("click", function() {
            clear();
            openApps();
        });
    
        var gamesButton = document.createElement("button");
        gamesButton.style.position = "absolute";
        gamesButton.style.top = "0";
        gamesButton.id = "gamememeasbutton";
        gamesButton.style.left = "60px"; 
        gamesButton.style.width = "50px";
        gamesButton.style.height = "50px";
        gamesButton.style.backgroundSize = "contain";
        gamesButton.style.backgroundRepeat = "no-repeat";
        gamesButton.style.backgroundImage = "url(images/icons/games.png)";
        gamesButton.addEventListener("click", function() {
            clear();
            openGames();
        });
    
        box.appendChild(appsButton);
        box.appendChild(gamesButton);
    }
}

});
