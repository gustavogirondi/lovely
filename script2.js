// Adiciona um efeito de hover à caixa de texto
document.getElementById('romantic-text').addEventListener('mouseover', function() {
    this.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.2)';
});

document.getElementById('romantic-text').addEventListener('mouseout', function() {
    this.style.boxShadow = 'none';
});
