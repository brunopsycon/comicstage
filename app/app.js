if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
  
   Template.register.events({
        'submit form': function(event) {
            event.preventDefault();
            console.log("Form submitted.");
        }
    });
    
    Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        console.log("Form submitted.");
        }
    });

    Template.login.events({
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = event.target.loginEmail.value;
            var passwordVar = event.target.loginPassword.value;
            console.log("Form submitted.");
        }
    });
    
    Template.register.events({
        'submit form': function(event) {
            event.preventDefault();
            var emailVar = event.target.registerEmail.value;
            var passwordVar = event.target.registerPassword.value;
            Accounts.createUser({
                email: emailVar,
                password: passwordVar
            });
        }
    });
    
    Template.login.events({
        'submit form': function(event){
            event.preventDefault();
            var emailVar = event.target.loginEmail.value;
            var passwordVar = event.target.loginPassword.value;
            Meteor.loginWithPassword(emailVar, passwordVar);
        }
    });
    
    Template.dashboard.events({
        'click .logout': function(event){
            event.preventDefault();
        }
    });
    
    Template.dashboard.events({
        'click .logout': function(event){
            event.preventDefault();
            Meteor.logout();
        }
    });
}

if (Meteor.isServer) {
	Meteor.startup(function () {
	  UploadServer.init({
	    tmpDir: process.env.PWD + '/.uploads/tmp',
	    uploadDir: process.env.PWD + '/.uploads/'
	  })
	});
}
