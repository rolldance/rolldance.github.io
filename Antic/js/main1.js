/*
 * Yuan Ren｜任远
 * 财新数据新闻与可视化实验室 | Data Journalism & Visualization Lab
 * 2014 08
 */


var WIDTH=320;
var GLOBAL_URL = "";
var INFO_INTRODUCE_TITLE="落马官员信息简介"
var object = null;
var dragging = false;
var offsetX = 0;
var offsetY = 0;

var names = ["cairongsheng", "chenanzhong", "chenbaihuai", "chentiexin", "jiangshan", "dushanxue", "guoyouming", "hanxiancong", "jindaoming", "liaoshaohua", "lingzhengce", "zhuzuoli", "luoou", "quanjunliang", "shenpeiping", "surong", "tanli", "tanxiwei", "tongmingqian", "wangjunguo", "wangsuyi", "wangwenke", "wanqingliang", "wuchangshun", "xugefei", "yangbaohua", "yaomugen", "zhangtianxin"];

$(document).ready(function(){

    //prepare
    $("body").css({"font-family":"'Arial'", "width":"320px", "height":"100%", "background-color":"#666", "-moz-user-select":"none", "-webkit-user-select":"none", "-ms-user-select":"none", "-khtml-user-select":"none", "user-select":"none"});
    $("#main").css({"width":"100%", "height":"100%"});
    //head
    var head = $("<div id='title'></div>").css({"width":"100%", "height":"80px", "border-bottom-style":"solid", "border-bottom-width":"1px", "border-bottom-color":"#fff"});
    $("#main").append(head);
    
    //content person
    var persons = $("<div id='persons'></div>").css({"width":"100%", "height":"100%"});
    $("#main").append(persons);
    //footstart
    var foot = $("<div id='foot'></div>").css({"width":"100%", "height":"80px", "margin-top":"680px", "border-top-style":"solid", "border-top-width":"1px", "border-top-color":"#999"});
    $("#main").append(foot);
    var team = $("<p></p>").html("编辑：黄晨、田川&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;设计、开发：任远");
    team.css({"margin-top":"20px", "color":"#ccc", "font-size":"12px", "text-align":"center"});
    var copyright = $("<a href='http://datanews.blog.caixin.com' target='_bank'>数据新闻与可视化实验室 | Data Journalism & Visualization Lab</a>");
    copyright.css({"display":"block", "margin-top":"10px", "color":"#ccc", "font-size":"10px", "text-align":"center"});
    var logo = $("<p><a href='http://www.caixin.com/' target='_bank'><img src='http://file.caixin.com/datanews/patrol_storm_phone/pics/logo/logo_white.png' border='0' width='60px'></img></a></p>");
    logo.css({"margin-top":"20px", "height":"100px", "text-align":"center"});
    foot.append(team);
    foot.append(copyright);
    foot.append(logo);
    //footend


    //show person
    for(var i=0; i<names.length; i++){
        var x = i%4*80; 
        var y = parseInt(i/4+1)*(80+10);
        var person = $("<div id='person" + i + "'></div>").css({"position":"absolute", "width":"80px", "height":"80px"});
        person.css("left", x);
        person.css("top", y);
        persons.append(person);
        var person_circle = $("<img></img>").css({"position":"absolute", "width":"56px", "height":"56px", "border":"0", "margin-left":"12px", "margin-top":"12px",});
        person_circle.attr("src", GLOBAL_URL + "img/circle.png");
        person.append(person_circle);
        var person_image = $("<img></img>").css({"position":"absolute", "width":"50px", "height":"50px", "border":"0", "margin-left":"15px", "margin-top":"15px",});
        person_image.attr("src", GLOBAL_URL + "img/" + names[i] + ".png");
        person.append(person_image);
        var person_name = $("<p id='person'></p>").css({"position":"absolute", "width":"80px", "margin-left":"0px", "margin-top":"70px", "font-size":"12px", "color":"#fff", "text-align":"center"});
        person_name.text(names[i]);
        person.append(person_name);
        var person_top = $("<div></div>").css({"position":"absolute", "width":"80px", "height":"80px"});
        person.append(person_top);

        document.getElementById("person"+i).addEventListener("mousedown", mousedown, false);
    }
    //end show person
    document.getElementById("main").addEventListener("mousemove", mousemove, false);
    document.getElementById("main").addEventListener("mouseup", mouseup, false);

    function mousedown(e)
    {
        console.log("mousedown");
        dragging = true;
        offsetX = e.clientX - this.offsetLeft;
        offsetY = e.clientY - this.offsetTop;
        object = document.getElementById(e.currentTarget.id);
        persons.append(object);
    };
    function mousemove(e)
    {
        if (dragging) {
            var x = e.clientX - offsetX;
            var y = e.clientY - offsetY;
            object.style.left = x+"px";
            object.style.top = y+"px";
        }
    };
    function mouseup(e)
    {
        console.log("mouseup");
        console.log(object.style.left, object.style.top);
        dragging = false;
        object = null;
    }

    });