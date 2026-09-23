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
        titulo: "Desterritorialización material",
        tematica: "TERRITORIO",
        sede: "MACC",
        ubicacion: "CORRIENTES",
        presentador: "FAU-UNNE",
        profesion: "Arquitectura y Urbanismo",
        foto: "images/expositores/fau.png",
        estado: "CONFIRMADA",
        descripcion: "Expone el arquitecto Alberto Mahave."
    },

    {
        dia: "24",
        horaInicio: "10:30",
        horaFin: "11:00",
        tipo: "CONFERENCIA",
        titulo: "Acervo",
        tematica: "CIUDAD",
        sede: "MACC",
        ubicacion: "CORRIENTES",
        presentador: "FAU-UNNE",
        profesion: "Arquitectura y Urbanismo",
        foto: "images/expositores/fau.png",
        estado: "CONFIRMADA",
        descripcion: "Expone la arquitecta Cecilia Coccato"
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
        descripcion: "Encuentro de cátedras proyectuales innovadoras de la FAU-UNNE y UCA-BA."
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
        horaInicio: "15:30",
        horaFin: "17:00",
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
        horaInicio: "16:30",
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
        horaInicio: "17:00",
        horaFin: "18:00",
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
        titulo: "Inauguración de la muestra en el MACC",
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
        dia: "25",
        horaInicio: "09:30",
        horaFin: "10:30",
        tipo: "CONFERENCIA",
        titulo: "Actividad de prueba 4",
        tematica: "ARQUITECTURA",
        sede: "Teatro Oficial Juan de Vera",
        ubicacion: "CORRIENTES",
        presentador: "Presentador/a de prueba",
        profesion: "Arquitectura",
        estado: "CONFIRMADA",
        descripcion: "Breve descripción de prueba para visualizar cómo se verá la actividad."
    },

    {
        dia: "25",
        horaInicio: "11:00",
        horaFin: "12:00",
        tipo: "TALLER",
        titulo: "Actividad de prueba 5",
        tematica: "TERRITORIO",
        sede: "FAU-UNNE",
        ubicacion: "CHACO",
        presentador: "Presentador/a de prueba",
        profesion: "Urbanismo",
        estado: "REPROGRAMADA",
        descripcion: "Breve descripción de prueba para visualizar cómo se verá la actividad."
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

                    <img
                        src="${actividad.foto}"
                        alt="${actividad.presentador}"
                        class="foto-presentador"
                    >

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