async function sign_in() {

    let encoded = window.btoa($("#uname").val() + ':' + $("#pwd").val())

    console.log($("#uname").val() + ':' + $("#pwd").val())
    console.log(encoded)

    let response = await fetch("/auth",  {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + encoded
        }
    })
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json()
        console.log(json)

        if (json.success) {
            let b = $("<button>").text("Orders via Cookie")
            b.click(() => getOrdersFromCookie())
            let a = $("<a>").text("Order Link via Cookie")
            a.attr("href", "/cookie_orders")

            let b2 = $("<button>").text("Orders via Header")
            b2.click(() => getOrdersFromHeader(json.token))

            let del = $("<button>").text("Logout")
            del.click(() => deleteCookie())

            $("#butt").after($("<br>"), b, a, $("<br>"), b2, $("<br>"), del)

            console.log(document.cookie)
        }
    } else {
        alert("HTTP-Error: " + response.status)
        console.log(response.status)
        let json = await response.json()
        console.log(json)
    }
}

async function getOrdersFromHeader(jwt) {
    console.log(jwt)
    let response = await fetch("/orders",  {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + jwt
        }
    })
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json()
        console.log(json)


    } else {
        alert("HTTP-Error: " + response.status)
        console.log(response.status)
        let json = await response.json()
        console.log(json)
    }
}

async function deleteCookie() {
    let response = await fetch("/cookie_orders/cookie",  {
        method: 'DELETE'
    })
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json()
        console.log(json)


    } else {
        alert("HTTP-Error: " + response.status)
        console.log(response.status)
        let json = await response.json()
        console.log(json)
    }
}

async function getOrdersFromCookie() {
    let response = await fetch("/cookie_orders",  {
        method: 'GET'
    })
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json()
        console.log(json)


    } else {
        alert("HTTP-Error: " + response.status)
        console.log(response.status)
        let json = await response.json()
        console.log(json)
    }
}

$(document).ready(function(){
    $("#butt").click(sign_in)
})