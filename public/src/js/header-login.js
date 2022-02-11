function headerLogin(isFromHTML) {
    document.addEventListener('contextmenu', event => event.preventDefault());

    showSpinnerLogin();
    $.ajax({
        url: baseURL + 'login/loginCandidate',
        type: "POST",
        contentType: 'application/json; charset=UTF-8',
        async: false,
        data: JSON.stringify({ "username": window.atob(sessionStorage.getItem("username")), "password": window.atob(sessionStorage.getItem("password")) }),
        dataType: 'JSON',
        success: function(data, status, xhr) {

            if (data.responseCode == 0) {
                hideSpinnerLogin();
                isLoggedIn = false;
                $("#tempbox").modal('hide');

                //temp end  
                $(".header-hidden").css('display', 'none');
                $(".bt-header").css('display', 'none');
                $(".bt-header1").css('display', 'none');
                $(".bt-header2").css('display', 'none');
            

                $.sessionTimeout({
                    // keepAliveUrl: 'profile.html',
                    logoutUrl: 'login.html',
                    warnAfter: 900000,
                    redirAfter: 940000,
                    // onStart: function() {

                    // },
                    // onWarn: function() {

                    // },
                    onRedir: function(opt) {

                        sessionStorage.clear();
                        window.location = opt.logoutUrl;
                    }
                })


            } else {
                hideSpinnerLogin();
                $(".header-profile").css('display', 'none');
           

            }

        },

        error: function(error) {
            hideSpinnerLogin();
            alert("Error due to slow internet connection");
            console.log('Error in /loginCheck service' + error);

        }
    });
}