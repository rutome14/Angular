# Trivial

- Configuración inicial del proyecto 

- Componentes Principales: Home y Juego

- Rutas
    - Ruta raíz (localhost:4200) -> Home
    - Ruta 'juego' (localhost:4200/juego) -> Juego
    - Si no es ninguna de las anteriores (localhost:4200/otracosa) -> Home

- Interface Pregunta (pregunta.interface.ts)
    - titulo: string
    - respuestas: string[]
    - respuestaCorrecta: number
    - puntuacion: number

### HomeComponent

- Componente "landing"
    - Logo del juego (una imagen que os apetezca)
    - Botón que nos lleve al juego

### JuegoComponent

- Necesito un array donde colocar todas las preguntas (arrPreguntas)

```typescript
this.arrPreguntas = [
    { 
        titulo: '¿Bla bla bli?', 
        respuestas: ['respuesta1', 'respuesta2', 'respuesta3', 'respuesta4'],
        respuestaCorrecta: 2,
        puntuacion: 100
    },
    { 
        titulo: '¿Otra?', 
        respuestas: ['respuesta1', 'respuesta2', 'respuesta3', 'respuesta4'],
        respuestaCorrecta: 2,
        puntuacion: 100
    }
]
```

juego.component.html
```html
<app-pregunta [titulo]="arrPreguntas[0].titulo"></app-pregunta>
<app-respuestas [respuestas]="arrPreguntas[0].respuestas"></app-respuestas>
```

- (respuestas.component) Cada botón debe ser clickable
- (respuestas.component) En el click del botón debemos EMITIR hacia fuera el índice que hemos pulsado
- (juego.component.html) Capturar el evento de respuesta
- (juego.component.ts) Comprobar si la respuesta elegida es la misma que la posición 0


En JUEGO!!!!!
- Estamos realizando todo a partir de la pregunta 0. NO PUEDE SEGUIR ASÍ - MALLLL
- Necesitamos alguna variable que almacene la pregunta que estamos lanzando (preguntaActual -> number)
- Donde antes ponía 0, ahora hay que hacerlo con **preguntaActual**

### Resolución de la pregunta
- Comprobar si la respuesta es correcta
- Si es correcta, aumentar en 1 la **preguntaActual**

- Guardar en una variable la puntuación del usuario
    - Cada vez que acierte sumar la puntuación de la pregunta

- Detectar cuando terminan las preguntas
    - Navegar hacia la NUEVA RUTA /final -> FinalComponent