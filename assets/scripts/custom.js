/**
 * Script for active sidebar
 */

$(document).ready(function(){
    
    var activePage = $('header').siblings('article').prop('id');
    $('.menu-bar').find('.link-'+ activePage).addClass('active');
});