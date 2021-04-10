function chkpassword()
{
 var l=txt1.value.length
 if(l>=1 && l<=5)
 { msg.innerHTML="<font color='red'>Weak Password</font>"}
 else if(l>=6 && l<=10)
 { msg.innerHTML="<font color='orange'>Good Password</font>"}
  
 
 
}