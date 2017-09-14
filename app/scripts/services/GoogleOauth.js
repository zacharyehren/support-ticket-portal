(function() {
  function GoogleOauth() {

    var GoogleOauth = {};
    var userObject;
    var profile;

    function onSignIn(googleUser) {
      profile = googleUser.getBasicProfile();
      userObject = {
        name: profile.getName(),
        email: profile.getEmail()
      };
      GoogleOauth.userObject = userObject;
    };


    GoogleOauth.signOut = function() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        console.log('User signed out.');
      });
    }




    window.onSignIn = onSignIn;

    return GoogleOauth;
    };

    angular
      .module('capstone')
      .factory('GoogleOauth', [GoogleOauth]);
  })();