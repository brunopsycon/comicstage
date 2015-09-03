if (Meteor.isClient){
	Template.edit_chapter.helpers({
		pages: function(chapter_id){
			return Page.find({chapter_id: chapter_id})
		}
	});
}
