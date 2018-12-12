 // Step 1:
      // Use the following link inside the Audio function below:
      // https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90
      var audio = new Audio("raven.mp3");

      //  Step 2: do the following between the --- comments
      //  after 5 seconds, execute the fiveSeconds function
      //  after 10 seconds, execute the tenSeconds function
      //  after 15 seconds, execute the timeUp function
      // ---------------------
      setTimeout(function() {
        fiveSeconds();
      }, 5000);

      setTimeout(function() {
        tenSeconds();
      }, 10000);

      setTimeout(function() {
        timeUp();
      }, 15000);

      // ---------------------


      // Step 3:
      // Fill in the blanks to these functions.
      function fiveSeconds() {
        $("#time-left").append("<h2>About 10 Seconds Left</h2>");
        console.log("10 seconds left");
      };

        // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
        // console log 10 seconds left




      function tenSeconds() {
        $("#time-left").append("<h2>5 Seconds Left</h2>");
        console.log("5 seconds left");
      };

        // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
        // console log 5 seconds left




      function timeUp() {

        // in the element with an id of time-left add an h2 saying Time's Up!
        // console log done
        $("#time-left").append("<h2>Done!</h2>");
        console.log("Done");
        // The following line will play the audio file we linked to above.
        audio.play();

      }
