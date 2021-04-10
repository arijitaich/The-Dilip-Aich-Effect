// Function #3: Thor.

// Dependencies: Mention of the form name while implenting the function. 
// Description: Send data from a HTML Form To Server Backend.
// USP: Using this function you can trigger any form from anywhere of the screen, even outside the form.

// Usage: 
// <form id="form1"><input id="phone" name="phone" value="0987654321" /><input id="filee" name="filee" type="file" /><button type="button" onClick="thor('form1');" id="submitb" name="submitb" value="Save" /></form>
// Clicking on the above Save Button "submitb" will post all the variable information in form Form1 to the URL specified inside the function.


// Syntax:
// -------

function thor(former) {
	
// var datetime = new Date().today() + " @ " + new Date().timeNow();

console.log('Thor Started');   

$("#preloader").show();

var a2 = String(former);

// console.log(a2);
var fd = new FormData();
    var file_data = $('input[type="file"]')[0].files; // for multiple files
    for(var i = 0;i<file_data.length;i++){
        fd.append("file_"+i, file_data[i]);
    }
    var other_data = $("#"+a2).serializeArray();
    $.each(other_data,function(key,input){
        fd.append(input.name,input.value);
    });

    
jQuery.ajax({
    url: 'core/backend/processor.php',
    data: fd,
    contentType: false,
    processData: false,
    type: 'POST',
    success: function(data){
            $("#response_block").html(data);
                    // $("#preloader").hide();

    }

});
console.log('Thor Transmission Ended');

}