import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ingenious', function() {
    this.route('registro');

    this.route('superadmin', function() {
      this.route('login');
      this.route('dashboard');
      this.route('talleres');
      this.route('boletos');
      this.route('nuevoadmon');
    });
  });

  this.route('intenious', function() {});
});

export default Router;
