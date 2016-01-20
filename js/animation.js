// Global variables, mostly for Three.js
var scene, camera, renderer;
var geometry, material, plane,
    meshes = [];
var width = window.innerWidth,
    height = window.innerHeight;
var canvas = document.getElementById('canvas');

// This function sets up the Three.js scene
var init = function () {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(80, width / height, .01, 2000);
    camera.rotation.x = .2;

    // Fog
    scene.fog = new THREE.FogExp2(0x222233, 0.001275);

    // Lights
    var ambientLight = new THREE.AmbientLight(0x121212);
    scene.add(ambientLight);

    var spotLight = new THREE.SpotLight(0xFFFFFF);
    spotLight.position.set(0, -25, 200);
    spotLight.castShadow = true;
    spotLight.shadowDarkness = 1;
    spotLight.shadowMapWidth = 1024;
    spotLight.shadowMapHeight = 1024;
    spotLight.shadowCameraNear = 0.01;
    spotLight.shadowCameraFar = 1000;
    spotLight.shadowCameraFov = 80;
    scene.add(spotLight);

    // The renderer
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setClearColor(0x222228);
    canvas.appendChild(renderer.domElement);

    // Sets up the 'ocean'
    geometry = new THREE.PlaneGeometry((310 + (Math.random() * 10)), (100 + (Math.random() * 10)), 13, 8);
    material = new THREE.MeshLambertMaterial({
        color: 0x2196F3,
        shading: THREE.FlatShading
    });
    plane = new THREE.Mesh(geometry, material);
    meshes.push(plane);
    scene.add(plane);

    // Explicitly called here to size the header
    onWindowResize();

    // Make sure the scene gets rerendered on resizes
    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('orientationchange', onWindowResize, false);
};

// This function sizes the header and moves the camera, that way it looks nice on different devices
function onWindowResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    // This logic makes the header different heights based on screen widths
    if (width > 775) {
        canvas.style.height = height * .55 + "px";
        camera.position.set(0, -45, (width / 16));
    }
    if (width < 455) {
        canvas.style.height = height * .3 + "px";
        camera.position.set(0, -60, (width / 4));
    }
    if (width < 775 && width > 455) {
        if (width > height) {
            canvas.style.height = height * .55 + "px";
        } else if (width < height) {
            canvas.style.height = height * .275 + "px";
        }
        camera.position.set(0, -55, (width / 8.5));
    }
    // Updates the scene
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

// This is the animation function
var inc = .02,
    rotation = 0,
	loop = true;
var render = function () {
    requestAnimationFrame(render);
    // Moves the waves
    updatePos();
    renderer.render(scene, camera);
    // I know this bit doesn't really make sense logically, but it's the best thing I can get to work
	if (rotation > 1)
        inc = .00425;
    else if (rotation > 1)
        inc = -.00425;
    else if (rotation < 0)
        inc = .00425;
	rotation += inc;
	
		 
};

// This funciton changes the z position of vertices in a wave-like pattern
var updatePos = function () {
    for (var i = 0; i < plane.geometry.vertices.length; i++) {
        var vertex = plane.geometry.vertices[i];
        // Honestly, I don't understand the math below, I just know it works
        vertex.z = Math.sin(((vertex.x + rotation * rotation) + (vertex.y + rotation / rotation)) / 8) * 5 + 20;
    }
    // Required for the changes to appear
    geometry.dynamic = true;
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
    geometry.normalsNeedUpdate = true;
    geometry.verticesNeedUpdate = true;
};

// This function disposes of geometries to clean up memory
var derender = function () {
    for (var i = 0; i < meshes.length; i++) {
        meshes[i].geometry.dispose();
        meshes[i].material.dispose();
        scene.remove(meshes[i]);
    }
};

// Called on page load to start everything up
window.onload = function () {
    canvas.style.height = height * .575 + "px";
    init();
    render();
};

// Makes sure the derenderer is ran when the user leaves the page
window.onbeforeunload = function () {
    derender();
};