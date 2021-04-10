function chkpassword()
{
 if(txt1.value==txt2.value)
 {
 msg.innerHTML="<i><font color='green'>Password Matched</font></i>"
 }
 else
 {
 msg.innerHTML="<i><font color='red'>Password not Match with Confirm Password</font></i>"
 }
}