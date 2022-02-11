var matchAddValue=false;

$(document).ready(function() {



    if (sessionStorage.getItem("roletype") == "Cricket Professional" || sessionStorage.getItem("roletype") == "Corporate") {
        $(".roletypedisable").css("display", "none");
    }

    //
    //    if (sessionStorage.getItem("editprofile") == "true") {
    //        alert("SDf");
    //        sessionStorage.getItem("editprofile") == "false"
    //        if (sessionStorage.getItem("galleryPhotoName") != "null" &&
    //            sessionStorage.getItem("videoName") != "null" &&
    //            sessionStorage.getItem("profilePhoto") != "images/dummyimge.png") {
    //            sessionStorage.setItem("editprofile", "false");
    //            $('#packages').modal('show');
    //            sessionStorage.getItem("editprofile") == "false"
    //        } else {
    //            $('#packages').modal('hide');
    //        }
    //    }


    $("#Tour-type").change(function() {
        var selectedVal = $('option:selected', this).text();
        if (selectedVal == "Any Other") {
            $('#other-any-box').css('display', 'block');
        } else {
            $('#other-any-box').css('display', 'none');
        }
    });

    document.getElementById('over-bowled').onkeypress = function(e) {
        if (e.keyCode === 46 && this.value.split('.').length === 2) {
            return false;
        }
    }



    $('#ball-faced').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#run-scored').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#out-not').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#catches').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#run-out').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#over-bowled').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9.]/g, '');
    });
    $('#run-given').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#maiden-name').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#extras-name').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#caught-name').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#clean-Bowled').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#other-name').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#adhar-n').bind('keyup paste', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#datepickerId').bind('keyup paste', function() {
        this.value = this.value.replace(/[^]/g, '');
    });
    $('#Opponent-name').keypress(function(e) {
        var regex = new RegExp(/^[a-zA-Z\s]+$/);
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        } else {
            e.preventDefault();
            return false;
        }
    });





});

$(document).ready(function() {
    $('#addmatch1').click(function(e) {
    	
        if (sessionStorage.getItem("addmatch15") == "true") {
            $('#packages').modal('show');
            return false;
            $('#myModal').modal('hide');
        }
        else{
        	 $('#packages').modal('hide');
        }


    });
});

function addmatch() {
    var tour = $("#Tour-type option:selected").text();
    var month = $("#datepickerId").val();
    // var month = $("#otherfeild").val();
    var Opponent = $("#Opponent-name").val();
    var run = $("#run-scored").val();
    var out = $("#out-not").val();
    var catches = $("#catches").val();
    var runout = $("#run-out").val();
    var over = $("#over-bowled").val();
    var rungiven = $("#run-given").val();
    var maiden = $("#maiden-name").val();
    var extras = $("#extras-name").val();
    var clean = $("#clean-Bowled").val();
    var caught = $("#caught-name").val();
    var other = $("#other-name").val();
    var hat = $(".hat1:checked").val();
    if (run == "" || hat == "" || Opponent == "" || month == "" || other == "" || caught == "" || out == "" || catches == "" || runout == "" || over == "" || rungiven == "" || maiden == "" || extras == "" || clean == "" || $(".out1:checked").val()==undefined || $(".man1:checked").val() ==undefined || $(".hat1:checked").val()==undefined ) {
        alert("Please fill all the details.");
        return false;
    }

    var selectedVal = $("#Tour-type option:selected").text();
    if (selectedVal == "Any Other") {
        var tour1 = $("#otherfeild").val();
    } else {
        var tour1 = $("#Tour-type option:selected").text();
    }

    data3 = {


        "userid": sessionStorage.getItem("userid"),
        "tournamentType": tour1,
        "matchPlayedDate": $("#datepickerId").val(),
        "opponentTeam": $("#Opponent-name").val(),
        "ballsFace": $("#ball-faced").val(),
        "runsScored": $("#run-scored").val(),
        "outNotOut": $(".out1:checked").val(),
        "catches": $("#catches").val(),
        "runoutStumpings": $("#run-out").val(),
        "overBowled": $("#over-bowled").val(),
        "runsGiven": $("#run-given").val(),
        "maidenOver": $("#maiden-name").val(),
        "extraRuns": $("#extras-name").val(),
        "hattrick": $(".hat1:checked").val(),
        "cleanBowled": $("#clean-Bowled").val(),
        "caughtAndBowled": $("#caught-name").val(),
        "otherWickets": $("#other-name").val(),
        "mom": $(".man1:checked").val(),


    };

    var payload3 = JSON.stringify(data3);
    showSpinner();
    $.ajax({
        url: baseURL + 'candidateMatch/addMatches',
        type: "POST",
        dataType: 'JSON',
        contentType: "application/json;charset=utf-8",
        data: payload3,
        success: function(response) {
            hideSpinner();
            if (response.responseCode == 118) {
                alert(response.responseMessage);
                window.location.reload();
                document.getElementById("myForm").reset();

            } else {
            	alert(response.responseMessage);
            	 window.location.reload();
                 document.getElementById("myForm").reset();
            }



        },
        error: function(e) {
            hideSpinner();
          //  alert("Error due to slow internet connection");
            console.log("addMatches");
        }

    });
}


//get registration 
showSpinner();
$.ajax({
    type: "GET",
    url: baseURL + "profile/" + sessionStorage.getItem("userid"),

    dataType: "json",
    success: function(data) {

      
        $('#mname').val(data.listResponse[0].voCandidateProfile.middlename);

        $('#fname').val(data.listResponse[0].voCandidateProfile.firstname);
        $('#sname').val(data.listResponse[0].voCandidateProfile.lastname);
        $('#datepicker').val(data.listResponse[0].voCandidateProfile.birthdate);
        $('#tname').val(data.listResponse[0].voCandidateProfile.contactNumber);
        $('#ename').val(data.listResponse[0].voCandidateProfile.email);
        $('#pname').val(data.listResponse[0].voCandidateProfile.pincode);
        $('#address1').val(data.listResponse[0].voCandidateProfile.address1);
        $('#address2').val(data.listResponse[0].voCandidateProfile.address2);
        $('#gendername').append('<option  selected>' + data.listResponse[0].voCandidateProfile.gender + '</option>');
        $('#country').append('<option  selected>' + data.listResponse[0].voCandidateProfile.country.countryName + '</option>');
        $('#state').append('<option  selected>' + data.listResponse[0].voCandidateProfile.state.stateName + '</option>');
        $('#city').append('<option  selected>' + data.listResponse[0].voCandidateProfile.city.cityName + '</option>');
        $('#Interested').append('<option  selected>' + data.listResponse[0].voCandidateProfile.strength.strengthName + '</option>');
        $('#name-profile').append(data.listResponse[0].voCandidateProfile.firstname);
        $('#email-profile').append(data.listResponse[0].voCandidateProfile.email);

        $('.profile-id').append(data.listResponse[0].userid);
        //profile data
        $('.name-profile1').append(data.listResponse[0].voCandidateProfile.firstname + ' ' + data.listResponse[0].voCandidateProfile.lastname);
        $('.strength-profile').append(data.listResponse[0].voCandidateProfile.strength.strengthName);
        $('#location-profile').append(data.listResponse[0].voCandidateProfile.state.stateName + " - " + data.listResponse[0].voCandidateProfile.city.cityName);
        $('.gender-profile').append(data.listResponse[0].voCandidateProfile.gender);
        $('.date-profile').append(data.listResponse[0].voCandidateProfile.birthdate);
        $('.country-profile').append(data.listResponse[0].voCandidateProfile.country.countryName);
        $('.city-profile').append(data.listResponse[0].voCandidateProfile.city.cityName);
        $('.state-profile').append(data.listResponse[0].voCandidateProfile.state.stateName);
        $('.address-profile').append(data.listResponse[0].voCandidateProfile.address1);
        $('.passport-profile').append(data.listResponse[0].voCandidateProfile.passportdNumber);
        $('.pan-profile').append(data.listResponse[0].voCandidateProfile.panCardNumber);
        $('.adhar-profile').append(data.listResponse[0].voCandidateProfile.addharCardNumber);
        sessionStorage.setItem("galleryPhotoName", data.listResponse[0].voCandidateProfile.galleryPhotoName);
        sessionStorage.setItem("videoName", data.listResponse[0].voCandidateProfile.videoName);
        matchAddValue=data.listResponse[0].matchAdd;

        $("#gallerypic").attr("src", data.listResponse[0].voCandidateProfile.galleryPhotoName);
      
        if((data.listResponse[0].voCandidateProfile.galleryPhotoName)!=null){
        $("#galleryimage").append('<div  class="col-lg-6 col-md-6 col-sm-12 col-xs-12 padding-10"><a data-fancybox="cricket-gallery" id="gallerypic-popup" href="'+data.listResponse[0].voCandidateProfile.galleryPhotoName+'" data-caption="This image has a simple caption"><img id="gallerypic" class="Gal_Image img-responsive"   src="'+data.listResponse[0].voCandidateProfile.galleryPhotoName+'"> </a></div>');
    }
        if((data.listResponse[0].voCandidateProfile.videoName)!=null){
        $("#galleryimage").append('<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 padding-10" id="gallery-video1"><video class="player-video" controls><source src="' + data.listResponse[0].voCandidateProfile.videoName + '" type="video/mp4"></source> </video></div>');
    }

    
 
                
        check60city();
        $('#super-60-city').append('<option  selected>' + data.listResponse[0].voCandidateProfile.preferCity.cityName + '</option>');
        var preferCity_check = $("#super-60-city option:selected").filter(":selected").text();
        if(preferCity_check == "-Select-"){
            $("#super-60-city").attr("disabled", false);
                    }
             else{
              $("#super-60-city").attr("disabled", true);
                 }


        hideSpinner()

        if (data.listResponse[0].voCandidateProfile.agree != null && data.listResponse[0].voCandidateProfile.agree != false) {

            //profile - statistics

            $(".boxscore").css('display', 'block');

            $('.Runes').append(data.listResponse[1].runesScored);
            $('.Highest').append(data.listResponse[1].highestScore);
            $('.Strike').append(data.listResponse[1].strikeRate);
            $('.Out').append(data.listResponse[1].notOuts);
            $('.Ducks').append(data.listResponse[1].dugout);
            $('.fifty').append(data.listResponse[1].total50s);
            $('.hundrend').append(data.listResponse[1].total100s);
            $('.Catches').append(data.listResponse[1].catches);
            $('.Stumping').append(data.listResponse[1].stumpingRunouts);
            $('.given').append(data.listResponse[1].runsgiven);
            $('.Wickets').append(data.listResponse[1].wickets);
            $('.Maiden').append(data.listResponse[1].maidenOvers);
            $('.Extras').append(data.listResponse[1].extras);
            $('.3innings').append(data.listResponse[1].threeWicket);
            $('.5innings').append(data.listResponse[1].fiveWicket);
            $('.Bowling').append(data.listResponse[1].bestBowling);
            $('.moststump').append(data.listResponse[1].mostStumpings);
            console.log(data.listResponse[1].runesScored);
            
        }
       
 
    },
    error: function() {
        hideSpinner();
    //    alert("Error due to slow internet connection");
        console.log("data profile");
    }

});




showSpinner();
$.ajax({
    type: "GET",
    url: baseURL + "strength/1",

    dataType: "json",
    success: function(data) {
        hideSpinner();

        for (i = 0; i < data.listResponse.length; i++) {
            $('#Interested').append('<option value=' + data.listResponse[i].id + '>' + data.listResponse[i].strengthName + '</option>');
        }
    },
    error: function() {
        hideSpinner();
       // alert("Error due to slow internet connection");
        console.log("strength1");
    }

});


$(document).ready(function() {


    showSpinner();
    $.ajax({
        url: baseURL + "profile/" + sessionStorage.getItem("userid"),

        success: function(data) {
           
            hideSpinner();
            var size = 0;
            if(data == null || data == undefined || data == "" || data.listResponse[0] == null || data.listResponse[0] == undefined
            		|| data.listResponse[0].voCandidateMatchList == null || data.listResponse[0].voCandidateMatchList == undefined
            		|| data.listResponse[0].voCandidateMatchList.length == 0){
            	size = 0;
            }else{
            	size = data.listResponse[0].voCandidateMatchList.length;
            }

            if(data.editable == false){
            if (size >= 15) {
            	
                sessionStorage.setItem("addmatch15", "true");
            }
        }else{
        	 sessionStorage.setItem("addmatch15", "false");
        	 $('#packages').modal('hide');
        }

            if( data != "" && data != null && data != undefined 
            		&& data.listResponse[0].voCandidateMatchList != undefined && data.listResponse[0].voCandidateMatchList.length > 0){
                $('#profile-edit-table').DataTable({
                    "processing": true,
                    "info": true,
                    "responsive": true,
                    "destroy": true,
                    "retrieve": true,
                    "stateSave": true,
                    "searching": false,
                    data: data.listResponse[0].voCandidateMatchList,
                    "columns": [
                        { "data": "matchPlayedDate" },
                        { "data": "tournamentType" },
                        { "data": "runsScored" },
                        { "data": "catches" },
                        { "data": "cleanBowled" },


                        // {
                        //     "data": null,
                        //     "render": {},
                        // }
                    ]

                });            	
            }

        
        },
        error: function(error) {
            hideSpinner();
         //   alert("Error due to slow internet connection");
            console.log("profile");
        }
    });


})

// function chnagepassword(){



// }

function logout() {
    sessionStorage.clear();
    location.replace("index.html");
    isLoggedIn = true;
}

function profileedit() {

    var firstName = document.getElementById("fname").value;
    var mobileno = document.getElementById("tname").value;
    var lastname = document.getElementById("sname").value;

    if (firstName.length == 0) {
        $("#error-fname").html("This field is required").show().fadeOut(2000);
        $("#fname").focus();
        return false;
    } else if (lastname.length == 0) {
        $("#error-lname").html("This field is required").show().fadeOut(2000);
        $("#sname").focus();
        return false;
    } else if (mobileno.length == 0) {
        $("#error-mobname").html("This field is required").show().fadeOut(2000);
        $("#error-mobname").focus();
        return false;
    }

    if ($("#agreebox").prop("checked") == true) {

        data6 = {
            "userid": sessionStorage.getItem("userid"),
            "agree": $("#agreebox").prop("checked"),
            "preferCityName": $("#super-60-city option:selected").filter(":selected").text(),
            "first_name": $("#fname").val(),
            "last_name": $("#sname").val(),
            "middle_name": $("#mname").val(),
            "mobile_no": $("#tname").val(),
        };

        var payload6 = JSON.stringify(data6);
        showSpinner();
        $.ajax({
            url: baseURL + 'profile/identityDoc',
            type: "POST",
            dataType: 'JSON',
            contentType: "application/json;charset=utf-8",
            data: payload6,
            success: function(response) {
                hideSpinner();

                if (response.responseCode == 0) {
                    alert("Changes saved successfully");
                    window.location.href = 'profile.html';
                }
                else{
                    alert("Please select Preferred Super 60 City");
                }

            },
            error: function(e) {
                hideSpinner();
             //   alert("Error due to slow internet connection");
                console.log("identityDoc");
            }

        });
    } else {

        alert("Please Accept Disclaimer");
    }
}

$("#profile-picupload").change(function() {
    var ext = $('#profile-picupload').val().split('.').pop().toLowerCase();
    if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
        alert('Invalid File type');
        $("#profile-picupload2").prop("disabled", true);
    } else {
        $("#profile-picupload2").prop("disabled", false);
    }

});

//images profile upload *********************************************************************************
$(document).ready(function() {

    if (sessionStorage.getItem("imgpic") != null) {
        $("#profile-picupload2").attr("disabled", true);
    }



    $("#profile-picupload2").click(function(event) {

        if ($("#profile-picupload").val() == "") {
            alert("Please select file");
            return false;
        }

        //stop submit the form, we will post it manually.
        event.preventDefault();

        // Get form

        var formData = new FormData();
        formData.append('file', $('#profile-picupload')[0].files[0]);
        formData.append('id', sessionStorage.getItem("userid"));
        formData.append('uploadtype', 'profilePic');


        showSpinner();
        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: baseURL + "fileUpload",
            //data: data,
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function(data) {
                hideSpinner();
                if (data.responseCode == 0) {
                    alert("Great! Your Profile Picture is now uploaded");
                    $("#result").text(data);
                    sessionStorage.setItem("profilePhoto", data.path);
                    $("#a").attr("src", data.path);
                } else {
                    alert("You already uploaded profile picture");
                }

            },
            error: function(e) {
                hideSpinner();
                $("#result").text(e.responseText);
             //   alert("Error due to slow internet connection");
                console.log("ERROR : ", e);


            }
        });

    });


    $("#a").attr("src", sessionStorage.getItem("profilePhoto"));

});


$("#uploadpic-file").change(function() {
    var ext = $('#uploadpic-file').val().split('.').pop().toLowerCase();
    if ($.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
        alert('invalid File type');
        $("#uploadpic").prop("disabled", true);
    } else {
        $("#uploadpic").prop("disabled", false);
    }

});


///images photo upload *************************************************************************8
$(document).ready(function() {


    $("#uploadpic").click(function(event) {

        if ($("#uploadpic-file").val() == "") {
            alert("Please select file");
            return false;
        }

        event.preventDefault();


        var formData = new FormData();
        formData.append('file', $('#uploadpic-file')[0].files[0]);
        formData.append('id', sessionStorage.getItem("userid"));
        formData.append('uploadtype', 'photo');



        $("#uploadpic").prop("disabled", true);
        showSpinner();
        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: baseURL + "fileUpload",

            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function(data) {
                hideSpinner();
                if (data.responseCode == 0) {
                    $("#result").text(data);
                    // sessionStorage.setItem("imgpic", data.path);
                    alert("Your file has been successfully uploaded.Now you can view it in the galllery");
                } else {
                    alert("You already uploaded file");
                }

            },
            error: function(e) {
                hideSpinner();
                $("#result").text(e.responseText);
             //   alert("Error due to slow internet connection");
                console.log("ERROR : ", e);


            }
        });

    });


});

///images video upload *******************************************************************
$(document).ready(function() {

    $("#uploadvideo").click(function(event) {

        if ($("#uploadvideo-file").val() == "") {
            alert("Please select file");
            return false;
        }
        var formData = new FormData();
        formData.append('file', $('#uploadvideo-file')[0].files[0]);
        formData.append('id', sessionStorage.getItem("userid"));
        formData.append('uploadtype', 'video');

        $("#uploadvideo").prop("disabled", true);
        showSpinner();
        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: baseURL + "fileUpload",
            //data: data,
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function(data) {
                hideSpinner();
                if (data.responseCode == 0) {
                    $("#result").text(data);
                    sessionStorage.setItem("imgpic", data.path);
                    alert("Your file has been successfully uploaded.Now you can view it in the galllery");
                } else {
                    alert("You already uploaded file");
                }

            },
            error: function(e) {
                hideSpinner();
                $("#result").text(e.responseText);
             //   alert("Error due to slow internet connection");
                console.log("ERROR : ", e);

            }
        });

    });

});
var arrayExtension = ['mp4', 'avi'];
$("#uploadvideo-file").bind('change', function() {
    filename = getNameFromPath(this.files[0].name);
    $("#uploadvideo").attr('disabled', checkFileFormat(filename, arrayExtension));
});
/* CHECK FILE FORMAT */
function checkFileFormat(file, arrayExtensions) {
    if (!arrayExtensions.length == 0) {
        var ext = file.substr((file.lastIndexOf('.') + 1));
        //console.log(ext);
        $.each(arrayExtensions, function(i, v) {
            console.log(i);
            flag = (v == ext);
            if (flag == true) {
                return false;
            }
        });
        // console.log(flag);

        if (flag == false) { // not allowed
            $("#uploadvideo").attr('disabled', true);
            alert('Alert! Wrong File Format You can upload only ' + arrayExtensions.join(',') + ' extension file');
            return true;
        } else { // extension allowed
            return false;
        }

    }
}
//get file path from client system
function getNameFromPath(strFilepath) {
    var objRE = new RegExp(/([^\/\\]+)$/);
    var strName = objRE.exec(strFilepath);

    if (strName == null) {
        return null;
    } else {
        return strName[0];
    }
}
$(document).ready(function() {

    $("#profilepic").attr("src", sessionStorage.getItem("profilePhoto"));
 
});


  function check60city(){
    showSpinner();
    $.ajax({
        type: "GET",
        url: baseURL + "preferCity",

        dataType: "json",
        success: function(data) {
            hideSpinner();
            for (i = 0; i < data.listResponse.length; i++) {
                if (data.listResponse[i].cityName == $("#city option:selected").filter(":selected").text()) {
                    $('#super-60-city').append('<option  selected>' + data.listResponse[i].cityName + '</option>');
                    sessionStorage.setItem("prefer_city",data.listResponse[i].cityName);
                    $("#super-60-city").prop("disabled", true);
                } else {
                    $('#super-60-city').append('<option value=' + data.listResponse[i].id + '>' + data.listResponse[i].cityName + '</option>');
                }
            }
        },
        error: function() {
            hideSpinner();
          //  alert("Error due to slow internet connection");
            console.log("preferCity");
        }
    });
  }
    


function profileedit11() {

    sessionStorage.setItem("editprofile", "true");
    location.replace("profile-edit.html");

}


function profileedit_packages() {
    $('#packages').modal('show');
}

function checkforDisclaimer(){
	
	if(matchAddValue==true)
	{
		$("#Statistics").modal('show');
		
	}else{
		$("#myModal").modal('show');
	}
	
}