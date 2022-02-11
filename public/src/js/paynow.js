function paynowexam() {
    localStorage.clear();
    sessionStorage.setItem("btn", "1");
    sessionStorage.setItem("productId", "1");
    location.replace("pay-now-exam.html");

}

function paynowexam1() {
    localStorage.clear();
    sessionStorage.setItem("btn", "2");
    sessionStorage.setItem("productId", "2");
    location.replace("pay-now-exam.html");


}

function paynowexam2() {
    localStorage.clear();
    sessionStorage.setItem("btn", "3");
    sessionStorage.setItem("productId", "3");
    location.replace("pay-now-exam.html");


}

function paynowexam3() {
    localStorage.clear();
    sessionStorage.setItem("btn", "7");
    sessionStorage.setItem("productId", "4");
    location.replace("pay-now-exam.html");

}

function paynowexam4() {
    localStorage.clear();
    sessionStorage.setItem("btn", "5");
    sessionStorage.setItem("productId", "5");
    location.replace("pay-now-exam.html");

}

function paynoweidt() {
    localStorage.clear();
    sessionStorage.setItem("btn", "4");
    sessionStorage.setItem("productId", "8");
    location.replace("pay-now-exam.html");
}


$(document).ready(function() {



    $("#quantityInput").val("1");
    document.onkeydown = function(e) {

        if (event.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    };
    document.addEventListener('contextmenu', event => event.preventDefault());
});


$('#phone').bind('keyup paste', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
    if (e.which < 48 || e.which > 57)
        $("#error-phone").html("Digits Only").show().fadeOut("slow");
});
/*********************** Quantity PLUS KEY EVENT OKK-07-02-2020 **********************************/
function quantityPlus(max) {
    document.getElementById("quantityInput").value = parseInt(document
        .getElementById("quantityInput").value) + 1;
    if (document.getElementById("quantityInput").value >= parseInt(max)) {

        document.getElementById("quantityInput").value = max;

    }
}
/*********************** Quantity DOWN KEY EVENT OKK-07-02-2020 **********************************/

function quantityDown(min) {
    document.getElementById("quantityInput").value = parseInt(document
        .getElementById("quantityInput").value) - 1;
    if (document.getElementById("quantityInput").value <= parseInt(min)) {
        document.getElementById("quantityInput").value = min;
    }
}

/****************** Payment Intergration Book Order ******************************/
function processCheckout() {

    if($("#agreebox-paynow").is(':checked')==false && $("#agreebox-paynow-book").is(':checked')==false){
        alert("Please agree Terms & Conditions");
        return false;
    }

    var fName = document.getElementById("firstname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (fName.length == 0) {
        $("#error-name").html("This field is required").show().fadeOut(2000);
        return false;
    } else if (email.length == 0) {
        $("#error-email").html("This field is required").show().fadeOut(2000);
        return false;
    } else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
        $("#error-email").html("Invalid Email address").show().fadeOut(2000);
        return false;
    } else if (phone.length < 10) {
        $("#error-phone").html("This field is required").show().fadeOut(2000);
        return false;
    } else {
        checkoutprice();
    }
}
/****************************** Get final Amount Price of product based on quantity ****************************************/
/****************************** OKK - 07-02-2020 ***************************************************************************/


function checkoutprice() {
    if ($("#quantityInput").val() == undefined) {
        var quantityinput = 0;
    } else {
        quantityinput = $("#quantityInput").val();
    }

    if(localStorage.getItem('productId')==6){
        product_Id ="6";
    }else{
        product_Id=sessionStorage.getItem("productId");
    }

    showSpinner();
    $.ajax({
        type: "GET",
        url: baseURL + "product/isUserEligibleforBuyProduct/" + ((sessionStorage.getItem('userid') == undefined || sessionStorage.getItem('userid') == null) ? "0" : sessionStorage.getItem("userid")) + "/" +product_Id + "/" + quantityinput,
        dataType: "json",
        async: false,
        success: function(data) {
            hideSpinner();
            if (data.responseCode == 0) {
                processCheckoutData(data.listResponse[0].total_price, data.listResponse[0].quantity, data.listResponse[0].product_name);

            } else {
                alert(data.responseMessage);

            }
        },
        error: function(error) {
            hideSpinner();
            alert("Error due to slow internet connection");
            console.log('Error in isUserEligibleforBuyProduct request' + error);

        }
    });
}

function processCheckoutData(totalProductPrice, bookQuantity, productName) {
    showSpinner();
    var payFormId = document.getElementById("pay_Form");
    $.ajax({
        url: baseURL + 'payment',
        contentType: "application/json",
        method: 'POST',
        data: JSON.stringify({
            "firstname": document.getElementById('firstname').value,
            "email": document.getElementById('email').value,
            "phone": document.getElementById('phone').value,
            "productinfo": productName,
            "amount": totalProductPrice,
            "address1": document.getElementById('orderaddress').value,
            "udf1": product_Id,
            "udf3": ((sessionStorage.getItem('userid') == undefined || sessionStorage.getItem('userid') == null) ? "0" : sessionStorage.getItem("userid")),
            "udf4": bookQuantity,
            "service_provider": "payu_paisa"
        }),
        async: false,
        success: function(data) {
            hideSpinner();

            var hash = document.createElement("input");
            var key = document.createElement("input");
            var txnid = document.createElement("input");
            var surl = document.createElement("input");
            var furl = document.createElement("input");
            var udf1 = document.createElement("input");
            var udf2 = document.createElement("input");
            var udf3 = document.createElement("input");
            var udf4 = document.createElement("input");
            var amount = document.createElement("input");
            var productinfo = document.createElement("input");
            var service_provider = document.createElement("input");
            var address1 = document.createElement("input");
            var firstname = document.createElement("input");
            var email = document.createElement("input");
            var phone = document.createElement("input");

            firstname.setAttribute("name", "firstname");
            email.setAttribute("name", "email");
            phone.setAttribute("name", "phone");

            service_provider.setAttribute("name", "service_provider");
            key.setAttribute("name", "key");
            hash.setAttribute("name", "hash");
            txnid.setAttribute("name", "txnid");
            surl.setAttribute("name", "surl");
            furl.setAttribute("name", "furl");
            amount.setAttribute("name", "amount");
            productinfo.setAttribute("name", "productinfo");

            udf1.setAttribute("name", "udf1");
            udf2.setAttribute("name", "udf2");
            udf3.setAttribute("name", "udf3");
            udf4.setAttribute("name", "udf4");

            address1.setAttribute("name", "address1");
            service_provider.setAttribute("type", "hidden");
            key.setAttribute("type", "hidden");
            hash.setAttribute("type", "hidden");
            txnid.setAttribute("type", "hidden");
            surl.setAttribute("type", "hidden");
            furl.setAttribute("type", "hidden");
            amount.setAttribute("type", "hidden");
            productinfo.setAttribute("type", "hidden");
            firstname.setAttribute("type", "hidden");
            email.setAttribute("type", "hidden");
            phone.setAttribute("type", "hidden");

            udf1.setAttribute("type", "hidden");
            udf2.setAttribute("type", "hidden");
            udf3.setAttribute("type", "hidden");
            udf4.setAttribute("type", "hidden");

            address1.setAttribute("type", "hidden");
            hash.value = data.hash;
            key.value = data.key;
            txnid.value = data.txnid;
            surl.value = data.surl;
            furl.value = data.furl;
            firstname.value = data.firstname;
            email.value = data.email;
            phone.value = data.phone;

            udf1.value = data.udf1;
            udf2.value = data.udf2;
            udf3.value = data.udf3;
            udf4.value = data.udf4;

            amount.value = data.amount;
            productinfo.value = data.productinfo;
            service_provider.value = "payu_paisa";
            address1.value = data.address1;

            payFormId.append(hash);
            payFormId.append(key);
            payFormId.append(txnid);
            payFormId.append(surl);
            payFormId.append(furl);
            payFormId.append(udf1);
            payFormId.append(udf2);
            payFormId.append(udf3);
            payFormId.append(udf4);
            payFormId.append(amount);
            payFormId.append(productinfo);
            payFormId.append(service_provider);
            payFormId.append(firstname);
            payFormId.append(email);
            payFormId.append(phone);

            payFormId.append(address1);
            payFormId.method = "post";
            payFormId.action = "https://sandboxsecure.payu.in/_payment";
            payFormId.submit();

        },
        error: function(error) { 
            hideSpinner();
            alert("Error due to slow internet connection");
            console.log('Error in PayUMoney request' + error);
        }
    });

}