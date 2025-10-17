export function errorHandler(err, req, res, next) {
    console.error(err);

    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Internal Server Error';

    req.flash('error', errorMessage);

    const redirectUrl = req.get('Referrer') || '/';
    res.redirect(redirectUrl);
}