$(document).ready(function(){
    $("#signup-controls").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:8

            },
            sname:{
                required:true,
                minlength:4,
                maxlength:8
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
        },
        // messages:{
        //     fname:"Enter atleast 4 character"
        //     }
        // or

        messages:{
            fname:{
                required:"Enter first name",
                minlength:"Enter atleast 4 characters",
                maxlength:"Enter atmost 8 characters"
            }
        }
    })
})