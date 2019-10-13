

function animate(element,target){
    clearInterval(element.timer);
    element.timer = setInterval(function(){
        var currentLeft = element.offsetLeft;
        var step = 40;
        currentLeft += currentLeft <= target ? step : -step;
        element.style.left = currentLeft + "px";
        if(Math.abs(target - currentLeft) <= step){
            clearInterval(element.timer);
            element.style.left = target + "px";
        }
    },20);
}
/**
 * 固定时间的动画
 * @param element
 * @param target
 * @param total
 */
function nativeTimeAnimate(element,target,total){
    //动画间隔
    var timeSpan = 20;
    //初始位置
    var begin = element.offsetLeft;
    //目标值和初始位置的距离
    var distance = Math.abs(target - begin);
    //计算每一步该走的距离 = 总长度 / 总时间 * 动画间隔
    var speed = distance / total * timeSpan;

    clearInterval(element.timer);
    element.timer = setInterval(function(){
        var currentLeft = element.offsetLeft;
        var step = speed;
        currentLeft += currentLeft <= target ? step : -step;
        element.style.left = currentLeft + "px";
        if(Math.abs(target - currentLeft) <= step){
            clearInterval(element.timer);
            element.style.left = target + "px";
        }
    },timeSpan);
}