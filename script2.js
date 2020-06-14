var color=document.getElementById('btn1');
var c1=0;
color.addEventListener('click',function(){
    if(c1==0)
    {
        document.getElementById('outer').style.backgroundColor="green";
    }
    else if(c1==1)
    {
        document.getElementById('outer').style.backgroundColor="Yellow";
    }
    else if(c1==2)
    {
        document.getElementById('outer').style.backgroundColor="cyan";
    }
    else if(c1==3)
    {
        document.getElementById('outer').style.backgroundColor="black";
    }
    else if(c1==4)
    {
        document.getElementById('outer').style.backgroundColor="red";
    }
    else if(c1==5)
    {
        document.getElementById('outer').style.backgroundColor="orange";
    }
    else if(c1==6)
    {
        document.getElementById('outer').style.backgroundColor="pink";
    }
    else if(c1==7)
    {
        document.getElementById('outer').style.backgroundColor="brown";
    }
    else if(c1==8)
    {
        document.getElementById('outer').style.backgroundColor="purple";
    }
    else if(c1==9)
    {
        document.getElementById('outer').style.backgroundColor="skyblue";
    }
    else if(c1==10)
    {
        document.getElementById('outer').style.backgroundColor="blue";
        c1=0;
    }
    c1+=1;
});
var c2=0;
var shape=document.getElementById('btn2');
shape.addEventListener('click',function(){
    if(c2==0)
    {
        document.getElementById('inner').style.height="100px";
        document.getElementById('inner').style.width="100px";
        document.getElementById('inner').style.borderTopRightRadius="100%";
        document.getElementById('inner').style.borderBottomRightRadius="0%";
        document.getElementById('inner').style.borderBottomLeftRadius="0%";
        document.getElementById('inner').style.borderTopLeftRadius="0%";
    }
    else if(c2==1)
    {
        document.getElementById('inner').style.height="100px";
        document.getElementById('inner').style.width="100px";
        document.getElementById('inner').style.borderTopRightRadius="0%";
        document.getElementById('inner').style.borderBottomRightRadius="100%";
        document.getElementById('inner').style.borderBottomLeftRadius="0%";
        document.getElementById('inner').style.borderTopLeftRadius="0%";
    }
    else if(c2==2)
    {
        document.getElementById('inner').style.height="100px";
        document.getElementById('inner').style.width="100px";
        document.getElementById('inner').style.borderTopRightRadius="0%";
        document.getElementById('inner').style.borderBottomRightRadius="0%";
        document.getElementById('inner').style.borderBottomLeftRadius="100%";
        document.getElementById('inner').style.borderTopLeftRadius="0%";
    }
    else if(c2==3)
    {
        document.getElementById('inner').style.height="100px";
        document.getElementById('inner').style.width="100px";
        document.getElementById('inner').style.borderTopRightRadius="0%";
        document.getElementById('inner').style.borderBottomRightRadius="0%";
        document.getElementById('inner').style.borderBottomLeftRadius="0%";
        document.getElementById('inner').style.borderTopLeftRadius="100%";
        c2=-1;
    }
    
    c2+=1;
});