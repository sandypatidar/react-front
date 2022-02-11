var current_date;


function datechange() {
    var start = $('#datepicker').datepicker('getDate');

    var startdate = new Date(start);
    var endDate = new Date(current_date);

    var Difference_In_Time = endDate.getTime() - startdate.getTime();

    var year = Difference_In_Time / (1000 * 3600 * 24 * 365);




    console.log(startdate);
    console.log(endDate);
    console.log(Difference_In_Time);

    year = year.toFixed(0);
    year = parseInt(year);
    console.log(year);

    if (year < 15) {
        $('#category1').val(1);
    } else if (year >= 15 && year < 19) {
        $('#category1').val(2);
    } else if (year >= 19 && year < 23) {
        $('#category1').val(3);
    } else {
        $('#category1').val(4);
    }

    // var age_year = Math.floor((end - start) / 31536000000);
    // var age_month = Math.floor(((end - start) % 31536000000) / 2628000000);
    // var age_day = Math.floor((((end - start) % 31536000000) % 2628000000) / 86400000);
    // console.log(year.toFixed(0));

}
$(document).ready(function() {
    $("#skillset").change(function() {
        var selectedVal = $('option:selected', this).val();
        if (selectedVal == 11) {
            $('#clubid').css('display', 'block');
        } else {
            $('#clubid').css('display', 'none');
        }
    });
})
showSpinner();
$.ajax({
    type: "GET",
    url: baseURL + "strength/1",

    dataType: "json",
    success: function(data) {
        hideSpinner();
        for (i = 0; i < data.listResponse.length; i++) {
            for (j = 0; j < 4; j++) {
                $('#Interested-drop').append('<option value=' + data.listResponse[i][j].id + '>' + data.listResponse[i][j].strengthName + '</option>');
            }
        }

        console.log(data.systemDate);
        current_date = data.systemDate;

        var splitDate = current_date.split('-');

        current_date = splitDate[2] + "-" + splitDate[1] + "-" + splitDate[0];


        // $('#Interested-drop').append('<option value=' + data.listResponse[i].id + '>' + data.listResponse[i].strengthName + '</option>');


    },
    error: function() {
        hideSpinner();
        alert("Error due to slow internet connection");
        Console.log("Interested");
    }

});

showSpinner();
$.ajax({
    type: "GET",
    url: baseURL + "strength/2",

    dataType: "json",
    success: function(data) {
        hideSpinner();

        for (i = 0; i < data.listResponse.length; i++) {
            for (j = 0; j < 7; j++) {
                $('#skillset').append('<option value=' + data.listResponse[i][j].id + '>' + data.listResponse[i][j].strengthName + '</option>');
            }
        }
    },
    error: function() {
        hideSpinner();
        alert("Error due to slow internet connection");
        Console.log("strength2");
    }
})