module SessionHelper
	def total_time
		60.minutes
	end
	def logged
		return User.where(email: session[:email],id: session[:user_id]).length==1 && (Digest::MD5.hexdigest User.find_by(email: session[:email]).password) == session[:hash]
	end
	def session_user
		if logged
			User.find(session[:user_id])
		else
			nil
		end
	end
end
