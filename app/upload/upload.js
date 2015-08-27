var imageStore = new FS.Store.FileSystem("images", {
  path: "~/comicstage/app/uploaded_images", //optional, default is "/cfs/files" path within app container
  maxTries: 3 //optional, default 5
});

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
			Images.insert(fileObj, function (err){
				console.log(err);
			})	
		})
	}
	});
}
