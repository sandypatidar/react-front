$(document).ready(function() {



    showSpinner();
    $.ajax({
        type: "GET",
        url: baseURL + "product/getProductList/Profile",
        dataType: "json",
        success: function(data) {
            hideSpinner();
            if (data.responseCode == 0) {
                $('#profile-packages-price').append(data.listResponse[0].originalPrice);
                $('#profile-packages-discounted').append(data.listResponse[0].totalPrice);
                var i;
                for (i = 0; i < data.listResponse.length; i++) {
                    var productcomp = data.listResponse[i].product_id;
                    if (sessionStorage.getItem("productId") == productcomp) {
                        $('#exam-price-original').append(data.listResponse[0].totalPrice);
                        $('#exam-price-total').append(data.listResponse[0].totalPrice);
                    }
                }

            } else {
                alert(data.responseMessage);
            }
        },
        error: function(error) {
            hideSpinner();
            alert("Error due to slow internet connection");
            console.log('Error profile' + error);
        }
    });






    showSpinner();
    $.ajax({
        type: "GET",
        url: baseURL + "product/getProductList/Exam",
        dataType: "json",
        success: function(data) {
            hideSpinner();
            if (data.responseCode == 0) {

                var i;
                for (i = 0; i < data.listResponse.length; i++) {
                    var productcomp = data.listResponse[i].product_id;
                    if (sessionStorage.getItem("productId") == productcomp) {
                        $('#exam-price-original').append(data.listResponse[i].originalPrice);
                        $('#exam-price-total').append(data.listResponse[i].totalPrice);
                    }
                }
            }
        },
        error: function(error) {
            hideSpinner();
            alert("Error due to slow internet connection");
            console.log('Error in isUserEligibleforBuyProduct request' + error);
        }
    });



    var productName = null;
    showSpinner();
    $.ajax({
        type: "GET",
        url: baseURL + "product/getProductList/Exam",
        dataType: "json",
        success: function(data) {
            hideSpinner();

            if (data.responseCode == 0) {
                $('#price-l1').append(data.listResponse[0].originalPrice);
                $('#l2-price').append(data.listResponse[1].originalPrice);
                $('#l1-l2-price').append(data.listResponse[2].originalPrice);
                $('#re-l1-price').append(data.listResponse[3].originalPrice);
                $('#re-l2-price').append(data.listResponse[4].originalPrice);
                productName = data.listResponse.productName
            } else {
                alert(data.responseMessage);
            }
        },
        error: function() {
            hideSpinner();
            alert("Error due to slow internet connection");
            Console.log("getProductList");
        }

    });


    showSpinner();
    $.ajax({
        type: "GET",
        url: baseURL + "product/editPRofile/" + sessionStorage.getItem("userid"),
        dataType: "json",
        async: false,
        success: function(data) {
            hideSpinner();
            if (data.responseCode == 0) {
                if (data.editable == true) {
                    sessionStorage.setItem("editprofile", "false");
                    $('#packages').modal('hide');
                    $('#profile_packages').css("display", "none");
                }
            }
        },
        error: function(error) {
            hideSpinner();
            alert("Error due to slow internet connection");
            console.log('Error in Editprofile request' + error);
        }
    });







    if (sessionStorage.getItem("btn") == "1") {
        document.getElementById("exam-name").innerHTML = "L1 Exam Package";
    }
    if (sessionStorage.getItem("btn") == "2") {
        document.getElementById("exam-name").innerHTML = "L2 Exam Package";
    }
    if (sessionStorage.getItem("btn") == "3") {
        document.getElementById("exam-name").innerHTML = "L1+L2 Exam Package";
    }

    if (sessionStorage.getItem("btn") == "4") {
        document.getElementById("exam-name").innerHTML = "Profile Package";
        $("#gst18").css("display","none");
    }

    if (sessionStorage.getItem("btn") == "7") {
        document.getElementById("exam-name").innerHTML = "Re Exam - L1";
    }

    if (sessionStorage.getItem("btn") == "5") {
        document.getElementById("exam-name").innerHTML = "Re Exam - L2";
    }


});