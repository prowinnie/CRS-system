$(document).ready(function(){
   
   			$('.dropdown').mouseenter(function(){
                          
				if(!$('.navbar-toggle').is(':visible')) { // disable for mobile view
					$('.dropdown a').mousedown(function(e){ window.location = $(this).attr('href'); });
					if(!$(this).hasClass('open')) { // Keeps it open when hover it again
						$('.dropdown-toggle', this).trigger('click'); 
					}
				}
			});
			
			$('.dropdown').mouseleave(function(){
				$(this).removeClass('open');
			});
                        
		});
                
                
                