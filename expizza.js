function show()
{
pimg.src=pizza.options[pizza.selectedIndex].text+".jpg"
price.innerHTML=pizza.value;

}

function getBill()
{var q=parseInt(qty.value)
 var amt=q*pizza.value
 var htm=""
 if(q==1)
 { htm+="Total Amount:"+amt+"<br>"
  htm+="No Discount" 
 
 }
 else if(q>=2 && q<=3)
 {
 htm+="Total Amount:"+amt+"<br>"
 htm+="Free <img src='cc.png' width='40' height='40'> Cup" 
}
else if(q>=4)
 {
 htm+="Total Amount:"+amt+"<br>"
 dis=amt*10/100
 na=amt-dis
 htm+="Discount [10%]:"+dis+"<br>"
 htm+="Net Amount:"+na+"<br>"
 htm+="Free <img src='ff.png' width='40' height='40'> Fries" 
}

result.innerHTML=htm
}