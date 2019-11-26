$(document).ready(function(){
    $("#ch3form").submit(function(){
        if ($("input[name='fruit']").is(":checked") && $("input[name='standing']").is(":checked")){
            return true;
        }
        else{
            alert("Select a fruit and class standing.");
            return false;
        }
    });
});