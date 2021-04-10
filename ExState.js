JSON
function fillCity()
{
var i=state.selectedIndex
switch(i)
{
 case 1:
    mpcity=["-City-","Gwalior","Morena","Indore","Bhopal"]
    fillDD(mpcity)
    break;
 case 2:
    gcity=["-City-","Ahemdabad","Vadodara","Surat","Gandhi Nagar"]
    fillDD(gcity)
    break;   
 case 3:
    hcity=["-City-","Sonipat","Panipat","Faridabad","Gurugram"]
    fillDD(hcity)
    break;   

}
}



function  fillDD(sc)
{ 
 removeItem()
for(i=0;i<sc.length;i++)
  {
   var opt=document.createElement("option")
   opt.text=sc[i]
   city.add(opt)
  }
}

function removeItem()
{  for(j=city.options.length-1;j>=0;j--)
   { city.remove(j);}

  
}




























