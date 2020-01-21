$(document).ready(function() {
  $("#favorite").submit(function(event) {
    var array1 = [$('#userThing1').val(), $('#userThing2').val(), $('#userThing3').val()];
    //console.log(userThing1, userThing2, userThing3);
    //console.log(array1)

    $("#output").show();
    $("#userThing").text(array1);
    event.preventDefault();
  });
});

//  var favorite = ['userThing1','userThing2', 'userThin3']