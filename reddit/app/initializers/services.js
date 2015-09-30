export function initialize(container, application) {
  // application.register('service:session', application.session);
  // application.register('service:api', application.api);

  //inject into routes
  application.inject('route', 'session', 'service:session');
  application.inject('route', 'api', 'service:api');

  //inject into services
  application.inject('service:api', 'session', 'service:session');
}

export default {
  name: 'services',
  initialize: initialize
};