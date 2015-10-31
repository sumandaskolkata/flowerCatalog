var fs=require('fs');
var r={};
exports.r=r;

r.handelInputText=function(text){
		var data=text.match(/\/userDetails\?Name=(.*)&comment=(.*)/);
		var name=data[1].split('+').join(' ');
		var comment=data[2].split('+').join(' ');
		var nowDate= new Date();
		var timeAndDate=nowDate.toString().split(' ').slice(1,5).join(' ')
		r.commentWrite(name,comment,timeAndDate)

};

r.commentWrite=function(name,comment,timeAndDate){
	var appendText=name+'\t'+comment+'\t'+timeAndDate+'\n';
	fs.appendFile('comments.txt',appendText , function (err) {
  		if (err) throw err;
  		console.log('The was appended to file!');
	});
};