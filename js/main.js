function toggle(){
	$('.sidebar').toggleClass('active');
   $('.page-content-wrapper').toggleClass('active');
  }
  
  $(document).ready(function(){
		$(window).bind('resize',function(){
			  if($(this).width() < 992){
					$('.sidebar,.page-content-wrapper').addClass('active');
					$('.search-bar,.toggler').hide();
			  }else{
					$('.sidebar,.page-content-wrapper').removeClass('active');
					$('.search-bar,.toggler').show();
			  }
		}).trigger('resize');
  });
  