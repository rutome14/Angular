# Lista de Tareas

- Creación de componentes: Formulario y ListadoTareas

## Formulario

```html
<formulario (tareaCreada)="onTareaCreada($event)"></formulario>
```

### COSAS
- NO necesita @Input
- SÍ necesita un @Output y se llama **tareaCreada**
- Necesitamos **ngModel**
    1. Dentro de app.module.ts, en el array de imports incluiamos **FormsModule**

```html
<input type="text" [(ngModel)]="nuevaTarea.titulo">
```

1. Maquetación del formulario

2. Envío del formulario
    - Capturar el click del botón
    - Dentro del click del botón, emitimos un **OBJETO TAREA A PARTIR DE LOS DATOS DEL PROPIO FORMULARIO**

```typescript
class FormularioComponent {

    nuevaTarea: Tarea;

    constructor(){
        this.nuevaTarea = { titulo: '', prioridad: '', completa: false };
    }

}
```

```typescript
import Tarea from '../interfaces/tarea.interface'
```


```html
<listado-tareas [lista]="arrTareas"></listado-tareas>
```

Conclusiones
- Cambio selector
- @Input() lista: Tarea[]

