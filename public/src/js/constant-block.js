$(document).ready(function() {

    if (sessionStorage.length == 0) {

        window.location.href = 'login.html';

        return;
    }
    showSpinner();
    $.ajax({
        url: baseURL + 'login/loginCandidate',
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify({ "username": window.atob(sessionStorage.getItem("username")), "password": window.atob(sessionStorage.getItem("password")) }),
        dataType: 'JSON',
        success: function(data, status, xhr) {
            hideSpinner();

            if (data.responseCode == 0) {
                $(".header-hidden").css('display', 'none');
                $(".header-profile").css('display', 'inline-block');
                

                //do nothing
            } else {
                window.location.href = 'login.html';
                $(".header-hidden").css('display', 'block');
            }
        },

        error: function(error) {
            $(".header-hidden").css('display', 'block');
            console.log('Error in /loginCheck service' + error);
            window.location.href = 'login.html';
        }
    });
});