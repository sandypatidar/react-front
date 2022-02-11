var duplicateEmail = false;

//Validation part------------------------------------------------
$(document).ready(function() {


    // // on first focus (bubbles up to document), open the menu
    // $(document).on('focus', '.select2-selection.select2-selection--single', function(e) {
    //     $(this).closest(".select2-container").siblings('select:enabled').select2('open');
    // });

    // // steal focus during close - only capture once and stop propogation
    // $('select.select2').on('select2:closing', function(e) {
    //     $(e.target).data("select2").$selection.one('focus focusin', function(e) {
    //         e.stopPropagation();
    //     });
    // });



    $('#username').on('keyup', function() {
        $("#ename").val($("#username").val());
    });

    $('#datepicker').on('change', function() {
        if ($('#datepicker').valid()) {
            $('#datepicker').removeClass('invalid').addClass('success');
        }
        datechange();
    });

    $('.title-drop').select2();
    $('.js-city').select2();

    $('#tname').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#pname').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $('#datepicker').bind('keyup paste', function() {
        this.value = this.value.replace(/[^]/g, '');
    });
    $('#landname').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $('input.check1').on('change', function() {
        $('input.check1').not(this).prop('checked', false);
    });

    $(function() {
        $("#datepicker ").datepicker({
            format: 'dd-mm-yyyy',
            autoHide: true,
            endDate: new Date()
        });
    });

    //validation js------------------------------------------


    $('#contact-form').validate({
        rules: {
            name: {
                minlength: 2,
                required: true,

            },
            email: {
                required: true,
                email: true
            },
            message: {
                minlength: 2,
                required: true
            },
            password: {
                required: true,
                minlength: 5
            },
            password1: {
                required: true,
                minlength: 5,
                equalTo: "#password "
            },
            landname: {
                required: true,
                minlength: 10,
            },
            aname: {
                required: true,
                minlength: 2,

            }
        },
        highlight: function(element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
            $('html, body').animate({
                scrollbottom: 200
            }, 800);
        },
        success: function(element) {
            element.text('').addClass('valid')
                .closest('.control-group').removeClass('error').addClass('success');

        }
    });


});



$("#contact-form").validate({
    submitHandler: function(form) {
        var x = document.getElementById("password").value;
        var y = document.getElementById("password1").value;

        if (x == y) {

            if ($('#myCheckbox2').is(':checked')) {
                var Interested1 = $('#Interested-drop  option:selected').val();
                if (Interested1 == 0) {
                    alert("Please select Skillset.");
                    return;
                }
            }


            if ($('.check1').is(':checked')) {


            } else {

                alert("Please Choose Account Type");
                document.getElementById("contact-form").reset();
                $('html, body').animate({ scrollTop: 200 }, 800);
                return;
            }

            var countryname = $('#country option:selected').val();
            var statename = $('#state  option:selected').val();
            var cityname = $('#city  option:selected').val();


            if (countryname == 0) {
                alert("Please select Country.");
                return;
            }
            if (statename == 0) {
                alert("Please select State.");
                return;
            }
            if (cityname == 0) {
                alert("Please select City.");
                return;
            }




            /*ajax call*/
            var data1;
            
            
			if (duplicateEmail == true) {
	            data1 = {
	                "mobileNo": $("#tname").val(),
	                "emailAddress": $("#ename").val(),
	                "otpType": "both"
	            };
	
	            var payload1 = JSON.stringify(data1);
	            showSpinner();
	            $.ajax({
	                url: BASE_URL + "otp/sendotp",
	                type: "POST",
	                dataType: 'text',
	                contentType: "application/json;charset=utf-8",
	                data: payload1,
	                success: function(response) {
	                    if (response == 'SUCCESS') {
	                        hideSpinner();
	                        alert("The OTP has been sent to your registered Mobile Number and Email Id")
	                        $("#otp-box").css('display', 'block');
	                        // $("#btnSubmit").attr("disabled", true);
	                    }
	
	                },
	                error: function(error) {
	                    hideSpinner();
	                    // alert("The OTP entered is invalid Please try again.");
	
	                }
	            });

        } else {
        	alert("That Username Already taken. Try another");
        }

        } else {
            hideSpinner();
            alert("Passwords do not match.");

        }
    }
});

$(document).ready(function() {
    $('#myCheckbox2').prop('checked', true);
    $('#myCheckbox1').prop('checked', false);
    $('#myCheckbox3').prop('checked', false);
    $("#add2").css('display', 'none');
    $("#add4").css('display', 'none');
    $("#under2").css('display', 'none');
    $("#under5").css('display', 'none');

    $("#myCheckbox2").click(function() {
        document.getElementById("contact-form").reset();
        $("#add1").css('display', 'block');
        $("#add2").css('display', 'none');
        $("#add3").css('display', 'block');
        $("#add4").css('display', 'none');
        $("#under1").css('display', 'block');
        $("#under2").css('display', 'none');
        $("#under3").css('display', 'block');
        $("#under5").css('display', 'none');
        $("#clubid").css('display', 'none');


    });

    $("#myCheckbox1").click(function() {
        document.getElementById("contact-form").reset();
        $("#add1").css('display', 'none');
        $("#add2").css('display', 'block');
        $("#add3").css('display', 'none');
        $("#add4").css('display', 'block');
        $("#under1").css('display', 'none');
        $("#under2").css('display', 'block');
        $("#under3").css('display', 'none');
        $("#under5").css('display', 'none');
        $("#clubid").css('display', 'none');
    });

    $("#myCheckbox3").click(function() {
        document.getElementById("contact-form").reset();
        $("#add1").css('display', 'block');
        $("#add2").css('display', 'none');
        $("#add3").css('display', 'block');
        $("#add4").css('display', 'none');
        $("#under1").css('display', 'none');
        $("#under2").css('display', 'none');
        $("#under3").css('display', 'none');
        $("#under5").css('display', 'block');

    });


    // $.ajax({
    //     type: "GET",
    //     url: baseURL + "corporateType",

    //     dataType: "json",
    //     success: function(data) {
    //         for (i = 0; i < data.listResponse.length; i++) {
    //             console.log("data.listResponse[i].corporateTypeName");
    //             $('#typename').append('<option value=' + data.listResponse[i].id + '>' + data.listResponse[i].corporateTypeName + '</option>');
    //         }

    //     }

    // });
    // $.ajax({
    //     type: "GET",
    //     url: baseURL + "strength",

    //     dataType: "json",
    //     success: function(data) {
    //         for (i = 0; i < data.listResponse.length; i++) {
    //             console.log("data.listResponse[i].strengthName");
    //             $('#Interested-drop').append('<option value=' + data.listResponse[i].id + '>' + data.listResponse[i].strengthName + '</option>');
    //         }

    //     }

    // });
});



/* email exist check */
$(document).ready(function() {
	

	
	$("#username").change(function(){
		data4 = {
			"username" : $("#username").val()
		};
		    var payload4 = JSON.stringify(data4);
		    $.ajax({
		        url: baseURL + 'candidate/checkEmail',
		        type: "POST",
		        dataType: 'JSON',
		        contentType: "application/json;charset=utf-8",
		        data: payload4,
		        success: function(response) {
		            hideSpinner();
		          
		            $('#checkemailid').empty();
		            $('#checkemailid').append(response.responseMessage);
		            var res = response.responseMessage;
		            if (res.length < 5 ) {
		            	duplicateEmail = true;
					}
		        },
		        error: function (xhr, ajaxOptions, thrownError) {
		            alert(xhr.status);
		            alert(thrownError);
		          }
		     
		    });
	});

   
});



/*city sate country */

$(document).ready(function() {


    $("#country").val($("#country option:first").val());
    showSpinner();
    $.ajax({
        type: "GET",
        url: baseURL + "country",
        dataType: "json",
        success: function(data) {
            hideSpinner();
            $.each(data.listResponse, function(i, obj) {

                var div_data = new Option(obj.countryName, obj.id);
                $(div_data).html(obj.countryName);
                $("#country").append(div_data);
            });
        },
        error: function() {
            hideSpinner();
            alert("Error due to slow internet connection");
            Console.log("country");
        }
    });
});

$('#country').select2({}).on("change", function(e) {


    $('#state').find('option').remove().end().append('<option value="0">Select</option>').val('0');
    $('#city').find('option').remove().end().append('<option value="0">Select</option>').val('0');
    showSpinner();
    $.ajax({
        type: "GET",
        url: baseURL + "state/" + $(this).val(),
        dataType: "json",
        success: function(data) {
            hideSpinner();
            $.each(data.listResponse, function(i, obj) {
                var s_data = "<option value=" + obj.id + ">" + obj.stateName + "</option>";
                $(s_data).appendTo('#state');
            });

        },
        error: function() {
            hideSpinner();
            alert("Error due to slow internet connection");
            Console.log("state");
        }
    });

});

$('#state').select2({}).on("change", function(e) {
    $('#city').find('option').remove().end().append('<option value="0">Select</option>').val('0');


    showSpinner();
    $.ajax({
        type: "GET",
        //url: "http://192.168.4.165:8082/city/" + $(this).val(),
        url: baseURL + "city/" + $(this).val(),
        dataType: "json",
        success: function(data) {
            hideSpinner();
            $.each(data.listResponse, function(i, obj) {
                var s_data = "<option value=" + obj.id + ">" + obj.cityName + "</option>";
                $(s_data).appendTo('#city');
            });

        },
        error: function() {
            hideSpinner();
            alert("Error due to slow internet connection");
            Console.log("city");
        }
    });

});

function sendsms() {

    data8 = {
        "mobileNo": $("#tname").val(),
        "message": "Congrats! Your registration has been confirmed with ICA. Now, create your profile, add images, videos and show us your love for cricket. Stay tuned for more.",
        "msgType": "Registration Success"
    }
    var payload8 = JSON.stringify(data8);
    showSpinner();
    $.ajax({
        url: baseURL + 'otp/sendsms',
        type: "POST",
        dataType: 'JSON',
        contentType: "application/json;charset=utf-8",
        data: payload8,
        success: function(response) {
            hideSpinner();
            alert(response.responseMessage);
            if (response.responseCode == 0) {
                location.replace("login.html");
            }

        },
        error: function() {
            hideSpinner();
            // alert("Error due to slow internet connection");
              Console.log("sendsms");
        }

    });
}



$(document).ready(function() {
    $(".enter9").keyup(function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            validateOTP();
        }
    });
});


function validateOTP() {
    showSpinner();
    $.ajax({
        url: BASE_URL + "otp/validateOtp",
        type: "POST",
        dataType: 'text',
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({
            "email": $("#ename").val(),
            "mobile": $("#tname").val(),
            "emailOTP": $("#otp").val(),
            "mobileOTP": $("#otp").val(),
            "otpType": "sms"
        }),
        success: function(response) {
            hideSpinner();
            if (response == 'SUCCESS') {


                var tempName;
                var roleId;
                var corporateTypeId;
                var title;
                var skill;
                if ($('#myCheckbox2').is(':checked')) {
                    tempName = $("#name").val();
                    roleId = 1;
                    corporateTypeId = 0;
                    title = $("#titledrop").val();
                    skill = $("#Interested-drop").val();
                }
                if ($('#myCheckbox1').is(':checked')) {
                    tempName = $("#spocname").val();
                    roleId = 3;
                    corporateTypeId = $('#typename').val();
                    title = $("#titledrop_corp").val();
                    skill = "1";
                }

                if ($('#myCheckbox3').is(':checked')) {
                    tempName = $("#name").val();
                    roleId = 2;
                    corporateTypeId = 0;
                    title = $("#titledrop").val();
                    skill = $("#skillset").val();
                }

                data3 = {

                    "candidateCredential": {
                        "email": $("#username").val(),
                        "password": $("#password").val()
                    },
                    "candidateProfile": {
                        "userid": null,
                        "title": title,
                        "firstname": tempName,
                        "middlename": $("#fname").val(),
                        "lastname": $("#sname").val(),
                        "gender": $("#gender1").val(),
                        "birthdate": $("#datepicker").val(),
                        "email": $("#ename").val(),
                        "address1": $("#aname").val(),
                        "address2": $("#aname1").val(),
                        "pincode": $("#pname").val(),
                        "contactNumber": $("#tname").val(),
                        "landlineNumber": $("#landname").val(),
                        "corporateType": $("#typename").val(),
                        "clubName": $("#clubid1").val(),
                        "city": {
                            "id": $('#city').val()
                        },
                        "state": {
                            "id": $('#state').val()
                        },
                        "country": {
                            "id": $('#country').val()
                        },
                        "strength": {
                            "id": skill
                        },
                    },
                    "role": {
                        "id": roleId
                    }

                };

                var payload3 = JSON.stringify(data3);
                showSpinner();
                $.ajax({
                    url: baseURL + 'candidate/registerCandidate',
                    type: "POST",
                    dataType: 'JSON',
                    contentType: "application/json;charset=utf-8",
                    data: payload3,
                    success: function(response) {
                        hideSpinner();
                        alert(response.responseMessage);
                        if (response.responseCode == 0) {
                            sendsms();
                            location.replace("login.html");
                        }

                    },
                    error: function() {
                        hideSpinner();
                        alert("Error due to slow internet connection");
                    
                        Console.log("registerCandidate");

                    }

                });

            } else {
                hideSpinner();
                alert("The OTP entered is invalid. Please try again");

            }
        },
        error: function(error) {
            hideSpinner();
            alert("Error due to slow internet connection");
            Console.log("otp invalid");

        }

    });

}