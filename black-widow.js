// Function #2: Black Widow.

// Dependencies: Mention of the form name while implenting the function. 
// Description: Send data from a HTML Form To Server Backend.
// USP: Using this function you can trigger any form from anywhere of the screen, even outside the form.

// Usage: 
// <form id="form1"><input id="phone" name="phone" value="0987654321" /><button type="button" onClick="black_widow('form1');" id="submitb" name="submitb" value="Save" /></form>
// Clicking on the above Save Button "submitb" will post all the variable information in form Form1 to the URL specified inside the function.


// Syntax:
// -------

function black_widow(former) {
	
var datetime = new Date().today() + " @ " + new Date().timeNow();

console.log('Black Widow Started at ' + datetime);   

$("#preloader").show();

var a2 = String(former);

// console.log(a2);
jQuery.ajax({

url: "core/backend/processor.php",

type: "POST",

data: $("#"+a2).serialize(),
    
   
     
success:function(data){

    $("#preloader").hide();


$("#response_block").html(data);

},

error:function (){}

});
console.log('Black Widow Transmission Ended at ' + datetime);

}