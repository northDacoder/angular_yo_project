'use strict';
 
app.factory('Auth',
  function ($firebaseSimpleLogin, 'https://yoyo.firebaseio.com/', $rootScope) {
    var ref = new Firebase('https://yoyo.firebaseio.com/');
 
    var auth = $firebaseSimpleLogin(ref);
 
    var Auth = {
      register: function (user) {
        return auth.$createUser(user.email, user.password);
      },
      signedIn: function () {
        return auth.user !== null;
      },
      logout: function () {
        auth.$logout();
      }
    };
 
    $rootScope.signedIn = function () {
      return Auth.signedIn();
    };
 
    return Auth;
  });