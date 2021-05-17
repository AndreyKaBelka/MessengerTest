let indexRouter = require('./routes/index');
let conversationsRoute = require('./routes/conversations');
let dataAttrs = require('./routes/dataAttr');
let userRoute = require('./routes/users');
let contactsRoute = require('./routes/contacts')
let companiesRoute = require('./routes/companies');
let subRoute = require('./routes/subscriptions');

function routerConfig(app) {
  app.use('/', indexRouter);
  app.use('/conversations', conversationsRoute);
  app.use('/data_attributes', dataAttrs);
  app.use('/users', userRoute);
  app.use('/contacts', contactsRoute);
  app.use('/companies', companiesRoute);
  app.use('/subscriptions', subRoute);
}

module.exports = routerConfig;