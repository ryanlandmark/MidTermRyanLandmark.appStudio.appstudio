
btn1.onclick=function(){
  
let income = Number(Inpt1.value) 
  
if (income < 30000){
  lbl1.value = `with your income of ${income}, your tax braket is 8%.`
}
else if (30000 < income < 99999){
  lbl1.value = `with your income of ${income}, your tax braket is 15%.`
}
else if (income > 99999){
  lbl1.value = `with your income of ${income}, your tax braket is 25%.`
}
}



btn2.onclick=function(){
  btn1.onclick=function(){
  
let income = Number(Inpt1.value) 
  
if (income < 30000){
  lbl1.value = `with your income of ${income}, your tax braket is 8%.`
}
else if (30000 < income < 99999){
  lbl1.value = `with your income of ${income}, your tax braket is 15%.`
}
else if (income > 99999){
  lbl1.value = `with your income of ${income}, your tax braket is 25%.`
}
}
}
