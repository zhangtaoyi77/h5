var txt = document.getElementById("txt");
var opt=document.getElementById("opt");
var lists=opt.getElementsByTagName("li");
var len=lists.length;
for(var i=1;i<len;i++)
{
	lists[i].onmousedown=function(){
		txt.value=this.textContent;
		opt.style.display="none";
	}
}
txt.onfocus=function(){
	opt.style.display="block";
}
txt.onblur=function(){
	opt.style.display="none";
}
txt.onkeyup=function(){
	var word=this.value;
	var flag="";
	if(word.indexOf("@")>0){
		flag=word.subString(word.indexOf("@")-1);
		word=word.subString(0,word.indexOf("@"));
	}
	else{
		flag="";
	}
	var vla="";
	for(var i=1;i<len;i++){
		vla=lists[i].textContent;
		vla=vla.subString(vla.indexOf("@"));
		lists[i].textContent=vla+word;
	}
}

