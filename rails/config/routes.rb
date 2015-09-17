Rails.application.routes.draw do
	root 'info#home'
	
	get		'panel'			=>	'user#panel'
	get		'signin'		=>	'user#signin'
	post	'signin'		=>	'user#signin'
	get		'signup'		=>	'user#signup'
	post	'signup'		=>	'user#signup'
	get		'logout'		=>	'user#logout'
	
	get		'new_comic'		=>	'comic#new'
	post	'new_comic'		=>	'comic#new'
	get		'edit_comic'	=>	'comic#edit'
	get		'delete_comic'	=>	'comic#delete'
	get		'comic/:id'		=>	'comic#read'
	
	get		'new_chapter'	=>	'chapter#new'
	post	'new_chapter'	=>	'chapter#new'
	get		'edit_chapter'	=>	'chapter#edit'
	post	'edit_chapter'	=>	'chapter#edit'
	
	get		'new_page'	=>	'page#new'
	post	'new_page'	=>	'page#new'
	get		'edit_page'	=>	'page#edit'
	post	'edit_page'	=>	'page#edit'
end
