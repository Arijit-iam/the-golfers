jQuery(document).ready(function ($) {
  // document start

  // Navbar
  $("<span class='clickD'></span>").insertAfter(
    ".navbar-nav li.menu-item-has-children > a"
  );
  $(".navbar-nav li .clickD").click(function (e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.next().hasClass("show")) {
      $this.next().removeClass("show");
      $this.removeClass("toggled");
    } else {
      $this.parent().parent().find(".sub-menu").removeClass("show");
      $this.parent().parent().find(".toggled").removeClass("toggled");
      $this.next().toggleClass("show");
      $this.toggleClass("toggled");
    }
  });

  $(window).on("resize", function () {
    if ($(this).width() < 1025) {
      $("html").click(function () {
        $(".navbar-nav li .clickD").removeClass("toggled");
        $(".toggled").removeClass("toggled");
        $(".sub-menu").removeClass("show");
      });
      $(document).click(function () {
        $(".navbar-nav li .clickD").removeClass("toggled");
        $(".toggled").removeClass("toggled");
        $(".sub-menu").removeClass("show");
      });
      $(".navbar-nav").click(function (e) {
        e.stopPropagation();
      });
    }
  });
  // Navbar end

  /* ===== For menu animation === */
  $(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("open");
    $(".navbar-toggler .stick").toggleClass("open");
    $("body,html").toggleClass("open-nav");
  });

  // Navbar end

  // back to top
  if ($("#scroll").length) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $("#scroll").fadeIn(200);
      } else {
        $("#scroll").fadeOut(200);
      }
    });
    $("#scroll").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
    });
  }

  $('.hdr-srch-form-wpr input[type="text"]').on("blur change", function () {
    if ($(this).val() != "") {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });


  gsap.registerPlugin(ScrollTrigger);
  if ($("[data-parallax]").length) {
    const myEl = document.querySelectorAll("[data-parallax]");
    myEl.forEach(function (elem) {
      gsap.to(elem, {
        scrollTrigger: {
          trigger: elem,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
        y: () => {

          if (elem.dataset.parallax == "up") {
            return -100;
          } else {
            return 100;
          }
        }
      });
    });
  }

  if ($("[data-slide]").length) {
    const myEl = document.querySelectorAll("[data-slide]");
    myEl.forEach(function (elem) {
      if (elem.dataset.slide == "up") {
        gsap.set(elem, { y: 50, opacity: 0 });
      } else {
        gsap.to(elem, { y: -50, opacity: 0 });
      };
      gsap.to(elem, {
        stagger: 0.2,
        ease: "Power3.easeOut",
        duration: 2,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",
          // toggleActions: "play none none none",
          end: "bottom bottom",
          // scrub: 1.2,
          each: 0.5,
        },
      })
    });
  }


  if ($(".insight-list-wpr").length) {
    const insightSec = document.querySelector(".insight-list-wpr");
    const insightItem = document.querySelectorAll(".insight-list-item");
    // const insightCard = document.querySelectorAll(".insight-list-item .insight-cntnt");
    let caioTl = gsap.timeline();
    insightItem.forEach(function (elem) {
      let insightCard = elem.querySelector(".insight-cntnt");
      let insightDot = elem.querySelector(".insight-dot");
      let insightLine = elem.querySelector(".insight-line");
      gsap.set(insightCard, { y: 70, opacity: 0 });
      gsap.set(insightDot, { scale: 0 });
      gsap.set(insightLine, { height: "0%" });
      // if (elem.dataset.slide == "up") {
      //   gsap.set(elem, { y: 50, opacity: 0 });
      // } else {
      //   gsap.to(elem, { y: -50, opacity: 0 });
      // };
      caioTl.to(insightCard, {
        // stagger: 0.2,
        ease: "Power3.easeOut",
        duration: 2,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: insightCard,
          start: "top 90%",
          end: "bottom 70%",
          // toggleActions: "play none none none",
          scrub: 2,
          // each: 0.5,
        }
      }).to(insightDot, {
        // stagger: 0.2,
        ease: "Power3.easeOut",
        duration: 0.3,
        scale: 1,
        scrollTrigger: {
          trigger: insightCard,
          start: "top 90%",
          end: "bottom 70%",
          // toggleActions: "play none none none",
          scrub: 1.2,
          // each: 0.5,
        }
      }, "+=1000").to(insightLine, {
        // stagger: 0.2,
        ease: "Power3.easeOut",
        duration: 2,
        height: "100%",
        scrollTrigger: {
          trigger: insightCard,
          start: "top 90%",
          end: "bottom 70%",
          // toggleActions: "play none none none",
          scrub: 1.2,
          // each: 0.5,
        }
      },)
    });
  }



});
