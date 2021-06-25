    //instancia el id contenido
     var contenido2 = document.querySelector('#anillos')
     function anillo(){
         //llamar con fetch al archivo a leer           
         fetch('js/anillos.json')
             //res.tipo de archivo
             .then(res => res.json())
             //leer 
             .then(datos => {
                //console.log(datos)
                //llama a funcion
               imprimirAnillo(datos)
             })       
     }
 
     function imprimirAnillo(datos){
      //  console.log(datos)
        // contenido.innerHTML = ''
         for(let valor of datos){
             //se puede llamar por propiedad 
             //console.log(valor.nombre)
             // para insertar valores se tiene ke poner ${ }
             // no olvidar el += para pasar al siguiente
             //<a href="${ valor.art }" target="_blank" rel="noopener noreferrer">
             contenido2.innerHTML += `
             
               <div class="col-6 col-md-4 col-sm-6">
                 <a data-toggle="modal" data-target="#ej${ valor.id }">
                 <div class="box17 text-center">
                   <img src="${ valor.art }">
                   <div class="box-content">
                     <h3 class="title">${ valor.nombre }</h3>
                     <span class="post1">${ valor.precio }<br></span>
                   </div>         
                 </div>
                 </a>  
               </div>  
             
               <!-- Modal -->
               
               <div class="modal fade" id="ej${ valor.id }" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                 <div class="modal-dialog" role="document">
                   <div class="modal-content" id="contmodal">
                     <div class="modal-header">
                       <h5 class="modal-title" id="modTit">${ valor.nombre }</h5>
                     </div>
                     <div class="modal-body text-center">
                       <img src="${ valor.art }">
                       <h4>${ valor.precio }</h4>
                     </div>          
                     <div class="modal-footer">
                       <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                     </div>
                   </div>
                 </div>
               </div>
             
             `
         }
         
     }
    anillo()  


         //instancia el id contenido
         var contenido3 = document.querySelector('#collares')
         function collar(){
             //llamar con fetch al archivo a leer           
             fetch('js/collares.json')
                 //res.tipo de archivo
                 .then(res => res.json())
                 //leer 
                 .then(datos => {
                    //console.log(datos)
                    //llama a funcion
                   imprimirCollar(datos)
                 })       
         }
     
         function imprimirCollar(datos){
    
             for(let valor of datos){
                 //se puede llamar por propiedad 
                 //console.log(valor.nombre)
                 // para insertar valores se tiene ke poner ${ }
                 // no olvidar el += para pasar al siguiente
                 //<a href="${ valor.art }" target="_blank" rel="noopener noreferrer">
                 contenido3.innerHTML += `
                 
                   <div class="col-6 col-md-4 col-sm-6">
                     <a data-toggle="modal" data-target="#ej${ valor.id }">
                     <div class="box17 text-center">
                       <img src="${ valor.art }">
                       <div class="box-content">
                         <h3 class="title">${ valor.nombre }</h3>
                         <span class="post1">${ valor.precio }<br></span>
                       </div>         
                     </div>
                     </a>  
                   </div>  
                 
                   <!-- Modal -->
                   
                   <div class="modal fade" id="ej${ valor.id }" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                     <div class="modal-dialog" role="document">
                       <div class="modal-content" id="contmodal">
                         <div class="modal-header">
                           <h5 class="modal-title" id="modTit">${ valor.nombre }</h5>
                         </div>
                         <div class="modal-body text-center">
                           <img src="${ valor.art }">
                           <h4>${ valor.precio }</h4>
                         </div>          
                         <div class="modal-footer">
                           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                         </div>
                       </div>
                     </div>
                   </div>
                 
                 `
             }
             
         }
        collar()  

             //instancia el id contenido
     var contenido4 = document.querySelector('#aros')
     function aros(){
         //llamar con fetch al archivo a leer           
         fetch('js/aros.json')
             //res.tipo de archivo
             .then(res => res.json())
             //leer 
             .then(datos => {
                //console.log(datos)
                //llama a funcion
               imprimirAros(datos)
             })       
     }
 
     function imprimirAros(datos){

         for(let valor of datos){
             //se puede llamar por propiedad 
             //console.log(valor.nombre)
             // para insertar valores se tiene ke poner ${ }
             // no olvidar el += para pasar al siguiente
             //<a href="${ valor.art }" target="_blank" rel="noopener noreferrer">
             contenido4.innerHTML += `
             
               <div class="col-6 col-md-4 col-sm-6">
                 <a data-toggle="modal" data-target="#ej${ valor.id }">
                 <div class="box17 text-center">
                   <img src="${ valor.art }">
                   <div class="box-content">
                     <h3 class="title">${ valor.nombre }</h3>
                     <span class="post1">${ valor.precio }<br></span>
                   </div>         
                 </div>
                 </a>  
               </div>  
             
               <!-- Modal -->
               
               <div class="modal fade" id="ej${ valor.id }" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                 <div class="modal-dialog" role="document">
                   <div class="modal-content" id="contmodal">
                     <div class="modal-header">
                       <h5 class="modal-title" id="modTit">${ valor.nombre }</h5>
                     </div>
                     <div class="modal-body text-center">
                       <img src="${ valor.art }">
                       <h4>${ valor.precio }</h4>
                     </div>          
                     <div class="modal-footer">
                       <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                     </div>
                   </div>
                 </div>
               </div>
             
             `
         }
         
     }
    aros()  