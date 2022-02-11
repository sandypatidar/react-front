$('#tname').bind('keyup paste', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});




function changepass() {

    if (($("#password-new").val().length != 0 && $("#password-confirm").val().length != 0) &&
        ($("#password-new").val().length > 7 && $("#password-new").val().length > 7) &&
        $("#password-new").val() == $("#password-confirm").val()) {
        data9 = {
            "username": $("#username-change").val(),
            "oldPassword": $("#password-old").val(),
            "newPassword": $("#password-new").val(),
        };

        var payload7 = JSON.stringify(data9);
        showSpinner();
        $.ajax({
            url: baseURL + 'profile/changePassword',
            type: "POST",
            dataType: 'JSON',
            contentType: "application/json;charset=utf-8",
            data: payload7,
            success: function(response) {
                hideSpinner();
                alert(response.responseMessage);
                if (response.responseCode == 0) {
                    $('#changepassword').modal('hide');
                }

            },
            error: function(e) {
                hideSpinner();
               // alert("Error due to slow internet connection");
                Console.log("changePassword");
            }

        });
    } else {
        alert("New password does not Match");
    }

}


$(document).ready(function() {

    showSpinner();
    $.ajax({
        url: baseURL + 'product/getscorecard/' + sessionStorage.getItem("userid"),
        type: "GET",
        dataType: 'JSON',
        success: function(data) {
            hideSpinner();
            sessionStorage.setItem("resultl1", data.l1marks)
            $('#restult_l1').append(data.l1marks);
            $('#restult_l2').append(data.l2marks);
            $('#exam-details').DataTable({
                "processing": true,
                "info": true,
                "responsive": true,
                "destroy": true,
                "searching": true,
                data: data.responseCode == 0 ? data.listResponse : [],
                "columns": [
                    { "data": "examname" },
                    { "data": "marks" },
                    { "data": "status" },
                    { "data": "given_date" },


                ]

            });
        },
        error: function(e) {
            hideSpinner();
         //   alert("Error due to slow internet connection");
            alert("Score card" + e);
        }

    });
});



$(document).ready(function() {
    showSpinner();
    $.ajax({
        url: baseURL +"/activity/"+ sessionStorage.getItem("userid"),
        type: "GET",
        dataType: 'JSON',
        success: function(data) {
            hideSpinner();
            $('#activity-details').DataTable({
                "processing": true,
                "info": true,
                "responsive": true,
                "destroy": true,
                "searching": true,
                data: data.responseCode == 0 ? data.listResponse : [],
                "columns": [
                    { "data": "activityDate" },
                    { "data": "activityName" },


                ]

            });
        },
        error: function(e) {
            hideSpinner();
          //  alert("Error due to slow internet connection");
            Console.log("activity");
        }

    });
});