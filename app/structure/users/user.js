if (Meteor.isClient){
	Template.user_comics.helpers({
		comics: function(){
			return [
				{name: 'teste'},
				{name: 'bruno'},
				{name: 'loko'}
			];
		}
	});
}
