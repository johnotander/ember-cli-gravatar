import Ember from 'ember';
import md5 from 'md5';
const {
  $: { ajax },
  RSVP: { Promise },
  Service
} = Ember;


export default Service.extend({
  hasGravatar(email, secure, gravatarHost) {
    if (!email) {
      throw new Error('expecting email');
    }

    const hash = md5(email);

    return new Promise((resolve)=> {
      ajax(`http${secure ? 's': ''}://${gravatarHost}/avatar/${hash}?d=404`, {
        complete: function() {
          resolve(true);
        },
        error: function() {
          resolve(false);
        }
      });
    });
  },

  getImageURL(email, imageSize = 400, def = 'identicon', secure = true) {
    const hash = md5(email);
    const protocol = secure ? 'https' : 'http';
    return protocol + '://www.gravatar.com/avatar/' + hash + '?s=' + imageSize + '&d=' + def;
  },
});
