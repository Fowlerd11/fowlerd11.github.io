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
    var viewer = document.getElementById('project-viewer');
    viewer.style.visibility = 'visible';
    viewer.style.opacity = 1;
    projects.map(function (i) {
        if (i.id == projId) {
            viewer.innerHTML = "<div class=\"project-viewer-banner\"><img src=\"" + i.image + "\"></div>"
            viewer.innerHTML += "<h2>" + i.name + "</h2>"
            viewer.innerHTML += "<em>" + i.platform + "</em>"
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
}