Router.route('/', {
  name: 'home'
});
Router.route('/panel', {
  name: 'panel',
  controller: 'PanelController'
});
Router.plugin('ensureSignedIn', {
  only: ['panel']
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
Router.route('/display',function(){
	this.render('display');
});

