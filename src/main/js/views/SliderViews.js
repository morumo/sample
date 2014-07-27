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
