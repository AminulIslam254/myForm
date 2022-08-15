
var temp=1;

function view()
{
    if(temp&1)
    {
        document.getElementById("psw1").type="text";
    }
    else
    {
        document.getElementById("psw1").type="password";
    }
    temp++;
    
}

function validate()
{
    var reg1=/[a-z]+[0-9]+/;
    var reg2=/[0-9]{11}/;
    var val1=document.getElementById("id11").value;
    var val2=document.getElementById("psw1").value;
    if(reg1.test(val1))
    {
        
    }
    else
    {
        document.getElementById("id11").style.border="2px solid red";
    }
    if(reg2.test(val2))
    {
        return true;
    }
    else
    {
        document.getElementById("psw1").style.border="2px solid red";
        return false;
    }

}