var services = {
            
    calcFat: function(value){
    
        
       if(value===1) 
        return value;
        
    return services.calcFat(value-1) * value;                       
    },             
};