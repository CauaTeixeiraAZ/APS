


let localJson = new Request('../json/infos-gm-tabuleiro.json')

fetch(localJson)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
    for(let i = 0; i < data.length; i++){
        
        function caracteristicas(caracteristica){
            return `
            ${caracteristica.map(function(caract){
                return `
                <li>${caract}</li>
                `
            }).join('')}
            `
        }

        let main = document.querySelector('main').innerHTML +=
        `<div class="conteudo-game">
       <div class="text-conteudo">
           <h2 class="game-name">${data[i].name}</h2>
           </br>
           <div class="descricao-box">
               <h3 class="subTitle">Descrição</h3>
           </br>
        
               <h4 class="descricao-game">
                   ${data[i].descricao}
               </h4>
           </div>
           </br>
           <div class="caracteristica-box">
               <h3 class="subTitle">Caracteristicas</h3>
           </br>
               <h4 class="caracteristica-game"><p>
                       <ul class="caracteristica-list">
                            ${caracteristicas(data[i].caracteristica)}
                       </ul>
               </p></h4>
           </div>
           </br>
           <div class="controle-buttomEinfos">
               <div class="subInfos-box">
                   <h3 class="subTitle">Informações</h3>
                   </br>
                   <ul>
                       <li><h4 class="fornecedor-game"><span>Fornecedor:</span> ${data[i].fornecedor}  </h4></li>
                       <li><h4 class="plataforma-game"><span>Plataforma:</span> ${data[i].plataforma} </h4></li>
                       <li><h4 class="categoria-game"><span>Categoria:</span> ${data[i].categoria} </h4></li>
                   </ul>
               </div>
                <a href="${data[i].link}" target="_blank">
                    <button class="download-game"><h2>Download</h2></button>
                </a>   
            </div>
       </div>
       
       <img src="${data[i].imagem}" alt="" class="logo-game">
   </div>`
        
    }})

