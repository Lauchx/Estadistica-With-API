function SearchStudents_EducationLevels()
{
    let datardos = []
    new Promise ((resolve, reject) =>{
    fetch('https://apidemo.geoeducacion.com.ar/api/testing/encuesta/1')
        .then(api =>{
            if(!api.ok)
            {   
                throw new Error ('Kumpa no podes andar con ese internet....')
            }
            return api.json();
        })
        .then(apiJson =>{
        
            resolve(apiJson)
        })
        
        .catch(apiJson =>{
        
            reject(apiJson)
         })
    })
    
    .then((apiJsons)=> {
        

        datardos = apiJsons.data

        console.log(datardos) 

        if(datardos.length > 0)
            { 
                const table = document.getElementById('Table_EducationLevel').getElementsByTagName('tbody')[0]
                datardos.forEach((element, index) => {
                    let nuevaFila1 = table.insertRow();
                    
                    
                    var celda1 = nuevaFila1.insertCell(0)
                    var celda2 = nuevaFila1.insertCell(1)
                    var celda3 = nuevaFila1.insertCell(2)
                    var celda4 = nuevaFila1.insertCell(3)

                    celda1.innerHTML = element.nivel
                    celda2.innerHTML = element.id
                    celda3.innerHTML = element.nivel
                    celda4.innerHTML = element.nivel
                    
                    
                    var j = 1

                    document.getElementById('j').innerHTML = '<p>' + j + '<p>'
                    
                });

            }
        





    })


}
