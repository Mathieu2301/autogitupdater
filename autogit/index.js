var shell = require('shelljs');

module.exports = function(url, app){
    app.get(url, function(req, res){
        res.send("RELOADING APP");
        shell.exec('git pull');
    })
}