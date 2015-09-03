if (Meteor.isClient){
	Template.edit_chapter.helpers({
		pages: function(chapter_id){
			return Page.find({chapter_id: chapter_id})
		},
		form_data :function(){
			return [
				{form_name: 'name',label_text: 'name',form_type:'text'},
				{form_name: 'visible',label_text: 'visible',form_type:'checkbox'},
				{form_name: 'description',label_text: 'description',form_type:'text'},
				{form_name: 'cover_image',label_text: 'cover image',form_type:'text'},
			];
		}

	});
}
