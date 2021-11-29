lyricsOriginal();

function lyricsOriginal(){
  
  document.getElementById('lyrics').innerHTML = song01.lyrics

}

let romajiIcon = document.getElementById("romaji-symbol");

function lyricsRomaji(){
  
  let botao = document.getElementById('romaji-button');
  if(botao.value == 1){

    document.getElementById('lyrics').innerHTML = song01.romaji;
    botao.value = 2;

    romajiIcon.src = "img/romaji-actived.svg"

  } else{
    romajiIcon.src = "img/romaji-disabled.svg"

    botao.value = 1;
    lyricsOriginal();

  }

}

