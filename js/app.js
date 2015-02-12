 $(document).ready(function(){
            
            $('#page1').hide();
            $('#btn1').on('click', function() {
                $('#page2, #page3, #page4, #page5').hide();
                $('#page1').slideToggle(1000);
            });
            
            $('#page2').hide();
            $('#btn2').on('click', function() {
                $('#page1, #page3, #page4, #page5').hide();
                $('#page2').slideToggle(1000);
            });
            
            $('#page3').hide();
            $('#btn3').on('click', function() {
                $('#page1, #page2, #page4, #page5').hide();
                $('#page3').slideToggle(1000);
            });
            
            $('#page4').hide();
            $('#btn4').on('click', function() {
                $('#page1, #page2, #page3, #page5').hide();
                $('#page4').slideToggle(1000);
            });
            
            $('#page5').hide();
            $('#btn5').on('click', function() {
                $('#page1, #page2, #page3, #page4').hide();
                $('#page5').slideToggle(1000);
            });
            
        });