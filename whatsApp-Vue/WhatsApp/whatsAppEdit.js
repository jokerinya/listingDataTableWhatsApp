// custom ayarlama yapılabilir buradan

$(function() {
  $('#WAButton').floatingWhatsApp({
    phone: '+905380558603', //WhatsApp Business phone number
    headerTitle: 'Bize ulaşın WhatsApp!', //Popup Title
    popupMessage: 'Merhaba, Nasıl yardımcı olabilirim?', //Popup Message
    showPopup: true, //Enables popup display
    buttonImage: '<img src="WhatsApp/whatsapp.svg" />', //Button Image
    // headerColor: 'crimson', //Custom header color
    // backgroundColor: 'crimson', //Custom background button color
    position: 'right' //Position: left | right
  });
  // istersen kaldır
  $('.deneme').mouseleave(function() {
    $('.floating-wpp-popup').removeClass('active');
  });
});
