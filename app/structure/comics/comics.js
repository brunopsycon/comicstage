if (Meteor.isClient){
	Template.edit_comic.helpers({
		chapters: function(comic_id){
			return Chapter.find({comic_id: comic_id});
		}
	});
}
