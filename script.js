main = function(){
  addBySend();
  addByEnter();
  imLonely();
  deleteMessage();
}

addBySend = function() {
  $('#new-message-button').click(function(){
    addToConversation();
  });
}

addByEnter = function() {
  $('#new-message-body').keypress(function(e){
    if(e.which == 13){
      e.preventDefault();
      addToConversation();
    }
  });
}

deleteMessage = function() {
  $('#conversation').on('click', '.delete', function(e){
    e.preventDefault();
    $(this).parent().remove();
  });
}

getTime = function() {
  var time= new Date();
  return time.getHours() + ":" + time.getMinutes();
}

var turn = 0;
userName = function() {
var people = ["Me", "Myself","I"];
return people[turn++ %3];
}

message = function(msg) {
  $('#conversation').append('<li class="message"> <a class="delete" href="#"> Delete </a> <h3 class="author">'+userName()+ '</h3> <p class="message-body">' + msg + '</p><span class="timestamp">' + getTime() +
  '</span> </li>');
}

addToConversation = function() {
  var msg = $('#new-message-body').val();
  $('#new-message-body').val("");
  message(msg)
}

// imLonely = function() {
// $('#lonely').click(function(){
//   chuckAjax();
// });
// }
//
// chuckAjax = function() {
//   $.ajax({
//     url:'https://api.icndb.com/jokes/random',
//     success:function(data){
//       var joke = data.value.joke;
//       message(joke);
//     }
//   });
// }

$(document).on("load ready", main);
