import session from 'express-session';
import flash from 'connect-flash';

export default class FlashMiddleware {
    #app
    #sessionSecret

    constructor(app) {
        this.#app = app
        this.#sessionSecret = process.env.SESSION_SECRET || 'fallback-secret-key'
    }

    init() {
        this.#validateSessionSecret()
        this.#app.set('trust proxy', 1)
        this.#configureSession()
        this.#configureFlash()
        this.#exposeFlashToViews()
    }

    #validateSessionSecret() {
        if (this.#sessionSecret === 'fallback-secret-key') {
            console.warn('Missing SESSION_SECRET in .env file.')
        }
    }

    #configureSession() {
        this.#app.use(
            session({
                secret: this.#sessionSecret,
                resave: false,
                saveUninitialized: false,
                cookie: {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'lax',
                    maxAge: 1000 * 60 * 60
                }
            })
        )
    }

    #configureFlash() {
        this.#app.use(flash())
    }

    #exposeFlashToViews() {
        this.#app.use((req, res, next) => {
            res.locals.flash = {
                success: req.flash('success'),
                error: req.flash('error')
            }
            next()
        })
    }
}