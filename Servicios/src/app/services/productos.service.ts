import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos: Producto[];

  constructor() {
    this.productos = [
      { nombre: 'manzana', precio: 3, stock: 20, disponible: true, imagen: 'https://elegifruta.com.ar/onepage/wp-content/uploads/2017/07/manzana_roja.jpg', pais: 'francia' },
      { nombre: 'plátano', precio: 2.98, stock: 10, disponible: true, imagen: 'https://www.quimicaysociedad.org/wp-content/uploads/2015/06/platano.jpg', pais: 'italia' },
      { nombre: 'pera', precio: 3, stock: 20, disponible: true, imagen: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/10/conservar-pera-por-mas-tiempo-gresei.jpg', pais: 'españa' },
      { nombre: 'fresa', precio: 5.32, stock: 500, disponible: false, imagen: 'https://img.interempresas.net/fotos/1341264.jpeg', pais: 'españa' },
      { nombre: 'lechuga', precio: 4.45, stock: 3, disponible: true, imagen: 'https://images.ecestaticos.com/8llVkYpZo9gN11fmBvjFeOQd10U=/0x109:2121x1301/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F5cc%2Fef6%2F068%2F5ccef6068a457cdae460a5469d4af804.jpg', pais: 'francia' },
      { nombre: 'melocotón', precio: 2.29, stock: 50, disponible: false, imagen: 'https://www.hogarmania.com/archivos/201305/melocotones-xl-1280x720x80xX.jpg', pais: 'italia' },
      { nombre: 'aguacate', precio: 6.78, stock: 12, disponible: true, imagen: 'https://c.tenor.com/mPAD41xuFosAAAAC/aguacate-bailarin.gif', pais: 'francia' }
    ];
  }

  // Método que me devuelva todos los productos
  getAll(): Producto[] {
    return this.productos;
  }

  // Método que me devuelva los productos disponibles
  getDisponibles(): Producto[] {
    const disponibles = [];
    for (let producto of this.productos) {
      if (producto.disponible) {
        disponibles.push(producto);
      }
    }
    return disponibles;
  }

  // Método que me devuelva todos aquellos productos mayores de cierto precio
  getByPrecio(pPrecio: number): Producto[] {
    // const result = [];
    // for (let producto of this.productos) {
    //   if (producto.precio >= pPrecio) {
    //     result.push(producto);
    //   }
    // }
    // return result;
    return this.productos.filter(producto => producto.precio >= pPrecio);
  }

  // Método que filtre por país
  getByPais(pPais: string): Producto[] {
    // const result = [];
    // for (let producto of this.productos) {
    //   if (producto.pais === pPais) {
    //     result.push(producto);
    //   }
    // }
    // return result;
    return this.productos.filter(producto => producto.pais === pPais);
  }

  getPaises(): string[] {
    const result: string[] = [];
    for (let producto of this.productos) {
      if (!result.includes(producto.pais)) {
        result.push(producto.pais);
      }
    }
    return result;
  }

  getPaisesV2(): string[] {
    // Si quiero sacar un atributo de cada uno de los objetos de un array -> map    
    return [...new Set(this.productos.map(producto => producto.pais))];
  }

}


// - Cuando cargue el componente de la lista de productos hacer la llamada al método getPaises y guardarlo en una propiedad paises
// - Con esa propiedad, generar las diferentes opciones del select. Excepto la primera (todos)