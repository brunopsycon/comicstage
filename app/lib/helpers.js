if(Meteor.isClient){
	Template.registerHelper("user_email",function(){
		return Meteor.user().login;
	});
}
