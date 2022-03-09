# Lista Compra

### Cosas previas

1. Instalar bootstrap (OPCIONAL)
    - npm install bootstrap
    - Incluir dentro de angular.json la ruta de bootstrap (línea 29-30)
2. Dentro de app.module.ts incorporamos **FormsModule**
    - Solo lo instalamos si necesitamos usar **ngModel**
    - Se incorpora dentro de el array **imports**
3. Crear componentes: Formulario y ListaProductos
    - ng generate component components/Formulario --skip-tests
4. Crear interfaz Producto (nombre, cantidad y departamento)
    - Creamos esto cuando queremos dar un tipo 
    - Se crea un fichero producto.interface.ts
    
app.component.html
```html
<!-- Caso final. Hay que ir PASO A PASO -->
<formulario (productoCreado)="onProductoCreado($event)"></formulario>
<lista-productos [productos]="arrProductosPendientes"></lista-productos>
<lista-productos [productos]="arrProductosComprados"></lista-productos>
```

app.component.ts

1. Generamos los arrays **arrProductosPendientes** y **arrProductosComprados** vacíos.

formulario.component

1. Maquetar el formulario
2. Eganchar cada campo del formulario con una variable a través de ngModel
3. Emitimos mediante el @Output productoCreado, el producto que hemos pulsado.



```html
<lista-productos titulo="Pendientes" [productos]="arrProductosPendientes"></lista-productos>

```

- Dentro del TS de la lista de productos necesito dos @Input

@Input() titulo: string;
@Input() productos: Producto[];


- Cuando pulsamos en un producto hay que emitir hacia fuera qué producto se ha pulsado
- En el padre, capturamos ese producto y lo CAMBIAMOS al otro array