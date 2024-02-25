
   
  const textElement = document.getElementById("animated-text");
  let originalText = textElement.innerText;
  let currentIndex = 0;
  const audio = new Audio();


  function animateText() {
     if (currentIndex <= originalText.length) {
      textElement.innerText = originalText.substring(0, currentIndex);
      currentIndex++;
    }
    else{
     currentIndex=0;
    }
    setTimeout(animateText, 300); 
  }

  animateText();


  const krishnaDisplay=document.getElementById('hareKrishnaDisplay')
  const krishnaIncrimentBtn=document.getElementById('displayIncrimentK')
  const krishnaDcrimentBtn=document.getElementById('displayDcrimentK')
  let hareKrish=0;
  krishnaIncrimentBtn.addEventListener('click', function(){
   if(hareKrish===108){
    return alert('You complete it')
   }
   hareKrish= hareKrish+1;
   krishnaDisplay.innerText=hareKrish;
  })
  krishnaDcrimentBtn.addEventListener('click', function(){
   if(hareKrish===0){
    return
   }
   hareKrish= hareKrish-1;
   krishnaDisplay.innerText=hareKrish;

   audio.src = "./music/mainbg.mp3";
   audio.play();
  })

  const radheBtnDisplay=document.getElementById('radheDisplaybtn')
  const RadheIncrement=document.getElementById('radheIncrementValue');
  const radheDcrementValue= document.getElementById('radheDcrement');
  let radheValue=0;

  radheBtnDisplay.addEventListener('click', function(){
   radheValue=radheValue+1;
   RadheIncrement.innerText=radheValue;
  })

  radheDcrementValue.addEventListener('click', function(){
   if(radheValue===0){
    return
   }
   radheValue= radheValue-1;
   RadheIncrement.innerText=radheValue;
   audio.src = "./music/mainbg.mp3";
  audio.play();
  })


  const valueHOribol=document.getElementById('valueOfHoribol');
  const incrmenthobol= document.getElementById('HoribolIncriment')
  const dcrementHoribol= document.getElementById('HoribolDcrmeint')
  let valueOfhori=0;
  incrmenthobol.addEventListener('click', function(){
   valueOfhori=valueOfhori+1;
   valueHOribol.innerText=valueOfhori;
  })
  dcrementHoribol.addEventListener('click', function(){
   if(valueOfhori ===0){
    return
   }
   valueOfhori=valueOfhori-1;
   valueHOribol.innerText=valueOfhori;
   audio.src = "./music/mainbg.mp3";
  audio.play();
   
  })

  const resetBtn=document.getElementById('reset')

  resetBtn.addEventListener('click', function(){
   krishnaDisplay.innerText=0
   RadheIncrement.innerText=0
   valueHOribol.innerText=0

  })


  const backgroundMusic = document.getElementById("backgroundMusic");

  function toggleMusic() {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
  }

  
 
  