export function errorHandler(err, req, res, next) {
    console.error(err);

    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    req.flash('error', message);

    const redirectUrl = req.get('Referrer') || '/';
    res.redirect(redirectUrl);
}