let frecuenciaEdades = []
function inicio(){
    document.getElementById('Inicio').style.display = 'block'
    //document.getElementById('Inicio').innerHTML = '<h1>' + "Tablas de Frecuencia y Estadísticos" + '</h1>' + '<h3>' + "Trabajo realizado por: Rojo Ignacio; Retamales Lautaro" + '</h3>' + '<img src="nacho.jpg" alt="nacho"></img>' +  '<img src="lautaro.jpg" alt="lautaro"></img>'
    document.getElementById('TablaCursos').style.display = 'none'
    document.getElementById('TablaNieveles').style.display = 'none'
    document.getElementById('TablaEstadisticos').style.display = 'none'
    document.getElementById('TablaPob').style.display = 'none'

    document.getElementById('Table_Cursos').style.display = 'none'
    document.getElementById('Table_EducationLevel').style.display = 'none'
    document.getElementById('Table_Estadisticos').style.display = 'none'
    document.getElementById('Table_Pob').style.display = 'none'

}

function SearchStudents_EducationLevels(valor) {
    let datApi = []
    

    new Promise((resolve, reject) => {
        fetch('https://apidemo.geoeducacion.com.ar/api/testing/encuesta/1')
            .then(api => {
                if (!api.ok) {
                    throw new Error('Kumpa no podes andar con ese internet....')
                }
                return api.json()
            })
            .then(apiJson => {

                resolve(apiJson)
            })

            .catch(apiJson => {

                reject(apiJson)
            })
    }).then((apiJsons) => {

            datApi = apiJsons.data

           

            if (datApi.length > 0) {
                if (valor == 0){
                    document.getElementById('TablaPob').style.display = 'block'
                    document.getElementById('TablaPob').innerHTML = '<h1>' + "Tabla de poblacion" + '<h1>'
                    document.getElementById('TablaCursos').style.display = 'none'
                    document.getElementById('TablaNieveles').style.display = 'none'
                    document.getElementById('TablaEstadisticos').style.display = 'none'
                    document.getElementById('Inicio').style.display = 'none'

                    document.getElementById('Table_Pob').style.display = 'block'
                    document.getElementById('Table_Cursos').style.display = 'none'
                    document.getElementById('Table_EducationLevel').style.display = 'none'
                    document.getElementById('Table_Estadisticos').style.display = 'none'
                    const table = document.getElementById('Table_Pob').getElementsByTagName('tbody')[0]
                    table.innerHTML = ""
                    
                    
                    datApi.forEach((element, index) => { //le insertamos las celdas y columnas con los datos
                        let nuevaFila = table.insertRow();
                        let celda1 = nuevaFila.insertCell();
                        let celda2 = nuevaFila.insertCell();
                        let celda3 = nuevaFila.insertCell();
                        let celda4 = nuevaFila.insertCell();

                        celda1.innerHTML = element.nombre + " " + element.apellido;
                        celda2.innerHTML = element.Edad;
                        celda3.innerHTML = element.curso;
                        celda4.innerHTML = element.nivel;
                    });
                }
                else if (valor == 1){
                    document.getElementById('TablaCursos').style.display = 'block'
                    document.getElementById('TablaNieveles').style.display = 'block'
                    document.getElementById('TablaCursos').innerHTML = '<h1>' + "Tabla de cursos" + '<h1>'
                    document.getElementById('TablaNieveles').innerHTML = '<h1>' + "Tabla de niveles" + '<h1>'
                    document.getElementById('TablaPob').style.display = 'none'
                    document.getElementById('TablaEstadisticos').style.display = 'none'
                    document.getElementById('Inicio').style.display = 'none'

                    document.getElementById('Table_Pob').style.display = 'none'
                    document.getElementById('Table_Cursos').style.display = 'block'
                    document.getElementById('Table_EducationLevel').style.display = 'block'
                    document.getElementById('Table_Estadisticos').style.display = 'none'

                    const table = document.getElementById('Table_EducationLevel').getElementsByTagName('tbody')[0]
                    //console.log("jaja" + table)
                    table.innerHTML = ""
                    //console.log(table)
                    let array = [
                        [1, 2, 3, 4, 5, 6],
                        [0, 0, 0, 0, 0, 0],
                        ["", "", "", "", "", ""]
                    ];

                    datApi.forEach((element, index) => {
                        let contador = 0

                        while (contador != array[0].length) {
                            if (array[0][contador] == element.id_curso) {
                                array[1][contador]++
                                array[2][contador] = element.curso
                            // console.log("--- cont")
                            // console.log(array[0][contador]) 
                                //console.log(array[1][contador]) 

                            }


                            //console.log("//////")
                            //console.log(element.id_curso)

                            contador++
                        }
                    })
                    let frecuenciaAbsolutaAcumulada = 0
                    //console.log(array[0].length)
                    total = 0;
                    for (i = 0; i < array[0].length; i++) {
                        total += array[1][i]
                    }
                    for (i = 0; i < array[0].length; i++) {
                        let nuevafila = table.insertRow()
                        let celda = nuevafila.insertCell()
                        let celda2 = nuevafila.insertCell()
                        let celda3 = nuevafila.insertCell()
                        let celda4 = nuevafila.insertCell()
                        let celda5 = nuevafila.insertCell()
                        celda.innerHTML = array[0][i]
                        celda2.innerHTML = array[2][i]
                        celda3.innerHTML = array[1][i]
                        frecuenciaAbsolutaAcumulada += array[1][i]
                        celda4.innerHTML = frecuenciaAbsolutaAcumulada
                        celda5.innerHTML = ((array[1][i] / total) * 100).toFixed(2)
                    }
                
                    //////////////////////////////////////////////////////////////////////////////////////////////////////

                    const table2 = document.getElementById('Table_Cursos').getElementsByTagName('tbody')[0]
                    //console.log("jaja" + table2)
                    table2.innerHTML = ''
                    //console.log(table2)
                    let array2 = [
                        [1, 2, 3],
                        [0, 0, 0],
                        ["", "", ""]
                    ];

                    datApi.forEach((element, index) => {
                        let contador = 0

                        while (contador != array2[0].length) {
                            if (array2[0][contador] == element.id_curso) {
                                array2[1][contador]++
                                array2[2][contador] = element.curso
                                //console.log("--- cont")
                                //console.log(array[0][contador]) // 3 -< 6
                                //console.log(array[1][contador]) // 1

                            }
                            //console.log("//////")
                            //console.log(element.id_curso)
                            contador++
                        }
                    })
                    let frecuenciaAbsolutaAcumulada2 = 0
                    //console.log(array2[0].length)
                    total = 0;
                    for (i = 0; i < array2[0].length; i++) {
                        total += array2[1][i]
                    }
                    for (i = 0; i < array2[0].length; i++) {
                        let nuevafila = table2.insertRow()
                        let celda = nuevafila.insertCell()
                        let celda2 = nuevafila.insertCell()
                        let celda3 = nuevafila.insertCell()
                        let celda4 = nuevafila.insertCell()
                        let celda5 = nuevafila.insertCell()
                        celda.innerHTML = array2[0][i]
                        celda2.innerHTML = array2[2][i]
                        celda3.innerHTML = array2[1][i]
                        frecuenciaAbsolutaAcumulada2 += array2[1][i]
                        celda4.innerHTML = frecuenciaAbsolutaAcumulada2
                        celda5.innerHTML = ((array2[1][i] / total) * 100).toFixed(2)
                    }
                }
                else if (valor == 2){
                    document.getElementById('TablaEstadisticos').style.display = 'block'
                    document.getElementById('TablaEstadisticos').innerHTML = '<h1>' + "Tabla de estadisticos" + '<h1>'
                    document.getElementById('TablaCursos').style.display = 'none'
                    document.getElementById('TablaNieveles').style.display = 'none'
                    document.getElementById('TablaPob').style.display = 'none'
                    document.getElementById('Inicio').style.display = 'none'

                    document.getElementById('Table_Pob').style.display = 'none'
                    document.getElementById('Table_Cursos').style.display = 'none'
                    document.getElementById('Table_EducationLevel').style.display = 'none'
                    document.getElementById('Table_Estadisticos').style.display = 'block'
                    const table = document.getElementById('Table_Estadisticos').getElementsByTagName('tbody')[0]
                    table.innerHTML = ""
                    edades = []
                    contador = 0
                    ordenar = 0

                    datApi.forEach((element, index) => {
                        edades[index] = element.Edad
                        contador += element.Edad
                    })

                    for (i = 0; i<edades.length;i++){
                        for (j=0;j<edades.length-1;j++){
                            if (edades[j] > edades[j+1]){
                                ordenar = edades[j+1]
                                edades[j+1] = edades[j]
                                edades[j] = ordenar
                            }
                        }
                    }

                    
                    let nuevafila = table.insertRow()

                    // Media
                    media = (contador/edades.length).toFixed(1)
                    let celda = nuevafila.insertCell()
                    celda.innerHTML = media

                    // Mediana
                    mediana = 0
                    if (edades.length % 2 == 1) mediana = edades[parseInt(edades.length/2)+1]
                    else mediana = (edades[edades.length/2]+edades[(edades.length/2)+1])/2
                    let celda2 = nuevafila.insertCell()
                    celda2.innerHTML = mediana

                    // Valor Maximo y Minimo
                    let celda3 = nuevafila.insertCell()
                    let celda4 = nuevafila.insertCell()
                    celda3.innerHTML = edades[edades.length-1]
                    celda4.innerHTML = edades[0]

                    // Primer y tercer cuartil
                    let celda5 = nuevafila.insertCell()
                    let celda6 = nuevafila.insertCell()
                    primerC = 0
                    tercerC = 0
                    if (edades.length % 2 == 1) {
                        primerC = edades[parseInt(edades.length/4)+1]
                        tercerC = edades[parseInt(edades.length*3/4)+1]
                    }
                    else {
                        primerC = (edades[edades.length/4]+edades[(edades.length/4)+1])/2
                        tercerC = (edades[edades.length*3/4]+edades[(edades.length*3/4)+1])/2
                    }
                    celda5.innerHTML = primerC
                    celda6.innerHTML = tercerC
                    // Desvio estandar
                    desvio = 0
                    edades.forEach((element, index) => {
                        desvio += Math.pow((element - media),2)
                    })
                    let celda7 = nuevafila.insertCell()
                    celda7.innerHTML = "~ "+ (desvio/edades.length).toFixed(1)
                }

 
            }
        })


}
function  entirePopulation() {
    new Promise(resolve, reject =>{
        fetch('https://apidemo.geoeducacion.com.ar/api/testing/encuesta/1')
            .then(api => {
                if (!api.ok) {
                    throw new Error('Kumpa no podes andar con ese internet....')
                }
                return api.json()
            })
            .then(apiJson => {

                resolve(apiJson)
            })

            .catch(apiJson => {

                reject(apiJson)
            })

    })

}


