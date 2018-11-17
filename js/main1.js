$(document).ready(function(){
    $("#bold").click(function(){
        $("#text1").toggleClass("mystyle");
    });
});
$(document).ready(function(){ 
    $("#italic").click(function(){
        $("#text1").toggleClass("mystyle1");
         });
          });
    
$(document).ready(function(){
    $("#underline").click(function(){
        $("#text1").toggleClass("mystyle3");

    });
});

$("#mySelect").change(function() {
    var type = $( "#mySelect option:selected" ).text();
    if (type == "Arial"){
        $("#text1").css("fontFamily", "Arial, Helvetica, sans-serif");   
   }else if (type == "courrier") {
    $("#text1").css("fontFamily", "'Courier New', Courier, monospace");  
   }
   else if (type == "franklin") {
    $("#text1").css("fontFamily", "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"); 
   }
   else if (type == "Times") {
    $("#text1").css("fontFamily", "'Times New Roman', Times, serif");
   }
});

    $("#mySelect2").change(function(){ 
        var type = $( "#mySelect2 option:selected" ).text();
        if (type == "15px"){ 
        $("#text1").css("fontSize","15px");
        }
        else if (type =="20px"){ 
            $("#text1").css("fontSize" ,"20px");
        }
        else if(type =="1em"){
            $("#text1").css("fontSize","1em");
        }
        else if(type =="2em"){
            $("#text1").css("fontSize","2em");
        }
     });

    

    var array = ["black", "green"];
    var i = 0;
    
    setInterval(function repeat() {
      i++;
      if (i > 2) {
        i = 0;
      }
      $("#titre").css("color",array[i]);
    }, 1000);
