const dropMenu = document.querySelector('.drop-list');
const dropMenu2 = document.getElementById('drop-list');
const sideBar = document.getElementById('side-bar');
let isDrop = false;

function showSideBar() {
    // sideBar.style.display = 'flex';
    sideBar.style.right = '0px';
}
function hideSideBar() {
    sideBar.style.right = '-700px';
    // sideBar.style.display = 'none';
}

function fade() {
    sideBar.style.right = '-700px';
}

function dropDown() {
    if(isDrop === false) {
        dropMenu.style.visibility = 'visible';
        dropMenu.style.height = '200px';
        isDrop = true;
    } else {
        dropMenu.style.visibility = 'hidden';
        dropMenu.style.height = '0';
        isDrop = false;
    }
}
function dropDownSide2() {
    if(isDrop === false) {
        sideBar.style.right = '0px';
        dropMenu2.style.visibility = 'visible';
        dropMenu2.style.height = '200px';
        isDrop = true;
    } else {
        sideBar.style.right = '-700px';
        dropMenu2.style.visibility = 'hidden';
        dropMenu2.style.height = '0';
        isDrop = false;
    }
}