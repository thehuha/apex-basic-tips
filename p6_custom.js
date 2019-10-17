function runAjaxDemo () {
    var popup = apex.widget.waitPopup();

    var promise = 
    apex.server.process(
        "AJAX_DEMO"
       ,{
		   x01: $v("P6_INPUT")
	    }
       ,{
         success: function(data){
           $s("P6_RESULT", data.result);
         }
        }
    );
	
    promise.always(function() {
      popup.remove();
    });
}