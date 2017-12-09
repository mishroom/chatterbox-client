// YOUR CODE HERE:

var app = {
  
};
// console.log(this);
app.init = function () {
  //event listeners here
  //use .fetch to get messages
  //create new instance for each message ?
  this.fetch();
};


app.server = 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages';


app.send = function (message) {
  
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

app.fetch = function () {
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
  $('#roomSelect').append(message);
};

app.handleUsernameClick = function () {
  // $('#main').find('.username').on('click', init);
  // });
};

// app.handleUsernameClick = true; //LOLWUT THIS

app.handleUsernameClick.restore = function () {
  //LOLWUTTHIS#2
};