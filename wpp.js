document.getElementById('playerForm').addEventListener('submit', function (event) {
  event.preventDefault();
  // Captura os dados do formulário
  const name = document.getElementById('name').value;
  const position = document.getElementById('position').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Verifica se todos os campos estão preenchidos
  if (!name || !position || !email || !phone) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Formatando a mensagem para o WhatsApp
  const message = `Olá, gostaria de me inscrever na seletiva de futebol me chamo ${name}, e atuo como ${position}. Meu E-mail: ${email} \nTelefone: ${phone}`;

  // Formata o número do WhatsApp (adicione o DDD sem o "+" ou caracteres especiais)
  const whatsappNumber = "5511952503733"; // Número no formato: 55 + código do país + DDD + número

  // Cria o link do WhatsApp com a mensagem pré-definida

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, `_blank`);

});
