class Page < ActiveRecord::Base
	belongs_to :chapter
	has_attached_file :image, :default_url => "/images/missing_page_image.png"
	validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
