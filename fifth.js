function calculate(ch)
{
 switch(ch)
 {case 1:
 var c=parseInt(txt1.value)+parseInt(txt2.value)
  
 var htm="<font color='red'><b>Addition:"+c+"</b></font>"
 result.innerHTML=htm
 break
 case 2:
 var c=txt1.value*txt2.value
 
 result.innerHTML="<font color='green'><b>Multiplication:"+c+"</b></font>"
 break

}
}