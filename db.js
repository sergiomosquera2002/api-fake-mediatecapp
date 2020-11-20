/* eslint-disable import/no-extraneous-dependencies */
const Faker = require("faker");
 
module.exports = () => {
  const data = {
            "clases": [
                {
                    "id": "1",
                    "grupo_id": "1",
                    "modulo_id": "3",
                    "docente_id": "1",
                    "fecha_creacion": "2020-10-09 01:52:17",
                    "fecha_actualizacion": null
                },
                {
                    "id": "2",
                    "grupo_id": "1",
                    "modulo_id": "1",
                    "docente_id": "1",
                    "fecha_creacion": "2020-10-09 01:54:10",
                    "fecha_actualizacion": null
                },
                {
                    "id": "3",
                    "grupo_id": "2",
                    "modulo_id": "2",
                    "docente_id": "6",
                    "fecha_creacion": "2020-10-09 02:49:46",
                    "fecha_actualizacion": null
                },
                {
                    "id": "4",
                    "grupo_id": "2",
                    "modulo_id": "4",
                    "docente_id": "6",
                    "fecha_creacion": "2020-10-09 02:49:53",
                    "fecha_actualizacion": null
                }
            ],
            "instituciones_educativas": [
                {
                    "id": "1",
                    "nombre_ie": "Colegios EDU \u2013 S.E. Nuestra Se\u00f1ora de las Nieves \u2013 Medell\u00edn",
                    "docente_encargado_mt": "Carlos",
                    "pagina_web": "https:\/\/ielasnieves.edu.co",
                    "direccion": "Calle 82 No 39- 69 Barrio Santa In\u00e9s",
                    "foto_ie": "https:\/\/arquiniel.com\/wp-content\/uploads\/2019\/02\/destacada_0004_NUESTRA-SE\u00d1ORA-1920x1200.jpg",
                    "descripcion_ie": "El proyecto se ubica al nororiente de la ciudad de Medell\u00edn, Colombia, barrio Manrique central.",
                    "telefono_institucional": "571-00-70",
                    "correo_institucional": "ie.lasnieves@medellin.gov.co"
                },
                {
                    "id": "2",
                    "nombre_ie": "Instituci\u00f3n Educativa Concejo De Medell\u00edn (I.E.C.M)",
                    "docente_encargado_mt": "Lina V\u00e1squez",
                    "pagina_web": "http:\/\/www.concejodemedellin.edu.co\/",
                    "direccion": "Cra 82 # 47A - 65,\r\nBarrio Floresta",
                    "foto_ie": "https:\/\/pbs.twimg.com\/media\/Df6SVMQXUAArdor.jpg",
                    "descripcion_ie": "2002: Por resoluci\u00f3n No. 16290 de noviembre del 2002 y para dar cumplimiento a la Ley General de Educaci\u00f3n se da t\u00e9rmino a la fusi\u00f3n con las escuelas destinadas por la Secretaria de Educaci\u00f3n Departamental: Clodomiro Ram\u00edrez, Juan XXIII, y la Escuela Pichincha.",
                    "telefono_institucional": "(4) 4119115 - 411921",
                    "correo_institucional": "ie.concejodemellin@medellin.gov.co"
                }
            ],
            "modulos": [
                {
                    "id": "1",
                    "modulo": "Cocnstrucci\u00f3n de Elementos de Software 1",
                    "mod": "CES1"
                },
                {
                    "id": "2",
                    "modulo": "Taller de Base de Datos",
                    "mod": "BD"
                },
                {
                    "id": "3",
                    "modulo": "Interpretaci\u00f3n de Requisitos",
                    "mod": "IR"
                },
                {
                    "id": "4",
                    "modulo": "Construcci\u00f3n de Elementos de Software Web 1",
                    "mod": "CESW1"
                }
            ],
            "grupos": [
                {
                    "id": "1",
                    "institucion_id": "1",
                    "grado": "11",
                    "letra": "1",
                    "a_formacion": "2020",
                    "descripcion": "11-1 del a\u00f1o 2020"
                },
                {
                    "id": "2",
                    "institucion_id": "2",
                    "grado": "11",
                    "letra": "B",
                    "a_formacion": "2020",
                    "descripcion": "11-B del a\u00f1o 2020"
                }
            ],
            "tipo_actores": [
                {
                    "id": "1",
                    "perfil": "Estudiante"
                },
                {
                    "id": "2",
                    "perfil": "Docente"
                },
                {
                    "id": "3",
                    "perfil": "Asesor"
                },
                {
                    "id": "4",
                    "perfil": "Coordinadora"
                }
            ],
            "integrantes_grupos": [
                {
                    "id": "2",
                    "estudiante_id": "2",
                    "grupo_id": "1",
                    "observaciones": "Estudiante inscrito"
                },
                {
                    "id": "3",
                    "estudiante_id": "5",
                    "grupo_id": "1",
                    "observaciones": "Estudiante inscrito"
                },
                {
                    "id": "4",
                    "estudiante_id": "3",
                    "grupo_id": "2",
                    "observaciones": "Estudiante inscrito"
                },
                {
                    "id": "5",
                    "estudiante_id": "4",
                    "grupo_id": "2",
                    "observaciones": "Estudiante inscrito"
                }
            ],
            "estado_actores": [
                {
                    "id": "1",
                    "estado": "Activo"
                },
                {
                    "id": "2",
                    "estado": "Inactivo"
                },
                {
                    "id": "3",
                    "estado": "Retirado"
                }
            ],
            "tipo_documento": [
                {
                    "codigo": "CC",
                    "descripcion": "cedula de ciudadania"
                },
                {
                    "codigo": "CE",
                    "descripcion": "cedula de extranjeria"
                },
                {
                    "codigo": "NIP",
                    "descripcion": "numero de identificacion personal"
                },
                {
                    "codigo": "NIT",
                    "descripcion": "numero de identificacion tributaria"
                },
                {
                    "codigo": "PAP",
                    "descripcion": "pasaporte"
                },
                {
                    "codigo": "TI",
                    "descripcion": "tarjeta de identidad"
                }
            ],
            "asistencias_sesiones": [
                {
                    "id": "1",
                    "sesion_clase_id": "1",
                    "integrante_grupo_id": "2",
                    "asiste": "1",
                    "observaciones": null,
                    "fecha_creacion": "2020-10-09 02:22:59"
                },
                {
                    "id": "2",
                    "sesion_clase_id": "1",
                    "integrante_grupo_id": "3",
                    "asiste": "1",
                    "observaciones": "Entro tarde a clase",
                    "fecha_creacion": "2020-10-09 02:23:28"
                },
                {
                    "id": "3",
                    "sesion_clase_id": "2",
                    "integrante_grupo_id": "2",
                    "asiste": "0",
                    "observaciones": "No asistio a clase",
                    "fecha_creacion": "2020-10-09 02:39:13"
                },
                {
                    "id": "4",
                    "sesion_clase_id": "2",
                    "integrante_grupo_id": "3",
                    "asiste": "1",
                    "observaciones": null,
                    "fecha_creacion": "2020-10-09 02:39:21"
                },
                {
                    "id": "5",
                    "sesion_clase_id": "3",
                    "integrante_grupo_id": "4",
                    "asiste": "1",
                    "observaciones": null,
                    "fecha_creacion": "2020-10-09 02:56:25"
                },
                {
                    "id": "6",
                    "sesion_clase_id": "3",
                    "integrante_grupo_id": "5",
                    "asiste": "1",
                    "observaciones": null,
                    "fecha_creacion": "2020-10-09 02:56:33"
                },
                {
                    "id": "7",
                    "sesion_clase_id": "4",
                    "integrante_grupo_id": "4",
                    "asiste": "0",
                    "observaciones": "Estaba enfermo",
                    "fecha_creacion": "2020-10-09 02:56:49"
                },
                {
                    "id": "8",
                    "sesion_clase_id": "4",
                    "integrante_grupo_id": "5",
                    "asiste": "1",
                    "observaciones": null,
                    "fecha_creacion": "2020-10-09 02:56:56"
                }
            ],
            "sesiones_clases": [
                {
                    "id": "1",
                    "clase_id": "1",
                    "fecha_sesion": "2020-07-14",
                    "observacion": "Clase de IR"
                },
                {
                    "id": "2",
                    "clase_id": "2",
                    "fecha_sesion": "2020-09-08",
                    "observacion": "Clase de CES1"
                },
                {
                    "id": "3",
                    "clase_id": "3",
                    "fecha_sesion": "2020-09-17",
                    "observacion": "Clase de BD"
                },
                {
                    "id": "4",
                    "clase_id": "4",
                    "fecha_sesion": "2020-08-21",
                    "observacion": "Clase de CESW1"
                }
            ],
            "actores": [
                {
                    "id": "1",
                    "documento": "1152188863",
                    "tipo_documento": "CC",
                    "nombres": "Oscar",
                    "apellidos": "Mesa",
                    "contrasena": "a07b3602a3dce1a8fbf229df58273b9003914714",
                    "correo": "oscarmesa.elpoli@elpoli.edu.co",
                    "telefono_celular": "3023458976",
                    "numero_expediente": null,
                    "genero": "hombre",
                    "fecha_nacimiento": "1999-10-09",
                    "estado_actor_id": "1",
                    "institucion_id": null,
                    "tipo_actor_id": "2",
                    "fecha_creacion": "2020-10-09 00:31:57",
                    "fecha_actualizacion": null
                },
                {
                    "id": "2",
                    "documento": "11348473389",
                    "tipo_documento": "TI",
                    "nombres": "Carlos",
                    "apellidos": "Meneses",
                    "contrasena": "a07b3602a3dce1a8fbf229df58273b9003914714",
                    "correo": "carlosmeneses@gmail.com",
                    "telefono_celular": "3013984758",
                    "numero_expediente": "EXP-9038-2A",
                    "genero": "hombre",
                    "fecha_nacimiento": "2020-07-09",
                    "estado_actor_id": "1",
                    "institucion_id": "1",
                    "tipo_actor_id": "1",
                    "fecha_creacion": "2020-10-09 01:12:23",
                    "fecha_actualizacion": null
                },
                {
                    "id": "3",
                    "documento": "11437382974",
                    "tipo_documento": "TI",
                    "nombres": "Maria Victoria",
                    "apellidos": "Diaz Granados",
                    "contrasena": "a07b3602a3dce1a8fbf229df58273b9003914714",
                    "correo": "victoriadiaz@gmail.com",
                    "telefono_celular": "3093283274",
                    "numero_expediente": "KW-9803-A3C",
                    "genero": "mujer",
                    "fecha_nacimiento": "1999-07-01",
                    "estado_actor_id": "1",
                    "institucion_id": "2",
                    "tipo_actor_id": "1",
                    "fecha_creacion": "2020-10-09 01:12:11",
                    "fecha_actualizacion": null
                },
                {
                    "id": "4",
                    "documento": "30948394823",
                    "tipo_documento": "PAP",
                    "nombres": "David",
                    "apellidos": "Cadavid",
                    "contrasena": "a07b3602a3dce1a8fbf229df58273b9003914714",
                    "correo": "davidcadavid@outlook.com",
                    "telefono_celular": "3884773732",
                    "numero_expediente": "KQ-PU987-CE",
                    "genero": "hombre",
                    "fecha_nacimiento": "2002-11-21",
                    "estado_actor_id": "1",
                    "institucion_id": "2",
                    "tipo_actor_id": "1",
                    "fecha_creacion": "2020-10-09 01:15:56",
                    "fecha_actualizacion": null
                },
                {
                    "id": "5",
                    "documento": "83974732638",
                    "tipo_documento": "TI",
                    "nombres": "Diana",
                    "apellidos": "Pati\u00f1o",
                    "contrasena": "a07b3602a3dce1a8fbf229df58273b9003914714",
                    "correo": "dianapati\u00f1o@outlook.co",
                    "telefono_celular": "3012938475",
                    "numero_expediente": "KI-EDU900-PAT",
                    "genero": "mujer",
                    "fecha_nacimiento": "2003-03-29",
                    "estado_actor_id": "1",
                    "institucion_id": "1",
                    "tipo_actor_id": "1",
                    "fecha_creacion": "2020-10-09 01:25:53",
                    "fecha_actualizacion": null
                },
                {
                    "id": "6",
                    "documento": "45679483",
                    "tipo_documento": "CC",
                    "nombres": "Juan",
                    "apellidos": "Perez",
                    "contrasena": "a07b3602a3dce1a8fbf229df58273b9003914714",
                    "correo": "juan123@gmail.com",
                    "telefono_celular": "3012938473",
                    "numero_expediente": null,
                    "genero": "hombre",
                    "fecha_nacimiento": "1989-02-14",
                    "estado_actor_id": "1",
                    "institucion_id": null,
                    "tipo_actor_id": "2",
                    "fecha_creacion": "2020-10-09 02:49:07",
                    "fecha_actualizacion": null
                }
            ], 
            "contactanos" : [
                {
                    "id" : "1", 
                    "nombres_apellidos" : "Dago Bustamante", 
                    "correo" : "dago123@gmail.com", 
                    "mensaje" : "Cordial saludos, me gustaría conocer sobre el proceso de media técnica y los programas que actualmente ofrecen. Estaré atento, gracias.", 
                    "fecha_creacion": "2020-10-09 10:20:05"
                }
            ]    
        }
   return data;
};
  
