
const estudiantes = [
    {
    "id" : "0",
    "nombre" : "Ramon",
    "aprobado" : true
    },
    { 
    "id" : "2",
    "nombre" : "Rodrigo",
    "aprobado" : false
   },
     { 
    "id" : "3",
    "nombre" : "Cristian",
    "aprobado" : false
    }
];

const estudianteAprobados = estudiantes.find((estudiante) => {
return estudiante.aprobado;
});
console.log(estudianteAprobados);


const estudianteDesaprobados = estudiantes.filter((estudiante) =>{
return estudiante.aprobado === false ;
});
console.log(estudianteDesaprobados);