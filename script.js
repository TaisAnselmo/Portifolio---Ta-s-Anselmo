document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Pega valores
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Validação simples
    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    // Aqui você pode adicionar lógica para enviar o formulário via fetch/AJAX

    // Mensagem de sucesso
    alert('Mensagem enviada com sucesso! Obrigada pelo contato.');

    // Limpa o formulário
    form.reset();
  });
});
