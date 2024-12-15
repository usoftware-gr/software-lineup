function u_home_go()
{
    location.href = '/index.html';
}

function menu_open_a(){
    menu = document.getElementById("menu")
    
    menu.style.display = "block";

    close_menu_button_2.style.display = "block";
}

function close_menu(){
    menu = document.getElementById("menu")

    menu.style = "display:block;animation: down_01_n; animation-duration: 0.5s;";
    var close = function(){
        menu.style = "display:none; animation: down_01a; animation-duration: 0.5s;";
    }
    setTimeout(close, 480);
    
    close_menu_button_2.style.display = "none";

}


menu_link.innerHTML = '<ul><a href="/original_clock.html"><li>Original Clock</li></a><a href="https://chipi-cha.web.app"><li>Chipi CHA!</li></a><a href="/original_audio_player"><li>Original Audio Player</li></a><a href="/fce"><li>Fox Code Editor</li></a><a href="https://umaidango.github.io/"><li>U Software ホーム</li></a></ul>';
var load = function() {
  const contentPage = document.getElementById('content_page');

  fetch('content_main.html')
    .then(response => response.text())
    .then(html => {
      contentPage.innerHTML = html;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
setTimeout(load, 400);
