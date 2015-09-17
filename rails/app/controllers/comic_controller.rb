class ComicController < ApplicationController
	before_action :check_owner,only: [:new,:edit,:delete]
	include SessionHelper
	def check_owner
		if !logged
			redirect_to root_path
		end
	end
	def new
		if request.post?
			params.permit!
			if params[:comic][:user_id]!=session_user.id
				redirect_to panel_path
			end
			Comic.create params[:comic]
			redirect_to panel_path
		end
	end
	def edit
		@comic = Comic.find params[:id]
		if @comic.user!=session_user
			redirect_to panel_path
		end
	end
	def delete
	
		@comic = Comic.find params[:id]
		if @comic.user!=session_user
			redirect_to panel_path
		end
		Comic.delete @comic
		redirect_to panel_path
	end
	def read
		@comic=Comic.find params[:id]
	end	
end
