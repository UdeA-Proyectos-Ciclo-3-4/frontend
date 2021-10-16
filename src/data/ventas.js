const ventas = [
    { _id: 1, N_Factura: '0001', cliente: 'Pepito Perez', Descripcion: 'Botas', Total: 120000, FechaInicial: '2021-09-01', FechaPago: '2021-09-05', Responsable: 'Miguel', Estado: 'Creacion' },
    { _id: 2, N_Factura: '0002', cliente: 'Alexa Mendez', Descripcion: 'Zandalias', Total: 80000, FechaInicial: '2021-10-03', FechaPago: '2021-10-03', Responsable: 'Luisa', Estado: 'Embalaje' },
    { _id: 3, N_Factura: '0003', cliente: 'Nestor Ramos', Descripcion: 'Guantes', Total: 45000, FechaInicial: '2021-10-09', FechaPago: '2021-10-09', Responsable: 'Alba', Estado: 'Despacho' },
    { _id: 4, N_Factura: '0004', cliente: 'Diego Prieto', Descripcion: 'Bolso', Total: 80000, FechaInicial: '2021-07-07', FechaPago: '2021-07-07', Responsable: 'Caro', Estado: 'Ruta' },
    { _id: 5, N_Factura: '0005', cliente: 'Daniel Santos', Descripcion: 'Cinturon', Total: 25000, FechaInicial: '2021-04-15', FechaPago: '2021-06-06', Responsable: 'Juan', Estado: 'Recepcion' },
];

export default ventas;

export const initialStateVentas = {
    factura: '',
    cliente: '',
    descripcion: '',
    total: '',
    fechaPago: '',
    responsable: '',
    estado:''

};