//custom jquery vaidation methods
jQuery.validator.addMethod("lettersonlys", function(value, element) {
    return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
}, "Letters only please");

jQuery.validator.addMethod("validPhoneNumber", function(value, element) {
    return this.optional(element) || /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(value);
}, "enter valid phone number!");

jQuery.validator.addMethod("validString", function(value, element) {
    return this.optional(element) || /^[a-zA-Z0-9 !@#$&*()\-_.,?]+$/.test(value);
}, "Enter valid string");

//for adding validation css to input field
jQuery.validator.setDefaults({
    highlight: function(element) {
        jQuery(element).closest('.form-control').addClass('is-invalid');
    },
    unhighlight: function(element) {
        jQuery(element).closest('.form-control').removeClass('is-invalid').addClass('is-valid');
    },
    errorElement: 'span',
    errorClass: 'label label-danger',
    errorPlacement: function(error, element) {
        if(element.parent('.form-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});


//start of jquery validation for contact us form
$( document ).ready( function () {
    $( "#contactus_form" ).validate( {
    normalizer: function( value ) {
        return $.trim( value );
    },
    rules: {
        user_name:{
            required: true,
            lettersonlys:true,
			minlength:2,
			maxlength:50
        },
        company_name:{
            required: false,
            validString: true,
            minlength:2,
			maxlength:100,
        },
        user_number: {
			validPhoneNumber:true
		},
        budget: {
            required: false,
		},
		user_email: {
			required: true,
			email: true
		},
    },
    messages: { 
        user_name: {
            required: "Please Enter your Name!",
            lettersonlys: "Only alphabets are allowed",
			minlength:"Min length 2 is allowed",
			maxlength:"Max length 50 is allowed"
        },
        company_name: {
            lettersonlys: "Enter valid Company Name!",
			minlength:"Min length 2 is allowed",
			maxlength:"Max length 50 is allowed"
        },
        user_number: {
			validPhoneNumber: "Enter valid number!",
		},
        budget: {
            required:"",
        },
		user_email:{
			required:"E-mail address is required!",
			email:"Enter valid email address!"
		},
    }
    });
});