// Create User View Class
var CreateUserView = Backbone.View.extend({
	initialize: function(event) {
		this.userCollection = new UserCollection();
		this.userCollection.fetch();
		this.usernameField = this.$('input[name="username"]');
		this.nameField = this.$('input[name="name"]');
		this.phonenumberField = this.$('input[name="phonenumber"]');
	},
	tagName: 'form',
	className: 'x-create-user-form',
	events: {
		'click .x-create-user-btn': 'createUser' 
	},
	createUser: function(event) {
		var inputUserName = this.usernameField.val();
		var inputName = this.nameField.val();
		var inputPhonenumber = this.phonenumberField.val();

		user = new UserModel({
			username: inputUserName,
			name: inputName,
			phonenumber: inputPhonenumber
		});

		this.userCollection.add(user);
		console.log(this.userCollection);
	}
});

$(document).ready(function() {
	var createView = new CreateUserView({el: $('.x-create-user-form')});
	console.log(createView);
});