(function ($) {
    $.fn.boxLoader = function (options) {

        var config = $.extend({
	        direction: "x",
	        position: "-50%",
	        effect: "fadeIn",
	        duration: "1s",
	        windowarea: "50%",
	        container: window
        }, options);

        return this.each(function () {

        var scrollPosition;
        var box = $(this);
        var scrollarea = null;
        var animate_type;
        var original_pos = null;

        original_pos = getPosition(original_pos, config.container, box);
		animate_type = verify_dir(box, config.direction, config.position, animate_type);
		animate_type = verify_effect(box, config.effect, animate_type);
		scrollarea = verify_windowarea(config.windowarea, config.container);
		var animation = verify_animate(box, animate_type, config.duration);

		$( window ).resize(function() {
			original_pos = getPosition(original_pos, config.container, box);
		});


            	$(config.container).scroll(function(e){


					scrollPosition = $(config.container).scrollTop() + scrollarea;

						if (scrollPosition > original_pos )
						{
							animation();

						}
			});

		});

	}


	function verify_dir(element, dir, pos, animate_type){
		
		 if (pos.match(/^[\+\-]?[0-9]{1,3}%{1}$/))
		 {
		 	var number = pos.replace('%','');

		 	if(number >= -100 && number <= 100)
		 	{
		 	}else
		 	{
		 		pos = "-50%";
		 	}

		 }else
		 {
		 	pos = "-50%";
		 };

		switch(dir)
         	{
         		case "x":element.css({
					            WebkitTransform: "translateX("+pos+")",
					            MozTransform: "translateX("+pos+")",
					            OTransform: "translateX("+pos+")",
					            MsTransform: "translateX("+pos+")",
					            Transform: "translateX("+pos+")"
				            });
         					animate_type = "a";
         		break;
         		case "y": element.css({
					            WebkitTransform: "translateY("+pos+")",
					            MozTransform: "translateY("+pos+")",
					            OTransform: "translateY("+pos+")",
					            MsTransform: "translateY("+pos+")",
					            Transform: "translateY("+pos+")"				            					            
				            });
         					animate_type = "b";
         		break;
         		case "none": animate_type = "c";
         		break;

         	}

         	return animate_type;

	}

	function verify_effect(element, eff, animate_type){
		switch(eff)
		{
			case "fadeIn": element.css({
								opacity:0
							});
							animate_type = animate_type + "1";
			break;
			case "none":  animate_type = animate_type + "5";
			break;
		}

			return animate_type;

	}

	function verify_windowarea(windowarea, container){

		if (windowarea.match(/^[\+\-]?[0-9]{1,3}%{1}$/))
		{
			windowarea = windowarea.replace('%','');
			if (windowarea >= -100 && windowarea <= 100)
			{
				scrollarea = (windowarea * $(container).height()) / 100;
			}else
			{
				scrollarea = $(container).height();
			}	
		}
		else
		{
			scrollarea = $(container).height();
		};

		return scrollarea;

	}



	function verify_animate(box, animate_type, dur){

		switch (animate_type){
			//left and opacity
			case "a1": box.css({
						  WebkitTransition: 'transform ' + dur + ', opacity ' + dur,
						  MozTransition: 'transform ' + dur + ', opacity ' + dur,
						  OTransition: 'transform ' + dur + ', opacity ' + dur,
						  MsTransition: 'transform ' + dur + ', opacity ' + dur,
						  Transition: 'transform ' + dur + ', opacity ' + dur					  						  
						});

						return function(){
								box.css({
						            WebkitTransform: 'translateX(0)',
						            MozTransform: "translateX(0)",
						            OTransform: 'translateX(0)',
						            MsTransform: "translateX(0)",
						            Transform: "translateX(0)",			            						            
						            opacity: 1
					            });
							}; 				
			break;
			//left only
			case "a5":  box.css({
						  WebkitTransition:'transform ' + dur,
						  MozTransition:'transform ' + dur,
						  OTransition:'transform ' + dur,
						  MsTransition:'transform ' + dur,
						  Transition:'transform ' + dur					  						  
						});

						return function(){
								box.css({
						            WebkitTransform: 'translateX(0)',
						            MozTransform: 'translateX(0)',
						            OTransform: 'translateX(0)',
						            MsTransform: 'translateX(0)',
						            Transform: 'translateX(0)'
						        });
							};
			break;
			//bottom and opacity
			case "b1": box.css({
						  WebkitTransition:'transform ' + dur +
						  			', opacity ' + dur,
						  MozTransition:'transform ' + dur +
						  			', opacity ' + dur,
						  OTransition:'transform ' + dur +
						  			', opacity ' + dur,
						  MsTransition:'transform ' + dur +
						  			', opacity ' + dur,
						  Transition:'transform ' + dur +
						  			', opacity ' + dur						  								  			
						});

						return function(){
								box.css({
						            WebkitTransform: 'translateY(0)',
						            MozTransform: 'translateY(0)',
						            OTransform: 'translateY(0)',
						            MsTransform: 'translateY(0)',
						            Transform: 'translateY(0)',
						            opacity: 1
						        });
							};
			//bottom only
			case "b5": box.css({
						  WebkitTransition:'transform ' + dur,
						  MozTransition:'transform ' + dur,
						  OTransition:'transform ' + dur,
						  MsTransition:'transform ' + dur,
						  Transition:'transform ' + dur
						});

						return function(){
								box.css({
						            WebkitTransform: 'translateY(0)',
						            MozTransform: 'translateY(0)',
						            OTransform: 'translateY(0)',
						            MsTransform: 'translateY(0)',
						            Transform: 'translateY(0)'
						        });
							};
			break;
			//opacity only
			case "c1": box.css({
						  WebkitTransition:'opacity ' + dur,
						  MozTransition:'opacity ' + dur,
						  OTransition:'opacity ' + dur,
						  MsTransition:'opacity ' + dur,
						  Transition:'opacity ' + dur
						});

						return function(){
								box.css({
						            opacity: 1
						        });
							};
			break;
			//none
			case "c5": box.css({
						  WebkitTransition: 'transform' + dur + ', opacity ' + dur,
						  MozTransition: 'transform' + dur + ', opacity ' + dur,
						  OTransition: 'transform' + dur + ', opacity ' + dur,
						  MsTransition: 'transform' + dur + ', opacity ' + dur,
						  Transition: 'transform' + dur + ', opacity ' + dur
						  	});

						return function(){
								box.css({
						            WebkitTransform: 'translateX(0)',
						            MozTransform: 'translateX(0)',
						            OTransform: 'translateX(0)',
						            MsTransform: 'translateX(0)',
						            Transform: 'translateX(0)',
						            opacity: 1
					            });
							}; 	
			break;
		}

	}

	function getPosition(original_pos, container, element){
		var container_pos = null;

		if (container == window)
        {
        	container_pos = 0;
        }else
        {
        	container_pos = element.parent().offset().top;
        }
        
        original_pos = element.offset().top - container_pos;

        return original_pos;
	}

})(jQuery)

