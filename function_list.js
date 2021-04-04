// Function #1: tony.

// Dependencies: Prefixed Variables Like Prot, Clot can be used to transmit data from frontend to backend.

// Usage: 
// <div id="block1" prot="Hello" clot="This" rot="Is" peer="A List" brad=" Of All Variables" pitt="Set In The Tony Function." onClick="tony(this);">
// Some Sample Contents.
// </div>
// Clicking on the above DIV block1 will send all the variable information to the URL specified in the function.


// Syntax:
// -------

function tony(e){
// Activate this below only if you want to toggle Preloader during this event. 
// $("#preloader").show();

// Setting Up Variables. Remember, these variables should match the variables being set on the HTML element's end.
     var prot = $(e).attr("prot");

     var clot = $(e).attr("clot");

     var rot = $(e).attr("rot");

     var peer = $(e).attr("peer");

     var brad = $(e).attr("brad");

     var pitt = $(e).attr("pitt");

     jQuery.ajax({

// URL to processing the data. 
     url: "core/backend/processor.php",

    

    data:{ prot: prot, clot: clot, rot: rot, peer: peer, brad: brad, pitt: pitt }, 

    type: "POST",

    success:function(data){

    console.log(data);
//Posting The Response Fetched From The Server After Posting To A Div ID, in this case the DIV ID is "response_block".    
    $('#response_block').html(data);

//Toggle Preloader If Using & Active.    
//  $("#preloader").hide();

//Flushing All Variables
	data= [];
	e= [];
	prot= [];
	clot= [];
	rot= [];
	peer= [];
	brad= [];
	pitt= [];
	},

	
//Error Handling
    error:function (){}

    });   

}
