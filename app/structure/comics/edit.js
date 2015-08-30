if(Meteor.isClient){
	Template.edit_comic.events({
		'submit' : function(evt){
			evt.preventDefault();
			var values={
				name : evt.target.name.value,
				genre : evt.target.genre.value,
				visible : evt.target.visible.value,
				description : evt.target.description.value,
				icon_image : evt.target.icon_image.value,
				landscape_image : evt.target.landscape_image.value
			}
			Comics.update(this._id,{$set: values});
		}
	});
}
