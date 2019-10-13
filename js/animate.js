

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
 * �̶�ʱ��Ķ���
 * @param element
 * @param target
 * @param total
 */
function nativeTimeAnimate(element,target,total){
    //�������
    var timeSpan = 20;
    //��ʼλ��
    var begin = element.offsetLeft;
    //Ŀ��ֵ�ͳ�ʼλ�õľ���
    var distance = Math.abs(target - begin);
    //����ÿһ�����ߵľ��� = �ܳ��� / ��ʱ�� * �������
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