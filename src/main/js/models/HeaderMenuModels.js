var
HeaderMenuModel = Backbone.Model.extend({
}),
HeaderMenuCollection = Backbone.Collection.extend({
	model: HeaderMenuModel,
	url: function(){
		return 'json/headerMenu.json';
	},
	parse: function(response){
		console.log('collection parse');
	}
});
