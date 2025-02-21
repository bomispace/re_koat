const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);


var popup = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
      autoplay:{                  //자동슬라이드
          delay: 2000,  
    },
});

var fullpage = new Swiper("#main", {
  wrapperClass:"main_wrap",      //슬라이드를 감싸는 영역의 클래스명
  slideClass: "bg_slider",         //슬라이드 영역의 클래스명
  slidesPerView: "auto",
  direction:'vertical',
  
  speed:800,
  mousewheel: {
    enabled: true,
  },
  pagination: {
    el: ".pages",
    clickable: true,
  }
});