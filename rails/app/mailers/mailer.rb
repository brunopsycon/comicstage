class Mailer < ActionMailer::Base
	default from: "naoresponda@enedmg2015.com.br"
	def welcome(user)
		@user = user
		@url='http://enedmg2015.com.br'
		mail(:to => user.email, :subject => "Seja bem vindo ao ENED 2015!")
	end
	def contact_message(name,email,txt)
		@name=name
		@email=email
		@text=txt
		mail(:to =>  "ened2015dev@bol.com.br", :subject => "Mensagem de #{email}")
	end
	def forgot(email,password)
		@password=password
		@url='http://enedmg2015.com.br'
		mail(:to => email, :subject => "Sua senha do ENED2015")
	end
	
	def log(msg)
		@msg=msg
		mail(:to => 'enedmg2015@gmail.com,ened2015dev@bol.com.br', :subject => "log")
	end

end
