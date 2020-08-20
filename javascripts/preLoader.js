var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.height = "100px";
    loader.style.width = "100px";
    loader.style.borderRadius = "50%";
    loader.style.visibility = "hidden";
});

paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
    };

    Pace.on('done', function() {
    $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19, 1, 0.22 ,1]));


    $('#preloader').delay(1500).animate({top: '-100%'}, 2000, $.bez([0.19, 1, 0.22, 1]));

    TweenMax.from(".title", 2, {
         delay: 1.8,
              y: 10,
              opacity: 0,
              ease: Expo.easeInOut
        })
   });