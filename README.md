# The Dilip Aich Effect
 This snippet helps developers to recieve and send data using Html Elements other than the form, like the Div, H1, or basically any HTML Element.

 To make it fun, I have made the snippets using MCU Characters & Each Name denotes the power of the function.
 Altogether they are the same functions in different format. But certainly made my life as a developer easier.

 Include a Jquery Library for this to work seamlessly.
<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>


Function #1: Tony.

Dependencies: Prefixed Variables Like Prot, Clot can be used to transmit data from frontend to backend.

Usage: 
<div id="block1" prot="Hello" clot="This" rot="Is" peer="A List" brad=" Of All Variables" pitt="Set In The Tony Function." onClick="tony(this);">
 Some Sample Contents.
 </div>
Clicking on the above DIV block1 will send all the variable information to the URL specified in the function.




Function #2: Black Widow.

Dependencies: Mention of the form name while implenting the function. 
Description: Send data from a HTML Form To Server Backend.
USP: Using this function you can trigger any form from anywhere of the screen, even outside the form.

Usage: 
<form id="form1"><input id="phone" name="phone" value="0987654321" /><button type="button" onClick="black_widow('form1');" id="submitb" name="submitb" value="Save" /></form>
Clicking on the above Save Button "submitb" will post all the variable information in form Form1 to the URL specified inside the function.



Function #3: Thor.

Dependencies: Mention of the form name while implenting the function. 
Description: Send files data from a HTML Form To Server Backend.
USP: Using this function you can trigger any file form from anywhere of the screen, even outside the form.

Usage: 
<form id="form1"><input id="phone" name="phone" value="0987654321" /><input id="filee" name="filee" type="file" /><button type="button" onClick="thor('form1');" id="submitb" name="submitb" value="Save" /></form>
Clicking on the above Save Button "submitb" will post all the variable information in form Form1 to the URL specified inside the function.
