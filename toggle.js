var btn=document.getElementById('btn');
var t=true;
btn.addEventListener('click',function(){
    if(t==true)
    {
        document.getElementById('main').style.backgroundColor="black";
        document.getElementById('btn').style.border="0px";
        document.getElementById('para').style.color="white";
        document.getElementById('inner').style.marginLeft="70%";
        document.getElementById('inner').style.marginRight="-3px";
        document.getElementById('inner').style.marginTop="2px";
        document.getElementById('inner').style.height="2.5rem";
        document.getElementById('inner').style.width="30%";
        t=false;
    }
    else if(t==false)
    {
        document.getElementById('main').style.backgroundColor="white";
        document.getElementById('btn').style.border="2px solid black";
        document.getElementById('para').style.color="black";
        document.getElementById('inner').style.marginLeft="-3px";
        document.getElementById('inner').style.marginTop="0px";
        t=true;
    }
    
});