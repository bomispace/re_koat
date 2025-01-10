/* swiper 호출*/
var main_view = new Swiper("#main_view",{
    wrapperClass:"slider",      //슬라이드를 감싸는 영역의 클래스명
    slideClass: "view",         //슬라이드 영역의 클래스명
    slideActiveClass:"active",
    effect:"fade",              //슬라이드의 전환효과
    loop:true,                  //반복순환
    autoplay:{                  //자동슬라이드
        delay: 5000,          //자동슬라이드 시간 간격
    },
    pagination: {
      el: ".mainview-pagination",
      type: "fraction",
    },
});


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