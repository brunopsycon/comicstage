class ChapterController < ApplicationController
	def edit
		if request.get?
				@chapter = Chapter.find params[:id]
				@comic = @chapter.comic
		end
	end
	def new
		if request.get?
				@comic = Comic.find params[:comic_id]
		end
		if request.post?
			params.permit!
			chapter = Chapter.new params[:chapter]
			chapter.save
			redirect_to edit_comic_path(id: chapter.comic_id)
		end
	end
end
