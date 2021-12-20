$.fn.commentcartes = function(){

    return this.each(function(){
  
      var $this = $(this),
          $cartes = $this.find('.option'),
          $current = $cartes.filter('.carte--current'),
          $next;
  
      $cartes.on('click',function(){
        if ( !$current.is(this) ) {
          $cartes.removeClass('option--current option--out option--next');
          $current.addClass('option--out');
          $current = $(this).addClass('option--current');
          $next = $current.next();
          $next = $next.length ? $next : $cartes.first();
          $next.addClass('option--next');
        }
      });
  
      if ( !$current.length ) {
        $current = $cartes.last();
        $cartes.first().trigger('click');
      }
  
      $this.addClass('cartes--active');
  
    })
  
  };
  
  $('.cartes-options').commentcartes();