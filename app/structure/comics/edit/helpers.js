if (Meteor.isClient){
	Template.edit_comic.helpers({
		chapters: function(comic_id){
			return Chapter.find({comic_id: comic_id});
		},
		form_data :function(){
			return [
				{form_name: 'name',label_text: 'name',form_type:'text'},
				{form_name: 'genre',label_text: 'genre',form_type:'text'},
				{form_name: 'visible',label_text: 'visible',form_type:'checkbox'},
				{form_name: 'description',label_text: 'description',form_type:'text'},
				{form_name: 'icon_image',label_text: 'icon image',form_type:'text'},
				{form_name: 'landscape_image',label_text: 'landscape image',form_type:'text'}
			];
		}
	});
}
