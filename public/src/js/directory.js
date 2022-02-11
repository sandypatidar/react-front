/*city sate country */

$(document).ready(function() {



    $.ajax({
        type: "GET",
        url: baseURL + "strength/1",
        dataType: "json",
        success: function(data) {


            for (i = 0; i < data.listResponse.length; i++) {
                for (j = 0; j < 4; j++) {
                    $('#Interested-drop').append('<option value=' + data.listResponse[i][j].id + '>' + data.listResponse[i][j].strengthName + '</option>');
                }
            }
        },
        error: function() {
            hideSpinner();
            alert("Error due to slow internet connection");
            Console.log("Strength");
        }
    });




    $("#country").val($("#country option:first").val());

    $.ajax({
        type: "GET",
        url: baseURL + "country",
        dataType: "json",
        success: function(data) {


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


    $('#country').select2({}).on("change", function(e) {


        $('#state').find('option').remove().end().append('<option value="0">Select</option>').val('0');
        $('#city').find('option').remove().end().append('<option value="0">Select</option>').val('0');

        $.ajax({
            type: "GET",
            url: baseURL + "state/" + $(this).val(),
            dataType: "json",
            success: function(data) {

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
        console.log($(this).val());


        $.ajax({
            type: "GET",
            // url: baseURL +"city/" + $(this).val(),
            url: baseURL + "city/" + $(this).val(),
            dataType: "json",
            success: function(data) {

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





    filterData = {
        "countryId": 0,
        "stateId": 0,
        "cityId": 0,
        "strengthId": 0,
        "keySearch": ""
    };


    $("#search-directory").keyup(function() {
        filterData = {
            "countryId": "0",
            "cityId": "0",
            "stateId": "0",
            "strengthId": "0",
            "keySearch": $("#search-directory").val(),

        };

        getDirectory(filterData);

    })




    $("#Interested-drop").on('change', function(e) {


        filterData = {
            "countryId": $("#country").val(),
            "stateId": $("#state").val(),
            "cityId": $("#city").val(),
            "strengthId": $("#Interested-drop").val(),
            "keySearch": $("#search-directory").val(),
        };
        getDirectory(filterData);
    });

    $("#country").on('change', function(e) {
        // Access to full data
        //console.log($(this).select2('data'));
        // console.log($("#Interested-drop").val());
        filterData = {
            "countryId": $("#country").val(),
            "stateId": 0,
            "cityId": 0,
            "strengthId": $("#Interested-drop").val(),
            "keySearch": $("#search-directory").val()
        };
        getDirectory(filterData);
    });

    $("#state").on('change', function(e) {
        // Access to full data
        //console.log($(this).select2('data'));
        // console.log($("#Interested-drop").val());
        filterData = {
            "countryId": $("#country").val(),
            "stateId": $("#state").val(),
            "cityId": 0,
            "strengthId": $("#Interested-drop").val(),
            "keySearch": $("#search-directory").val()
        };
        getDirectory(filterData);
    });

    $("#city").on('change', function(e) {
        // Access to full data
        //console.log($(this).select2('data'));
        // console.log($("#Interested-drop").val());
        filterData = {
            "countryId": $("#country").val(),
            "stateId": $("#state").val(),
            "cityId": $("#city").val(),
            "strengthId": $("#Interested-drop").val(),
            "keySearch": $("#search-directory").val()
        };
        getDirectory(filterData);
    });

    function getDirectory(filterJson) {
        console.log(filterJson);
        $('#directory-table').DataTable().clear().destroy();
        showSpinner();
        $.ajax({
            url: baseURL + 'directory/getDirectory',
            type: "POST",
            dataType: 'JSON',
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(filterData),
            success: function(data) {
                hideSpinner();
                $("#next-card").empty();
                var i,j;
                var x =0;
                for(i=0;i<data.listResponse.length;i++){
                    for(j=0;j<data.listResponse[i].length;j++){
                        console.log(data.listResponse[i][j]);
                        x++;
                    $('#next-card').append('<div class="col-md-3 col-sm-4"><div class="card rankingss"><div class="ranking-directory"><span class="ranking-no">' + x + '.</span></div> <img style="height: 190px; width: 100%;object-fit: cover;" src="' + data.listResponse[i][j].profilePhotoName + '" alt="Avatar" style="width:100%"> <div  class="text-info-directory"><h4>Name: <span class="info-directory-card">' + data.listResponse[i][j].firstname + '</span></h4> <h4>Date of Birth: <span>' + data.listResponse[i][j].birthdate + '</span></h4> <h4>Skill: <span class="info-directory-card" >' + data.listResponse[i][j].strengthName + '</span></h4><h4> City: <span class="info-directory-card">' + data.listResponse[i][j].cityName + '</span></h4> <h4>Points: <span class="info-directory-card" style="color:red">' + data.listResponse[i][j].rank + '*</span></h4></div><a onclick="onViewProfileClick(event)" class="btn btn-primary btn-block" id="view_' + data.listResponse[i][j].id + '">View Profile</a></div</div>');
                    
                }
                }
                for (i = 0; i < data.listResponse.length; i++) {
                    // console.log(data.listResponse[i].userid);
                    // sessionStorage.setItem("view", data.listResponse[i].userid);
                    
                }
            },
            error: function() {
                hideSpinner();
                alert("Error due to slow internet connection");
                Console.log("getDirectory");
            }

        });

    }

    getDirectory();
    headerLogin(false);
    $("#tempbox").modal({ // wire up the actual modal functionality and show the dialog
        "backdrop": "static",
        "keyboard": true,
        "show": isLoggedIn // ensure the modal is shown immediately

    });
});



$("#tempbox").on("hide", function() { // remove the event listeners when the dialog is dismissed
    $("#tempbox a.btn").off("click");
});

function regtemp() {
    location.replace("register.html")
}

function logtemp() {
    location.replace("login.html")
}

$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('#directory-table tfoot th').each(function() {
        var title = $(this).text();
        $(this).html('<input type="text" class="search-box" placeholder="Search ' + title + '" />');
    });

    // DataTable
    var table = $('#directory-table').DataTable();

    // Apply the search
    table.columns().every(function() {
        var that = this;

        $('input', this.footer()).on('keyup change clear', function() {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });
});

 $(document).ready(function() {
     var t = $('#directory-table').DataTable({

         "order": [
             [1, 'asc']
         ]
     });

     t.on('order.dt search.dt', function() {
         t.column(0, {
             search: 'applied',
             order: 'applied'
         }).nodes().each(function(cell, i) {
             cell.innerHTML = i + 1;
         });
     }).draw();
 });

function onViewProfileClick(e) {

    var viewprofile = e.target.id.split("_")[1];
    sessionStorage.setItem("view",viewprofile);
    location.replace("profileview.html");
}