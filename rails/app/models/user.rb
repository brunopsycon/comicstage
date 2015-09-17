class User < ActiveRecord::Base
	has_many :comics, dependent: :destroy
	has_attached_file :avatar, :styles => { :col2 => "140x140", :col4 => "300x300" }, :default_url => "/images/missing_user_avatar.png"
	validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
	has_attached_file :cover, :styles => { :normal => "960x593", :half => "460x284" }, :default_url => "/images/:style/missing_user_cover.png"
	validates_attachment_content_type :cover, :content_type => /\Aimage\/.*\Z/
	def full_name
		return "#{first_name} #{last_name}"
	end
end
