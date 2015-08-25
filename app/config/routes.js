Router.configure({
	layoutTemplate: 'application_layout'
});

Router.route('/',function(){
	this.render('homepage');
});
Router.route('/panel',function(){
	this.render('user_panel');
});
Router.route('/new_comic',function(){
	this.render('new_comic');
});
Router.route('/signin',function(){
	this.render('new_user');
});

