// JS by Dan Høegh
// UCN MMD 2020

// No options are set, default options will be used
videojs('video2', null); 


// Setting options in a json object
let options = {
    "controls": false, 
    "autoplay": true, 
    "preload": "auto", 
    "muted": true
};

// try the different json-objects here
videojs('video2', options);

// If you want to trigger some code when the player is ready
videojs('video2').on('ready', function() {
  this.addClass('my-example'); 
  // adds the class name "my-example" when videojs is loaded and ready
});

