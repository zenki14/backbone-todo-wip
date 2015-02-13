var Task = Backbone.Model.extend({

	initialize: function () {
		console.log('Task Created!');
	},

	idAttribute: '_id', //MEGA important.

	defaults: {
		title: '',
		completed: false
	},

	toggle: function () {
		this.save({
			completed: !this.get('completed')
		});
	}

});

var Todos = Backbone.Collection.extend({


	initialize: function () {
		console.log('Collection Created');
	},

	model: Task,
	url: 'http://tiy-atl-fe-server.herokuapp.com/collections/daneTodo'





});

//instances

var allTasks = new Todos();

allTasks.fetch().done( function () {
	console.log('Tasks Fetched');
});

//tasks


// var a = new Student ({ name: 'Spencer' });
// var b = new Student ({ name: 'Alex' });
// var c = new Student ({ name: 'Mark' });
