
(function (global, $) {

    // 'new' an object
    const Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    // hidden within the scope of the IIFE and never directly accessible
    // thanks to closure, this variable is accessible inside this IIFE, but not outside (it is hidden to any other developers from changing it)
    const supportedLangs = ['en', 'pl'];

    // three below values are hidden from being accidentially changed by other developers

    // informal greetings
    const greetings = {
        en: 'Hello',
        pl: 'Cześć'
    };

    // formal greetings
    const formalGreetings = {
        en: 'Greetings',
        pl: 'Dzień dobry'
    };

    // logger messages
    const logMesssages = {
        en: 'Logged in',
        pl: "Zalogowany"
    }

    // prototype holds methods (to save memory space), which do not support arrow function! (because of 'this' keyword)
    Greetr.prototype = {

        // 'this' refers to the calling object at execution time
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        },

        validate: function () {

            // check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language"
            }
        },

        // retrieve messages from object by referring to properties using [] syntax
        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },


        // chainable methods return their own containing object
        greet: function (formal) {
            let msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time,
            // makes the method chainable
            return this;
        },

        log: function () {
            if (console) {
                console.log(logMesssages[this.language] + ': ' + this.fullName());
            }

            // make chainable
            return this;
        },

        setLang: function (lang) {

            // set the language
            this.language = lang;

            // validate
            this.validate();

            // make chainable
            return this;
        },
        HTMLGreeting: function (selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }
            if (!selector) {
                throw 'Missing jQuery selector'
            }

            // determine the message
            let msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            // inject the message in the chosen place in the DOM
            $(selector).html(msg);
            // this makes it chainable
            return this;
        }

    };

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function (firstName, lastName, language) {

        const self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();
    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype; // any object created with this function should actually poits here for its prototype chain

    // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
    global.Greetr = global.G$ = Greetr;

})(window, jQuery);
// IIFE invokdes global object and jQuery object
