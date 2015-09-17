class Chapter < ActiveRecord::Base
	belongs_to :comic
	has_many :pages, dependent: :destroy
	has_attached_file :cover, :styles => { :normal => "960x593", :half => "460x284" }, :default_url => "/images/missing_comic_cover.png"
	validates_attachment_content_type :cover, :content_type => /\Aimage\/.*\Z/
end
