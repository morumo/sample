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
	}
});
