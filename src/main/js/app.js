$(function(){
	var main = new MainView(),
		slider = new SliderView();

	slider.listenTo(main, 'click:btn', slider.slidein);
});
