var imageStore = new FS.Store.FileSystem("images");

Images = new FS.Collection("images", {
  stores: [imageStore]
});

if (Meteor.isClient) {		
	Template.new_comic.events({
	'click button': function() {
		Session.set("counter",Session.get("counter") +1);
	},
	'change .fileInput': function(event, template) {
		FS.Utility.eachFile(event, function(file){
			var fileObj = new FS.File(file);
			fileObj["owner_id"]=Meteor.userId();
			Images.insert(fileObj, function (err){
				console.log(err);
			})	
		})
	}
	});
}
