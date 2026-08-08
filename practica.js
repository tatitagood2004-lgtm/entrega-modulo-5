
let estudiantes = [
    {
    "id" : 0,
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

const estudiantesAprobados = estudiantes.find((estudiantes) => {
return estudiantes.aprobado;
});
console.log(estudiantesAprobados);


const estudiantesDesaprobados = estudiantes.filter((estudiantes) =>{
return estudiantes.aprobado === false ;
});
console.log(estudiantesDesaprobados);