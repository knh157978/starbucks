const searchEl = document.querySelector('.search')
const searchElInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click', function () {
    searchElInputEl.focus();
});
searchElInputEl.addEventListener('focus', function () {
    searchEl.classList.add("focused");
    searchElInputEl.setAttribute('placeholder', '통합검색');
});
searchElInputEl.addEventListener('blur', function () {
    searchEl.classList.remove("focused");
    searchElInputEl.setAttribute('placeholder', '');
});const badgeEl= document.querySelector('header .badges');
const toTopEl =  document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY)
  if(window.scrollY>500){
      //badge 숨기기
      //gsap.to(요소,지속시간,옵션)
      gsap.to(badgeEl,.6, {
          opacity:0,
          display: 'none'
      });
      //버튼보이기
      gsap.to(toTopEl,.2,{
        x:0
    });

  }else{
      //badge 보이기
      gsap.to(badgeEl,.6, {
        opacity:1,
        display: 'block'
    });
    //버튼숨기기
    gsap.to(toTopEl,.2,{
        x:100
    });
  }
},300));

toTopEl.addEventListener('click',function(){
    gsap.to(window,.7,{
        scrollTo:0
    });
})
const fadeEls =  document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEL,index){
   //gsap.to(요소,지속시간,옵션);
   
   gsap.to(fadeEL,1,{
       opacity:1,
       delay:(index+1)*0.7,//0.7,1.4,2.1,2.7
   });
});


new Swiper('.notice-line .swiper-container',{
    direction:'vertical',
    autoplay:true,
    loop:true
});

new Swiper('.promotion .swiper-container',{
   slidesPerView:3,
   spaceBetween: 10,
   centeredSlides: true,
   loop:true,
   autoplay:{
       delay:5000
  },
   pagination: {
       el:'.promotion .swiper-pagination',
       clickable:true
   },
   navigation: {
       prevEl:'.promotion .swiper-prev',
       nextEl:'.promotion .swiper-next'
   }

});

new Swiper('.awrads .swiper-container',{
    autoplay:true,
    loop:true,
    spaceBetween:30,
    slidesPerView:5,
    navigation: {
        prevEl:'.awrads .swiper-prev',
        nextEl:'.awrads .swiper-next'
    }
    
 });
 
const promotionEl =  document.querySelector('.promotion');
const promotionToggleBtn =  document.querySelector('.toggle-promotion')
let isHidePromotion= false;
promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion) {
        //숨김처리
        promotionEl.classList.add('hide');
    } else{
       //보임처리
       promotionEl.classList.remove('hide');
    }
});


let tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      
      function onYouTubeIframeAPIReady() {
        new YT.Player('player', {
          videoId: 'An6LvWQuj_8',
          playerVars:{
              autoplay:true,
              loop:true,
              playlist: 'An6LvWQuj_8'
          },
          events: {
              onReady: function(event){
                  event.target.mute()
              }
          }
        });
      }
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
function floaingObject(selector,delay,size){
    gsap.to(selector,
        random(1.5,2.5),
        {
        y:size,
        repeat:-1,
        yoyo:true,
        ease:Power1.easeInOut,
        delay:random(0, delay)
    })
}
floaingObject('.floating1',1,15);
floaingObject('.floating2',5,15);
floaingObject('.floating3',1.5,20);

const spyEls= document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
 new ScrollMagic
    .Scene({
       triggerElement : spyEl,// 보여짐 여부를 감시할요소
       triggerHook : .8,
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});

