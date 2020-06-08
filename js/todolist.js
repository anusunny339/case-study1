function ajax(){
    //creating xml object
    var xhttp= new XMLHttpRequest();
    //even listener
    xhttp.onreadystatechange= function()
    {
        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
         //  alert(response.length);
           res1=response.length; 
            var output="<h2>Todo List </h2><br><table class='table  table-striped table-hover active-animation'><tr><th> NO</th><th>TITLE</th></tr>"
            
            for(var i=0;i<res1;i++){
                var id=i+1;
               completed=response[i].completed;
                
            output +="<tr><td>"+id+"</td><td>"+response[i].title+"</td>";
            
            if(completed==true){
              //  console.log(completed);
                output+="<td><input type='checkbox' id='chk2' checked></td></tr>";
            }
            else{
                output+="<td><input type='checkbox' id='chk1' onchange='doalert(this);'></td></tr>";   
            }
          
        }
            output +="</table>";
           // console.log(output)
           document.getElementById("demo").innerHTML=output;
          
        }
    
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }


    var count=0;
    function doalert(checkboxElem) {
     
        if (checkboxElem.checked) {
          //alert ("hi");
          count++;
        } else {
         // alert ("bye");
         count--;
        }
       // console.log(count);
       var promise=alertf(count);
      }
    


      function alertf(c){
        var promise=new Promise(function(resolve,reject){
           
            if(c==5){
                resolve("congrats!! 5 tasks have been successfully completed");
            }
            else{
                reject("error :not qeual");
            }
            }
            );
            promise
            .then(function(s){
                alert(s);
            })
            .catch(function(e){
                
            })       
      }