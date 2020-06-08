var c="";
function check(callback){
   
    
        var username=document.getElementById("username");
        var password=document.getElementById("passwords");
        if(username.value=='admin' && password.value=='12345'){
            $("#msg2").text("");
            $("#msg").text("");
            $("#ch,#ch2").css({"visibility":"visible","color":"green"});
            $("#ex,#ex2").css({"visibility":"hidden"});
           c=0; 
        }
        else if(username.value=='admin' && password.value!='12345'){
        
       // alert("invalid pass");
       // document.getElementById("msg2").innerHTML="*invalid password";
       $("#msg2").text("*Invalid Password!");
       $("#msg").text("");
       $("#ch").css({"visibility": "visible", "color": "green"});
       $("#ex2").css({"visibility": "visible", "color": "red"});
       $("#ch2,#ex").css({"visibility":"hidden"});
        c++;
       
        }
        else if(username.value!='admin' &&  password.value=='12345'){
       
        $("#msg").text("*Invalid Username!"); 
        $("#msg2").text("");
        ex.style.visibility = "visible";
        ex.style.color="red";
        $("#ex").css({"visibility": "visible", "color": "red"});
        $("#ch2").css({"visibility": "visible", "color": "green"});
        $("#ch,#ex2").css({"visibility":"hidden"});
        c++;
        }
        else
        {   
            $("#msg").text("*Invalid Username!"); 
            $("#msg2").text("*Invalid Password!");
            $("#ex,#ex2").css({"visibility": "visible", "color": "red"});
            $("#ch,#ch2").css({"visibility":"hidden"});
            c++;
        }
      
        callback();
        return false;
    
}

function logincheck(){
 if(c>0){
     //alert("call back in ");
     return false;
     
 }
 if(c==0){
   // alert("call backk");
    window.location = "todolist.html"
     //return true;
 }
}