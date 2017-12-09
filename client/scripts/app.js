// YOUR CODE HERE:

var app = {
  
};
// console.log(this);
app.init = function () {
  
};



app.send = function (message) {
  
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
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
    type: 'GET'
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