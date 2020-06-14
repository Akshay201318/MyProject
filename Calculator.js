var dis="";
var ac=document.getElementById('btn16');
ac.addEventListener('click', function(){
    document.getElementById('d-para').innerText="0";
    dis="";
});
var inde=document.getElementById('btn17');
var f=true;
inde.addEventListener('click',function(){
    if(f==true)
    {
        dis="";
        dis="+"+dis;
        document.getElementById('d-para').innerText=dis;
        f=false;
    }
    else if(f==false)
    {
        dis="";
        dis="-"+dis;
        document.getElementById('d-para').innerText=dis;
        f=true;
    }
});
var one=document.getElementById('btn9');
one.addEventListener('click', function(){
    dis=dis+"1";
    document.getElementById('d-para').innerText=dis;
    
});
var two=document.getElementById('btn10');
two.addEventListener('click', function(){
    dis=dis+"2";
    document.getElementById('d-para').innerText=dis;
    
});
var three=document.getElementById('btn11');
three.addEventListener('click', function(){
    dis=dis+"3";
    document.getElementById('d-para').innerText=dis;
    
});
var minus=document.getElementById('btn12');
minus.addEventListener('click', function(){
    dis=eval(dis);
    dis=dis+" "+"-";
    document.getElementById('d-para').innerText=dis;
    
});
var zero=document.getElementById('btn13');
zero.addEventListener('click', function(){
    dis=dis+"0";
    document.getElementById('d-para').innerText=dis;
    
});
var dot=document.getElementById('btn14');
dot.addEventListener('click', function(){
    dis=dis+".";
    document.getElementById('d-para').innerText=dis;
    
});
var equal=document.getElementById('btn15');
equal.addEventListener('click', function(){
    var cal=eval(dis);
    dis=cal;
    document.getElementById('d-para').innerText=dis;
    
});
var mod=document.getElementById('btn18');
mod.addEventListener('click', function(){
    dis=eval(dis);
    dis=dis+" "+"%";
    document.getElementById('d-para').innerText=dis;
    
});
var mul=document.getElementById('btn19');
mul.addEventListener('click', function(){
    dis=eval(dis);
    dis=dis+" "+"*";
    document.getElementById('d-para').innerText=dis;
    
});
var seven=document.getElementById('btn1');
seven.addEventListener('click', function(){
    dis=dis+"7";
    document.getElementById('d-para').innerText=dis;
    
});
var eight=document.getElementById('btn2');
eight.addEventListener('click', function(){
    dis=dis+"8";
    document.getElementById('d-para').innerText=dis;
    
});
var nine=document.getElementById('btn3');
nine.addEventListener('click', function(){
    dis=dis+"9";
    document.getElementById('d-para').innerText=dis;
    
});
var div=document.getElementById('btn4');
div.addEventListener('click', function(){
    dis=eval(dis);
    dis=dis+" "+"/";
    document.getElementById('d-para').innerText=dis;
    
});
var four=document.getElementById('btn5');
four.addEventListener('click', function(){
   
    dis=dis+"4";
    document.getElementById('d-para').innerText=dis;
    
});
var five=document.getElementById('btn6');
five.addEventListener('click', function(){
    
    dis=dis+"5";
    document.getElementById('d-para').innerText=dis;
    
});
var six=document.getElementById('btn7');
six.addEventListener('click', function(){
   
    dis=dis+"6";
    document.getElementById('d-para').innerText=dis;
    
});
var plus=document.getElementById('btn8');
plus.addEventListener('click', function(){
    dis=eval(dis);
    dis=dis+" "+"+";
    document.getElementById('d-para').innerText=dis;
    
});

document.addEventListener("keydown", function(event){
    if(event.keyCode==13)
    {
        cal=eval(dis);
        dis=cal;
        document.getElementById('d-para').innerText=dis;

    }
    else if(event.keyCode==48)
    {
        dis=dis+"0";
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.keyCode==49)
    {
        dis=dis+"1";
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.keyCode==50)
    {
        dis=dis+"2";
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.keyCode==51)
    {
        dis=dis+"3";
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.keyCode==52)
    {
        dis=dis+"4";
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.keyCode==53)
    {
        dis=dis+"5";
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.keyCode==54)
    {
        dis=dis+"6";
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.keyCode==55)
    {
        dis=dis+"7";
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.keyCode==56)
    {
        dis=dis+"8";
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.keyCode==57)
    {
        dis=dis+"9";
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.key=="+")
    {
        cal=eval(dis);
        dis=cal;
        dis=dis+" "+"+";
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.keyCode==189)
    {
        cal=eval(dis);
        dis=cal;
        dis=dis+" "+"-";
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.key=="*")
    {
        cal=eval(dis);
        dis=cal;
        dis=dis+" "+"*";
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.keyCode==191)
    {
        cal=eval(dis);
        dis=cal;
        dis=dis+" "+"/";
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.key=="%")
    {
        cal=eval(dis);
                dis=cal;
        dis=dis+" "+"%";
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.keyCode==187)
    {
        cal=eval(dis);
        dis=cal;
    document.getElementById('d-para').innerText=dis; 
    }
    else if(event.keyCode==8)
    {
        dis=" ";
    document.getElementById('d-para').innerText="0"; 
    }
    else if(event.key==".")
    {
        dis=dis+".";
    document.getElementById('d-para').innerText=dis; 
    }
   
    
});

