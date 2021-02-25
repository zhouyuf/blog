/* 导航栏固定 */
var scroll = 0;
window.addEventListener('scroll',function(){
	var temp = document.documentElement.scrollTop;
	var header = document.getElementsByClassName('toolBar')[0];
	// console.log(document.documentElement.scrollTop);
	if(document.documentElement.scrollTop<400) return;
	if(scroll<temp){
		console.log('down');
		scroll = temp;
		header.classList.remove('topFadeIn');
		header.classList.add('topFadeOut');
	}else{
		scroll = temp;
		header.classList.remove('topFadeOut');
		header.classList.add('topFadeIn');
	}
})
window.onload = function(){
	/* 搜索框 */
	var search = document.getElementById('search');
	search.onfocus = function(){
		this.classList.add('onblur');
		if(this.value == '搜索...'){
			this.value = '';
		}
	}
	search.onblur = function(){
		this.classList.remove('onblur');
		if(this.value == ''){
			this.value = '搜索...';
		}
	}
};