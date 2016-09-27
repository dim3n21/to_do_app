

$(document).ready(function() {
    $('.drdown').on("click", function() {
        $('description[note]').animate({"height":"100px", "opacity":"1"});
        $('this.remove2').animate({"opacity":"1"});
    });
});
                   

    $(document).ready(function() {
                
                $('.adnote').click(function() {
                                        
                    setTimeout(function() {
                        $('#form').removeClass('hiden');    
                        $('#form').addClass('visible');
                         }, 100)
                    
                    setTimeout(function() {
                        $('#list').addClass('visible');
                     }, 100)
                    
                });
            });
    
    $(document).ready(function() {
                
                $('.removeformbtn').click(function() {
                                        
                    setTimeout(function() {
                        $('#form').removeClass('visible');
                        $('#form').addClass('hiden');
                    }, 100);
                    
               });
            });

   $(document).ready(function() { 
    
        $('.addnotebtn').click(function() {
            $('#list').animate({height: '+=65px'}); 
        });
    });

  $(document).ready(function() { 
    
        $('.remove').click(function() {
            $('#list').animate({height: '-=65px'}); 
        });
    });
 
    


    
    
    