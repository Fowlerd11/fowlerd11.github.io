function openProjInfo(id) {
    var proj = document.getElementById(id);
    proj.setAttribute('onclick', 'closeProjInfo(' + id + ')');
    proj.style.zIndex = '2';
    proj.style.position = 'absolute';
    proj.style.top = window.pageYOffset + 100 + 'px';
    proj.style.left = '12%';
    proj.style.width = '73%';
    proj.style.height = 'auto';
    proj.children[0].style.height = proj.children[0].clientHeight * .75 + 'px';
    proj.children[0].children[0].style.width = '108%';
    proj.children[0].children[0].style.top = '-100%';
    proj.children[0].children[0].style.left = '-5%';
}

function closeProjInfo(id) {
    var proj = document.getElementById(id);
    proj.setAttribute('onclick', 'openProjInfo(' + id + ')');
    proj.style.zIndex = '1';
    proj.style.position = 'unset';
    proj.style.top = 'unset';
    proj.style.left = 'unset';
    proj.style.width = '320px';
    proj.style.height = '240px';
    proj.children[0].style.height = '70%';
    proj.children[0].children[0].style.width = '130%';
    proj.children[0].children[0].style.top = '-54%';
    proj.children[0].children[0].style.left = '-16%';
}