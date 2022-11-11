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



// 廠商刪除商品
$(".companyDelete").on("click", function () {
    // alert("ok");
    if (confirm('請問是否確定下架此商品?') == true) {
        $(this).parents("tr").remove();
    }    
});

