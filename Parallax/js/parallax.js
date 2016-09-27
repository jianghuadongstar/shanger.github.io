function changeSize(){
	var height = document.documentElement?document.documentElement.clientHeight:document.body.clientHeight;
	var section = document.querySelectorAll('.section');
	var sectionAfter = document.querySelectorAll('.sectionAfter')
	for(var i = 0; i<section.length ;i++){
		section[i].style.height = height - document.querySelector('header').offsetHeight +'px';
		sectionAfter[i].style.height = ((section[i].offsetHeight - 100)>500?500:section[i].offsetHeight - 100) +'px';
	}
}
changeSize();
window.addEventListener('resize',changeSize,false);
window.addEventListener('scroll',function(){
	var img = document.querySelector('.section1After').offsetHeight;
	var div = document.querySelector('.section1').offsetHeight;
	var sectionAfterList = document.querySelectorAll('.sectionAfter');
	for(i = 0;i < sectionAfterList.length;i++){
		(function(i){
			sectionAfterList[i].style.backgroundPosition = '100% '+
			(document.body.scrollTop > (div*i+img*i)? document.body.scrollTop -(div*i+img*i):0)
			+'px';
		})(i)
		
	}

},false)
