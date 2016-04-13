function isNum(num){
    var reg = new RegExp("[^\n\r\s 、,，0-9A-Za-z\u4e00-\u9fa5]");
    var regBlank = new RegExp("^[\n\r\s ,，、]*$");
    if(reg.test(num)){
        alert("输入的内容只能包含数字、中文、英文");
        return false;
    }
    else if(regBlank.test(num)){
        alert("无法输入空数据");
        return false;
    }
    else{
        return true;
    }


}
function mytrim(str){
    return str.replace(/(^\s*)|(\s*$)/g,"");
}

function leftIn(){
    var text = document.getElementById("myInput").value;
    if(isNum(text))
    {
        var textArr = mytrim(text.replace(/[\s\r\n、,，]+/g," ")).split(" ");
        for(var i=0; i<textArr.length; i++){
            var textNode = document.createTextNode(textArr[i]);
            var divNode = document.createElement("div");
            divNode.appendChild(textNode);
            divNode.className = "item";
            var fatherNode = document.getElementById("graph");
            fatherNode.insertBefore(divNode,fatherNode.firstChild);
        }
        initClickDel();
    }

}
function  rightIn(){
    var text = document.getElementById("myInput").value;
    if(isNum(text))
    {
        var textArr = mytrim(text.replace(/[\s\r\n、,，]+/g," ")).split(" ");
        for(var i=0; i<textArr.length; i++){
            var textNode = document.createTextNode(textArr[i]);
            var divNode = document.createElement("div");
            divNode.appendChild(textNode);
            divNode.className = "item";
            var fatherNode = document.getElementById("graph");
            fatherNode.appendChild(divNode);
        }
        initClickDel();
    }
}
function leftOut(){
    var firstDivNode = document.getElementById("graph").firstChild;
    document.getElementById("graph").removeChild(firstDivNode);
}
function rightOut(){
    var lastDivNode = document.getElementById("graph").lastChild;
    document.getElementById("graph").removeChild(lastDivNode);
}
/**
 * 点击某数字后删除
 */
function clickDel(){
    var node = event.target;
    node.parentNode.removeChild(node);
}
function initClickDel(){
    var itemList = document.getElementsByClassName("item");
    for(var i=0; i<itemList.length; i++){
        itemList[i].addEventListener("click",clickDel);
    }
}
/**
 * 查询函数
 */
function search(){
    var text = document.getElementById("mySearch").value;
    var arr = document.getElementsByClassName("item");
    var reg = new RegExp(text);
    var i = 0;
    var myanim = setInterval(function(){
        if(i==arr.length){
            clearInterval(myanim);
        }
        if(reg.test(arr[i].innerHTML)){
            rotateYDIV(arr[i]);
        }
        i++;
    } , 1);
}
/**
 * 旋转函数
 */
function rotateYDIV(divNode) {
    var ny = 0, rotYINT;
    var y = divNode;
    clearInterval(rotYINT);
    rotYINT = setInterval(startYRotate,1);

    function startYRotate() {
        ny = ny + 1;
        y.style.transform = "rotateY(" + ny + "deg)";
        y.style.webkitTransform = "rotateY(" + ny + "deg)";
        y.style.OTransform = "rotateY(" + ny + "deg)";
        y.style.MozTransform = "rotateY(" + ny + "deg)";
        if (ny >= 360) {
            ny = 0;
            clearInterval(rotYINT);
        }
    }
}
/**
 * 给按钮绑定事件
 */
function init(){
    document.getElementById("btn-left-in").addEventListener("click",leftIn);
    document.getElementById("btn-right-in").addEventListener("click",rightIn);
    document.getElementById("btn-left-out").addEventListener("click",leftOut);
    document.getElementById("btn-right-out").addEventListener("click",rightOut);
    document.getElementById("btn-search").addEventListener("click",search);
    initClickDel();
}

init();