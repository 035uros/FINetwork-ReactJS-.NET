var UserProfile = (function() {
  
    var getUser = function(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
            }
        if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);// pull this from cookie/localStorage
        }
        }
        return "";
    };
  
    var setUser = function(name) {
        document.cookie = "user_name = " + name; // Also set this in cookie/localStorage
    };

    var setRola = function(name) {
      document.cookie = "rola = " + name; // Also set this in cookie/localStorage
  };

    var setAuth = function() {
        document.cookie = "authorized = true"; // Also set this in cookie/localStorage
    };

    var unsetAuth = function() {
      document.cookie = "authorized = false"; // Also set this in cookie/localStorage
  };

    var setUni = function(uni) {
      document.cookie = "uni = " + uni; // Also set this in cookie/localStorage
  };

  var setSmer = function(smer) {
    document.cookie = "smer = " + smer; // Also set this in cookie/localStorage
};
  
    return {
      getUser: getUser,
      setUser: setUser,
      setAuth: setAuth,
      unsetAuth: unsetAuth,
      setUni: setUni,
      setSmer: setSmer,
      setRola: setRola
    }
  
  })();
  
  export default UserProfile;