$(document).ready(function(){
    $('#scan').on("tap",function(){
        scan();
    });
    
    scan: function() {
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.scan( function (result) 
        { 
			tulis(  
				"We got a barcode\n" + 
				"Result: " + result.text + "\n" + 
				"Format: " + result.format + "\n" + 
				"Cancelled: " + result.cancelled
            );
        }, function (error) { 
            alert("Scanning failed: ", error); 
        }
        );
    }
    function tulis(parameterr){
    $("#info").html(parameterr);
}
    
});