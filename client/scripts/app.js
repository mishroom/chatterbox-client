var app = {

};
// console.log(this);//window

// this.init();
app.init = function () {
  
  //event listeners here
  // //use .fetch to get messages
  // //create new instance for each message ?
  // window.messages = [];
  // $('.username').on('click', function (event) {
  //   var message = this.send(message);
  //   $('body').append(fetch(message));
  // });  
  this.fetch();
  $('#message').on('submit', function(event) {
    console.log(app);
    event.preventDefault();
    app.handleSubmit();
  });
  // $().on('click', this.handleUsernameClick());
  // this.handleSubmit();
  
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
    url: app.server,
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
  console.log("hi");
  $.ajax({
    url: app.server,
    type: 'GET',
    data: message,
    data: {order: "-createdAt", limit: 10},
    contentType: 'application/json',
    
    success: function (data) {
      // console.log(data);
      for (var i = 0; i < data.results.length; i++) {
       
        app.renderMessage(data.results[i]);
      }
      console.log('chatterbox: Messages loaded');
    },
    error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to load messages', data);
    }
  });
};

app.clearMessages = function () {
  $('#chats').empty();
};

app.renderMessage = function (message) {
  var renderedMessage = document.createElement('div');
  // renderedMessage.addClass("username");
  var user = document.createTextNode(message.username);
  var text = document.createTextNode(message.text);
  renderedMessage.appendChild(user);
  renderedMessage.appendChild(text);
  // console.log('in render', renderedMessage);
  $('#chats').append(renderedMessage);
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

app.handleSubmit = function(input) {
  // $(".button").on('click', function () {
  var input = document.getElementsByClassName("chatbox")[0];
  //   console.log("inside handleSubmit",input.value);
  // this.send(input);
  // });
  var form = $('#message').submit(function() {
    var $inputs = $('#message :input');
    $inputs.each(function() {
      values[this.name] = $(this).val();
    });
  });
  // var text = document.getElementByClassName('chatbox');
     console.log("form", form);
  // var username = document.getElementByClassName;
  var message = {
    'text': input,
    'user': 'lara',
    'roomname': 'lobby'
  };
  // app.send(message);
};




// app.handleUsernameClick = true; //LOLWUT THIS

// app.handleUsernameClick.restore = function () {
//   //LOLWUTTHIS#2
// };