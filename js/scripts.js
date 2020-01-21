$(document).ready(function() {
  $("#favorite").submit(function(event) {
    var array1 = [$('#userThing1').val(), $('#userThing2').val(), $('#userThing3').val()];
    //console.log(userThing1, userThing2, userThing3);
    console.log(array1);
    
    array1.push(array1[2]);
    var array2 = array1.slice();
    console.log(array1);
    console.log(array2);

    $("#output").show();
    $("#userThing").text(array1);
    $("#new").text(array1[2]);
    $("#new2").text(array2);

    event.preventDefault();
  });
});

//  var favorite = ['userThing1','userThing2', 'userThin3']