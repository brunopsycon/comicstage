if (Meteor.isClient){
	Template.user_comics.helpers({
		comics: function(user_id){
			return Comics.find({user_id:user_id})
		}
	});
}
