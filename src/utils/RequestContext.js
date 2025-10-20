export default class RequestContext {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    render(view, data) {
        this.res.render(view, data);
    }

    redirect(path, flashMessage) {
        if (flashMessage) this.req.flash('success', flashMessage);
        this.res.redirect(path);
    }

    fail(error) {
        this.next(error);
    }
}
