$(document).ready(function(){
    $("#btnSent").click(function(){
        var msg = $("#message");
        var name = $("#name");
        var email = $("#email");
        var mobileNumber = $("#number");

        Swal.fire(
            'Испратено!',
            'Успешно испратена порака!',
            'success'
        )

        msg.val("");
        name.val("");
        email.val("");
        mobileNumber.val("");

    })
   
})