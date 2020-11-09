
$(document).ready(function() {	

	$('abbr').each(function(){		
		
		$(this).data('title',$(this).attr('title'));
		$(this).removeAttr('title');
	
	});

	
	$('abbr').mouseover(function() {		
		
	
		$('abbr').next('.tooltip').remove();
		
	
		$(this).after('<span class="tooltip">' + $(this).data('title') + '</span>');
		
	
		var left = $(this).position().left + $(this).width() + 4;
		var top = $(this).position().top - 4;
		$(this).next().css('left',left);
		$(this).next().css('top',top);				
		
	});
	
	
	$('abbr').click(function(){
		
		$(this).mouseover();
		
		// after a slight 2 second fade, fade out the tooltip for 1 second
		$(this).next().animate({opacity: 0.9},{duration: 2000, complete: function(){
			$(this).fadeOut(1000);
		}});
		
	});
	
	
	$('abbr').mouseout(function(){
			
		$(this).next('.tooltip').remove();				

	});	
	
});
