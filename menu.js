document.getElementById('moreInfo').addEventListener('click', function(event) {
    event.preventDefault();
    openNav();
});

function openNav() {
    document.getElementById('sidebar').style.width = '250px';
}

function closeNav() {
    document.getElementById('sidebar').style.width = '0';
}
