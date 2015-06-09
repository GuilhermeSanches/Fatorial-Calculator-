
var LocalStorageService = {
    
    
    list:[],

      addLocalStorage:function(number, result){
            var obj = {
                numero: number,
                resultado: result                
            };
            
            LocalStorageService.list.push(obj);
        
            var textString = JSON.stringify(LocalStorageService.list);
            window.localStorage.setItem('list-results', textString);                                                
            },   
    
      getFromLocalStorage:function(){
            var jsonText = window.localStorage.getItem('list-results');
		if(jsonText) {
			LocalStorageService.list = JSON.parse(jsonText);
		}
    return LocalStorageService.list;
    }                
};


