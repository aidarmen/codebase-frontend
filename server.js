var dev = true;
// process.env.NODE_ENV == "development"
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const express = require('express')
const bodyParser = require('body-parser')

const app = new express()
app.set('port', process.env.PORT || 5555)


app.use(bodyParser.json({ limit: '100mb' }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))

app.use('/images/', express.static('assets/img'))
app.use('/fonts/', express.static('assets/fonts'))
app.use('/styles/', express.static('assets/styles'))

app.use('/', express.static('assets/data'))

app.use('/dist/',(req, res, next) => {
	// if(req.url == '/bundle_main.js'){
	// 	req.url = req.url + '.gz'
	//   	res.set('Content-Encoding', 'gzip')
	// }
  	next()
}, express.static('dist'))


if(dev){
	const front = 'main';
	const config = require('./front_' + front + '/webpack.' + front + '.dev')
	const compiler = webpack(config)
	app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
	app.use(webpackHotMiddleware(compiler))
	
	app.get('*', function(req, res) {
	
		var _url = req.url.split('/')
		
			res.sendFile(__dirname + '/front_main/dev_teacher_index.html')
		
		
	})
} else {

	app.get('*', function(req, res) {
		var _url = req.url.split('/')
		
	})
		
}


app.post('/api/request/advise', function(req, res) {
	if(req.body.name && req.body.phone && req.body.email){
		res.status(200).end()
	} else {
		res.status(400).end()
	}
})


app.post('/api/request/course', function(req, res) {
	if(req.body.name && req.body.phone && req.body.email){
		res.status(200).end()
	} else {
		res.status(400).end()
	}
})



app.listen(app.get('port'), function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info('Web server is listening on port %s. Go to http: //localhost:%s/ and use it. Thks!', app.get('port'), app.get('port'))
  }
})
