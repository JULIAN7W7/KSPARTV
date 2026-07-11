# KSPARTV-JULI - Landing Page Premium

Página web premium estilo Apple con animaciones suaves y optimizadas para móviles, especialmente Android. Todo el contenido está en español.

## 📁 Estructura del Proyecto

```
PAGE/
├── index.html          # Archivo HTML principal
├── css/
│   └── styles.css      # Hoja de estilos CSS
├── js/
│   └── script.js       # Lógica JavaScript
├── img/                # Carpeta para imágenes (vacía)
└── README.md           # Este archivo
```

## 🚀 Características

- **Intro Cinematográfica**: Secuencia animada de textos con opción de saltar
- **Navegación Flotante**: Barra de navegación que se oculta/muestra al hacer scroll
- **Animaciones Suaves**: Transiciones GPU-accelerated optimizadas
- **Diseño Responsivo**: Adaptado para todos los dispositivos
- **Optimización de Rendimiento**: Detección automática de dispositivos de gama baja
- **SEO Completo**: Meta tags, Open Graph, Twitter Cards, JSON-LD
- **Accesibilidad**: Soporte para prefers-reduced-motion y etiquetas ARIA
- **Botón WhatsApp Flotante**: Con animación de rebote
- **Carrusel de Testimonios**: Con soporte táctil y autoplay
- **FAQ Acordeón**: Preguntas frecuentes interactivas
- **Estadísticas Animadas**: Contadores con animación

## ⚙️ Configuración

Todo el contenido se puede personalizar editando el objeto `CONFIG` en el archivo `js/script.js`:

```javascript
const CONFIG = {
    appName: 'KSPARTV-JULI',
    appDescription: 'Servicio de entretenimiento premium...',
    
    whatsapp: {
        number: '1234567890',
        message: '¡Hola! Me interesa su servicio.'
    },
    
    // ... más configuraciones
};
```

### Elementos Configurables

- **Nombre y descripción de la app**
- **Número de WhatsApp y mensaje**
- **Textos de la intro**
- **Beneficios y descripciones**
- **Números de comparación**
- **Contenido destacado**
- **Características**
- **Estadísticas**
- **Testimonios**
- **Preguntas frecuentes (FAQ)**
- **Texto del CTA**
- **Configuración de animaciones**

## 📱 Secciones

1. **Hero**: Logo, título, descripción y CTA principal
2. **Beneficios**: Tarjetas con iconos animados
3. **Comparación**: Números animados mostrando ahorro
4. **Biblioteca de Contenido**: Grid de categorías
5. **Características**: Iconos con descripciones
6. **Estadísticas**: Contadores animados
7. **Testimonios**: Carrusel con reseñas
8. **FAQ**: Acordeón de preguntas frecuentes
9. **CTA Final**: Llamada a la acción premium

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --color-blue: #0071e3;
    --color-blue-light: #2997ff;
    --color-blue-dark: #005bb5;
    /* ... más colores */
}
```

### Agregar Imágenes

Las imágenes deben colocarse en la carpeta `img/`. Actualiza las rutas en el HTML según sea necesario.

## 🌐 SEO

La página incluye:

- Meta tags de descripción y keywords
- Open Graph para redes sociales
- Twitter Cards
- Datos estructurados JSON-LD
- URL canónica

Actualiza las URLs en `index.html` para tu dominio:

```html
<meta property="og:url" content="https://tu-dominio.com">
<link rel="canonical" href="https://tu-dominio.com">
```

## 📊 Rendimiento

La página incluye optimizaciones automáticas:

- **Detección de dispositivo**: Identifica dispositivos de gama baja
- **Reducción de efectos**: Desactiva blur y partículas en dispositivos lentos
- **Monitor de FPS**: Ajusta la calidad según el rendimiento
- **GPU Acceleration**: Usa transformaciones hardware-accelerated

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 moderno (variables, grid, flexbox)
- JavaScript vanilla (sin frameworks)
- IntersectionObserver API
- LocalStorage para detectar visitas recurrentes

## 📝 Uso

1. Abre `index.html` en un navegador web
2. La primera visita mostrará la intro cinematográfica
3. Las visitas siguientes mostrarán el botón "Saltar Intro" desde el inicio

## 🔧 Personalización Avanzada

### Modificar la Intro

Edita `CONFIG.introTexts` en `js/script.js`:

```javascript
introTexts: [
    'Bienvenido.',
    '¿Cansado de pagar suscripciones mensuales?',
    // ... más textos
]
```

### Cambiar el Número de WhatsApp

Edita `CONFIG.whatsapp.number` en `js/script.js`:

```javascript
whatsapp: {
    number: '1234567890',  // Tu número con código de país
    message: '¡Hola! Me interesa su servicio.'
}
```

## 📱 Compatibilidad

- ✅ Chrome (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Edge (últimas versiones)
- ✅ Android (Chrome)
- ✅ iOS (Safari)

## 🎯 Optimizaciones Móviles

- Touch events para carrusel
- Navegación simplificada en móvil
- Botones de tamaño adecuado
- Animaciones optimizadas para touch

## 📄 Licencia

Este proyecto es de código abierto y puede ser modificado según tus necesidades.

## 👨‍💻 Soporte

Para personalización avanzada o problemas, edita los archivos CSS y JS según tus necesidades.

---

**Creado con ❤️ para KSPARTV-JULI**
