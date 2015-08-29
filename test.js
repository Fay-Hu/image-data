
var path		= require("path");
var imageData	= require("./image-data");


var ext		= "jpg";
var extOut	= "png";

var image	= new imageData();
image.open(path.normalize(__dirname+"/test."+ext), function() {
	
	image.scale(100, 100);
	image.export(path.normalize(__dirname+"/"+(new Date().getTime())+'.'+extOut), function(filename) {
		console.log("Exported: ", filename);
	});
});
