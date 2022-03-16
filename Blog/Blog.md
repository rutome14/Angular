# Blog

- Configuración inicial

- Interface: Post (title: string, body: string, author: string, category: string, createdAt: Date)

- Componentes: ListaPosts, DetallePost, Formulario

- Rutas: 
    - /posts -> ListaPosts
    - /new -> Formulario

- Servicios: PostsService 
    - ng generate service services/Posts --skip-tests

- Dentro del SERVICIO (como una propiedad) declaramos un array de objetos de tipo Post
- Dentro del SERVICIO (en su constructor) inicializamos el array
- A ser posible, en la inicialización hay que colocar un par de posts de prueba
- Dentro del SERVICIO necesitamos un método que nos recupere TODOS los POSTS del ARRAY


- La ruta /new activa el componente Formulario

- Creación de un Formulario de tipo **model** que nos permita introducir todos los datos de un Post

Post (title: string, body: string, author: string, category: string, createdAt: Date)

    1. En app.module incluimos el módulo ReactiveFormsModule
    2. En el componente Formulario generamos un objeto FormGroup como propiedad
    3. Inicializamos en el constructor dicha propiedad con cada uno de los controles
    4. En el HTML generamos el formulario y lo enganchamos con la propiedad formGroup / formControlName
    5. En el método que captura el evento ngSubmit del formulario debemos poder visualizar los datos del nuevo post
