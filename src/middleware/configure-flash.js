import session from 'express-session';
import flash from 'connect-flash';

export default function configureFlash(app) {
  app.use(session({
    secret: process.env.SESSION_SECRET || 'supersecretkey',
    resave: false,
    saveUninitialized: true
  }));

  app.use(flash());

  app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
  });
}
