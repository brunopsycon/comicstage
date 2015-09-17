if(Meteor.isClient){
	Template.user_panel.events({
		'click #new_comic': function(event){
			Comics.insert({user_id: Meteor.userId(), name: "blank comic"});
		}
	});
	Template.user_panel.helpers({
		comics: function(){
			return Comics.find({user_id: Meteor.userId()});
		}
	});
}

