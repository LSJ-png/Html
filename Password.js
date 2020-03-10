let password = prompt("请输入密码：");
if (password === "010002") {
    alert("密码正确，即将进入网站。");
} else {
    alert("你不是内部人员，无法进入网站。");
    window.opener=null;
    window.open('','_self');
    window.close();
}