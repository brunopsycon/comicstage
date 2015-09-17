class Comic < ActiveRecord::Base
	belongs_to :user
	has_many :chapters, dependent: :destroy
	has_attached_file :cover, :styles => { :normal => "960x593", :half => "460x284" }, :default_url => "/images/missing_comic_cover.png"
	validates_attachment_content_type :cover, :content_type => /\Aimage\/.*\Z/
	has_attached_file :icon, :styles => { :col1 => "60x60", :col3 => "220x220" }, :default_url => "http://placehold.it/60x60"#"/images/missing_comic_icon.png"
	validates_attachment_content_type :icon, :content_type => /\Aimage\/.*\Z/
end
