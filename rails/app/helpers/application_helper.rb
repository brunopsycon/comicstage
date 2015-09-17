module ApplicationHelper
	def javascript_exists?(script)
		script = "#{Rails.root}/app/assets/javascripts/#{params[:controller]}.js"
		File.exists?(script) || File.exists?("#{script}.coffee") 
	end
	def css_exists?(css)
		css = "#{Rails.root}/app/assets/stylesheets/#{params[:controller]}.css"
		File.exists?(css)
	end
end
