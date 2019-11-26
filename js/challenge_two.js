$(document).ready(function(){    
    $("#useBilling").click(function(){
        if (this.checked){
            $("#home").val($("#billing").val());
        }
        else {
            $("#home").val("");
        }
    });
});