let frecuenciaEdades = []

function SearchStudents_EducationLevels()
{
    let datApi = []
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
        
        datApi = apiJsons.data

        console.log(datApi) 

        if(datApi.length > 0)
            { 
                
                const table = document.getElementById('Table_EducationLevel').getElementsByTagName('tbody')[0]

                let array = [[]]
                array[0][0] = -1
                
                
                console.log("jaja1")
                datApi.forEach((element, index) => {
                    let contador = 0
                    //let a = false
                    console.log("ysy")

                    while(element.id_curso != array[0][contador] && array[0][contador] == array.length){
                        if (array[0][contador] == element.id_curso) {
                            array[1][contador]++
                            console.log("jaja")
                        }
                        contador++
                    } 
                    //if ()    
                        console.log("jaja3")               
                })
                console.log("nanananan")

                
                console.log("log")
                datApi.forEach((element, index) => {
                    console.log("rey")

                    let nuevaFila1 = table.insertRow();
                   /* let nuevaFila2 = table.insertRow();
                    let nuevaFila3 = table.insertRow();
                    let nuevaFila4 = table.insertRow(); */

                    //var celda1 = nuevaFila1.insertCell(0)
                    //celda1.innerHTML = 0
                    
                    var celda1 = nuevaFila1.insertCell(0)
                    var celda2 = nuevaFila1.insertCell(1)
                    var celda3 = nuevaFila1.insertCell(2)
                    var celda4 = nuevaFila1.insertCell(3)
                    
                    celda1.innerHTML = element.curso
                    celda2.innerHTML = element.data
                    celda3.innerHTML = element.Edad
                    celda4.innerHTML = element.apellido

                    array[i] = element.id_curso

                    let abs = frecuenciaAbsoluta(element.id_curso)

                    celda1.innerHTML = element.id_curso
                    celda2.innerHTML = popo
                    celda3.innerHTML++
                    celda4.innerHTML++
                    
                    console.log(abs)
                    
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
