$(document).ready(function() {
  $("#favorite").submit(function(event) {
    var userThing1 = $('#userThing1').val();
    var userThing2 = $('#userThing2').val();
    var userThing3 = $('#userThing3').val();
    var array1 = [userThing1, userThing2, userThing3];
    //console.log(userThing1, userThing2, userThing3);
    //console.log(array1)

    $("#output").show();
    $("#userThing").text(array1);
    event.preventDefault();
  });
});

//  var favorite = ['userThing1','userThing2', 'userThin3']