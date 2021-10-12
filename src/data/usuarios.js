const usuarios = [
    { _id: 1, nombre: 'Luisa', rol: '', correo: 'luisa@mail.com', contrasena: '1234' },
    { _id: 2, nombre: 'Alba', rol: '', correo: 'alba@mail.com', contrasena: '0000' },
    { _id: 3, nombre: 'Miguel', rol: '', correo: 'miguel@mail.com', contrasena: '5678' },
    { _id: 4, nombre: 'Carolina', rol: '', correo: 'caroina@mail.com', contrasena: '22222' },
    { _id: 5, nombre: 'Juan', rol: '', correo: 'juan@mail.com', contrasena: '88888' }
    
];

export default usuarios;

export const initialStateUsuarios = {
    nombre: '',
    rol: '',
    correo: '',
    contrasena: ''
};