//Одбројување-скрипта

// Поставете го датумот до кој одбројуваме
var countDownDate = new Date("Aug 13, 2023 15:37:25").getTime();
    
// Ажурирајте го одбројувањето на секои 1 секунда
var x = setInterval(function() {

  // Добијте го денешниот датум и време
  var now = new Date().getTime();
    
  // Најдете го растојанието помеѓу сега и датумот на одбројување
  var distance = countDownDate - now;
    
  // Временски пресметки за денови, часови, минути и секунди
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Излезете го резултатот во елемент со id = "демо"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // Ако одбројувањето заврши, напишете текст 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "ЗАВШЕНО";
  }
}, 1000);




//Скрол-скрипта

// Изберете ги сите врски со хешови
$('a[href*="#"]')
  // Отстранете ги врските што всушност не се поврзуваат со ништо
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // Врски на страницата
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Дознајте елемент до кој треба да скролувате
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Дали постои цел за лизгање?
      if (target.length) {
        // Спречете го стандардното само ако анимацијата навистина ќе се случи
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Повратен повик по анимација
          // Мора да се промени фокусот!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Проверка дали целта била фокусирана
            return false;
          } else {
            $target.attr('tabindex','-1'); // Додавање таб-индекс за елементи кои не се фокусираат
            $target.focus(); // Поставете го фокусот повторно
          };
        });
      }
    }
  });