class Empleado {
    constructor(nombre, apellido, dni, anoAlta, diasVacaciones) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.anoAlta = anoAlta;
        this.diasVacaciones = diasVacaciones;
    }

    nombreCompleto() {
        return `${this.nombre}, `;
    }
}

let empleado1 = new Empleado("Lucas", "Perez", "44700600", 2001, 30);

alert(empleado1.nombreCompleto())