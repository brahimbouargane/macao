const Ziggy = {
  url: 'http://inertia.ts.test',
  port: null,
  defaults: {},
  routes: {
    'debugbar.openhandler': { uri: '_debugbar/open', methods: ['GET', 'HEAD'] },
    'debugbar.clockwork': { uri: '_debugbar/clockwork/{id}', methods: ['GET', 'HEAD'], parameters: ['id'] },
    'debugbar.assets.css': { uri: '_debugbar/assets/stylesheets', methods: ['GET', 'HEAD'] },
    'debugbar.assets.js': { uri: '_debugbar/assets/javascript', methods: ['GET', 'HEAD'] },
    'debugbar.cache.delete': { uri: '_debugbar/cache/{key}/{tags?}', methods: ['DELETE'], parameters: ['key', 'tags'] },
    'debugbar.queries.explain': { uri: '_debugbar/queries/explain', methods: ['POST'] },
    'sanctum.csrf-cookie': { uri: 'sanctum/csrf-cookie', methods: ['GET', 'HEAD'] },
    home: { uri: '/', methods: ['GET', 'HEAD'] },
    about: { uri: 'about', methods: ['GET', 'HEAD'] },
    dashboard: { uri: 'dashboard', methods: ['GET', 'HEAD'] },
    'profile.edit': { uri: 'dashboard/profile', methods: ['GET', 'HEAD'] },
    'profile.update': { uri: 'dashboard/profile', methods: ['PATCH'] },
    'profile.destroy': { uri: 'dashboard/profile', methods: ['DELETE'] },
    'users.index': { uri: 'dashboard/users', methods: ['GET', 'HEAD'] },
    'users.create': { uri: 'dashboard/users/create', methods: ['GET', 'HEAD'] },
    'users.store': { uri: 'dashboard/users', methods: ['POST'] },
    'users.show': {
      uri: 'dashboard/users/{user}',
      methods: ['GET', 'HEAD'],
      parameters: ['user'],
      bindings: { user: 'id' }
    },
    'users.edit': {
      uri: 'dashboard/users/{user}/edit',
      methods: ['GET', 'HEAD'],
      parameters: ['user'],
      bindings: { user: 'id' }
    },
    'users.update': {
      uri: 'dashboard/users/{user}',
      methods: ['PUT', 'PATCH'],
      parameters: ['user'],
      bindings: { user: 'id' }
    },
    'users.destroy': {
      uri: 'dashboard/users/{user}',
      methods: ['DELETE'],
      parameters: ['user'],
      bindings: { user: 'id' }
    },
    'users.verifyEmail': {
      uri: 'dashboard/users/verifyEmail/{user}',
      methods: ['POST'],
      parameters: ['user'],
      bindings: { user: 'id' }
    },
    'categories.index': { uri: 'dashboard/categories', methods: ['GET', 'HEAD'] },
    'categories.create': { uri: 'dashboard/categories/create', methods: ['GET', 'HEAD'] },
    'categories.store': { uri: 'dashboard/categories', methods: ['POST'] },
    'categories.show': {
      uri: 'dashboard/categories/{category}',
      methods: ['GET', 'HEAD'],
      parameters: ['category'],
      bindings: { category: 'id' }
    },
    'categories.edit': {
      uri: 'dashboard/categories/{category}/edit',
      methods: ['GET', 'HEAD'],
      parameters: ['category'],
      bindings: { category: 'id' }
    },
    'categories.update': {
      uri: 'dashboard/categories/{category}',
      methods: ['PUT', 'PATCH'],
      parameters: ['category'],
      bindings: { category: 'id' }
    },
    'categories.destroy': {
      uri: 'dashboard/categories/{category}',
      methods: ['DELETE'],
      parameters: ['category'],
      bindings: { category: 'id' }
    },
    language: { uri: 'language/{language}', methods: ['GET', 'HEAD'], parameters: ['language'] },
    register: { uri: 'register', methods: ['GET', 'HEAD'] },
    login: { uri: 'login', methods: ['GET', 'HEAD'] },
    'password.request': { uri: 'forgot-password', methods: ['GET', 'HEAD'] },
    'password.email': { uri: 'forgot-password', methods: ['POST'] },
    'password.reset': { uri: 'reset-password/{token}', methods: ['GET', 'HEAD'], parameters: ['token'] },
    'password.store': { uri: 'reset-password', methods: ['POST'] },
    'verification.notice': { uri: 'verify-email', methods: ['GET', 'HEAD'] },
    'verification.verify': { uri: 'verify-email/{id}/{hash}', methods: ['GET', 'HEAD'], parameters: ['id', 'hash'] },
    'verification.send': { uri: 'email/verification-notification', methods: ['POST'] },
    'password.confirm': { uri: 'confirm-password', methods: ['GET', 'HEAD'] },
    'password.update': { uri: 'password', methods: ['PUT'] },
    logout: { uri: 'logout', methods: ['POST'] }
  }
};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
