var thecart = JSON.parse(localStorage["customerorder"]);
console.log(thecart);

document.getElementById("orderhere").innerText = thecart.pie_size + " " + thecart.crust_type 
+ " crust with " + thecart.sauce_type + " sauce and " + thecart.cheese_type 
+ " cheese. Your pie will come topped with " + thecart.all_toppings + ", and all for just $" 
+ thecart.total + ".";
