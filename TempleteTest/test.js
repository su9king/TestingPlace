document.getElementById('showTemplateBtn').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('hidden');
    document.getElementById('overlay').classList.add('visible');
    document.getElementById('newTemplate').classList.remove('hidden');
    document.getElementById('newTemplate').classList.add('visible');
});

document.getElementById('closeTemplateBtn').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('visible');
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('newTemplate').classList.remove('visible');
    document.getElementById('newTemplate').classList.add('hidden');
});
