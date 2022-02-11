// var baseURL = "http://192.168.4.187:8082/"

function login() {



    data3 = {

        "username": $("#email").val(),
        "password": $("#pwd").val()
    };
    var payload3 = JSON.stringify(data3);
    showSpinner();
    $.ajax({
        url: baseURL + 'login/loginCandidate',
        type: "POST",
        dataType: 'JSON',
        contentType: "application/json;charset=utf-8",
        data: payload3,
        success: function(response) {
            hideSpinner();
            if (response.responseCode == 0) {
                sessionStorage.setItem("userid", response.listResponse[0].userid);
                sessionStorage.setItem("username", window.btoa(response.listResponse[0].voCandidate.email));
                sessionStorage.setItem("password", window.btoa(response.listResponse[0].voCandidate.password));
                sessionStorage.setItem("profilePhoto", response.listResponse[0].profilePhoto);
                // sessionStorage.setItem("userid", response.listResponse[0].userid);
                sessionStorage.setItem("roletype", response.listResponse[0].roleName);
                if (localStorage.getItem('isfirst') == null) {
                    localStorage.setItem('isfirst', 'true');
                    location.replace("profile-edit.html");
                } else {
                    location.replace("profile.html");
                }
            } else {
                alert("Invalid Username and Password");
            }

        },
        error: function() {
            hideSpinner();
            alert("Error due to slow internet connection");
            Console.log("loginCandidate");
        }

    });

}


function resetpass() {

    data6 = {

        "email": $("#email-name").val()
    };
    var payload6 = JSON.stringify(data6);
    showSpinner();
    $.ajax({
        url: baseURL + 'login/forgotPassword',
        type: "POST",
        dataType: 'JSON',
        contentType: "application/json;charset=utf-8",
        data: payload6,
        success: function(data) {
            hideSpinner();

            if (data.responseCode == 114) {
                alert("Password has been sent to your registered email id.");
                location.reload();

            } else {
                alert("Your Email id is not registered.");

            }

        },
        error: function() {
            hideSpinner();
            alert("Error due to slow internet connection");
            Console.log("forgotPassword");
        }

    });

}




$(".enter1").keyup(function(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
        login();
    }
});



$(".enter7").bind('keypress', function(e) {
    if (e.which === 13) { // return
        resetpass();
    }
});