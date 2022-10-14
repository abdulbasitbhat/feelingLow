
function clearr(){
let s=document.getElementById('Feel-Box');
s.scrollIntoView();
setTimeout(clearr2,3000);
}

function clearr2(){
    let bt;
    bt=document.getElementById('clear');
    t=document.getElementById('text_area');
    return t.value="Stay Blessed";
}