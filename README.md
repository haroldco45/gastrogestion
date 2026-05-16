# GastroGestión Pro - VIBRAS POSITIVAS HM

¡Bienvenido a **GastroGestión Pro**, la solución tecnológica definitiva en formato **PWA (Progressive Web App)** diseñada para la auditoría, optimización financiera y control analítico de establecimientos gastronómicos (restaurantes, bares y cafés)!

Esta herramienta interactiva ha sido conceptualizada y desarrollada siguiendo rigurosamente los estándares técnicos y metodológicos de gestión de la industria, y está enfocada exclusivamente bajo la identidad corporativa de [www.vibraspositivashm.com](https://www.vibraspositivashm.com).

---

## 🚀 Características Principales

El ecosistema digital de **GastroGestión Pro** se divide en módulos secuenciales e interactivos que guían al administrador o consultor en la toma de decisiones:

1. **Auditoría Operativa Inicial:** Diagnóstico rápido sobre el estado actual de la estandarización de recetas, fichas técnicas y el control de mermas/Kardex en el almacén.
2. **Dirección y Viabilidad Estratégica:** Espacio analítico para plasmar la Propuesta Única de Consumo y el Buyer Persona. Incluye una **Calculadora Automática de Punto de Equilibrio** para determinar metas de facturación mensuales, semanales y flujo diario de comensales.
3. **Ingeniería de Costos (Food Cost):** Analizador avanzado de margen de contribución unitario. Calcula de forma automática el porcentaje de costo real de materia prima (mantenido bajo el umbral recomendado del 25% al 35%), el margen bruto y sugiere el precio óptimo de venta al público según los objetivos del negocio.
4. **Matriz BCG Gastronómica:** Clasificación automatizada de la oferta comercial del establecimiento en platos *Estrella, Caballos de Batalla, Enigmas y Perros* para optimizar el diseño físico o digital de la carta.
5. **Estrategias de Retención:** Modelos de comercialización basados en programas de fidelización y estructuración de canales digitales de geolocalización.
6. **Geolocalización Homologada e Integración:** El sistema captura en tiempo real las coordenadas satelitales exactas mediante la API nativa de geolocalización del navegador o asigna por defecto la base operativa de **Caucasia, Antioquia, Colombia**, permitiendo consolidar y exportar todo el informe técnico de manera inmediata hacia **WhatsApp Business**.

---

## 🛠️ Stack Tecnológico

La arquitectura de software de este proyecto destaca por su ligereza, velocidad de carga y portabilidad, prescindiendo de infraestructuras de backend pesadas:

* **Estructura y Maquetación:** HTML5 semántico y estructurado por módulos de contenido.
* **Estilos y Experiencia de Usuario (UX/UI):** CSS3 responsivo basado en Variables CSS (`:root`), Grid y Flexbox. Diseño optimizado con un enfoque *Mobile-First*, garantizando una visualización perfecta en teléfonos inteligentes y tabletas.
* **Componentes Gráficos:** Tipografías nativas y biblioteca de vectoriales integrados mediante **FontAwesome**.
* **Lógica de Negocio y APIs:** JavaScript Vanilla (ES6+) nativo para el procesamiento inmediato de los algoritmos financieros, manipulación dinámica del DOM, gestión de pestañas y geolocalización por satélite.
* **Capacidad PWA Avanzada:** 
  * `manifest.json`: Manifiesto web que habilita la propiedad de **Instalabilidad Nativa** en plataformas móviles y de escritorio.
  * `sw.js`: Service Worker con estrategia de caché (*Cache First*) para garantizar el arranque instantáneo y el funcionamiento operativo **100% Offline** (sin conexión a internet).

---

## 📦 Estructura de Archivos del Proyecto

Para que el sistema funcione correctamente, la raíz del repositorio debe contener los siguientes archivos esenciales:

```bash
├── index.html       # Interfaz de usuario, estilos embebidos y lógica JavaScript.
├── manifest.json    # Configuración de instalación y metadatos nativos PWA.
└── sw.js            # Service Worker para almacenamiento en caché y persistencia offline.
