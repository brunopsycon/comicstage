class PageController < ApplicationController
	def new
		if request.get?
				@chapter = Chapter.find params[:chapter_id]
				@comic = @chapter.comic
		end
		if request.post?
			params.permit!
			@page=Page.new params[:page]
			@page.save
			@chapter=@page.chapter
			redirect_to edit_chapter_path(id: @chapter.id)
		end
	end
	def edit
		if request.get?
			@page=Page.find params[:id]
			@chapter=@page.chapter
			@comic=@chapter.comic
		end
		if request.post?
			params.permit!
			(page = Page.find(params[:page][:id])).update(params[:page])
			redirect_to edit_chapter_path(id: page.chapter.id)
		end
	end
end
