if (Meteor.isClient){
	Template.user_comics.helpers({
		comics: function(){
			return Images.find({owner_id: Meteor.userId()});
		}
	});
}
