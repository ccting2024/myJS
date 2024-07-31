// 取得送出按鈕（二種寫法，擇一即可）
// let myBtn= document.getElementById('btn');
let myBtn= document.querySelector('#btn');

myBtn.addEventListener('click',function(){
    let result="";
    // 取得科目的全部
    let subject=document.getElementsByName('subject');
    // 使用迴圈逐一檢查是否被選取＝> checked
    for (let i=0;i<subject.length;i++){
        if(subject[i].checked){
            //取得選項按鈕的值
            result=subject[i].value;
            //因為是單選，所以找到後就結束迴圈
            break;
        }
    }
    console.log('科目:'+result);
});