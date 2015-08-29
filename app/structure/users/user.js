if (Meteor.isClient){
	Template.user_comics.helpers({
		comics: function(){
			return [
				{name: 'naruto', description: 'ninja mto loko'},
				{name: 'dbz', description: 'lutas lokas'}
			]

		}
	});
}
