var HtmlService = {
    
    
            addCalcsToHTML:function(list){
            
            var section = document.getElementById('results');
            var dl = document.createElement('dl');
            var dt = document.createElement('dt');
            var dd = document.createElement('dd');
            
            dl.innerHTML = list.numero;
            dt.innerHTML = list.resultado;
        
        
            dl.appendChild(dt);
            dl.appendChild(dd);
        
            section.appendChild(dl);

}
        

};