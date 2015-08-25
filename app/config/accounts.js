Accounts.onCreateUser(function(options, user) {
    user.profile['first_name'] = options.first_name;
    user.profile['last_name'] = options.last_name;
    user.profile['activity'] = options.activity;
    return user;
});
