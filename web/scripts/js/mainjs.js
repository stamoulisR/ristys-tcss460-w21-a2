//document.getElementById("reset").addEventListener("click", displayDate);


//function displayDate() {
    //document.getElementById("total").innerHTML = Date();
//}



let price = 0.0;
var toppings = [];
let size;
let crust;
let sauce;
let cheese;
var cart;
let name;


function ToCart (name, size, crust, sauce, cheese, toppingsSelected, price) {
    this.cust_name = name;
    this.pie_size = size;
    this.crust_type = crust;
    this.sauce_type = sauce;
    this.cheese_type = cheese;
    this.all_toppings = toppingsSelected;
    this.total = price;
}



document.body.addEventListener('change', function (e) {
    let target = e.target;
 
           
    switch (target.id) {
        case 'customRadioSizeSmall':
            size = "small";
            price = 8;
            document.getElementById("total").innerHTML = "$" + price;
            break;
        case 'customRadioSizeMed':
            size = "medium";
            price = 12;
            document.getElementById("total").innerHTML = "$" + price;
            break;
        case 'customRadioSizeLarge':
            size = "large"
            price = 15;
            document.getElementById("total").innerHTML = "$" + price;
            break;
        }
});

document.body.addEventListener('change', function (e) {
    let target = e.target;

    switch(target.id){
        case 'customRadioCrustThin':
            crust = "thin"
            break;
        case 'customRadioCrustOg':
            crust = "original";
            break;
        case 'customRadioCrustStuffed':
            crust = "stuffed";
            break;
    }
});

document.body.addEventListener('change', function (e) {
    let target = e.target;

    switch(target.id){
        case 'customRadioSauceRed':
            sauce = "red"
            break;
        case 'customRadioSauceWhite':
            sauce = "white";
            break;
    }
});

document.body.addEventListener('change', function (e) {
    let target = e.target;

    switch(target.id){
        case 'customRadioCheeseOg':
            cheese = "original";
            break;
        case 'customRadioCheeseVegan':
            cheese = "vegan";
            break;

    }
});

document.querySelector('.checkboxform').onclick = function(ev) {
    if(ev.target.value) {
        if(ev.target.checked == true) {
            toppings.push(ev.target.value);
            if(toppings.length > 2) {
                price += 2;
                document.getElementById("total").innerHTML = "$" + price;
            }
        }
        else if(ev.target.checked == false && toppings.includes(ev.target.value)) {
            var temp = []
            delete toppings[toppings.indexOf(ev.target.value)];
            temp = toppings.filter(Boolean);
            toppings = temp;
            delete temp;
            console.log(toppings);
            if (toppings.length >= 2) {
                price -= 2;
                document.getElementById("total").innerHTML = "$" + price;
            }
        }
        //document.getElementById("total").innerHTML = "$" + price;
      //console.log(ev.target.checked, ev.target.value);
    }
  }

document.getElementById("reset").addEventListener("click", function() {
    var items = document.getElementsByName('radioCrust');
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'radio')
            items[i].checked = false;
    }
    items = document.getElementsByName('radioSize');
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'radio')
            items[i].checked = false;
    }
    items = document.getElementsByName('radioSauce');
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'radio')
            items[i].checked = false;
    }
    items = document.getElementsByName('radioCheese');
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'radio')
            items[i].checked = false;
    }
    items = document.getElementsByName('checkToppings');
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox')
            items[i].checked = false;
    }
    name = "";
    price = 0;
    document.getElementById("total").innerHTML = "$" + price;
    toppings = [];
    localStorage.removeItem("customerorder");
});



document.getElementById("submit").addEventListener("click", function() {
    name = document.getElementById("name").value;
    cart = new ToCart(name, size, crust, sauce, cheese, toppings, price);
    localStorage["customerorder"] = JSON.stringify(cart);

    var items = document.getElementsByName('radioCrust');
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'radio')
            items[i].checked = false;
    }
    items = document.getElementsByName('radioSize');
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'radio')
            items[i].checked = false;
    }
    items = document.getElementsByName('radioSauce');
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'radio')
            items[i].checked = false;
    }
    items = document.getElementsByName('radioCheese');
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'radio')
            items[i].checked = false;
    }
    items = document.getElementsByName('checkToppings');
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox')
            items[i].checked = false;
    }
    
    name = "";
    price = 0;
    document.getElementById("total").innerHTML = "$" + price;
    toppings = [];
    console.log(localStorage["customerorder"]);
});



    
