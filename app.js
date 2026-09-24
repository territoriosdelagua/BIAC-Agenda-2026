// =====================================================
// BIAC 2026 — AGENDA
// JavaScript principal
// =====================================================


// =====================================================
// 1. ACTIVIDADES DE PRUEBA
// =====================================================

const actividades = [

    {
        dia: "24",
        horaInicio: "10:00",
        horaFin: "10:30",
        tipo: "CONFERENCIA",
        titulo: "Arq. Alberto Mahave: Desterritorialización material",
        tematica: "TERRITORIO",
        sede: "MACC",
        ubicacion: "CORRIENTES",
        presentador: "Alberto Mahave",
        profesion: "Arquitectura y Urbanismo",
        foto: "images/expositores/mahave.png",
        estado: "CONFIRMADA",
        descripcion: "Alberto Mahave es arquitecto egresado de la Facultad de Arquitectura y Urbanismo de la Universidad Nacional del Nordeste (UNNE), magíster en Arquitectura con mención Proyecto por la Universidad Nacional del Litoral y doctorando en Arquitectura. Es docente e investigador de la FAU-UNNE, donde desarrolla su actividad en torno a la forma, la materialidad y el espacio arquitectónico. Su trabajo integra arquitectura, espacio público y planificación territorial, con especial interés en las relaciones entre ciudad, paisaje y ambiente. Su producción académica y profesional aborda particularmente las problemáticas urbanas y ambientales de Resistencia y su sistema hídrico, explorando estrategias para construir espacios públicos más habitables, inclusivos y sostenibles."
    },

    {
        dia: "24",
        horaInicio: "10:30",
        horaFin: "11:00",
        tipo: "CONFERENCIA",
        titulo: "Misiones Moderna (1955-1965): Acervo y patrimonio arquitectónico",
        tematica: "ARQUITECTURA",
        sede: "MACC",
        ubicacion: "CORRIENTES",
        presentador: "Cátedra de Arquitectura Moderna en Misiones",
        profesion: "Mgter. Arq. Mario Daniel Melgarejo, Alina Bistoletti y Arq. Cecilia Coccato",
        foto: "images/expositores/misionesmoderno.png",
        estado: "CONFIRMADA",
        descripcion: "La Facultad de Arquitectura y Diseño (FAD), la Universidad Católica de Santa Fe (UCSF) -sede Santos Mártires (Posadas) y el Instituto de Historia (IHTCAP) presentan esta muestra que explora el patrimonio de la arquitectura moderna en Misiones durante el período 1955-1965."
    },

    {
        dia: "24",
        horaInicio: "11:00",
        horaFin: "11:30",
        tipo: "EXPOSICION",
        titulo: "Ganadores del concurso: Plataforma insular.",
        tematica: "ARQUITECTURA",
        sede: "MACC",
        ubicacion: "CORRIENTES",
        presentador: "FAU-UNNE",
        profesion: "Arquitectura",
        foto: "images/expositores/fau.png",
        estado: "CONFIRMADA",
        descripcion: "1° Premio: Villagra Lisandro Iván, 2° Premio: Zampa Fernando David, 3° Premio: Vera Valussi Valentina."
    },
    {
        dia: "24",
        horaInicio: "11:30",
        horaFin: "12:00",
        tipo: "CONFERENCIA",
        titulo: "Taller Horizontal-FADU UNL",
        tematica: "ARQUITECTURA",
        sede: "MACC",
        ubicacion: "CORRIENTES",
        presentador: "UNNE, UCA y UNL",
        profesion: "Arquitectura",
        foto: "images/expositores/horizontal.png",
        estado: "CONFIRMADA",
        descripcion: "El Taller Horizontal es un espacio de la FADU UNL que desarrolla una investigación continua sobre cómo proyectar en estos territorios frágiles e inciertos. Cada fragmento de esta geografía insular aporta enseñanzas a un proyecto infinito: imaginar el río Paraná como un laboratorio de proyectos. Esta investigación de varios años propone un enfoque amplio que interpela los diferentes puntos de contacto entre tierra y agua."
    },
  
    {
        dia: "24",
        horaInicio: "14:00",
        horaFin: "14:30",
        tipo: "CONFERENCIA",
        titulo: "Formosa: La ciudad que mira a su rio, inestable y movedizo.",
        tematica: "ARQUITECTURA",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Colegio Público de Arquitectos de Formosa",
        profesion: "Arquitectura y urbanismo",
        foto: "images/expositores/formosa.png",
        estado: "CONFIRMADA",
        descripcion: "Lo inestable: Hotel de Turismo y su influencia en la arquitectura local."
    },
    {
        dia: "24",
        horaInicio: "14:30",
        horaFin: "15:00",
        tipo: "CONFERENCIA",
        titulo: "Misiones: Lo estable desde el Plan Urbis",
        tematica: "ARQUITECTURA",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Colegio Público de Arquitectos de Misiones.",
        profesion: "Arquitectura y Urbanismo",
        foto: "images/expositores/misiones.jpg",
        estado: "CONFIRMADA",
        descripcion: "Expone el arquitecto Carlos Borio acerca del Plan Urbis y y su influencia en la arquitectura local."
    },
    {
        dia: "24",
        horaInicio: "15:00",
        horaFin: "15:30",
        tipo: "CONFERENCIA",
        titulo: "Resistencia: Lo inestable como cultura, lo palafítico como política",
        tematica: "TERRITORIO",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Colegio Profesional de Arquitectura y Urbanismo del Chaco  (CPAUCh)",
        profesion: "Arquitectura y Urbanismo",
        foto: "images/expositores/chaco.jpg",
        estado: "CONFIRMADA",
        descripcion: "Cultura palafitica en el territorio y la arquitectura, su influencia en la producción proyectual y material local"
    },
    {
        dia: "24",
        horaInicio: "15:30",
        horaFin: "16:00",
        tipo: "CONFERENCIA",
        titulo: "Ciudad de Santa Fe: Lo inestable en el borde histórico, lo palafítico como conciencia ",
        tematica: "ARQUITECTURA",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Colegio de Arquitectura y Urbanismo de Santa Fe",
        profesion: "Arquitectura y Urbanismo",
        foto: "images/expositores/santafe.jpg",
        estado: "CONFIRMADA",
        descripcion: "Cultura Palafítica en el territorio y la arquitectura, su influencia en la producción proyectual y material local."
    },
    {
        dia: "24",
        horaInicio: "16:00",
        horaFin: "16:30",
        tipo: "CONFERENCIA",
        titulo: "Corrientes: Lo persistente en su borde y el debate sobre sus formas de habitarlo. ",
        tematica: "ARQUITECTURA",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Sociedad de Arquitectos de Corrientes ",
        profesion: "Arquitectura y Urbanismo",
        foto: "images/expositores/corrientes2.jpg",
        estado: "CONFIRMADA",
        descripcion: "Dos modelos de desarrollo en su borde costero: la Costanera antigua y la Costanera nueva."
    },
      {
        dia: "24",
        horaInicio: "16:30",
        horaFin: "17:00",
        tipo: "CONFERENCIA",
        titulo: "FTyCA UNCA: Plan de Ordenamiento Territorial El Rodeo - Las Juntas",
        tematica: "ARQUITECTURA",
        sede: "MACC",
        ubicacion: "CORRIENTES",
        presentador: "Arq. Nicolás Lindow y Arq. María Emilia Canclini",
        profesion: "Arquitectura",
        foto: "images/expositores/catamarca.png ",
        estado: "REPROGRAMADA",
        descripcion: " Nicolás Lindow y María Emilia Canclini son arquitectos vinculados a la enseñanza y la práctica profesional en Catamarca. Lindow desarrolla actividad docente en la carrera de Arquitectura de la Universidad Nacional de Catamarca y posee una amplia trayectoria en la representación institucional de la profesión. Canclini desarrolla su práctica en los campos de la arquitectura, el diseño de interiores y la iluminación arquitectónica, incorporando herramientas contemporáneas como el modelado BIM. Su trabajo articula formación, práctica y experimentación proyectual, atendiendo a las particularidades del contexto y a las nuevas herramientas para pensar y construir arquitectura."
    },
    {
        dia: "24",
        horaInicio: "17:00",
        horaFin: "17:30",
        tipo: "EXPOSICION",
        titulo: "2 Orillas Emergentes: Encarnación-Posadas.",
        tematica: "ARQUITECTURA",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "ENNE Arquitectura Y Estudio Arquitectava.",
        profesion: "Curador: Mg. Arq. Juan Guidura. ",
        foto: "images/expositores/enne.png",
        estado: "CONFIRMADA",
        descripcion: "Se trata de un bloque expositivo que reúne estudios de Encarnación y Posadas. Desde Encarnación, Arquitectava presenta una arquitectura experimental que incorpora el agua como elemento compositivo, ya sea integrándola a los espacios o mediante dispositivos para su reutilización. Sus cuatro integrantes —Keiji Ishibashi, Giselle Montanholi, Micaela Ortiz y Melisa Fariña— representan una generación que busca interpretar creativamente su territorio. Desde Posadas, ENNE, de Marcela Gadea y Matías Taborda, muestra cómo la arquitectura puede integrarse armónicamente al paisaje misionero, sus arroyos y bosques."
    },
      {
        dia: "24",
        horaInicio: "17:30",
        horaFin: "18:00",
        tipo: "EXPOSICION",
        titulo: "OBERÁ EMERGENTE",
        tematica: "ARQUITECTURA",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Arq. Valeria Jaros,  Arq. Alejandro Cieplinski y Arq. Nicolás Cieplinski",
        profesion: "Moderador: Arq. Lucas Fulquet",
        foto: "images/expositores/obera.png",
        estado: "CONFIRMADA",
        descripcion: "Presenta una propuesta joven que reúne estudios emergentes de Oberá y otras ciudades como Encarnación, Posadas y Santa Fe, explorando también la idea de desterritorializaciones materiales. Desde Oberá, Valeria Jaros y NSKi Arquitectura, integrado por Alejandro y Nicolás Cieplinski, representan a una nueva generación de profesionales que propone nuevas miradas sobre la arquitectura desde los territorios interiores. La ciudad cuenta además con una joven Facultad de Arquitectura, que promete nuevos aportes desde el interior del país. Placa 2: Valeria Jaros. Placas 3, 4 y 5: NSKi Arquitectura. "
    },
  {
        dia: "24",
        horaInicio: "18:00",
        horaFin: "18:30",
        tipo: "EXPOSICION",
        titulo: "Santa Fe Emergente",
        tematica: "ARQUITECTURA",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Arq, Fiama Serra, Arq. Camila Turtula y Arq. Francisco Garrido.",
        profesion: "Moderan:Federico Cairoli y Arq. Javier Mendiondo ",
        foto: "images/expositores/santafe-emergentes.png",
        estado: "CONFIRMADA",
        descripcion: "Santa Fe, ciudad tan antigua como Corrientes, se relaciona con sus ríos y bañados en tensión. Como todos en nuestras geografías. A veces como condición que nos limita otras veces como condición que nos expande. Emergentes Santa Fe, curado por Javier Mendiondo y Federico Cairoli es una exposición en la que los arquitectas Fiama Serra  y Camila Turtula  y el arquitecto Francisco Garrido, exponen esta relación con el agua."
    },
    {
        dia: "24",
        horaInicio: "20:00",
        horaFin: "22:00",
        tipo: "MUESTRAS",
        titulo: "Inauguración: Entre lo estable y lo inestable.",
        tematica: "TODAS",
        sede: "MACC",
        ubicacion: "CORRIENTES",
        presentador: "Estudio GAA-Corrientes ",
        profesion: "Arquitectura, Arte y Fotografía",
        foto: "images/expositores/muestraenelmacc.jpeg",
        estado: "CONFIRMADA",
        descripcion: "Es una muestra que reúne arquitectura, arte, fotografía y registro audiovisual del NEA y de otras regiones, para pensar el agua como condición del territorio y de nuestras formas de habitar."
    },
    {
        dia: "24",
        horaInicio: "20:00",
        horaFin: "22:00",
        tipo: "MUESTRAS",
        titulo: "Inauguración: Misiones Moderna (1955-1965).",
        tematica: "ARQUITECTURA",
        sede: "MACC",
        ubicacion: "CORRIENTES",
        presentador: "Cátedra de Arquitectura Moderna en Misiones",
        profesion: "Mgter. Arq. Mario Daniel Melgarejo, Alina Bistoletti y Arq. Cecilia Coccato",
        foto: "images/expositores/misionesmoderno.png",
        estado: "CONFIRMADA",
        descripcion: "Es una exposición que reúne la historia de la arquitectura moderna en Misiones teniendo en cuenta su contexto político, económico, social y territorial. La muestra se centra en el período comprendido entre 1955 y 1965, destacando la influencia de la modernidad en la arquitectura de la región y su relación con el paisaje natural y urbano."
    },



    {
        dia: "25",
        horaInicio: "08:30",
        horaFin: "09:00",
        tipo: "CONFERENCIA",
        titulo: "Arq. Florencia Rus",
        tematica: "TERRITORIO",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Florencia Rus",
        profesion: "Corrientes",
        foto: "images/expositores/rus.jpg",
        estado: "CONFIRMADA",
        descripcion: "Estudio sobre el impacto del crecimiento urbano y el urbanismo neoliberal. La arquitecta analiza la relación entre la planificación urbana, las desigualdades ambientales y las inundaciones recurrentes en la región."
    },

    {
        dia: "25",
        horaInicio: "09:00",
        horaFin: "09:30",
        tipo: "CONFERENCIA",
        titulo: "Arq. Gabriel Santinelli",
        tematica: "TERRITORIO",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Gabriel Santinelli",
        profesion: "Buenos Aires",
        estado: "CONFIRMADA",
        foto: "images/expositores/santinelli.png",
        descripcion: "El agua como eje estructurante del territorio y la mirada crítica sobre nuestros paisajes confluyen en la participación del Arq. Gabriel Santinelli, quien lleva  a este encuentro la  experiencia de un trabajo que articula territorio y arquitectura como partes inseparables del mismo paisaje . Su enfoque —dejar de mirar para ver— resuena con el espíritu de una bienal que invita a repensar los territorios del agua desde una perspectiva crítica, interdisciplinaria y situada en el Nordeste argentino. Santinelli representa los paisajes a la deriva y las arquitecturas que esos territorios producen y transforman . "
    },
    {
        dia: "25",
        horaInicio: "09:30",
        horaFin: "10:00",
        tipo: "CONFERENCIA",
        titulo: "Dr. Arq. Miguel Barreto",
        tematica: "TERRITORIO",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Miguel Barreto",
        profesion: "Chaco",
        estado: "CONFIRMADA",
        foto: "images/expositores/barreto.png",
        descripcion: "Reflexiones sobre el derrotero de la planificación territorial de Resistencia y su Región metropolitana. La charla propone recorrer diferentes momentos o mojones de la planificación territorial de la ciudad de Resistencia y su región metropolitana, desde su origen a la actualidad, con el objetivo de reflexionar sobre los planes realizados para destacar aportes, configuraciones, imaginarios y frustraciones que éstos enfrentaron ante la tolerancia de un Estado frente a un territorio del agua difícil de habitar."
    },
    {
        dia: "25",
        horaInicio: "10:00",
        horaFin: "10:30",
        tipo: "CONFERENCIA",
        titulo: "Arq. Marcelo Vila",
        tematica: "TERRITORIO",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Marcelo Vila",
        profesion: "Buenos Aires",
        estado: "CONFIRMADA",
        foto: "images/expositores/vila.png",
        descripcion: "Su pensamiento propone que las ciudades sudamericanas dejen de crecer de espaldas a su geografía, integrando los ríos y ecosistemas naturales como los verdaderos ejes ordenadores del espacio público para generar equidad. Ante la realidad económica de la región, defiende una estética de la escasez, basada en la austeridad, el uso inteligente de recursos locales y un activismo académico militante que salga de las aulas para diagnosticar y resolver los conflictos urbanos más urgentes del continente."
    },
    {
        dia: "25",
        horaInicio: "10:30",
        horaFin: "11:00",
        tipo: "CONFERENCIA",
        titulo: "Dr. Mg. Arq. Ana Valderrama",
        tematica: "TERRITORIO",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Ana Valderrama",
        profesion: "Santa Fe",
        estado: "CONFIRMADA",
        foto: "images/expositores/valderrama.png",
        descripcion: "Master en Arquitectura del Paisaje por la Universidad de Illinois, su trayectoria profesional ha hecho énfasis en la puesta en valor y la sostenibilidad de territorios  periféricos, populares e inestables.Su práctica transdisciplinar y transescalar se caracteriza por un abordaje ecológico integral (social, simbólico, político y natural) interpelando el modelo extractivo y el imaginario moderno fósil de la ciudad, los territorios y los artefactos, cultivando un imaginario vegetal y un pisar leve."
    },
    {
        dia: "25",
        horaInicio: "11:00",
        horaFin: "11:30",
        tipo: "CONFERENCIA",
        titulo: "Arq. Magdalena Tagliabue y Arq. Carolina Koen",
        tematica: "TERRITORIO",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Tagliabue y Koen",
        profesion: "Buenos Aires",
        estado: "CONFIRMADA",
        foto: [
            "images/expositores/Tagliabue.png",
            "images/expositores/koen.png"
        ],
        descripcion: "Magdalena Tagliabue y  Carolina Koen  son docentes en FADU-UBA y en Universidad Torcuato Di Tella. Juntas abordarán ejes claves: Suelos, Ecologías, Territorios y Comunidades —conceptos que ya desarrollaron para una edición especial de la revista PLOT y que ahora potencian la reflexión curatorial de la Bienal."
    },
    {
        dia: "25",
        horaInicio: "11:30",
        horaFin: "12:00",
        tipo: "CONFERENCIA",
        titulo: "Arq. Juan Heras ",
        tematica: "TERRITORIO",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Juan Heras",
        profesion: "California",
        estado: "CONFIRMADA",
        foto: "images/expositores/Heras.png",
        descripcion: "El estudio del Español Juan Heras instalado en California, Estados Unidos, trabaja las escalas de Planes urbanos y territoriales pero tambíen arquitectura en mas de 10 países, varios de ellos latinoamericanos"
    },
    {
        dia: "25",
        horaInicio: "14:00",
        horaFin: "14:30",
        tipo: "CONFERENCIA",
        titulo: "Arq. Laura Bernaola",
        tematica: "PAISAJE",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Laura Bernaola",
        profesion: "Buenos Aires",
        estado: "CONFIRMADA",
        foto: "images/expositores/bernaola.png",
        descripcion: "Sus obras en entornos costeros e industriales juegan con la síntesis de la 'caja blanca' geométrica y la utilización de materiales nobles como la madera y la piedra, buscando mimetizarse y dialogar con la topografía (como los médanos y bosques costeros). Laura Bernaola y su estudio en los bordes costeros parece copiar los medanos que habita, a veces son curvas y otras;  rectas zigzagueantes. La madera como insumo para una arquitectura que se instala tan efimera como estable, en un territorio en donde todo se moviliza de una temporada a otra."
    },
     {
        dia: "25",
        horaInicio: "14:30",
        horaFin: "15:00",
        tipo: "CONFERENCIA",
        titulo: "Mg. Arq. Soledad Ferrería",
        tematica: "PAISAJE",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Soledad Ferrería",
        profesion: "Entre Ríos",
        estado: "CONFIRMADA",
        foto: "images/expositores/ferrería.png",
        descripcion: "La arquitecta Soledad Ferrería tiene su estudio  en Entre Ríos desde 2006. Sus proyectos equilibran la función productiva, la conservación ambiental y el valor cultural. Mesa de trabajo 1: Aguas Arcilla. Lámina 02: Acuerdos. Lámina .3: Artefactos"
    },
     {
        dia: "25",
        horaInicio: "15:00",
        horaFin: "15:30",
        tipo: "CONFERENCIA",
        titulo: "Arq. Celeste Garaffa",
        tematica: "PAISAJE",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Celeste Garaffa",
        profesion: "Santa Fe",
        estado: "CONFIRMADA",
        foto: "images/expositores/garaffa.png",
        descripcion: "Graduada en la UNR , obtiene el postgrado en Arquitectura del Paisaje de la Escuela de Arquitectura y Estudios Urbanos de la Universidad Torcuato Di Tella (2017), y maestranda de la cohorte 2022 de la Maestría en Proyecto Arquitectónico de la FADU UBA. Socia en la oficina de arquitectura Estudio Garaffa Arquitectos, donde explora el espacio, las proporciones, la luz, las técnicas y los materiales en la configuración de las dinámicas del habitar contemporáneo. Profundiza en cada proyecto la potencialidad de la construcción en movimiento, asunto en el cual se encuentra actualmente desarrollando lo que denomina “escenarios experimentales transdisciplinares”, a través de iniciativas proyectuales con distintos alcances y variadas escalas: lo territorial, lo urbano, lo artístico, el espacio arquitectónico donde explora el espacio, las proporciones, la luz, las técnicas y los materiales en la configuración de las dinámicas del habitar contemporáneo. "
    },
     {
        dia: "25",
        horaInicio: "15:30",
        horaFin: "16:00",
        tipo: "CONFERENCIA",
        titulo: "Lic. Ana María Ricci",
        tematica: "PAISAJE",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Ana María Ricci",
        profesion: "Buenos Aires",
        estado: "CONFIRMADA",
        foto: "images/expositores/García-Ricci.png",
        descripcion: "Su mirada, vinculada a la relación entre territorio, paisaje, naturaleza y ciudad, se suma a este espacio de encuentro y reflexión que propone pensar nuestras ciudades desde el agua como elemento estructurante. Es una de las fundadoras de Bulla, un proyecto cultural dedicado al paisaje, que opera en diálogo constante con las problemáticas territoriales, ambientales y urbanas, actuales y futuras. "
    },
    {
        dia: "25",
        horaInicio: "16:00",
        horaFin: "16:30",
        tipo: "CONFERENCIA",
        titulo: "Arq. Enk Te Winkel",
        tematica: "PAISAJE",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Enk Te Winkel",
        profesion: "San Pablo (Brasil)",
        estado: "CONFIRMADA",
        foto: "images/expositores/Winkel.png",
        descripcion: "Arquitecto y cofundador del estudio brasileño Vão Arquitetura en São Paulo. Su trabajo destaca por un enfoque transdisciplinario que cruza el urbanismo, la arquitectura residencial y las bellas artes con un fuerte trasfondo técnico y experimental. Los proyectos de Vão parten de una base teórica, técnica y experimental, que investiga características singulares del territorio de operación, que pueden integrarse al razonamiento proyectual."
    },
     
     {
        dia: "25",
        horaInicio: "18:00",
        horaFin: "18:30",
        tipo: "CONFERENCIA",
        titulo: "Arq. Luciano Kruk",
        tematica: "ARQUITECTURA",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Luciano Kruk",
        profesion: "Buenos Aires",
        estado: "CONFIRMADA",
        foto: "images/expositores/Kruk.png",
        descripcion: "Luciano Kruk es un arquitecto graduado en la UBA. Fundó su estudio en 2012 donde trabaja desarrollando numerosos proyectos de vivienda individual y colectiva. Su mirada  supo crear una relación provechosa entre arquitectura, arena, bosques y agua."
    },
     {
        dia: "25",
        horaInicio: "18:30",
        horaFin: "19:00",
        tipo: "CONFERENCIA",
        titulo: " Arq. Álvaro Di Bernardo y Arq. Mauricio Ortiz",
        tematica: "ARQUITECTURA",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Di Bernardo y Ortiz",
        profesion: "Corrientes",
        estado: "CONFIRMADA",
        foto: [
            "images/expositores/dibernardo.png",
            "images/expositores/ortiz.png"
        ],
        descripcion: "Como dice la publicación de la revista ARQ: “Dos jóvenes arquitectos correntinos, Álvaro Di Bernardo y Mauricio Ortiz , socios en el estudio ODB Arquitectos, demostraron que un proyecto comercial puede ser un valioso aporte público y, de paso, ganar un premio nacional que pone en el mapa a una región que pareciera relegada”. En esta edición, la bienal da la bienvenida al  dúo ganador de los premios ARQ FADEA 2024 de la región NEA y a su proyecto el parque Guacaras, construido en Santa Ana Corrientes. El paisaje de lagunas que se recorre para llegar hasta el centro gastronómico, parece un preámbulo de esta estructura que también aparece como en armonía y tensión, como una arquitectura en un equilibrio inestable, como el del ambiente que la rodea."
    },
    {
        dia: "25",
        horaInicio: "19:00",
        horaFin: "19:30",
        tipo: "CONFERENCIA",
        titulo: "Arq. Malena Pérez",
        tematica: "ARQUITECTURA",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Malena Pérez",
        profesion: "Chaco",
        estado: "CONFIRMADA",
        foto: "images/expositores/malena.png",
        descripcion: "La arquitecta Malena Pérez es miembro de E3estudio y Profesora Titular Carrera de Arquitectura UCA BA. Desarrolla su obra, entre otras ciudades, en Resistencia donde sus numerosas construcciones palafíticas habitan el territorio como posándose sutilmente en él. Su obra articula los tres tiempos: habita lo estable —una estructura palafítica— para cohabitar lo permanente —el agua— considerando lo inestable —el suelo inundable. No lucha contra la inundación, la incorpora como paisaje y como modo de vida. La inundación no es un hecho aberrante de la naturaleza, sino la presencia natural del agua en su territorio; es el momento en que el territorio del agua se hace visible y lo humano se muestra inteligente: atraviesa un momento estable, mientras todo lo demás cambia."
    },
    {
        dia: "25",
        horaInicio: "19:30",
        horaFin: "20:00",
        tipo: "CONFERENCIA",
        titulo: "Arq. Daniel Cella",
        tematica: "ARQUITECTURA",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Daniel Cella",
        profesion: "Misiones",
        estado: "CONFIRMADA",
        foto: "images/expositores/cellas.png",
        descripcion: "Cella, graduado en la Universidad de Belgrano, desde 1987 reside en Posadas, donde funda el Estudio Cella. El estudio Cella  realiza proyectos de obras de arquitectura y urbanismo para distintos usos en la región mesopotámica, incluyendo intervenciones arquitectónicas en edificios que forman parte del patrimonio arquitectónico de la provincia, en proyectos para la generación de nuevos espacios públicos e intervenciones y ensanches urbanos, como también de iniciativas de recuperación del paisaje en áreas protegidas y costeras.Intervenciones tecnológicas y materiales exquisitas en ladrillo, el proyecto en proceso de construcción de la ex Usina en Posadas y la propuesta para el borde de la costanera también en Posadas, son obras que Daniel Cella Expondrá en la bienal TDA 2026, mostrando la íntima y sensible relación de sus proyectos con su medio natural tan particular como es la provincia en que habitan. "
    },
    {
        dia: "25",
        horaInicio: "20:00",
        horaFin: "20:30",
        tipo: "CONFERENCIA",
        titulo: "Arq. Bruno Stagno",
        tematica: "ARQUITECTURA",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "Bruno Stagno",
        profesion: "Costa Rica",
        estado: "CONFIRMADA",
        foto: "images/expositores/Stagno.png",
        descripcion: "Stagno es un arquitecto que visita a la bienal desde Costa Rica para aportar su búsqueda con enfoque por el aprovechamiento máximo de las variables y recursos climáticos de los trópicos, en el uso de materiales y mano de obra locales y enfatizando en la biodiversidad tropical para el diseño del paisajismo. La arquitectura tropical construida y sus manifiestos hacen de Stagno  un imprescindible del estudio en la relación clima y arquitectura para nuestra geografía."
    },
    {
        dia: "25",
        horaInicio: "20:30",
        horaFin: "21:00",
        tipo: "CONFERENCIA",
        titulo: "Arq. José Cubilla",
        tematica: "ARQUITECTURA",
        sede: "Auditorio Julián Zini",
        ubicacion: "CORRIENTES",
        presentador: "José Cubilla",
        profesion: "Paraguay",
        estado: "CONFIRMADA",
        foto: "images/expositores/cubilla.png",
        descripcion: "El arquitecto paraguayo, José Cubilla,  centra su obra en 2 elementos del paisaje: la tierra y el agua. Precisamente estos dos materiales no son solo su principal componente constructivo, sino también los elementos fundamentales para conectar lo que construye con el paisaje local. Su enfoque, denominado a veces 'arquitectura silenciosa', encuentra el equilibrio entre el entorno natural y las necesidades humanas, aprovechando la abundancia de la tierra paraguaya, rica en hierro, arcilla y territorios dominados por el agua."
    },
    {
        dia: "26",
        horaInicio: "09:00",
        horaFin: "09:30",
        tipo: "MUESTRAS",
        titulo: "Recorrido guiado del Teatro Oficial Juan de Vera",
        tematica: "TODAS",
        sede: "Teatro Oficial Juan de Vera",
        ubicacion: "CORRIENTES",
        presentador: "Gobierno de Corrientes",
        profesion: "Artes y Cultura",
        foto: "images/expositores/teatro.jpg",
        estado: "CONFIRMADA",
        descripcion: "Recorrido guiado por el histórico Teatro Oficial Juan de Vera, destacando su arquitectura y patrimonio cultural."
    },
    
    {
        dia: "26",
        horaInicio: "09:30",
        horaFin: "10:30",
        tipo: "MUESTRAS",
        titulo: "MUSIC SESSION",
        tematica: "TODAS",
        sede: "Teatro Oficial Juan de Vera",
        ubicacion: "CORRIENTES",
        presentador: "Polifónico de Corrientes ",
        profesion: "Música y Cultura",
        foto: "images/expositores/coro.jpg",
        estado: "CONFIRMADA",
        descripcion: "Experiencia musical que explora la Bienal a través del arte."
    },
    
    {
        dia: "26",
        horaInicio: "10:30",
        horaFin: "10:45",
        tipo: "MUESTRAS",
        titulo: "Entrega de reconocimientos",
        tematica: "TODAS",
        sede: "Teatro Oficial Juan de Vera",
        ubicacion: "CORRIENTES",
        presentador: "Comité Organizador de la Bienal 2026",
        profesion: "Luciana Rosso",
        foto: "images/expositores/bienal.png",
        estado: "CONFIRMADA",
        descripcion: "Entrega de reconocimientos a los participantes y colaboradores de la Bienal 2026."
    },
    {
        dia: "26",
        horaInicio: "10:45",
        horaFin: "11:30",
        tipo: "MESAS",
        titulo: "MANIFIESTO DE LA BIENAL 2026",
        tematica: "TODAS",
        sede: "Teatro Oficial Juan de Vera",
        ubicacion: "CORRIENTES",
        presentador: "Comité Organizador de la Bienal 2026",
        profesion: "Leandro Rosso, Juan Guidura, Carlos Gómez Sierra y Javier Mendiondo",
        foto: "images/expositores/bienal.png",
        estado: "CONFIRMADA",
        descripcion: "Manifiesto final de la Bienal 2026, destacando los logros y aprendizajes del evento, así como la visión para futuras ediciones."
    }

];


// =====================================================
// 2. INFORMACIÓN DE LAS SEDES
// =====================================================

const sedes = {

    "Teatro Oficial Juan de Vera": {

        direccion: "San Juan 637, Corrientes",

        descripcion:
            "Teatro histórico de la ciudad de Corrientes.",

        imagen:
            "images/sedes/teatro-juan-de-vera.jpg",

        mapa:
            "https://www.google.com/maps/search/?api=1&query=Teatro+Oficial+Juan+de+Vera+Corrientes"
    },


    "Auditorio Julián Zini": {

        direccion:
            "Blas Benjamín de la Vega 1699, Corrientes",

        descripcion:
            "Espacio cultural y auditorio destinado a actividades académicas y culturales.",

        imagen:
            "images/sedes/auditorio-julian-zini.jpg",

        mapa:
            "https://www.google.com/maps/search/?api=1&query=Auditorio+Julian+Zini+Blas+Benjamin+de+la+Vega+1699+Corrientes"
    },


    "FAU-UNNE": {

        direccion:
            "Av. Las Heras 727, Resistencia, Chaco",

        descripcion:
            "Facultad de Arquitectura y Urbanismo de la Universidad Nacional del Nordeste.",

        imagen:
            "images/sedes/fau-unne-1.jpeg",

        mapa:
            "https://www.google.com/maps/search/?api=1&query=FAU+UNNE+Av+Las+Heras+727+Resistencia+Chaco"
    },


    "MACC": {

        direccion:
            "9 de Julio 1098, Corrientes",

        descripcion:
            "Museo de Arte Contemporáneo de Corrientes.",

        imagen:
            "images/sedes/macc.jpg",

        mapa:
            "https://www.google.com/maps/place/Museo+de+Arte+Contempor%C3%A1neo/@-27.4666503,-58.8393177,17z/data=!3m1!4b1!4m6!3m5!1s0x94456d0047ac09a7:0xd89f7756a3f1e2f9!8m2!3d-27.4666503!4d-58.8367428!16s%2Fg%2F11x95nmyqp?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D"
    },
    "PARQUE ÁVALOS": {

        direccion:
            "Concepcion del Bermejo 1367, Resistencia, Chaco",
        descripcion:
            "Parque público con espacios verdes y áreas recreativas.",
        imagen:
            "images/sedes/parque.jpg",
        mapa:
            "https://www.google.com/maps/place/%C3%81valos+Park/@-27.4309102,-58.9857559,17z/data=!3m1!4b1!4m6!3m5!1s0x94450c440f7de9f3:0xf4786b0e630c01c4!8m2!3d-27.4309102!4d-58.983181!16s%2Fg%2F1tddyw4z?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D"
    }   

};


// =====================================================
// 3. ELEMENTOS DEL HTML
// =====================================================

const contenedor =
    document.getElementById("actividades");

const botonesDias =
    document.querySelectorAll(".dia");

const botonesFiltros =
    document.querySelectorAll(".filtro");

const tituloDia =
    document.getElementById("titulo-dia");

const busqueda =
    document.querySelector(".busqueda");

const botonBusqueda =
    document.querySelector(".busqueda-btn");

const campoBusqueda =
    document.querySelector(".busqueda-input");

const auspiciantesModal =
    document.querySelector(".auspiciantes-modal");

const botonAuspiciantes =
    document.querySelector(".auspiciantes-btn");

const botonInstituciones =
    document.querySelector(".instituciones-btn");

const cerrarAuspiciantes =
    document.querySelector(".auspiciantes-modal-cerrar");

const tituloAuspiciantes =
    document.querySelector("#auspiciantes-titulo");

const imagenAuspiciantes =
    document.querySelector("#auspiciantes-imagen");

const opinionModal =
    document.querySelector(".opinion-modal");

const opinionForm =
    document.querySelector("#opinion-form");

const botonOpinion =
    document.querySelector(".opinion-btn");

const cerrarOpinion =
    document.querySelector(".opinion-modal-cerrar");

const opinionMensaje =
    document.querySelector("#opinion-mensaje");

const opinionImagen =
    document.querySelector("#opinion-imagen");

const opinionAnonima =
    document.querySelector("#opinion-anonima");

const opinionNombre =
    document.querySelector("#opinion-nombre");

const opinionError =
    document.querySelector(".opinion-error");

const opinionesLista =
    document.querySelector(".opiniones-lista");


// =====================================================
// 4. FILTROS ACTIVOS
// =====================================================

let filtroTipo = "TODOS";

let filtroTematica = "TODAS";

let filtroEstado = "TODOS";

let filtroUbicacion = "TODAS";

let terminoBusqueda = "";


// =====================================================
// 5. MOSTRAR ACTIVIDADES
// =====================================================

function mostrarActividades() {

    // Día actualmente seleccionado
    const botonDiaActivo =
        document.querySelector(".dia.activo");

    const diaSeleccionado =
        botonDiaActivo.dataset.dia;


    // Filtrar actividades
    const actividadesFiltradas =
        actividades.filter(actividad => {

            const coincideDia =
                actividad.dia === diaSeleccionado;

            const coincideTipo =
                filtroTipo === "TODOS" ||
                actividad.tipo === filtroTipo;

            const coincideTematica =
                filtroTematica === "TODAS" ||
                actividad.tematica === filtroTematica;

            const coincideEstado =
                filtroEstado === "TODOS" ||
                actividad.estado === filtroEstado;

            const coincideUbicacion =
                filtroUbicacion === "TODAS" ||
                actividad.ubicacion === filtroUbicacion;

            const textoActividad = [
                actividad.titulo,
                actividad.tipo,
                actividad.tematica,
                actividad.sede,
                actividad.presentador
            ].join(" ").toLowerCase();

            const coincideBusqueda =
                textoActividad.includes(terminoBusqueda);


            return (
                coincideDia &&
                coincideTipo &&
                coincideTematica &&
                coincideEstado &&
                coincideUbicacion &&
                coincideBusqueda
            );

        });


    // Limpiar contenido anterior
    contenedor.innerHTML = "";


    // Si no existen resultados
    if (actividadesFiltradas.length === 0) {

        contenedor.innerHTML = `

            <p class="sin-resultados">

                No hay actividades que coincidan
                con los filtros seleccionados.

            </p>

        `;

        return;
    }


    // Crear tarjetas
    actividadesFiltradas.forEach(actividad => {

        const tarjeta =
            document.createElement("article");

        const fotos = Array.isArray(actividad.foto)
            ? actividad.foto
            : [actividad.foto];

        const imagenesPresentador = fotos
            .map(foto => `
                <img
                    src="${foto}"
                    alt="${actividad.presentador}"
                    class="foto-presentador"
                >
            `)
            .join("");


        tarjeta.classList.add("actividad");


        tarjeta.innerHTML = `
            <div class="horario">

                <strong class="inicio">
                    ${actividad.horaInicio}
                </strong>

                <span class="fin">
                    ${actividad.horaFin}
                </span>

            </div>

            <div class="actividad-info">

                <span class="tipo">${actividad.tipo}</span>

                <h3>${actividad.titulo}</h3>

                <span class="tematica">${actividad.tematica}</span>

                <p class="descripcion">
                    ${actividad.descripcion}
                </p>

                <p class="sede">
                    <span class="sede-etiqueta">SEDE:</span>
                    <button class="sede-btn" data-sede="${actividad.sede}">
                        <span class="sede-nombre">${actividad.sede}</span>
                        <span class="sede-flecha" aria-hidden="true">&#8250;</span>
                    </button>
                </p>

            </div>

            <div class="presentador">

                <div class="presentador-principal">

                    <div class="fotos-presentador">
                        ${imagenesPresentador}
                    </div>

                    <div class="presentador-datos">
                        <strong>${actividad.presentador}</strong>
                        <span>${actividad.profesion}</span>
                    </div>

                </div>

                <div class="actividad-acciones">

                    <span class="
                        estado
                        estado-${actividad.estado.toLowerCase()}
                    ">
                        ${actividad.estado}
                    </span>

                </div>

            </div>
        `;


        contenedor.appendChild(tarjeta);

    });

}


// =====================================================
// 6. CAMBIAR DE DÍA
// =====================================================

botonesDias.forEach(boton => {

    boton.addEventListener("click", function() {


        // Quitar estado activo
        botonesDias.forEach(btn => {

            btn.classList.remove("activo");

        });


        // Activar botón seleccionado
        this.classList.add("activo");


        // Actualizar título
        tituloDia.textContent =
            obtenerTituloDia(this.dataset.dia);


        // Mostrar actividades
        mostrarActividades();

    });

});

botonBusqueda.addEventListener("click", function() {

    const estaAbierta =
        busqueda.classList.toggle("abierta");

    this.setAttribute("aria-expanded", estaAbierta);

    if (estaAbierta) {
        campoBusqueda.focus();
    } else {
        campoBusqueda.value = "";
        terminoBusqueda = "";
        mostrarActividades();
    }

});

campoBusqueda.addEventListener("input", function() {

    terminoBusqueda = this.value.trim().toLowerCase();

    mostrarActividades();

});

function abrirAuspiciantes(tipo) {

    auspiciantesModal.hidden = false;

    const esInstituciones = tipo === "instituciones";

    tituloAuspiciantes.textContent = esInstituciones
        ? "INSTITUCIONES"
        : "AUSPICIANTES";

    imagenAuspiciantes.src = esInstituciones
        ? "images/auspiciantes/ciones-fondoblanco.jpg"
        : "images/auspiciantes/empresas.png";

    imagenAuspiciantes.alt = esInstituciones
        ? "Instituciones que participan en la Bienal 2026"
        : "Empresas auspiciantes de la Bienal 2026";

}

botonAuspiciantes.addEventListener("click", function() {

    abrirAuspiciantes("auspiciantes");

});

botonInstituciones.addEventListener("click", function() {

    abrirAuspiciantes("instituciones");

});

cerrarAuspiciantes.addEventListener("click", function() {

    auspiciantesModal.hidden = true;

});

auspiciantesModal.addEventListener("click", function(event) {

    if (event.target === auspiciantesModal) {
        auspiciantesModal.hidden = true;
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        auspiciantesModal.hidden = true;
        opinionModal.hidden = true;
    }

});

botonOpinion.addEventListener("click", function() {

    opinionModal.hidden = false;
    opinionMensaje.focus();

});

cerrarOpinion.addEventListener("click", function() {

    opinionModal.hidden = true;

});

opinionModal.addEventListener("click", function(event) {

    if (event.target === opinionModal) {
        opinionModal.hidden = true;
    }

});

opinionAnonima.addEventListener("change", function() {

    opinionNombre.disabled = this.checked;

    if (this.checked) {
        opinionNombre.value = "";
    }

});

opinionForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const mensaje = opinionMensaje.value.trim();
    const imagen = opinionImagen.files[0];

    // Debe existir al menos mensaje o imagen
    if (!mensaje && !imagen) {
        opinionError.textContent =
            "Escribí un mensaje o seleccioná una imagen para enviar tu opinión.";
        return;
    }

    // Limpiar error
    opinionError.textContent = "";

    // Desactivar botón durante el envío
    const botonEnviar =
        opinionForm.querySelector(".opinion-enviar");

    botonEnviar.disabled = true;
    botonEnviar.textContent = "ENVIANDO...";

    try {

        let imagenUrl = null;

        // ==========================================
        // 1. SUBIR IMAGEN SI EXISTE
        // ==========================================

        if (imagen) {

            // Límite de 5 MB
            if (imagen.size > 5 * 1024 * 1024) {
                throw new Error(
                    "La imagen no puede superar los 5 MB."
                );
            }

            // Verificar que realmente sea una imagen
            if (!imagen.type.startsWith("image/")) {
                throw new Error(
                    "El archivo seleccionado no es una imagen válida."
                );
            }

            const extension =
                imagen.name.split(".").pop().toLowerCase();

            const nombreArchivo =
                `${crypto.randomUUID()}.${extension}`;

            const ruta =
                `opiniones/${nombreArchivo}`;

            const { error: errorImagen } =
                await supabaseClient
                    .storage
                    .from("opiniones")
                    .upload(ruta, imagen, {
                        cacheControl: "3600",
                        upsert: false,
                        contentType: imagen.type
                    });

            if (errorImagen) {
                throw errorImagen;
            }

            // Obtener URL pública
            const { data: urlData } =
                supabaseClient
                    .storage
                    .from("opiniones")
                    .getPublicUrl(ruta);

            imagenUrl = urlData.publicUrl;
        }

        // ==========================================
        // 2. GUARDAR OPINIÓN EN LA BASE DE DATOS
        // ==========================================

        const nombre =
            opinionAnonima.checked || !opinionNombre.value.trim()
                ? "Anónimo"
                : opinionNombre.value.trim();

        const { error: errorOpinion } =
            await supabaseClient
                .from("opiniones")
                .insert({
                    mensaje: mensaje || null,
                    nombre: nombre,
                    anonima: opinionAnonima.checked,
                    imagen_url: imagenUrl,
                    aprobada: false
                });

        if (errorOpinion) {
            throw errorOpinion;
        }

        // ==========================================
        // 3. ÉXITO
        // ==========================================

        opinionForm.reset();

        opinionAnonima.checked = true;
        opinionNombre.disabled = true;

        opinionError.textContent =
            "¡Gracias! Tu opinión fue enviada y será revisada antes de publicarse.";

        // Esperar un momento para que la persona pueda leerlo
        setTimeout(function() {

            opinionModal.hidden = true;

            opinionError.textContent = "";

            botonEnviar.disabled = false;
            botonEnviar.textContent = "ENVIAR";

        }, 2500);

    } catch (error) {

        console.error("Error al enviar opinión:", error);

        opinionError.textContent =
            error.message ||
            "No pudimos enviar tu opinión. Intentá nuevamente.";

        botonEnviar.disabled = false;
        botonEnviar.textContent = "ENVIAR";
    }

});


// =====================================================
// 7. TÍTULO DEL DÍA
// =====================================================

function obtenerTituloDia(dia) {

    const titulos = {

        "24": "24 SEPTIEMBRE — JUEVES",

        "25": "25 SEPTIEMBRE — VIERNES",

        "26": "26 SEPTIEMBRE — SÁBADO"

    };


    return titulos[dia] || "AGENDA";

}


// =====================================================
// 8. FILTROS
// =====================================================

botonesFiltros.forEach(boton => {

    boton.addEventListener("click", function() {


        const tipoFiltro =
            this.dataset.filtro;

        const valor =
            this.dataset.valor;


        // Activar visualmente el botón
        this.parentElement
            .querySelectorAll(".filtro")
            .forEach(btn => {

                btn.classList.remove("activo");

            });


        this.classList.add("activo");


        // Guardar selección

        if (tipoFiltro === "tipo") {

            filtroTipo = valor;

        }


        if (tipoFiltro === "tematica") {

            filtroTematica = valor;

        }


        if (tipoFiltro === "estado") {

            filtroEstado = valor;

        }

        if (tipoFiltro === "ubicacion") {

            filtroUbicacion = valor;

        }


        // Actualizar actividades
        mostrarActividades();

    });

});


// =====================================================
// 9. INFORMACIÓN DE LAS SEDES
// =====================================================

document.addEventListener("click", function(event) {


    // Verificar si se hizo clic en una sede
    if (!event.target.classList.contains("sede-btn")) {

        return;

    }


    const nombreSede =
        event.target.dataset.sede;


    const sede =
        sedes[nombreSede];


    // Si no existe información
    if (!sede) {

        alert(
            "Información de esta sede próximamente."
        );

        return;

    }


    // Crear modal
    const modal =
        document.createElement("div");


    modal.classList.add("sede-modal");


    modal.innerHTML = `

        <div class="sede-modal-contenido">

            <button
                class="sede-modal-cerrar"
            >
                ×
            </button>


            <img
                src="${sede.imagen}"
                alt="${nombreSede}"
                class="sede-modal-imagen"
            >


            <span class="sede-modal-etiqueta">
                SEDE
            </span>


            <h2>
                ${nombreSede}
            </h2>


            <p class="sede-direccion">
                ${sede.direccion}
            </p>


            <p class="sede-descripcion">
                ${sede.descripcion}
            </p>


            <button
                class="mapa-btn"
                data-mapa="${sede.mapa}"
            >
                VER UBICACIÓN
            </button>

        </div>

    `;


    document.body.appendChild(modal);


    // Botón mapa
    const mapaBtn =
        modal.querySelector(".mapa-btn");


    mapaBtn.addEventListener("click", function() {

        window.open(
            this.dataset.mapa,
            "_blank"
        );

    });


    // Botón cerrar
    const cerrar =
        modal.querySelector(
            ".sede-modal-cerrar"
        );


    cerrar.addEventListener("click", function() {

        modal.remove();

    });


    // Cerrar haciendo clic fuera
    modal.addEventListener("click", function(event) {

        if (event.target === modal) {

            modal.remove();

        }

    });

});


// =====================================================
// 10. INICIAR AGENDA
// =====================================================

// Mostrar el primer día al cargar la página

mostrarActividades();
