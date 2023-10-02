<!-- Greetr.js -->

When given a first name, last name and a optional language, it generates formal and informal greetings, that I can use throughout my app.
It supports English and Spanish languages.
This library is reusable and easy to use (someone else can use it in their app).
Even though it's a library, it supports jQuery.
It uses G$ as a shorthand for Greetr (similar to jQuery's $).
Someone can pass greetr in HTML selector and it will update the HTML with the greeting.

To make code safe, the new execution context is created for our entire library, so that it doesn't interfere with other libraries.

<!-- another way to declare the initial function -->

(function (global, $) {

    class Greetr {
        constructor(firstName, lastName, language) {
            return new Greetr.init(firstName, lastName, language);
        }
        static init(firstName, lastName, language, { }) {
        }
    }


})(window, jQuery);

// ==============================

When typing:

let g = G$('John', 'Doe');

user has object returned and G$ points to the Greetr function.
Greetr function returns Greeter.init function, which creates a new object and sets the values of the properties.

This proptotype makes sure, that all the objects created with Greetr.init function will point to the same prototype with all the methods.

## Adding jQuery support:

We need to add a method that accepts a jQuery selector and updates the value of the selector with the greeting.





