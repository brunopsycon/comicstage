if(Meteor.isClient){
	Template.registerHelper("user_email",function(){
		return Meteor.user().login;
	});
	
	Template.display.helpers({
		images: function () {
			return Images.find({owner_id: Meteor.userId()}) // Where Images is an FS.Collection instance
		}
	});

	Session.setDefault("counter", 0);

	Template.edit_page.helpers({
		counter: function () {
			return Session.get("Counter");
		}
	});

	Template.edit_page.helpers({
		Uploads: function () {
			return find();
		}
	});
}

