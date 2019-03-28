//Botão scrollTop 
$(document).ready(function(){
   $('#icon-scroll').hide();
   $(function(){
      $(window).scroll(function(){
          if($(this).scrollTop() > 100){
             $('#icon-scroll').fadeIn();
          } else{
             $('#icon-scroll').fadeOut();
          }
      });
    
    $('#icon-scroll a').click(function(){
        $('body, html').animate({scrollTop:0}, 800);
          return false;
    });
  });   
});

// Clicar no botão de doação  e abrir o formulário.
$(document).ready(function(){
    $('.botao-doacao').click(function(){
      $('#box-doacao, #mask').fadeIn(1000);
    	$('#box-doacao, #mask').show();
    });
    
    // Clicar no botão fechar do formulário de doação.
    $('.botao-box').click(function(){
       $('#box-doacao, #mask').fadeOut(1000);
       $('#box-doacao, #mask').hide();
    });
});

//Evento abrir e fechar menu mobile
$(document).ready(function(){
    $('#btn-open').click(function(){
       $('.menu li, .mask-menu-mobile').show();
    });
    $('#btn-close').click(function(){
       $('.menu li, .mask-menu-mobile').hide(); 
    });
});


