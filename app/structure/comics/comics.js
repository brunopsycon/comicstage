if (Meteor.isClient){
	Template.edit_comic.helpers({
		chapters: function(){
			return [
				{name: 'capítulo 1 - a batalha final', description: 'ninja mto loko'},
				{name: 'capítulo 2 - o começo', description: 'lutas lokas'}
			]
		}
	});
}
