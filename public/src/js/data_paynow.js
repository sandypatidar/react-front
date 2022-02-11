$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: baseURL + "profile/" + sessionStorage.getItem("userid"),

        dataType: "json",
        success: function(data) {
            $('#firstname').val(data.listResponse[0].voCandidateProfile.firstname);
            $('#email').val(data.listResponse[0].voCandidateProfile.email);
            $('#phone').val(data.listResponse[0].voCandidateProfile.contactNumber);
            $('#orderaddress').val(data.listResponse[0].voCandidateProfile.city.cityName);
        },
        error: function() {
            hideSpinner();
            alert("Error due to slow internet connection");
        }

    });
});