// 切换早中晚
function Zzw()
{
	var I=document.getElementById('i');
	var timer=new Date();
	var hour=timer.getHours();
	if(hour>=6&&hour<=8)
	{
		I.innerHTML="早上";
	}
	else  if(hour>8&&hour<12)
	{
		I.innerHTML="上午";
	}
	else if(hour>=12&&hour<20)
	{
		I.innerHTML="下午";
	}
	else if(hour>=20||hour<6)
	{
		I.innerHTML="晚上"
	}
}
Zzw();



// 城市搜索
function Citys()
{
	var A=document.getElementById('dj');
	var Dsc=document.getElementsByClassName('search-city')[0];
	var Span=document.getElementById('span');
	var Inpro=document.getElementById('inpro');
	Dsc.style.display="none";
	A.onclick=function()
	{
		var ev=ev||event;
		ev.cancelBubble=true;
		this.style.backgroundColor="#fff";
		Dsc.style.display="block";
	}
	Span.onclick=function()
	{
		Dsc.style.display="none";
		A.style.background="rgb(244,244,244)";
	}
	document.onclick=function()
	{
		Dsc.style.display="none";
		A.style.background="rgb(244,244,244)";
		Inpro.style.display="none";
	}
	Dsc.onclick=function(){
		var ev=ev||event;
		ev.cancelBubble=true;
	}
}

Citys();


function tiaozhuan()
{
	var Zimu=document.getElementById('zimu');
	var ZA=Zimu.getElementsByTagName('a');
	var UL=document.getElementById('ul');
	var Uli=UL.getElementsByTagName('li');
	var TIME;
	for(var i=0;i<ZA.length;i++)
	{
		ZA[i].index=i;
		ZA[i].onclick=function()
		{
			var Dtop=Uli[this.index].offsetTop;
			clearInterval(TIME);
			TIME=setInterval(function(){
				UL.scrollTop=UL.scrollTop+(Dtop-UL.scrollTop)/10;
				if(UL.scrollTop-Dtop>-10 && UL.scrollTop-Dtop<10)
				{
					UL.scrollTop=Dtop;
					clearInterval(TIME);
				}
			},10)
		}
	}
}
tiaozhuan()




// 搜索框光标聚焦事件
function Inpk()
{
	var Inp=document.getElementById('inp');
	var Inpro=document.getElementById('inpro');
	var InpA=Inpro.getElementsByTagName('a');
	var Lsjl=document.getElementsByClassName('history')[0];
	var Clear=document.getElementsByClassName('clear')[0];
	var Qc=document.getElementById('qinchu')
	for(var a=0;a<InpA.length;a++)
	{
		InpA[a].onclick=function()
		{
			Inp.value=this.innerHTML;
			Qc.innerHTML+="<a>"+this.innerHTML+"</a>";
		}
	}
	var Lsa=Lsjl.getElementsByTagName('a');
	Clear.onclick=function()
	{
		Qc.innerHTML="";
	}
	Inp.onclick=function()
	{
		var ev=ev||event;
		ev.cancelBubble=true;
		Inpro.style.display="block";
	}
	Inp.onfocus=function()
	{
		Inpro.style.display="block";
	}
	Inp.onmouseover=function()
	{
		Inpro.style.display="none";
	}
	Inpro.onmouseout=function()
	{
		Inpro.style.display="none";
	}
	Inpro.onmouseover=function()
	{
		Inpro.style.display="block";
	}
}
Inpk();



// 划过弹出产品信息栏
function tcxx()
{
	var Pp=document.getElementById('p');
	var Ps=Pp.getElementsByTagName('span')[0];
	var Pdiv=document.getElementsByClassName('pro-info')[0];
	Pp.onmouseover=function()
	{
		Pdiv.style.display="block";
		Ps.style.transform="rotate(135deg)";
	}
	Pdiv.onmouseover=function()
	{
		Pdiv.style.display="block";
		Ps.style.transform="rotate(135deg)";
	}
	Pdiv.onmouseout=function()
	{
		Pdiv.style.display="none";
		Ps.style.transform="rotate(-45deg)";
	}
	Pp.onmouseout=function()
	{
		Pdiv.style.display="none";
		Ps.style.transform="rotate(-45deg)";
	}
}
tcxx();


// 轮播图
var arr=["images/lub1.jpg","images/lub2.jpg","images/lub3.jpg","images/lub4.jpg","images/lub5.jpg"];
var Lub=document.getElementsByClassName('lub')[0];
var LA=Lub.getElementsByTagName('a')[0];
var Lspan=Lub.getElementsByTagName('span');
var num=0;
var timer;
Lspan[0].id="cur";
for(var i=0;i<Lspan.length;i++)
{
	Lspan[i].index=i;
	Lspan[i].onmouseover=function()
	{
		num=this.index;
		for(var j=0;j<Lspan.length;j++)
		{
			Lspan[j].id="";
		}
		this.id="cur";
		LA.style.background="url("+arr[num]+") no-repeat center";
	}
}

function lbds()
{
	num++;
	if(num==arr.length){num=0;}
	for(var j=0;j<Lspan.length;j++)
	{
		Lspan[j].id="";
	}
	Lspan[num].id="cur";
	LA.style.background="url("+arr[num]+") no-repeat center";
}
timer=setInterval(lbds,4000);
Lub.onmouseover=function()
{
	clearInterval(timer);
}
Lub.onmouseout=function()
{
	timer=setInterval(lbds,4000);
}



// 倒计时
function daojisahi()
{
	function time()
	{
		var Djs=document.getElementsByClassName("clock")[0];
		var now=new Date();
		var year=now.getFullYear();
		var month=now.getMonth();
		var day=now.getDate();
		var end=new Date(year,month,day,24,0,0);
		var t=Math.floor((end-now)/1000);
		var shi=Math.floor(t/3600);
		var fen=Math.floor(t%3600/60);
		var miao=Math.floor(t%60);
		Djs.innerHTML="<span>"+jling(shi)+"</span>:"+"<span>"+jling(fen)+"</span>:"+"<span>"+jling(miao)+"</span>";
	}
	function jling(n)
	{
		return n<10 ? "0"+n : n;
	}
	time();
	setInterval(time,1000);
}
daojisahi();



// 点击改变margin-left的值
function changeMl()
{
	var Libt=document.getElementsByClassName('li-bt')[0];
	var Liul=Libt.getElementsByTagName('ul')[0];
	var Lispan1=document.getElementsByClassName('lib-left')[0];
	var Lispan2=document.getElementsByClassName('lib-right')[0];
	Lispan1.onclick=function()
	{
		Liul.style.marginLeft=0;
		this.style.color="#eee";
		Lispan2.style.color="#666"
	}
	Lispan2.onclick=function()
	{
		Liul.style.marginLeft=-1070+"px";
		this.style.color="#eee";
		Lispan1.style.color="#666"
	}
}
changeMl();



// 滚动弹出顶部搜索框
function gunDong()
{
	var Gds=document.getElementsByClassName('gundong')[0];
	var Product=document.getElementsByClassName('product')[0];
	var Codetop=document.getElementsByClassName('codetop')[0];
	var Ctdiv=document.getElementsByTagName('div')[0];
	var AD=document.getElementsByClassName('ad')[0];
	var List=document.getElementsByClassName('list')[0];
	var Main=document.getElementsByClassName('main')[0];
	var Listtop=List.offsetTop;
	var Adtop=AD.offsetTop;
	var Ptop=Product.offsetTop;
	window.onscroll=function () 
	{
        if(document.documentElement.scrollTop>=Ptop)
		{
			Gds.style.height=60+"px";
			Gds.style.position="fixed";
			Gds.style.zIndex=200;
			Gds.style.opacity=1;
		}
		else
		{
			Gds.style.height=0;
			Gds.style.opacity=0;
		}
		if(document.documentElement.scrollTop>=Adtop)
		{
			if(Main.offsetWidth<=1366)
			{
				Codetop.id="codetop1";
			}
			else
			{
				Codetop.id="codetop2";
			}
		}
		else
		{
			Codetop.id="";
		}
		if(document.documentElement.scrollTop>=Listtop)
		{
			Djtop.style.opacity=1;
		}
		else
		{
			Djtop.style.opacity=0;
		}
    }
}
gunDong();

// 返回顶部
var Djtop=document.getElementById('top');
Djtop.onclick=function()
{
	var gltop=document.documentElement.scrollTop;
	var times;
	clearInterval(times)
	times=setInterval(function(){
		gltop-=50;
		if(parseInt(gltop)<=0)
		{
			document.documentElement.scrollTop=0;
			clearInterval(times);
		}
		document.documentElement.scrollTop=gltop;
	},10)
}

