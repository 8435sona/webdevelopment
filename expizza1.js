function getBill()
{var q=parseInt(qty.value)
 var pi=pizza.options[pizza.selectedIndex].text+".jpg"
 var pp=parseInt(pizza.value);
 var pn=pizza.options[pizza.selectedIndex].text
 
 var amt=q*pizza.value
 var htm="<table border='1' width='50%' cellspacing='0'><caption>Bill</caption>"
  htm+="<tr><th>Sn</th><th>Description</th><th>Price</th><th>Qty</th><th>Amount</th></tr>"
  dis=0
  free="" 
 if(q==1)
 { 
 htm+="<tr><td>1</th><th>"+pn+"<img src='"+pi+"' width='25' height='25'></th><th>"+pp+"</th><th>"+q+"</th><th>"+amt+"</th></tr>"
 free="Sorry...."
 }
 else if(q>=2 && q<=3)
 {
 htm+="<tr><td>1</th><th>"+pn+"<img src='"+pi+"' width='25' height='25'></th><th>"+pp+"</th><th>"+q+"</th><th>"+amt+"</th></tr>"
 dis=5;
 free="Free <img src='cc.png' width='40' height='40'> Cup" 
}
else if(q>=4)
 {
htm+="<tr><td>1</th><th>"+pn+"<img src='"+pi+"' width='25' height='25'></th><th>"+pp+"</th><th>"+q+"</th><th>"+amt+"</th></tr>"
dis=20;
free="Free <img src='ff.png' width='40' height='40'> Fries" 
}
disamt=amt*dis/100;
na=amt-disamt
htm+="<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Discount["+dis+"%]:</td><td>"+disamt+"</td></tr>"
htm+="<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Net Amount:</td><td>"+na+"</td></tr>"


htm+="</table><br>"
htm+=free
result.innerHTML=htm
}















