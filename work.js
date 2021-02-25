var fs = require('fs');
module.exports = {
	getAll:function(req,res){
		fs.readFile('.'+req.url,function(err,data){
			//res.type('css');
			res.end(data);
		})
	}
}