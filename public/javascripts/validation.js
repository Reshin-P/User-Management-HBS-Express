// function validateForm(){
//     var valid = $("#signUpForm").validate({
//         rules:{
//             Firstname:{
//                 required: true,
//                 maxlength: 30,
//                 lettersonly: true,
//                 normalizer: function(value) {
//                     return $.trim(value);
//                 }
//             },
//             LastName:{
//                 required: true,
//                 maxlength: 30,
//                 lettersonly: true,
//                 normalizer: function(value) {
//                     return $.trim(value);
//                 }
//             },
//             Email:{
//                 required: true,
//                 email: true,
//                 minlength: 5,
//                 normalizer: function(value) {
//                     return $.trim(value);
//                 }
//             },
//             Password:{
//                 required: true,
//                 minlength: 8,
//                 normalizer: function(value) {
//                     return $.trim(value);
//                 }
//             },
//             Confirmpassword: {
//                 required: true,
//                 minlength: 8,
//                 normalizer: function(value) {
//                     return $.trim(value);
//                 },
//                 equalTo: "#password"
//             }
//         }
//     })
//     return valid;
// }

// jQuery.validator.addMethod("lettersonly", function(value, element) {
//     return this.optional(element) || /^[a-z," "]+$/i.test(value);
// }, "Only letters and spaces are allowed");

// function validateForm(){
    //     var valid = $("#signUpForm").validate({
    //         rules:{
    //             Firstname:{
    //                 required: true,
    //                 maxlength: 30,
    //                 lettersonly: true,
    //                 normalizer: function(value) {
    //                     return $.trim(value);
    //                 }
    //             },
    //             LastName:{
    //                 required: true,
    //                 maxlength: 30,
    //                 lettersonly: true,
    //                 normalizer: function(value) {
    //                     return $.trim(value);
    //                 }
    //             },
    //             Email:{
    //                 required: true,
    //                 email: true,
    //                 minlength: 5,
    //                 normalizer: function(value) {
    //                     return $.trim(value);
    //                 }
    //             },
    //             Password:{
    //                 required: true,
    //                 minlength: 8,
    //                 normalizer: function(value) {
    //                     return $.trim(value);
    //                 }
    //             },
    //             Confirmpassword: {
    //                 required: true,
    //                 minlength: 8,
    //                 normalizer: function(value) {
    //                     return $.trim(value);
    //                 },
    //                 equalTo: "#password"
    //             }
    //         }
    //     })
    //     return valid;
    // }
    
    // jQuery.validator.addMethod("lettersonly", function(value, element) {
    //     return this.optional(element) || /^[a-z," "]+$/i.test(value);
    // }, "Only letters and spaces are allowed");
    
    
    // $(document).ready(function(){
    //     validateForm();
    // })
// $(document).ready(function(){
//     validateForm();
// })
