$(function() {

    var siteSticky = function() {
          $(".js-sticky-header").sticky({topSpacing:0});
      };
      siteSticky();
  
      var siteDropdown = function() {
  
          $('nav .dropdown').hover(function(){
              var $this = $(this);
              $this.addClass('show');
              $this.find('> a').attr('aria-expanded', true);
              $this.find('.dropdown-menu').addClass('show');
          }, function(){
              var $this = $(this);
                  $this.removeClass('show');
                  $this.find('> a').attr('aria-expanded', false);
                  $this.find('.dropdown-menu').removeClass('show');
          });
  
  
          $('#dropdown04').on('show.bs.dropdown', function () {
            console.log('show');
          });
  
        $('.navbar .dropdown > a').click(function(){
          location.href = this.href;
        });
      }; 
      siteDropdown();
  
  });

  function navbarToggle(e){
    window.aa = e.target
    if(e.target.attributes.src.value == './imgs/bars.png') {
      e.target.attributes.src.value = './imgs/cross.png'
      document.getElementById('land-bg').style.display = "none"
    } else {
      e.target.attributes.src.value = './imgs/bars.png'
      document.getElementById('land-bg').style.display = "block"

    }
  }