var Todo = Backbone.Model.extend({

	// initialize: function () {
	// 	console.log('Task Created!');
	// },

	idAttribute: '_id', //MEGA important.

	defaults: {
		title: '',
		completed: false

	},

	// toggle: function () {
	// 	this.save({
	// 		completed: !this.get('completed')
	// 	});
	// }

});

var Todos = Backbone.Collection.extend({


	// initialize: function () {
	// 	console.log('Collection Created');
	// },

	model: Todo,
	url: 'http://tiy-atl-fe-server.herokuapp.com/collections/daneTodo',

});

//jquery

var todos = new Todos;
var todoForm = $('#main');
var todoList = $('#todo-list');





todoForm.on('keydown', 'input', function(e) {
  if(e.keyCode == 13) {
    e.preventDefault();
    
    var newTask = new Task( { task: $(this).val() });
    if (newTask === '') { return; }
    
    todos.add(newTask);
    newTask.save();
    
    $(this).val('');
  }
});


//instances

// var allTasks = new Todos();

// allTasks.fetch().done( function () {
// 	console.log('Tasks Fetched');
// });

//tasks
todos.fetch();

// var a = new Task ({ name: 'Spencer' });
// var b = new Student ({ name: 'Alex' });
// var c = new Student ({ name: 'Mark' });
