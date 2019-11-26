$(document).ready(function(){
    $("#ch4form").submit(function(){
        var subm = true;
        if ($("#fullname").val() == ""){
            $("#nameerrormsg").show();
            subm=false;
        }
        else{
            $("#nameerrormsg").hide();
        }
        if ($("#streetaddr").val() == ""){
            $("#addrerrormsg").show();
            subm=false;
        }
        else{
            $("#addrerrormsg").hide();
        }
        return subm;
    });
});