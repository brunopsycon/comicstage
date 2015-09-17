if (Meteor.isServer){
	Meteor.publish("userData", function () {
	    return Meteor.users.find({_id: this.userId},
	        {fields: {'other': 1, 'things': 1}});
	});
}
Meteor.startup(function(){
	//colocar aqui a inicialização do upload
});
if (Meteor.isClient) {
	Meteor.subscribe('userData');
}
