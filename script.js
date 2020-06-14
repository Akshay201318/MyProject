var box=document.getElementById("box");
box.style.backgroundColor="red";
var count=0;
box.onclick=function(){
    
        if(count<5)
        {
            count++;
        }
        else{
            document.getElementById("para").innerText="Box Clicked 5 Times";
            document.getElementById("para").style.backgroundColor="green";
            document.getElementById("para").style.color="yellow";
            document.getElementById("main").style.backgroundColor="blue";
            count=0;
        }
         
        
};
var a="";
document.addEventListener("keydown",function(event)
{
    if(event.keyCode==13)
    {
        alert(a);
        var b="";
        a=b;
    }
    else{
        a+=event.key;
        b++;
    }
});