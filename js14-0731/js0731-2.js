//建立一個存放選取結果的變數
let result = "";
// 取得送出按鈕
let myBtn = document.querySelector('#btn');
//監聽按鈕是否左鍵一下
//下面的function()，可以改成 ()=> //匿名函式和箭頭函式都是不用命名的，兩者皆可
myBtn.addEventListener('click', function () {
    //取得下拉式方塊
    let myCity = document.querySelector('#city');
    for (let i = 0; i < myCity.length; i++) {
        if (myCity[i].selected) {
            if (myCity[i].value == "") {
                result = '尚未選取縣市';
            } else {
                result = myCity[i].value;
            }
            break
        }
    }
    console.log('縣市：' + result);
});