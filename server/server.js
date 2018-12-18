var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var otherTodo = new Todo({
//     text: true
// });

// otherTodo.save().then((doc) => {
//     console.log('Saved todo', JSON.stringify(doc, undefined, 2));
// }, (error) => {
//     console.log('Unable to save todo', error);
// });

var User = mongoose.model('User', {
    email: {
        required: true,
        trim: true,
        type: String,
        minlength: 1
    }
});

var user = new User({
    email: 'dillsandrew@gmail.com    '
});

user.save().then((doc) => {
    console.log('Saved todo', JSON.stringify(doc, undefined, 2));
}, (error) => {
    console.log('Unable to save todo', error);
});

// User
// email property - require it - trim - type = string - minlength: 1