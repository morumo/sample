$(function(){
	var main = new MainView(),
		slider = new SliderView();

	slider.listenTo(main, 'click:btn', slider.slidein);
});
var MainView = Backbone.View.extend({
	el: '#wrapper',
	events: {
		'click .btn': 'clickBtn',
		'change input:radio': 'changeRadio'
	},
	clickBtn: function(e){
		this.trigger('click:btn');
	},
	changeRadio: function(e){
		alert('ラジオチェンジ');
	}
});
var SliderView = Backbone.View.extend({
	el: '#slider',
	events: {
		'click .btn': 'clickBtn'
	},
	clickBtn: function(e){
		this.slideout(e);
	},
	slidein: function(e){
		this.$el.addClass('show');
	},
	slideout: function(e){
		this.$el.removeClass('show');
	}
});
