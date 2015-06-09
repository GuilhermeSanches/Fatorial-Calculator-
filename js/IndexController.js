var controller = {

    
    
    
    init: function(){
        controller.setForm();  
        controller.listCalcs();
    
    },
    
    setForm:function(){
        
        document.fatorial.addEventListener('submit', function(event) {
			
             var number = document.fatorial.number.value;                
             var result =  services.calcFat(number);
                        
            LocalStorageService.addLocalStorage(number, result);
            
			  document.fatorial.reset();                      			
		});
                                                       
    },
    
    listCalcs:function(){
      var calc =    LocalStorageService.getFromLocalStorage(); 
                
        calc.forEach(
            function(calc){
			HtmlService.addCalcsToHTML(calc);
		});
    
    
    },
              
 
    
  
};
 window.onload =  controller.init();




