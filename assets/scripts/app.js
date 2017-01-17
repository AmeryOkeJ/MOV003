(function() {
  (function() {
    var $container, $navlist, destroyIsotope, disableFilters, enableFilters, enableNewsFilters, enablePageReRouting, externalLinks, getSidebarHeight, hideIsotope, intro, isSelected, randomiseOrder, revealIsotope, runIntro, runIsotope, runLoad, runNewsIsotope, runCurrentProjectsIsotope, runProjectsIsotope, stampShift, unSelect;
    $container = void 0;
    $navlist = void 0;
    destroyIsotope = void 0;
    disableFilters = void 0;
    enableFilters = void 0;
    enableNewsFilters = void 0;
    enablePageReRouting = void 0;
    externalLinks = void 0;
    getSidebarHeight = void 0;
    hideIsotope = void 0;
    intro = void 0;
    isSelected = void 0;
    randomiseOrder = void 0;
    revealIsotope = void 0;
    runIntro = void 0;
    runIsotope = void 0;
    runLoad = void 0;
    runNewsIsotope = void 0;
    runProjectsIsotope = void 0;
    runCurrentProjectsIsotope = void 0;
    stampShift = void 0;
    unSelect = void 0;
    $container = $(".post-list");
    $navlist = $(".nav-list");
    isSelected = function() {
      $(this).closest("ul").find(".is-selected").removeClass("is-selected");
      return $(this).closest("li").addClass("is-selected");
    };
    unSelect = function() {
      return $(".menu li").removeClass("is-selected");
    };
    hideIsotope = function() {
      return $container.css({
        opacity: "0"
      });
    };
    revealIsotope = function() {
      return $container.css({
        opacity: "1"
      });
    };
    randomiseOrder = function() {
      $(".post-list .post").each(function() {
        var number;
        number = void 0;
        number = 1 + Math.floor(Math.random() * 6) + 3;
        if (!($(this).attr("data-order") > 0)) {
          $(this).attr("data-order", number);
        }
      });
      return $container.isotope({
        getSortData: {
          name: function($elem) {
            return $elem.attr("data-name");
          },
          date: function($elem) {
            return $elem.attr("data-date");
          },
          order: function($elem) {
            return $elem.attr("data-order");
          }
        }
      });
    };
    getSidebarHeight = function() {
      var $filtered, $filteredAmount, $totalHeight;
      $filtered = void 0;
      $filteredAmount = void 0;
      $totalHeight = void 0;
      $filtered = $container.data("isotope").$filteredAtoms;
      $totalHeight = 5;
      $filteredAmount = $filtered.length;
      $filtered.each(function() {
        var $element;
        $element = void 0;
        $element = $(this);
        if (!$(this).hasClass("sidebar")) {
          if ($container.hasClass("downsize-large")) {
            if ($element.hasClass("category")) {
              return $totalHeight += 544;
            } else {
              return $totalHeight += ($element.height() + 20) / 2;
            }
          } else {
            if ($element.hasClass("category") || $element.hasClass("large-rectangle")) {
              return $totalHeight += 544;
            } else {
              return $totalHeight += ($element.height() + 20) / 2;
            }
          }
        }
      });
      $(".sidebar").css({
        height: $totalHeight
      });
      $container.isotope("reLayout");
      return false;
    };
    runIsotope = function() {
      $container.isotope({
        filter: ".post",
        masonry: {
          columnWidth: 20
        },
        sortBy: "order",
        sortAscending: true
      });
      return revealIsotope();
    };
    runProjectsIsotope = function() {
      $container.isotope({
        filter: ".projects-box, .projects-nav",
        masonry: {
          columnWidth: 20
        },
        sortBy: "date",
        sortAscending: false
      });
      $navlist.isotope({
        getSortData: {
          name: function($elem) {
            return $elem.attr("data-name");
          }
        },
        filter: ".nav-item",
        masonry: {
          columnWidth: 20
        },
        sortBy: "name",
        sortAscending: true
      });
      getSidebarHeight();
      return revealIsotope();
    };
    runCurrentProjectsIsotope = function() {
      $container.isotope({
        filter: ".current-projects-box, .current-projects-nav",
        masonry: {
          columnWidth: 20
        },
        sortBy: "date",
        sortAscending: false
      });
      $navlist.isotope({
        getSortData: {
          name: function($elem) {
            return $elem.attr("data-name");
          }
        },
        filter: ".nav-item",
        masonry: {
          columnWidth: 20
        },
        sortBy: "name",
        sortAscending: true
      });
      getSidebarHeight();
      return revealIsotope();
    };
    runNewsIsotope = function() {
      $container.isotope({
        filter: ".news-box, .news-nav",
        masonry: {
          columnWidth: 20
        },
        sortBy: "date",
        sortAscending: false
      });
      getSidebarHeight();
      return revealIsotope();
    };
    enableFilters = function() {
      return $("body.home .filter a").on("click", function(e) {
        var href, selector, sideselector, url;
        href = void 0;
        selector = void 0;
        sideselector = void 0;
        url = void 0;
        e.preventDefault();
        href = $(this).attr("href").replace(/^#/, "");
        url = href.substring(1);
        hasher.setHash(url);
        selector = $(this).attr("data-filter");
        sideselector = $(this).attr("data-filter-sidebar");
        $navlist.isotope({
          filter: sideselector,
          sortBy: "name",
          sortAscending: true
        });
        isSelected();
        return getSidebarHeight();
      });
    };
    enableNewsFilters = function() {
      return $(".news-date a").on("click", function(e) {
        var href, selector, url;
        href = void 0;
        selector = void 0;
        url = void 0;
        e.preventDefault();
        href = $(this).attr("href").replace(/^#/, "");
        url = href.substring(1);
        hasher.setHash(url);
        selector = $(this).attr("data-filter");
        return getSidebarHeight();
      });
    };
    enablePageReRouting = function() {
      if (!$("body").hasClass("home")) {
        return $(".menu .filter a").each(function() {
          var href;
          href = void 0;
          href = "/#" + $(this).attr("href");
          return $(this).attr("href", href);
        });
      }
    };
    stampShift = function() {
      return setInterval((function() {
        $(".stamp1").css({
          display: "none"
        });
        $(".stamp2").css({
          display: "table-cell"
        });
        return setTimeout((function() {
          $(".stamp1").css({
            display: "table-cell"
          });
          return $(".stamp2").css({
            display: "none"
          });
        }), 2000);
      }), 4000);
    };
    externalLinks = function() {
      $("a[href^=http]").each(function() {
        if (this.href.indexOf(location.hostname) === -1) {
          return $(this).attr({
            target: "_blank",
            title: "Opens in a new window"
          });
        }
      });
      return $("a[href$=\".pdf\"]").each(function() {
        return $(this).attr({
          target: "_blank",
          title: "Opens in a new window"
        });
      });
    };
    destroyIsotope = function() {
      return $container.isotope("destroy");
    };
    disableFilters = function() {
      return $("body.home .filter a, body.projects .filter a").off("click");
    };
    runIntro = function() {
      $("body").addClass("first");
      $("html").addClass("preload");
      setTimeout((function() {
        return $(".intro").addClass("visible");
      }), 1000);
      return setTimeout((function() {
        return $(".home").addClass("loaded");
      }), 3000);
    };
    runLoad = function() {
      return $(".home").addClass("loaded");
    };
    intro = function() {
      if (document.referrer === null || document.referrer.indexOf(window.location.hostname) < 0) {
        return runIntro();
      } else {
        return runLoad();
      }
    };
    $(function() {
      var bubbleFirst, bubbleSecond, parseHash, quoteFirst, quoteSecond;
      bubbleFirst = void 0;
      bubbleSecond = void 0;
      parseHash = void 0;
      quoteFirst = void 0;
      quoteSecond = void 0;
      stampShift();
      externalLinks();
      $container.imagesLoaded(function() {
        return $container.addClass("loaded");
      });
      randomiseOrder();
      if ($(window).width() > 960) {
        if ($("body").hasClass("home")) {
          crossroads.addRoute("", function() {
            intro();
            $(".post-list").removeClass("downsize-large");
            enableFilters();
            runIsotope();
            unSelect();
            return $(".home-menu").addClass("is-selected");
          });
          crossroads.addRoute("campaigns", function() {
            runLoad();
            $(".post-list").addClass("downsize-large");
            runCurrentProjectsIsotope();
            enableFilters();
            unSelect();
            return $(".current-projects-menu, .current-all-menu").addClass("is-selected");
          });
          crossroads.addRoute("campaigns/{category}", function(category) {
            runLoad();
            $(".post-list").addClass("downsize-large");
            $container.isotope({
              filter: "." + category + "-box, .current-projects-nav",
              masonry: {
                columnWidth: 20
              },
              sortBy: "date",
              sortAscending: false
            });
            $navlist.isotope({
              getSortData: {
                name: function($elem) {
                  return $elem.attr("data-name");
                }
              },
              filter: "." + category + "-nav",
              masonry: {
                columnWidth: 20
              },
              sortBy: "name",
              sortAscending: true
            });
            getSidebarHeight();
            enableFilters();
            revealIsotope();
            $(".home-menu").removeClass("is-selected");
            $(".projects-menu").removeClass("is-selected");
            $(".current-projects-menu").addClass("is-selected");
            $("." + category + "-menu").closest("ul").find(".is-selected").removeClass("is-selected");
            return $("." + category + "-menu").addClass("is-selected");
          });
          crossroads.addRoute("projects", function() {
            runLoad();
            $(".post-list").addClass("downsize-large");
            runProjectsIsotope();
            enableFilters();
            unSelect();
            return $(".projects-menu, .all-menu").addClass("is-selected");
          });
          crossroads.addRoute("projects/{category}", function(category) {
            runLoad();
            $(".post-list").addClass("downsize-large");
            $container.isotope({
              filter: "." + category + "-box, .projects-nav",
              masonry: {
                columnWidth: 20
              },
              sortBy: "date",
              sortAscending: false
            });
            $navlist.isotope({
              getSortData: {
                name: function($elem) {
                  return $elem.attr("data-name");
                }
              },
              filter: "." + category + "-nav",
              masonry: {
                columnWidth: 20
              },
              sortBy: "name",
              sortAscending: true
            });
            getSidebarHeight();
            enableFilters();
            revealIsotope();
            $(".home-menu").removeClass("is-selected");
            $(".current-projects-menu").removeClass("is-selected");
            $(".projects-menu").addClass("is-selected");
            $("." + category + "-menu").closest("ul").find(".is-selected").removeClass("is-selected");
            return $("." + category + "-menu").addClass("is-selected");
          });
          crossroads.addRoute("news", function() {
            runLoad();
            $(".post-list").removeClass("downsize-large");
            runNewsIsotope();
            enableFilters();
            enableNewsFilters();
            unSelect();
            return $(".news-menu").addClass("is-selected");
          });
          crossroads.addRoute("news/{year}", function(year) {
            runLoad();
            $(".post-list").addClass("downsize-large");
            $container.isotope({
              filter: "." + year + ", .news-nav",
              masonry: {
                columnWidth: 20
              },
              sortBy: "date",
              sortAscending: false
            });
            getSidebarHeight();
            enableFilters();
            revealIsotope();
            $(".home-menu").removeClass("is-selected");
            return $(".news-menu").addClass("is-selected");
          });
        } else {
          destroyIsotope();
          $("ul.post-list").css({
            opacity: "1",
            width: "640px",
            float: "right"
          });
          $("ul.post-list .post img").css({
            display: "block"
          });
          enablePageReRouting();
        }
      } else {
        crossroads.addRoute("campaigns", function() {
          return window.location.replace("/campaigns");
        });
        crossroads.addRoute("campaigns/{category}", function(category) {
          return window.location.replace("/campaigns" + category);
        });
        crossroads.addRoute("projects", function() {
          return window.location.replace("/projects");
        });
        crossroads.addRoute("projects/{category}", function(category) {
          return window.location.replace("/projects" + category);
        });
        crossroads.addRoute("news", function() {
          return window.location.replace("/news");
        });
        destroyIsotope();
        $("li.post").each(function() {
          var image, title;
          image = $(this).find(".post-image");
          title = $(this).find(".title");
          return image.imagesLoaded(function() {
            var $imageHeight;
            $imageHeight = image.height() - 10;
            return title.css({
              height: $imageHeight
            });
          });
        });
        if ($("body").hasClass("home")) {
          intro();
        }
        $("header").on("click", ".menu-link", function() {
          return $(".menu").slideToggle("fast", function() {
            if ($(".menu").is(":visible")) {
              return $(".menu-link span").html("&#9650;");
            } else {
              return $(".menu-link span").html("&#9660;");
            }
          });
        });
        $(".menu").on("click", ".has-subnav a.parent-link", function(e) {
          var href;
          href = void 0;
          if ($(window).width() < 960 || $("html").hasClass("touch")) {
            e.preventDefault();
            if ($(this).next("ul").is(":visible")) {
              $(this).next("ul").slideUp("fast");
              return $(this).removeClass("active");
            } else {
              $(this).closest("ul").find(".active").next("ul").slideUp("fast");
              $(this).closest("ul").find(".active").removeClass("active");
              $(this).next().slideToggle("fast");
              return $(this).addClass("active");
            }
          } else {
            $(this).parent("li").addClass("active");
            href = $(this).closest("a").attr("href").replace(/^#/, "");
            return false;
          }
        });
        $(".menu li:not(.has-subnav) a").on("click", function() {
          if ($(window).width() < 960 || $("html").hasClass("touch")) {
            $(".menu").slideToggle("fast");
            if ($(this).next("ul").is(":visible")) {
              $(this).closest("ul").find(".active").next("ul").slideUp("fast");
              return $(this).closest("ul").find(".active").removeClass("active");
            }
          }
        });
      }
      crossroads.routed.add(console.log, console);
      parseHash = function(newHash, oldHash) {
        return crossroads.parse(newHash);
      };
      hasher.initialized.add(parseHash);
      hasher.changed.add(parseHash);
      hasher.init();
      FastClick.attach(document.body);
      $("a.top").on("click", function(e) {
        e.preventDefault();
        return $('html, body').animate({
          scrollTop: 0
        }, 'slow');
      });
      if ($("body").hasClass("contact")) {
        loadScript();
      }
      if ($("body").hasClass("profile")) {
        bubbleFirst = $(".content h1 em").position().top;
        quoteFirst = $(".content h2:first").position().top;
        quoteSecond = $("h2:nth-of-type(2)").position().top;
        bubbleSecond = $("h2:nth-of-type(2)").position().top;
        $("span.bubble.first").css({
          top: 250 + bubbleFirst
        });
        $("span.quote.first").css({
          top: 30 + quoteFirst
        });
        $("span.quote.second").css({
          top: 30 + quoteSecond
        });
        return $("span.bubble.second").css({
          top: 300 + bubbleSecond
        });
      }
    });
    return $(window).resize(function() {
      if ($(window).width() < 960) {
        destroyIsotope();
        return disableFilters();
      }
    });
  }).call(this);

  $('h3.enquire').click(function(){
    $('.c-form').fadeIn().addClass('vis');
  });

  $('.close').click(function(){
    if ($('.c-form').hasClass('vis')) {
      $('.c-form').fadeOut();
    }
  });

  $('.thank_you').hide();
  $('.pack_thank_you').hide();

  $('h3.enquire-btn').click(function(){
    $('.pack_thank_you').fadeIn();
  });

  $('h3.purchase-btn').click(function(){
    $('.thank_you').fadeIn();
  });

  $('.thank_you').click(function(){
    $(this).fadeOut();
  });

  $('.pack_thank_you').click(function(){
    $(this).fadeOut();
  });

  if ($(".past-menu").hasClass("is-selected")){
    $('h3.purchase-btn').hide();
  }

}).call(this);
