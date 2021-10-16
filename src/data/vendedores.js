const vendedores = [
    { _id: 1, nombre: 'Luisa', especialidad: 'joyeria', celular: '3132234554', fecha_ingreso: '2021/09/09' },
    { _id: 2, nombre: 'Alba', especialidad: 'muebles hogar', celular: '3112344556', fecha_ingreso: '2021/09/09' },
    { _id: 3, nombre: 'Miguel', especialidad: 'moda', celular: '3002344576', fecha_ingreso: '2021/09/09' },
    { _id: 4, nombre: 'Carolina', especialidad: 'bisuteria', celular: '3112345667', fecha_ingreso: '2021/09/09' },
    { _id: 5, nombre: 'Juan', especialidad: 'moda', celular: '3202341223', fecha_ingreso: '2021/09/09' }
    
];

export default vendedores;

export const initialStateVendedores = {
    
    nombre: '',
    especialidad: '',
    celular: '',
    fecha_ingreso: ''
};