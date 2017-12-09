

var app = {
  
};
// console.log(this);
app.init = function () {
  //event listeners here
  // //use .fetch to get messages
  // //create new instance for each message ?
  // window.messages = [];
  // $('.username').on('click', function (event) {
  //   var message = this.send(message);
  //   $('body').append(fetch(message));
  // });  
  this.handleUsernameClick();
  this.handleSubmit();
};


app.server = 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages';


app.send = function (message) {
  //need to jquery this ish
  // message = {
  //   username: this is the name input that pops up when a user starts the page
  //   text: should retrieve text that is inputted when the submit button is clicked
  //   roomname = the chatroom that is selected in the dropdown menu
  // }
// call send on our message when the submit button is clicked
//so basically need to connect "clicking" the "submit" button with app.send(message);
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: this.server,
    type: 'POST',
    data: message,
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.fetch = function (message) {
  $.ajax({
    url: this.server,
    type: 'GET',
    data: message,
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.clearMessages = function () {
  $('#chats').empty();
};

app.renderMessage = function () {
  $('#chats').append(message);
};

app.renderRoom = function () {
  //do soemthing here that adds HTML to our select class roomSelect
  
  $('#roomSelect').append(message);
  //on the html, allow the user to create a new chatroom
};

app.handleUsernameClick = function () {
  // $('#main').find('.username').on('click', init);
  // });
};

app.handleSubmit = function() {
  
};

// app.handleUsernameClick = true; //LOLWUT THIS

// app.handleUsernameClick.restore = function () {
//   //LOLWUTTHIS#2
// };