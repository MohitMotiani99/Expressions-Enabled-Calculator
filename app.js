var expr;

function sin(){
		var exp=document.getElementById("inp").getAttribute("value");
		if(exp!="0")
		document.getElementById("inp").setAttribute("value",exp+"sin(");
		else
			document.getElementById("inp").setAttribute("value","sin(");

		expr+="s(";
}
function cos(){
		var exp=document.getElementById("inp").getAttribute("value");
		if(exp!="0")
		document.getElementById("inp").setAttribute("value",exp+"cos(");
		else
			document.getElementById("inp").setAttribute("value","cos(");

		expr+="c(";
}
function tan(){
		var exp=document.getElementById("inp").getAttribute("value");
		if(exp!="0")
		document.getElementById("inp").setAttribute("value",exp+"tan(");
		else
			document.getElementById("inp").setAttribute("value","tan(");

		expr+="t(";
}
function log(){
		var exp=document.getElementById("inp").getAttribute("value");
		if(exp!="0")
		document.getElementById("inp").setAttribute("value",exp+"log(");
		else
			document.getElementById("inp").setAttribute("value","log(");

		expr+="l(";
}
function fun(ele){
	if(ele.id=="C"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value","0");

		expr="";		
	}
	else if(ele.id=="del"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp.substring(0,exp.length-1));

		expr=expr.substring(0,expr.length-1);
			
	}
	else if(ele.id=="div"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"/");

		expr+="/";
			
	}
	else if(ele.id=="inv"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"1/(");
		
		expr+="1/(";
	}
	else if(ele.id=="sqr"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"^2");

		expr+="^2";
			
	}
	else if(ele.id=="cube"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"^3");

		expr+="^3";
			
	}
	else if(ele.id=="pow"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"^");
		
		expr+="^";	
	}
	else if(ele.id=="7"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"7");
		
		expr+="7";	
	}
	else if(ele.id=="8"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"8");
		
		expr+="8";	
	}
	else if(ele.id=="9"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"9");
		
		expr+="9";	
	}
	else if(ele.id=="mul"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"*");
		
		expr+="*";	
	}
	else if(ele.id=="abs"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"abs(");
		
		expr+="a(";
	}
	else if(ele.id=="fact"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"!");
		
		expr+="!";	
	}
	else if(ele.id=="sqrt"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"^0.5");
		
		expr+="^(1/2)";	
	}
	else if(ele.id=="root"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"^(1/");
		
		expr+="^(1/";	
	}
	else if(ele.id=="4"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"4");
		
		expr+="4";	
	}
	else if(ele.id=="5"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"5");
		
		expr+="5";	
	}
	else if(ele.id=="6"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"6");
		
		expr+="6";	
	}
	else if(ele.id=="sub"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"-");
		
		expr+="-";	
	}

	else if(ele.id=="pi"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"pi");
		
		expr+="22/7";	
	}
	else if(ele.id=="e"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"e");
		
		expr+="271/100";	
	}
	else if(ele.id=="exp"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"e^");
		
		expr+="(271/100)^";	
	}
	else if(ele.id=="ln"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"ln(");
		
		expr+="n(";	
	}
	else if(ele.id=="1"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"1");
		
		expr+="1";	
	}
	else if(ele.id=="2"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"2");
		
		expr+="2";	
	}
	else if(ele.id=="3"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"3");
		
		expr+="3";	
	}
	else if(ele.id=="add"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"+");
		
		expr+="+";	
	}

	else if(ele.id=="("){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"(");
		
		expr+="(";	
	}

	else if(ele.id==")"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+")");
		
		expr+=")";	
	}
	else if(ele.id=="0"){
		var exp=document.getElementById("inp").getAttribute("value");
		document.getElementById("inp").setAttribute("value",exp+"0");
		
		expr+="0";	
	}
}
var sum=0;
var s1=new Array();
var s2=new Array();
var nums=['1','2','3','4','5','6','7','8','9','0'];
var ops=['^','/','*','+','-'];
var un=['s','c','t','l','a','n','!'];
function result(){
	console.log(expr);
	expr+="=";
	for (var i =0; i < expr.length;){
		if(nums.indexOf(expr[i])!=-1){
			sum*=10;
			sum+=parseInt(expr[i]);
			i++;
		}
		else{
			s1.push(sum);
			sum=0;
			
			while( s2.length!=0 && ((un.indexOf(s2[length-1])!=-1) || ops.indexOf(s2[length-1])<=ops.indexOf(expr[i])) && expr[i]!='(' && expr[i]!=')'){
				if(s2[length-1]=='s'){
					var num=s1.pop();
					s1.push(Math.sin(num));
					s2.pop();
				}
				else if(s2[length-1]=='c'){
					var num=s1.pop();
					s1.push(Math.cos(num));
					s2.pop();
				}
				else if(s2[length-1]=='t'){
					var num=s1.pop();
					s1.push(Math.tan(num));
					s2.pop();
				}
				else if(s2[length-1]=='l'){
					var num=s1.pop();
					s1.push(Math.log(num));
					s2.pop();
				}
				else if(s2[length-1]=='a'){
					var num=s1.pop();
					s1.push(Math.abs(num));
					s2.pop();
				}
				else if(s2[length-1]=='n'){
					var num=s1.pop();
					s1.push(Math.ln(num));
					s2.pop();
				}
				else if(s2[length-1]=='!'){
					var num=s1.pop();
					var ans=1;
					for(var j=2;j<=num;j++)
						ans*=j;
					s1.push(ans);
					s2.pop();
				}
				else if(s2[length-1]=='^'){
					var a=s1.pop();
					var b=s1.pop();
					s2.pop();
					s1.push(Math.pow(b,a));
				}
				else if(s2[length-1]=='/'){
					var a=s1.pop();
					var b=s1.pop();
					s2.pop();
					s1.push(b/a);
				}
				else if(s2[length-1]=='*'){
					var a=s1.pop();
					var b=s1.pop();
					s2.pop();
					s1.push(b*a);
				}
				else if(s2[length-1]=='+'){
					var a=s1.pop();
					var b=s1.pop();
					s2.pop();
					s1.push(b+a);
				}
				else if(s2[length-1]=='-'){
					var a=s1.pop();
					var b=s1.pop();
					s2.pop();
					s1.push(b-a);
				}
				
			}
			s2.push(expr[i]);

			if(expr[i]=='(')
				s2.push('(');

			else if(expr[i]==')'){
				while(s2[length-1]!='('){

				if(s2[length-1]=='s'){
					var num=s1.pop();
					s1.push(Math.sin(num));
					s2.pop();
				}
				else if(s2[length-1]=='c'){
					var num=s1.pop();
					s1.push(Math.cos(num));
					s2.pop();
				}
				else if(s2[length-1]=='t'){
					var num=s1.pop();
					s1.push(Math.tan(num));
					s2.pop();
				}
				else if(s2[length-1]=='l'){
					var num=s1.pop();
					s1.push(Math.log(num));
					s2.pop();
				}
				else if(s2[length-1]=='a'){
					var num=s1.pop();
					s1.push(Math.abs(num));
					s2.pop();
				}
				else if(s2[length-1]=='n'){
					var num=s1.pop();
					s1.push(Math.ln(num));
					s2.pop();
				}
				else if(s2[length-1]=='!'){
					var num=s1.pop();
					var ans=1;
					for(var j=2;j<=num;j++)
						ans*=j;
					s1.push(ans);
					s2.pop();
				}
				else if(s2[length-1]=='^'){
					var a=s1.pop();
					var b=s1.pop();
					s2.pop();
					s1.push(Math.pow(b,a));
				}
				else if(s2[length-1]=='/'){
					var a=s1.pop();
					var b=s1.pop();
					s2.pop();
					s1.push(b/a);
				}
				else if(s2[length-1]=='*'){
					var a=s1.pop();
					var b=s1.pop();
					s2.pop();
					s1.push(b*a);
				}
				else if(s2[length-1]=='+'){
					var a=s1.pop();
					var b=s1.pop();
					s2.pop();
					s1.push(b+a);
				}
				else if(s2[length-1]=='-'){
					var a=s1.pop();
					var b=s1.pop();
					s2.pop();
					s1.push(b-a);
				
				}
			}
			s2.pop();
		}
		else if(expr[i]=="="){
				while(s2.length!=0){

				if(s2[length-1]=='s'){
					var num=s1.pop();
					s1.push(Math.sin(num));
					s2.pop();
				}
				else if(s2[length-1]=='c'){
					var num=s1.pop();
					s1.push(Math.cos(num));
					s2.pop();
				}
				else if(s2[length-1]=='t'){
					var num=s1.pop();
					s1.push(Math.tan(num));
					s2.pop();
				}
				else if(s2[length-1]=='l'){
					var num=s1.pop();
					s1.push(Math.log(num));
					s2.pop();
				}
				else if(s2[length-1]=='a'){
					var num=s1.pop();
					s1.push(Math.abs(num));
					s2.pop();
				}
				else if(s2[length-1]=='n'){
					var num=s1.pop();
					s1.push(Math.ln(num));
					s2.pop();
				}
				else if(s2[length-1]=='!'){
					var num=s1.pop();
					var ans=1;
					for(var j=2;j<=num;j++)
						ans*=j;
					s1.push(ans);
					s2.pop();
				}
				else if(s2[length-1]=='^'){
					var a=s1.pop();
					var b=s1.pop();
					s2.pop();
					s1.push(Math.pow(b,a));
				}
				else if(s2[length-1]=='/'){
					var a=s1.pop();
					var b=s1.pop();
					s2.pop();
					s1.push(b/a);
				}
				else if(s2[length-1]=='*'){
					var a=s1.pop();
					var b=s1.pop();
					s2.pop();
					s1.push(b*a);
				}
				else if(s2[length-1]=='+'){
					var a=s1.pop();
					var b=s1.pop();
					s2.pop();
					s1.push(b+a);
				}
				else if(s2[length-1]=='-'){
					var a=s1.pop();
					var b=s1.pop();
					s2.pop();
					s1.push(b-a);
				}
				}
			}
	i++;
	}
}

document.getElementById("inp").setAttribute("value",s1[0]);
}