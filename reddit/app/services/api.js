import Ember from 'ember';
import Ajax from 'reddit/utils/ajax';

var domain = 'https://oauth.reddit.com/',
  base = domain + 'api/',
  token = function() {
    return 'Bearer ' + localStorage.authToken;
  },
  auth = function() {
    return {
      headers: {
        'Authorization': token()
      }
    };
  };

export default Ember.Service.extend({
  account: {
    getMe: function() {
      return new Ajax().get(base + 'v1/me', null, auth());
    }
  },
  front: {
    get: function() {
      return new Ajax().get(domain, null, auth());
    }
  }
});
