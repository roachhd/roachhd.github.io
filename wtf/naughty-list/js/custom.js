$(document).ready(function() {
		
		$('a.swear').click(function()
		{
			// sort buttons out
			$('a.swear').removeClass('active');
			$(this).addClass('active');
			
			

			$('#'+$(this).attr('data-tab')).addClass('swap');
			$('.slidesSwear div.slide').not('.swap').fadeOut();

			$('#'+$(this).attr('data-tab')).fadeIn();
			$('#'+$(this).attr('data-tab')).removeClass('swap');
			
		});
		$('.clickable').click(function()
		{
			window.location.href = $(this).attr('data-href');
		});
		
		$('#generate').click(function(event)
		{
			//event.preventDefault();
			$('.trees').css('display', 'block');
			$(this).css('display', 'none');
			progress(1);
		});
		
		function progress(stage)
		{
			var limit = 1000;
			$('#hello').fadeIn(500);
			$('#seeya').hide();
			
			if(stage == 1)
			{
				$('#tree1').fadeIn(0);
				stage ++;
			}
			else if(stage == 2)
			{
				$('#tree1').fadeOut(0);
				$('#tree2').fadeIn(0);
				stage++;
			}
			else if(stage == 3)
			{
				$('#tree2').fadeOut(0);
				$('#tree3').fadeIn(0);
				stage ++;
			}
			else if (stage == 4)
			{
				$('#tree3').fadeOut(0);
				stage = 1;
			}
			
			setTimeout(progress, limit, stage);
		}

		twttr.events.bind('tweet',function(event){

	               $('.thanks').fadeIn();
	               
	        });
			
	});
