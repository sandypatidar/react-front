// function startExam() {

//     var username_exam = window.btoa(sessionStorage.getItem("username"));
//     var pass_exam = window.btoa(sessionStorage.getItem("password"));
//     //var result = window.open("http://localhost:8080/login.do?userName=praful.nikam@vinsys.com&password=12345678","_blank","width=4000,height=3500");
//     var result = window.open("http://192.168.4.165:8080/login.do?userName=" + username_exam + "&password=" + pass_exam + "", "_self");
//     //window.open("http://www.mydomain.com/mypage.htm", "mywindow", "location=0,menubar=0,status=0,scrollbars=0,width=1000,height=1000");
// }


$(document).ready(function() {
    var username_exam = window.atob(sessionStorage.getItem("username"));
    var pass_exam = window.atob(sessionStorage.getItem("password"));
    $('<form name="LoginForm" id="adminForm" method="post" action="'+baseurlTestmate+'/login.do" class="login-form" onsubmit="return false;" style="display:none" >' +
        '<input type="text" name="userName" value="' + username_exam + '" id="adminUserName">' +
        '<input type="password" name="password" value="' + pass_exam + '" id="adminpassword">' +
        '</form>').appendTo('#examdiv');

});


function startExam() {
    var frm = document.forms[0];
    frm.submit();
}