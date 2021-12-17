$.fn.commentcartes = function(){

    return this.each(function(){
  
      var $this = $(this),
          $cartes = $this.find('.carte'),
          $current = $cartes.filter('.carte--current'),
          $next;
  
      $cartes.on('click',function(){
        if ( !$current.is(this) ) {
          $cartes.removeClass('carte--current carte--out carte--next');
          $current.addClass('carte--out');
          $current = $(this).addClass('carte--current');
          $next = $current.next();
          $next = $next.length ? $next : $cartes.first();
          $next.addClass('carte--next');
        }
      });
  
      if ( !$current.length ) {
        $current = $cartes.last();
        $cartes.first().trigger('click');
      }
  
      $this.addClass('cartes--active');
  
    })
  
  };
  
  $('.cartes').commentcartes();