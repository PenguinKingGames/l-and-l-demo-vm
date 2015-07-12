require('./app.less');

import path from 'path';
import mach from 'mach';
import jsesc from 'jsesc';
import queryString from 'query-string';

var app = mach.stack();

app.use(mach.charset);
app.use(mach.gzip);
app.use(mach.modified);
app.use(mach.file, path.join(__dirname, '../public'));

app.get('/_healthcheck', function () {
    return 'OK';
});


var serverRender = require('./server-render');
app.get('*', function (conn) {
    conn.response.headers['Content-Type'] = 'text/html; charset=utf-8';
    return serverRender(conn.path).then(null, function(err) {
        console.warn(err);
    });
});

mach.serve(app, process.env.PORT || 5000);
