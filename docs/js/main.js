$(document).ready(function() {

  /**
   * Shows the responsive navigation menu on mobile.
   */
  $("#header > #nav > ul > .icon").click(function() {
    $("#header > #nav > ul").toggleClass("responsive");
  });


  /**
   * Controls the different versions of  the menu in blog post articles 
   * for Desktop, tablet and mobile.
   */
  if ($(".post").length) {
    var menu = $("#menu");
    var nav = $("#menu > #nav");
    var menuIcon = $("#menu-icon, #menu-icon-tablet");

    
    /**
     * Display the menu on hi-res laptops and desktops.
     */
    if ($(document).width() >= 1024) {
      menu.css("visibility", "visible");
      menuIcon.addClass("active");
    }

    /**
     * Display the menu if the menu icon is clicked.
     */
    menuIcon.click(function() {
      if (menu.css("visibility") === "hidden") {
        menu.css("visibility", "visible");
        menuIcon.addClass("active");
      } else {
        menu.css("visibility", "hidden");
        menuIcon.removeClass("active");
      }
      return false;
    });

    /**
     * Add a scroll listener to the menu to hide/show the navigation links.
     */
    if (menu.length) {
      $(window).on("scroll", function() {
        // var topDistance = menu.offset().top;
        var topDistance = window.pageYOffset;

        // hide only the navigation links on desktop
        if (!nav.is(":visible") && topDistance < 10) {
          nav.show();
        } else if (nav.is(":visible") && topDistance > 50) {
          nav.hide();
        }

        // on tablet, hide the navigation icon as well and show a "scroll to top
        // icon" instead
        if ( ! $( "#menu-icon" ).is(":visible") && topDistance < 10 ) {
          $("#menu-icon-tablet").show();
          $("#top-icon-tablet").hide();
        } else if (! $( "#menu-icon" ).is(":visible") && topDistance > 50) {
          $("#menu-icon-tablet").hide();
          $("#top-icon-tablet").show();
        }
      });
    }

    /**
     * Show mobile navigation menu after scrolling upwards,
     * hide it again after scrolling downwards.
     */
    if ($( "#footer-post").length) {
      var lastScrollTop = 0;
      $(window).on("scroll", function() {
        var topDistance = $(window).scrollTop();

        if (topDistance > lastScrollTop){
          // downscroll -> show menu
          $("#footer-post").hide();
        } else {
          // upscroll -> hide menu
          $("#footer-post").show();
        }
        lastScrollTop = topDistance;

        // close all submenu"s on scroll
        $("#nav-footer").hide();
        $("#toc-footer").hide();
        $("#share-footer").hide();

        // show a "navigation" icon when close to the top of the page, 
        // otherwise show a "scroll to the top" icon
        if (topDistance < 50) {
          $("#actions-footer > #top").hide();
        } else if (topDistance > 100) {
          $("#actions-footer > #top").show();
        }
      });
    }
  }

  /**
   * Toggle between light and dark mode.
   */

  /*
  const current_mode = document.querySelector('#theme-toggle > i')
  if (current_mode.className.includes("fa-moon")) {
    document.getElementById("dark-mode-theme").disabled = false
    document.getElementById("light-mode-theme").disabled = true
  } else {
    document.getElementById("dark-mode-theme").disabled = true
    document.getElementById("light-mode-theme").disabled = false
  }
  */

  document.getElementById("theme-toggle")
    .addEventListener("click", (e) => {
      let darkTheme = document.getElementById("dark-mode-theme")
      let lightTheme = document.getElementById("light-mode-theme")
      const mode = e.target
        .className
        .split(" ")
        .filter(x => x.match("-"))
        .toString()

      if (mode === "fa-moon") {
        darkTheme.disabled = false
        lightTheme.disabled = true
        e.target.classList.replace("fa-moon", "fa-sun")
      } else if (mode === "fa-sun") {
        lightTheme.disabled = false
        darkTheme.disabled = true
        e.target.classList.replace("fa-sun", "fa-moon")
      }
  })

  /**
   * Fold any div with 'folded' class.
   */
  document.querySelectorAll('.folded')
    .forEach(el => el.outerHTML = `
      <details>
        <summary>
          ${el.getAttribute('data-fold-title') ? el.getAttribute('data-fold-title') : 'Show Code'}
        </summary>
        ${el.outerHTML}
      </details> 
   `)
});
