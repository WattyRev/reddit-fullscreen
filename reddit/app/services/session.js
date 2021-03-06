import Ember from 'ember';

export default Ember.Service.extend({
  auth: {
    expires: function() {
      return localStorage.authExpires;
    },
    state: function() {
      return localStorage.authState;
    },
    token: function() {
      return localStorage.authToken;
    },
    needed: function() {
      if(!this.token() || this.expires() < new Date().getTime()) {
        return true;
      }
      return false;
    }
  },
	account: {
		user: function() {
			if(!localStorage.accountUser) {
				return null;
			}
			return JSON.parse(localStorage.accountUser);
  		},
  		preferences: {
			topScope: function() {
				if(!localStorage.preferencesTopScope) {
					return null;
				}
				return localStorage.preferencesTopScope;
			}
		}
  	},
  set: function(property, value) {
    if(typeof value === 'object') {
      localStorage[property] = JSON.stringify(value);
    } else {
      localStorage[property] = value;
    }
  }
});
