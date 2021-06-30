const transition = require('transitionjs')
   
// function typeTransition(){
//       if(isTizenOS()){
//       // return "-webkit-transform";
//       }
      
//       return "transform";
// }
    
export const fadeInElement = (element, opFrom, opTo, opS) => {
	console.log(element)
	if(element.style.display !== ''){
		transition.begin(element, ['opacity', opFrom, opTo, opS], {
			onBeforeChangeStyle: function(element) {
				element.style.display = ''
			},
			onAfterChangeStyle: function() {
			},
			onTransitionEnd: function() {
                  
			}
		})
	}
}

export const fadeOutElement = (element, opFrom, opTo, opS) => {
	if(element.style.display !== 'none'){
		transition.begin(element, ['opacity', opFrom, opTo, opS], {
			onBeforeChangeStyle: function() {
			},
			onAfterChangeStyle: function(){
			},
			onTransitionEnd: function() {
				element.style.display = 'none'
			}
		})
	}
}
