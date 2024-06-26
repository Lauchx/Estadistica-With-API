let frecuenciaEdades = []

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

                let caca = [[]]
                caca[0][0] = -1
                
                
                datardodatardos.forEach((element, index) => {
                    let contador = 0
                    let a = False
                    while(element.id_curso != caca[0][contador] || caca[0][contador] == caca.length){
                        if (caca[0][contador] == element.id_curso) {
                            caca[1][contador]++
                        }
                        contador++
                    } 
                    if ()                   
                })
                
                
                datardos.forEach((element, index) => {

                    let nuevaFila1 = table.insertRow();
                    
                    var celda1 = nuevaFila1.insertCell(0)
                    celda1.innerHTML = 0

                     
                    
/*
                    let nuevaFila1 = table.insertRow();
                    
                    var celda1 = nuevaFila1.insertCell(0)
                    var celda2 = nuevaFila1.insertCell(1)
                    var celda3 = nuevaFila1.insertCell(2)
                    var celda4 = nuevaFila1.insertCell(3)
                            
                    celda1.innerHTML = element.curso

                    caca[i] = element.id_curso

                    let abs = frecuenciaAbsoluta(element.id_curso)

                    celda1.innerHTML = element.id_curso
                    celda2.innerHTML = popo
                    celda3.innerHTML = 0++
                    celda4.innerHTML = 0++*/
                    
                    
                    
                    var j = 1

                    document.getElementById('j').innerHTML = '<p>' + j + '<p>'
                    
                });

            }
    })


}

function frecuenciaAbsoluta(idCurso) {
    if (idCurso == 1){
        frecuenciaEdades[0]++
        return frecuenciaEdades[0]
    }
    else if (idCurso == 2){
        frecuenciaEdades[1]++ 
        return frecuenciaEdades[1]
    }
    else if (idCurso == 3){
        frecuenciaEdades[2]++
        return frecuenciaEdades[2]
    } 
    else if (idCurso == 4){
        frecuenciaEdades[3]++ 
        return frecuenciaEdades[3]
    }
    else if (idCurso == 5){
        frecuenciaEdades[4]++ 
        return frecuenciaEdades[4]
    }
    else if (idCurso == 6){
        frecuenciaEdades[5]++ 
        return frecuenciaEdades[5]
    }

}
