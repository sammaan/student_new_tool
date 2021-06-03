
$(document).ready(function(){
    
    /**
     * Script for active sidebar
     */
    var activePage = $('header').siblings('article').prop('id');
    $('.menu-bar').find('.link-'+ activePage).addClass('active');

    /**
     * Script for Close Pop Up
     */

    $('.close-popup').click(function(e){
        $('.pop-up-bg').removeClass('active');
        $('.pop-up-bg .pop-up').fadeOut();
    });

    /**
     * Script for sidebar (mobile)
     */
    $(".mobile-hamburger").click(function(){
        $(".side-bar").toggleClass("open-menu");
    });

    /**
     * Script for collapse tab
     */
    $(".top-box").click(function(){
       // $(this).siblings(".inner-boxes").toggle("slow");
       $(this).parents(".dashboard-box-container").toggleClass("open");
    });

});

//tablist

function openSubject(evt, semName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("subject-selection-box");
    tablinks = document.getElementsByClassName("tab-list");
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(semName).style.display = "block";
    evt.currentTarget.className += " active";
}
