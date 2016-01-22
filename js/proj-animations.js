function openProjInfo(projId) {
    /* 
     Copy the info from `proj`, or rewrite the HTML.
     I would create a <data style="display: none;"></data> in <head>, 
     then use JSON to define info about the projects, and parse it here.
    */
    // var proj = document.getElementById(projId);
    var overlay = document.getElementById('project-viewer-overlay');
    overlay.style.visibility = 'visible';
    overlay.style.opacity = 1;
<<<<<<< HEAD
    
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
    
=======
>>>>>>> origin/master
    var viewer = document.getElementById('project-viewer');
    viewer.style.visibility = 'visible';
    viewer.style.opacity = 1;
    projects.map(function (i) {
        if (i.id == projId) {
<<<<<<< HEAD
            viewer.innerHTML = "<h2 class=\"project-viewer-title\">" + i.name + "</h2>"
            viewer.innerHTML += i.demo
            viewer.innerHTML += "<em class=\"project-viewer-platform\">" + i.platform + "</em>"
            viewer.innerHTML += "<hr class=\"project-viewer-top-bar\">"
            viewer.innerHTML += "<div class=\"project-viewer-pic\"><img src=\"" + i.image + "\"></div>"
=======
            viewer.innerHTML = "<div class=\"project-viewer-banner\"><img src=\"" + i.image + "\"></div>"
            viewer.innerHTML += "<h2>" + i.name + "</h2>"
            viewer.innerHTML += "<em>" + i.platform + "</em>"
>>>>>>> origin/master
            viewer.innerHTML += "<div class=\"project-viewer-description\">" + i.description + "</div>"
        }
    })
}

function closeProjInfo() {
    var viewer = document.getElementById('project-viewer');
    viewer.style.opacity = 0;
    viewer.style.visibility = 'hidden';
    var overlay = document.getElementById('project-viewer-overlay');
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = 0;
<<<<<<< HEAD
    
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
    document.body.scroll = "yes"; // ie only
=======
>>>>>>> origin/master
}