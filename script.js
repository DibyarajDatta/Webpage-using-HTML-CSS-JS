
function hideBodyBackground(){
    var body = document.getElementsByClassName('div4')[0];
    body.classList.remove('no-background');
}

function hideNoticeBackground() {
    var notice = document.getElementsByClassName('div3')[0];
    var update = document.getElementsByClassName('div5')[0];
    notice.classList.remove('no-background');
    update.style.border = "thick solid #0000FF";
}