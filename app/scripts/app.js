/*global Ember */

var App = window.App = Ember.Application.create();

/*
 * Init Ember Data store
 */
App.Store = DS.Store.extend({
    revision: 12
});

/* Order and include as you please. */
// require('app/scripts/routes/*');
// require('app/scripts/controllers/*');
// require('app/scripts/models/*');
require('app/scripts/models/form');
// require('app/scripts/views/*');

App.Router.map(function () {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function () {
    return App.Form.createRecord({});
  }
});
