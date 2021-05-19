/**
 * Script for active sidebar
 */

$(document).ready(function(){
    
    var activePage = $('header').siblings('article').prop('id');
    $('.menu-bar').find('.link-'+ activePage).addClass('active');
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