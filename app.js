// get a new object (the architecture allows us to not have to use the 'new' keyword here)
let g = G$('Jan Jozef', 'Wojcik');

// use our chainable methods
g.greet().setLang('en').greet(true).log() // chainable methods

// let's use our object on the click of the login button
$('#login').click(function () {

    // create a new 'Greetr' object (let's pretend we know the name from the login)
    let loginGreetr = G$('Jan', 'Wojcik');

    // hide the login on the UI (screen);
    $('#logindiv').hide();

    // set the language based on what is chosen in the select box, then update that h1 and finally log in to the console 
    // (fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well)
    loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});