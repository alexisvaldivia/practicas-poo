class Empresa {
    constructor(nombreEmpresa, empleador = [], cuit, responsabilidad) {
        this.nombreEmpresa = nombreEmpresa;
        this.empleador = empleador;
        this.cuit = cuit;
        this.responsabilidad = responsabilidad;
    }

    altaEmpleado(empleado) {
        // empleado
    }

    bajaEmpleado(empleado) {
        //
    }

    nombreEmpresa() {
        return this.nombreEmpresa
    }
}