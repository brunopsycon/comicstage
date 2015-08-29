Router.configure({
	layoutTemplate: 'application_layout'
});
Router.route('/',function(){
	this.render('homepage');
});
Router.route('/panel',function(){
	this.render('user_panel');
});
Router.route('/edit_comic',function(){
	this.render('edit_comic');
});
Router.route('/edit_chapter',function(){
	this.render('edit_chapter');
});
Router.route('/edit_page',function(){
	this.render('edit_page');
});
Router.route('/signin',function(){
	this.render('new_user');
});
Router.route('/login',function(){
	this.render('login');
});
Router.route('/display',function(){
	this.render('display');
});

