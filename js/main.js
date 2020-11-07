function getEle(a){
    return document.getElementById(a);
}

var arr = ["staff__overlay1",
    "staff__overlay2",
    "staff__overlay3",
    "staff__overlay4",
    "staff__overlay5",
    "staff__overlay6",
    "staff__overlay7"]


function hov(className){
    console.log(arr)
    for(var i =0 ;i<arr.length;i++)
    {
        if(arr[i]==className)
        {
            getEle(arr[i]).style.display = 'none';
        }
        else
        {
            getEle(arr[i]).style.display = 'block';
        }
    }
}

function out(){
    getEle("staff__overlay1").style.display = 'none';
    getEle("staff__overlay2").style.display = 'none';
    getEle("staff__overlay3").style.display = 'none';
    getEle("staff__overlay4").style.display = 'none';
    getEle("staff__overlay5").style.display = 'none';
    getEle("staff__overlay6").style.display = 'none';
    getEle("staff__overlay7").style.display = 'none';

    
}
