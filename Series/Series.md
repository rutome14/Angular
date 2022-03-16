# Series

- Configuración inicial del proyecto

- Componentes: ListaSeries

- Rutas: 
    - La ruta /series activa el componente ListaSeries
    - NO OS OLVIDÉIS DEL ROUTER-OUTLET

- Creación de los dos interfaces: Serie y Personaje

- SERVICIO Series
    - Importar el array de series dentro del servicio

```
ng generate service services/Series --skip-tests
```

```typescript
// Si importamos correctamente el array dentro del servicio, podemos usar el array SERIES como lo hacíamos con el array de productos
// NO HACE FALTA INICIALIZARLO
import { SERIES } from '../db/series.db';
```

    - Método getAll -> me deveuelve todas las series
    - Ejecuto dicho método dentro del inicio del componente ListaSeries

- Filtrar las series por CANAL
