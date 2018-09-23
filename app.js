const
	express = require("express");

var app = express();
app.use(express.static('public'));
app.get("/imgs/:fileName", function(req, res){
	var fileName = req.params.fileName
	res.sendFile(fileName, {root: __dirname + "/imgs/"})
})

app.listen(process.env.PORT || 5000);
console.log("Listening on port 5000")