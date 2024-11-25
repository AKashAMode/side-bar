const sidebar = document.getElementById('side-bar');
const menuicon = document.getElementById('menu-icon');
const closeicon = document.getElementById('close-icon');

function openSideBar(){
    sidebar.style.visibility = 'visible';
    menuicon.style.display = 'none';

}

function closeIcon(){
    sidebar.style.visibility = 'hidden';
    menuicon.style.display = 'block';
}