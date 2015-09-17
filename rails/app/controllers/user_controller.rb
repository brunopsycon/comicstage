class UserController < ApplicationController
	before_action :check_user,only: [:panel,:edit,:delete]
	include SessionHelper
	def check_user
		if !logged
			redirect_to root_path
		end
	end
	def signin 
		if request.post?
			if User.where(email: params[:user][:email],password: params[:user][:password]).length==1
				reset_session
				session[:email]=params[:user][:email]
				session[:hash]=Digest::MD5.hexdigest params[:user][:password]
				session[:user_id]=User.where(email: params[:user][:email],password: params[:user][:password]).first.id
				redirect_to panel_path
			else
				flash[:error]=['invalid email or password']
			end
		end
	end
	def mailgun_send(message)
		require 'rest-client'
		plain_part = message.multipart? ? (message.text_part ? message.text_part.body.decoded : nil) : message.body.decoded
		html_part = message.html_part ? message.html_part.body.decoded : nil
		RestClient.post "https://api:#{ENV["MAILGUN_API_KEY"]}"\
		"@api.mailgun.net/v3/#{ENV['MAILGUN_DOMAIN']}/messages",
		:from => ENV['EMAIL_CONTACT'],
		:to => message.to,
		:subject => message.subject,
		:html => html_part,
		:text => plain_part
	end
	def forgot
		if request.post?
			 if @user = User.where(email: params[:email]).first
			 	begin
					@user.update(password: SecureRandom.hex(8))
					mailgun_send Mailer.forgot(params[:email],User.find_by(email: params[:email]).password)
					flash[:info]=['an new password will be sent to your email']
					redirect_to forgot_path	
				rescue Net::SMTPAuthenticationError, Net::SMTPServerBusy, Net::SMTPSyntaxError, Net::SMTPFatalError, Net::SMTPUnknownError,Net::OpenTimeout => e
					flash[:error]=['an error ocurred while sending you password to your email, try again later']
					redirect_to forgot_path
				end
			else
				flash[:error]=['there is no user registred with this email in our databases']
				redirect_to forgot_path
			end
		end
	end
	def logout
		reset_session
		redirect_to root_path
	end
	def signup
		if request.post?
			params.permit!
			@user = User.new(params[:user])
			@user.activity="USER"
			@user.password=SecureRandom.hex(8)
			if !@user.valid?
				flash[:error]=@user.errors.full_messages
				redirect_to signup_path
			else
				begin
					#mailgun_send Mailer.welcome(@user)
					@user.save
					redirect_to signin_path
				rescue Net::SMTPAuthenticationError, Net::SMTPServerBusy, Net::SMTPSyntaxError, Net::SMTPFatalError, Net::SMTPUnknownError => e
					flash[:error] = ["An error ocurred with your email."]
					redirect_to signup_path
				end
			end
		end
	end
	def panel
	end
end
