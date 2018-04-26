import express from 'express';
import next from 'next';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import useragent from 'express-useragent';

const dev = process.env.NODE_ENV !== 'production';

require('dotenv').config();

const { env } = process;

const port = env.PORT ? parseInt(env.PORT, 10) : 3000;

const server = express();

server.use(cookieParser());
server.use(useragent.express());
if (!dev) {
	server.use(compression());
}

const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
	server.get('/promo/:useragent?', (req, res) => {
		const requestAgent = req.useragent.isMobile ? 'mobile' : 'desktop';
		if (requestAgent !== req.params.useragent) {
			res.redirect(`/promo/${requestAgent}`);
		}
		return app.render(req, res, '/promo', { requestAgent });
	});
	server.get('*', (req, res) => handle(req, res));
	server.listen(port, err => {
		if (err) throw err;
		console.log(`> Ready on ${port}`);
	});
});
