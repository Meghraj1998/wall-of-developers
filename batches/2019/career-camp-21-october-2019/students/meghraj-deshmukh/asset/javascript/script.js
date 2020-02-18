
var e=document.getElementById('exe');
var btn33=document.getElementsByClassName("autoColor");
 
 
 
var tar=1300;

    
   //e.addEventListener('click', chk);
                      
   

var e=document.getElementById('exe');
 
var cur=0;
var tar=1300;

    
   e.addEventListener('click', chk);
                      
       
      function chk()
{
    
 let cur=50;
 
     var sc=setInterval(function(){
                      
                      if(cur>=tar)
       {
           clearInterval(sc);
           return;
       }
       cur+=50;
       window.scrollBy(0,50);
   },70);
                      
                   
       
}



//var btn=document.getElementById('skillbtn');
 

  //btn.addEventListener('click', btnf);


function btnf()
{
    var px=0;
    var i=0;
    var pxt=100;
    
    
 
    
     
     
  
    
    
    var sc=setInterval(function(){
                      
                      if(px>=pxt)
       {
           clearInterval(sc);
           return;
       }else
           {
                 px+=10;
                 for(let i=0;i<6;i++)
          btn33[i].style.width=px + 'px';
           }
 
   },50);
    
    
    
}
         


     var chk=false;
window.addEventListener("wheel", function() {
   //alert(window.pageYOffset);
    var y=window.pageYOffset;
     console.log(y);
    if(y>400)
        {
               if(!chk) 
               btnf();
            chk=true;
        }else if(y==0 || y<700)
            {
                
             console.log(y);
             
          btn33[0].style.width="0px";
                 chk=false;
               
                
            }
   
   
});



         



/*var btn=document.getElementById('skillbtn');
 

  btn.addEventListener('click', btnf);


function btnf()
{
    var px=0;
    var i=0;
    var pxt=100;
    
    
 
    
    var btn33=document.getElementsByClassName("fifty-percent");
 
    
 
    
      
    
 
    
    
    
    var sc=setInterval(function(){
                      
                      if(px>=pxt)
       {
           clearInterval(sc);
           return;
       }else
           {
                 px+=10;
                  var btn33=document.getElementsByClassName("fifty-percent");
          btn33[0].style.width=px + 'px';
           }
 
   },50);
    
    
    
}
         


     var chk=false;
window.addEventListener("wheel", function() {
   //alert(window.pageYOffset);
    var y=window.pageYOffset;
     console.log(y);
    if(y>700)
        {
               if(!chk)
               btnf();
            chk=true;
        }else if(y==0 || y<700)
            {
                
             console.log(y);
          btn33[0].style.width="0px";
                 chk=false;
               
                
            }
   
   
});

*/

         
