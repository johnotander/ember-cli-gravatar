import Ember from 'ember';

export default Ember.Component.extend({
  size: 250,
  email: '',
  alt: '',
  imgClass: '',
  default: '',

  gravatarUrl: function() {
    var email = this.get('email'),
        size = this.get('size'),
        def = this.get('default');

    return '//www.gravatar.com/avatar/' + md5(email) + '?s=' + size + '&d=' + def;
  }.property('email', 'size', 'default'),

  altText: function() {
    return this.get('alt') || this.get('email');
  }.property('alt'),

  imgClass: function() {
    return this.get('imgClass')
  }.property('imgClass')
});
