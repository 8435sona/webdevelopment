function show()
{
result.innerHTML=pizzas.options[pizzas.selectedIndex].text
cimg.src=pizzas.options[pizzas.selectedIndex].text+".jpg"
txt1.value=pizzas.value
}
function bill()
{
    c= txt1.value*txt2.value

    resu.innerHTML="TOTAL BILL YOU HAVE TO PAY-: " +c
}