document.addEventListener("DOMContentLoaded", function () {
  // swiper
  var swiper = new Swiper(".collection_slide", {
    slidesPerView: 2,
    spaceBetween: 40,
    autoplay: {
      delay: 1500,
    },
    breakpoints: {
      851: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
    },
  });

  //   banner img change
  let slides = document.querySelectorAll(".banner-slide .swiper-slide");
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  slides[currentSlide].classList.add("active");

  setInterval(showNextSlide, 3000);

  //   topbtn
  const topBtn = document.querySelector(".top_btn");

  topBtn.addEventListener("click", function () {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  });

  //   submenu
  // const headerWomen = document.querySelector(".header_area .women");
  // const subMenuBox = document.querySelector(".sub_menu_box");
  // const subMenu = document.querySelector(".sub_menu");

  // headerWomen.addEventListener("mouseenter", function () {
  //   subMenu.classList.add("active");
  //   subMenuBox.classList.add('active');
  // });

  // subMenu.addEventListener("mouseleave", function () {
  //   this.classList.remove("active");
  //   subMenuBox.classList.remove('active');
  // });

  // submenu
  const submenuTab = document.querySelectorAll(`.header_main li`);
  const submenuBox = document.querySelector(`.sub_menu_box`);

  for (const li of submenuTab) {
    li.addEventListener(`mouseenter`, function () {
      submenuBox.classList.add(`active`);

      // 탭메뉴 연결
      const tab = this.getAttribute(`data-tab`);
      const subMenu = document.querySelectorAll(`.sub_menu`);

      for (const tabContent of subMenu) {
        tabContent.classList.remove(`active`);
      }

      const changeTab = document.querySelector(`#${tab}`);
      changeTab.classList.add(`active`);
    });
  }
  // 호버나오면 삭제
  submenuBox.addEventListener("mouseleave", function () {
    this.classList.remove("active");
  });

  //   aos animation
  AOS.init();

  // 햄버거버튼
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar_wrap");
  const xbtn = document.querySelector(".x_btn");
  // 햄버거 버튼 클릭 시
  hamburger.addEventListener("click", function () {
    sidebar.classList.add("click");

    xbtn.addEventListener("click", function () {
      sidebar.classList.remove("click");
    });
  });
});
