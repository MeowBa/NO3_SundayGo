//  **大分頁的tab**
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// 預設打開顯示帳號設定
document.getElementById("defaultOpen").click();


//  **折扣券** 可使用已使用

function discountOpen(evt, discountName) {
    var i, discountBody, discountlinks;
    discountBody = document.getElementsByClassName("discountBody");
    for (i = 0; i < discountBody.length; i++) {
        discountBody[i].style.display = "none";
    }
    discountlinks = document.getElementsByClassName("discountlinks");
    for (i = 0; i < discountlinks.length; i++) {
        discountlinks[i].className = discountlinks[i].className.replace(" active", "");
    }
    document.getElementById(discountName).style.display = "block";
    evt.currentTarget.className += " active";
}
// 預設折扣券打開顯示可使用
document.getElementById("discountOpen").click();

//  **回饋金** 可使用已使用

function rebateOpen(evt, cityName) {
    var i, rebateBody, rebatelinks;
    rebateBody = document.getElementsByClassName("rebateBody");
    for (i = 0; i < rebateBody.length; i++) {
        rebateBody[i].style.display = "none";
    }
    rebatelinks = document.getElementsByClassName("rebatelinks");
    for (i = 0; i < rebatelinks.length; i++) {
        rebatelinks[i].className = rebatelinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// 預設回饋金打開顯示獲得紀錄
document.getElementById("rebateOpen").click();

//  **訂單管理** 三個分頁

function memberOrderOpen(evt, cityName) {
    var i, memberOrderBody, memberOrderlinks;
    memberOrderBody = document.getElementsByClassName("memberOrderBody");
    for (i = 0; i < memberOrderBody.length; i++) {
        memberOrderBody[i].style.display = "none";
    }
    memberOrderlinks = document.getElementsByClassName("memberOrderlinks");
    for (i = 0; i < memberOrderlinks.length; i++) {
        memberOrderlinks[i].className = memberOrderlinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// 預設回饋金打開顯示獲得紀錄
document.getElementById("memberOrderOpen").click();


// 我的收藏點集愛心整欄移除
$(".collectDelete").click(function (e) {
    // console.log("ok");
    // console.log(e);
    // if (confirm('是否要從我的珍藏裡移除?') == true) {
    //     $(this).parent().parent().parent().remove();
    // } 
    $(this).parent().parent().parent().remove();
    toastr.warning('已從我的珍藏移除');
});

// 變更頭像圖片

function upload(e) {
    console.log(chengImgBtn.files);  //FileList {0: File, length: 1}
    var dog = new FileReader();
    dog.onload = function () {
        console.log(dog.result); // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtMAA ...
        //  setAttribute("src",更改新圖片的路徑)
        document.getElementById("MemberImgId").setAttribute("src", dog.result);
    }
    dog.readAsDataURL(chengImgBtn.files[0]);
}

/* 前往評價點進去的的評價頁面 */
// 前往評價按鈕
GoEvaluationBtn.onclick = function (e) {
    document.getElementById('id01').style.display = "block";
}

// 關閉評價頁面
evaluationX.onclick = function (e) {
    document.getElementById('id01').style.display = "none";
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// 評價星星
var arBox1 = document.getElementsByClassName("box1");
for (let x = 0; x < 5; x++) {
    arBox1[x].onclick = function () {
        for (let y = 0; y < 5; y++) {
            arBox1[y].style.backgroundImage = "url(./images/0.png)"
            for (let z = 0; z <= x; z++) {
                arBox1[z].style.backgroundImage = "url(./images/1.png)"
            }
        }
    }
}


$(".ImgPick").one("click", function () {
    alert("恭喜獲得優惠券，詳情請至折扣券列表查看!")
    $(this).css({
        filter: "grayscale(100%)"
    });
});


