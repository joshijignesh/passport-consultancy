(function($){
    $("body").on("submit", "#deleteForm" ,function(e){  
        if (!confirm("Are You Sure?")){
            return false;
        }                
    });
})(jQuery);