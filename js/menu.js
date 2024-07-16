function show_scroll_content() {
    // $('.sidebar-link').click(function() {
    $('.scroll_title').click(function() {


        $(this).toggleClass('selected');
        $(this).next('.scroll_content').toggleClass('scroll_content_selected');



    });

    // menu cấp 3 small
    $('.link-scroll').click(function() {


        $(this).toggleClass('selected');
        $(this).next('.scroll_content_2').toggleClass('scroll_content_2_selected');



    });
    // menu dropdown full
    $('.scroll_title').click(function() {


        $(this).toggleClass('selected');
        $(this).children('.icon-dropdown').toggleClass('selected');
        $(this).next('.scroll_content').toggleClass('remove-display');



    });
    // menu cấp 3 của dropdown full
    $('.link-scroll').click(function() {


        $(this).toggleClass('selected');

        $(this).next('.product-highlight').toggleClass('remove-display');
        // dành cho theme cv dòng này chỉ dùng cho cv
        $(this).next('.owl-carousel').toggleClass('remove-display');



    });

}