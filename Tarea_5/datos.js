// //capturar datos del formulario
// let name
// function capturar() {
//     name=document.getElementById("nombres").value;
// }
// function mostrar(){
//     document.write(name)
// }

// let second
// let dpi
// let job
// let salario
// let respuesta
// //
// let form = document.querySelector("form")
// form.addEventListener("submit",validar)
// function validar(e) {
//     e.preventDefault();
//     let name=document.querySelector("#nombres").value
//     second=document.querySelector("#apellidos").value
//     dpi=document.querySelector("#dpi").value
//     job=document.querySelector("#trabajo").value
//     salario=document.querySelector("#salario").value
//     respuesta = document.getElementById("respuesta")
//     let total=0
//     let igss=0
//     igss=parseFloat(salario)*0.0483
//     total=parseFloat(salario)-igss+250
//     respuesta.innerText='Nombre: '+name+second+'\n\nDPI: '+dpi+'\n\nOcupacio: '+job+'\n\nSalario: Q'+salario+'\n\nDesuento IGSS: Q'+igss.toFixed(2)+'\n\nSalario Total: Q'+total.toFixed(2)
    
// }
// //calculo del boleto de ornato
//     form.addEventListener("submit",show) 
//     function show(e){
//        e.preventDefault()
//         let mostrar=document.getElementById("mostrar")
//         if (salario>=500.01 && salario<=1000) {
//             mostrar.innerText='Salario: Q'+salario+'\n\nArbitrio Q10.00\nCon multa: Q20.00'
//         } else {
//             if (salario>=1000.01 && salario<=3000) {
//                 mostrar.innerText='Salario: Q'+salario+'\n\nArbitrio Q15.00\nCon multa: Q30.00'
//             } else {
//                 if (salario>=3000.01 && salario<=6000) {
//                     mostrar.innerText='Salario: Q'+salario+'\n\nArbitrio Q50.00\nCon multa: Q100.00'
//                 } else {
//                     if (salario>=6000.01 && salario<=9000) {
//                         mostrar.innerText='Salario: Q'+salario+'\n\nArbitrio Q75.00\nCon multa: Q150.00'
//                     } else {
//                         if (salario>=9000.01 && salario<=12000) {
//                             mostrar.innerText='Salario: Q'+salario+'\n\nArbitrio Q100.00\nCon multa: Q200.00'
//                         } else {
//                             if (salario>=12000.01) {
//                                 mostrar.innerText='Salario: Q'+salario+'\n\nArbitrio Q150.00\nCon multa: Q300.00'
//                             } else {
//                                 mostrar.innerText='No paga boleto'
//                             }
//                         }
//                     }
//                 }
//             }
//         }
// }
//calculo de los promedios y suma de los empleados

// function cant_emple(e) {
//     e.preventDefault()
//     let sal
//     let suma=0
//     let emple=parseFloat(prompt("Ingrese la cantidad de empleados: "))
//     for (let i = 1; i <=emple; i++) {
//         sal=parseFloat(prompt(i+". Ingrese el salario del empleado: "))
//         suma+=sal
//     }
//     let mostrar=document.getElementById("Calculo_mostrar")
//     mostrar.innerText='Sumatoria de salarios: Q'+suma+'\nPromedio de salarios: Q'+(suma/emple)
// }

//horas extras calculo
 
// function horas_ext(e) {
//     e.preventDefault()
//     let horas
//     let cent
//     let suma=0
//     let x=document.getElementById("caculo_hora")
//     do {
//         horas=parseFloat(prompt("Ingrese las horas extras trabajadas: "))
//         if (horas>=0) {
//             suma+=horas
//         cent= prompt("Desea ingresar otra hora extra? Si=S / No=N")
//         } else {
//             x.innerText='Coloco la hora en negativo.'
//         }
//     } while (Object.is(cent,'S'));
//         x.innerText='Horas sumadas: '+suma
// }