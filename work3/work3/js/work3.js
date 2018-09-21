function colorAquamarine(){
	var content=document.getElementById("content");
	var oneColor=document.getElementById('one');
	content.style.backgroundColor='aquamarine';
	var key1=content.style.backgroundColor;
	localStorage.setItem("colorOne",key1);
//	var arr=document.getElementsByTagName("div");
//	for(var i=0;i<arr.length;i++){
//		if(arr[i].id==event.target.id){
//			var myid=arr[i].id;
//			var ccolor=content.style.backgroundColor;
//			var myidColor=$('#myid').css('background-color');
//			localStorage.setItem(ccolor,'myidColor');
//		}
//		else{
//			continue;
//		}
//	}
//	return false;
	}
function colorDarkturquoise(){
	var content=document.getElementById("content");
	var twoColor=document.getElementById('two');
	content.style.backgroundColor='darkturquoise';
	var key2=content.style.backgroundColor;
	localStorage.setItem("colorTwo",key2);
}
function colorAzure(){
	var content=document.getElementById("content");
	var threeColor=document.getElementById('three');
	content.style.backgroundColor='azure';
	var key3=content.style.backgroundColor;
	localStorage.setItem("colorThree",key3);
	}
function colorRosybrown(){
	var content=document.getElementById("content");
	var fourColor=document.getElementById('four');
	content.style.backgroundColor='rosybrown';
	var key4=content.style.backgroundColor;
	localStorage.setItem("colorFour",key4);
	}
