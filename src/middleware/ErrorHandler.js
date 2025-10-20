export default class ErrorHandler {
    constructor(err, req, res, next) {
        this.err = err;
        this.req = req;
        this.res = res;
        this.next = next;
    }

    handle() {
        console.error(this.err);

        const status = this.err.status || 500;
        const message = this.err.message || 'Internal Server Error';

        this.req.flash('error', message);

        const redirectUrl = this.req.get('Referrer') || '/';
        this.res.redirect(redirectUrl);
    }
}