let frecuenciaEdades = []

function SearchStudents_EducationLevels(button) {
    let datApi = []
    button.disabled = true
      document.getElementById('TablaCursos').innerHTML = '<h1>' + "Tabla de cursos" + '<h1>'
      document.getElementById('TablaNieveles').innerHTML = '<h1>' + "Tabla de niveles" + '<h1>'


    new Promise((resolve, reject) => {
        fetch('https://apidemo.geoeducacion.com.ar/api/testing/encuesta/1')
            .then(api => {
                if (!api.ok) {
                    throw new Error('Kumpa no podes andar con ese internet....')
                }
                return api.json();
            })
            .then(apiJson => {

                resolve(apiJson)
            })

            .catch(apiJson => {

                reject(apiJson)
            })
    })

        .then((apiJsons) => {

            datApi = apiJsons.data

            console.log(datApi)

            if (datApi.length > 0) {

                const table = document.getElementById('Table_EducationLevel').getElementsByTagName('tbody')[0]


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
                            console.log("--- cont")
                            console.log(array[0][contador]) // 3 -< 6
                            console.log(array[1][contador]) // 1

                        }


                        console.log("//////////////////////////////////////")
                        console.log(element.id_curso)

                        contador++
                    }
                })
                let frecuenciaAbsolutaAcumulada = 0
                console.log(array[0].length)
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
                    celda5.innerHTML = ((array[1][i] / total) * 100).toFixed(3)
                }
               






                const table2 = document.getElementById('Table_Cursos').getElementsByTagName('tbody')[0]
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
                            console.log("--- cont")
                            console.log(array[0][contador]) // 3 -< 6
                            console.log(array[1][contador]) // 1

                        }


                        console.log("//////////////////////////////////////")
                        console.log(element.id_curso)

                        contador++
                    }
                })
                let frecuenciaAbsolutaAcumulada2 = 0
                console.log(array2[0].length)
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
                    celda5.innerHTML = ((array2[1][i] / total) * 100).toFixed(3)
                }

 
            }
        })


}


