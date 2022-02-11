var originalPrice = null;
var earlyBirdPrice = null;
var productName = null;
var productId = null;
var examStatus = false;
$(document).ready(function() {
    showSpinner();
    $.ajax({
        type: "GET",
        url: baseURL + "product/getProductList/Deliverable",
        dataType: "json",
        success: function(data) {
            hideSpinner();
            $('#original-book-price').append(data.listResponse[0].originalPrice);
            earlyBirdPrice = data.listResponse[0].earlyBirdPrice;
            $('#early-book-price').append(data.listResponse[0].earlyBirdPrice);
            $('#shipping-price').append(data.listResponse[0].shippingPrice);
            $('#book-name-cart').append(data.listResponse[0].productName);
            productName = data.listResponse[0].productName;
            productId = data.listResponse[0].id;
        },
  /*      error: function() {
            hideSpinner();
            alert("Error due to slow internet connection");
            Console.log("getProductList");
        }*/

        

    });


    $("#up").click(function() {
        $('#totalprice').empty();
        var bookprice = $("#quantityInput").val();
        var shippingprice1 = bookprice * 100;
        var totalprice = bookprice * earlyBirdPrice;
        var totalprice = totalprice + shippingprice1;
        $('#totalprice').append("Total Price: " + totalprice + " INR/-");
    });
    $("#down").click(function() {
        $('#totalprice').empty();
        var bookprice = $("#quantityInput").val();
        var shippingprice1 = bookprice * 100;
        var totalprice = bookprice * earlyBirdPrice;
        var totalprice = totalprice + shippingprice1;
        $('#totalprice').append("Total Price: " + totalprice + " INR/-");
    });







    //Start navigation fixed on scroll
    // window.onscroll = function() {
    //     myFunction()
    // };
    // var header = document.getElementById("nav");
    // var logo = document.getElementById("logo");
    // var sticky = header.offsetTop;

    // function myFunction() {
    //     if (window.pageYOffset > sticky) {
    //         header.classList.add("sticky");
    //         logo.show();
    //     } else {
    //         header.classList.remove("sticky");
    //         logo.hide();
    //     }
    // }
    //End navigation fixed on scroll


    //Start cricket image library js
    $("[data-fancybox]").each(function() {
        $(this).attr("data-caption", $(this).attr("title"));
    });
    // start fancybox on all elements with attribute 'data-fancybox':
    //   $("[data-fancybox]").fancybox();
    //End cricket image library js

});

function paynowbook() {
    localStorage.setItem("productId", "6");
    location.replace("paynow.html");
}




function examStatusCheck(){

$(document).ready(function() {
    showSpinner();
    $.ajax({
        url: baseURL + 'examStatus/' + sessionStorage.getItem("userid"),
        type: "GET",
        dataType: 'JSON',
        success: function(data) {
        	console.log(data);
            hideSpinner();
            examStatus=data.examStatus;
            if(examStatus==true)
        	{
        		location.replace("exam.html");
        		
        	}else{
        		
        			sessionStorage.setItem("replaceloaction","profile");
					location.replace("profile.html");
					
			 
        	}
         
        },
        error: function(e) {
            hideSpinner();
            console.log("Error due to slow internet connection");
        }

    });
});

	
}

function profilecheck(){
    sessionStorage.setItem("replaceloaction",null);
    location.replace("profile.html");
}












