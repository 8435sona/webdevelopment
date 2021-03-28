function show()
{
  //alert(cars.value)
  //alert(cars.selectedIndex)
  //alert(cars.options[1].text)
  //alert(cars.options[cars.selectedIndex].text)
    //alert(cars.options[cars.selectedIndex].value)
    rate.value=cars.value
    cimg.src=cars.options[cars.selectedIndex].text+".jpg"
    a="<h1>"+cars.options[cars.selectedIndex].text+"</h1>"
    a+="<h1><font color='red'>&#8377; "+cars.value+"/- Only</font></h1>" 
        
    result.innerHTML=a
    
}