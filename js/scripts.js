$('#title-changer').click(function() {
  var newTitle = $("title-form").val();
  console.log(newTitle);
  if (newTitle == undefined) {
    alert("Must enter a new title befor it can be changed");
  } else {
    $('#site-header').html(newTitle);
  };
});
