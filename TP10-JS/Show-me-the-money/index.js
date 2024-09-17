document.getElementById('btnMoney').addEventListener('click', function() {
    toggleVisibility('imgMoney');
});

document.getElementById('btnMiami').addEventListener('click', function() {
    toggleVisibility('imgMiami');
});

document.getElementById('btnMaiameee').addEventListener('click', function() {
    toggleVisibility('imgMaiameee');
});

document.getElementById('imgMoney').addEventListener('click', function() {
    this.classList.add('oculto');
});

document.getElementById('imgMiami').addEventListener('click', function() {
    this.classList.add('oculto');
});

document.getElementById('imgMaiameee').addEventListener('click', function() {
    this.classList.add('oculto');
});

function toggleVisibility(imgId) {
    const img = document.getElementById(imgId);
    if (img.classList.contains('oculto')) {
        img.classList.remove('oculto');
    } else {
        img.classList.add('oculto');
    }
}