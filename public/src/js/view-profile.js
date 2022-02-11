$(document).ready(function() {

    showSpinner();
    $.ajax({
        type: "GET",
        url: baseURL + "profile/" + sessionStorage.getItem("view"),
        dataType: "json",
        success: function(data) {

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


            if (data.listResponse[0].voCandidateProfile.galleryPhotoName != null) {
                $("#galleryimg-view").css("display", "block");

            }
            if (data.listResponse[0].voCandidateProfile.videoName != null) {

                $("#galleryvideo1-view").css("display", "block");
            }
            $("#galleryvideo-view").append('<source src="' + data.listResponse[0].voCandidateProfile.videoName + '" type="video/mp4"></source>');
            sessionStorage.setItem("gallerypic-popup-view", data.listResponse[0].voCandidateProfile.galleryPhotoName);
            $("#profilepic-view").attr("src", data.listResponse[0].voCandidateProfile.profilePhotoName);
            $("#gallerypic-view").attr("src", data.listResponse[0].voCandidateProfile.galleryPhotoName);
            $("#gallerypic-popup-view").attr("href", sessionStorage.getItem("gallerypic-popup-view"));





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
            console.log(data.listResponse[0].runesScored);
            $(".boxscore").css('display', 'block');
            hideSpinner();
        },
        error: function() {
            hideSpinner();
            alert("Error due to slow internet connection");
            console.log("viewprofiledata");
        }
    });


});