
// 購物車明細+-

/****點擊增加按钮****/
$('.add').click(function () {
    //修改数量
    var n = $(this).next().html();
    var num = parseInt(n) + 1;
    // console.log(num);
    $(this).next().html(num);
    //計算小計
    var c = $(this).parent().siblings().children('.price').html();
    // console.log(parseInt(c)); //1197
    parseInt(c);
    var subPrice = num * c;
    $(this).parent().siblings().children('.sub_total').html(subPrice);

    //計算總金額及回饋金
    var total = 0;
    $('.sub_total').each(function () {
        var price = parseInt($(this).html());
        // console.log(price)
        total += price;
        $('.total').html(total);
        // 回饋金
        $('.gold').html(Math.floor(total * 0.02));
    });
});


/****點擊减少按钮****/
$('.reduce').click(function () {
    //修改数量
    var n = $(this).prev().html();
    var num = parseInt(n) - 1;
    if (num == 0) { return; }//數量减到0就不能再减了
    $(this).prev().html(num);

    //計算價格
    var c = $(this).parent().siblings().children('.price').html();
    parseInt(c);
    var subPrice = num * c;
    $(this).parent().siblings().children('.sub_total').html(subPrice);

    //計算總價及回饋金
    var total = 0;
    $('.sub_total').each(function () {
        var price = parseInt($(this).html());
        total += price;
        $('.total').html(total);
        // 計算回饋金               
        $('.gold').html(Math.floor(total * 0.02));
    });
});

// 全選核取方塊
var subItem = document.getElementsByName("subItem"); // 個別的核取方塊
var all = document.getElementById("checkAll"); //全選核取方塊

function AllSetSubItem() {
    for (var i = 0; i < subItem.length; i++) {
        subItem[i].checked = all.checked;
    }
}
all.addEventListener('change', AllSetSubItem)

function SubItemSetAll() {
    if (this.checked == false) {
        all.checked = false;
    }
    // subItem三個都勾→All也勾
    var current = subItem.length;
    var check = document.querySelectorAll('input[name="subItem"]:checked').length;
    if (current == check) {
        all.checked = true;
    }
}
for (var i = 0; i < subItem.length; i++) {
    subItem[i].addEventListener('change', SubItemSetAll)
}


// 點擊垃圾桶整欄移除
var deleteOut = $(".operate i")
$(deleteOut).click(function (e) {
    if (confirm('請問是否確定刪除?') == true) {
        $(this).parents(".carBody").remove();
    } 
});