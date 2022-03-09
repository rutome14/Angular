# Suma

- Recibe dos números y cuando pulsamos un botón muestra el resultado de la suma de los dos números

1 - Creación del componente

ng generate component Suma --skip-tests

2 - Maquetamos el componente (HTML)

3 - En el TS generamos las propiedades necesarias

4 - Definimos el CLICK del botón para que resuelva la suma

<app-suma num1="" num2=""></app-suma>

## Calculadora

<calculadora></calculadora>

Conclusiones: 
1 - Modificar el selector
2 - NO TIENE PROPIEDADES DE TIPO INPUT

Pasos: 

1 - Generar el componente

ng generate component Calculadora --skip-tests

2 - Maquetar la calculadora

3 - Cuando pulsemos en cualquiera de los botones numéricos, que me muestre POR CONSOLA el número que hemos pulsado
Lo mismo para los botones de cálculo
DEJAMOS EL IGUAL SIN NADA (de momento)

<button (click)="pulsarBotonNumerico(1)">1</button>
<button (click)="pulsarBotonNumerico(2)">2</button>


# Cronometro

ng generate component Cronometro --skip-tests

<cronometro [inicio]="3"></cronometro>

- Cambiamos el selector
- Necesito propiedad

@Input() inicio: number;

- Cuando pulsemos el botón de iniciar, comenzará la cuenta hasta llegar a cero