$(document).ready(function() {
    $('.faq-question').hover(
        function() {
            $(this).siblings('.faq-answer').stop(true, true).slideDown();
        }, 
        function() {
            $(this).siblings('.faq-answer').stop(true, true).slideUp();
        }
    );
});
function openWhatsApp() {
    const phoneNumber = '55 91 98173-3411'; // Substitua pelo número de telefone desejado
    const message = 'Olá, gostaria de mais informações.'; // Substitua pela mensagem desejada
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
