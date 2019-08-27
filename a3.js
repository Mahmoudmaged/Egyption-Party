

/*Start section1 home*/
var x=1;
$(".opn").click(function(){
 
    if(x==1)
        {
          
  $(".navhome").animate({left:'0%'},500);
    $(".opn").animate({left:'16%'},500); 
               x++
        }
    else{
         $(".navhome").animate({left:'-30%'},500);
        $(".opn").animate({left:'1%'},500);
        x--
    }

      
  

})

$(".nav1").click(function(){
    $(".navhome").animate({left:'-30%'},500);
    $(".opn").animate({left:'1%'},500);
})



/*Endsection1 home*/

 /*Start section2 Details*/


$(".singer ").click(function(){
    
  
    $(this).find("p").slideToggle(300);
    $(this).siblings().find("p").slideUp(300);
   
})
 /*End section2 Details*/


 /*Start section3 Duration*/
  $("#getting-started")
  .countdown("2019/09/13",function(event) {
    $(".day").text(
      event.strftime('%D -D ')
    );
    $(".hour").text(
      event.strftime('%H -h')
    );
    $(".min").text(
      event.strftime('%M -m')
    );
    $(".second").text(
      event.strftime('%S -s')
    );
  });
 /*End section3 Duration*/




var count=100;
$("#char").text(count);
 $(".form").keydown(function(e){
    

     var keycode=e.keyCode;
        
         if (keycode == 8 && count < 100)
              {
                  
                 count++;
                  $("#char").text(count);
                 console.log(count);
                  
             } 
        else if(keycode != 8 && count >0 )
        {
                count--;
            $("#char").text(count);
                console.log(count);
           
         }
    else
         {

              $("#char").text(0);
         }
     
     
     

 })


