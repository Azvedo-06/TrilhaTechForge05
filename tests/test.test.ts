import { validarCPF } from '../atividades/Atividade03';

describe('test cpf', () =>{
    test('Um CPF com 11 dígitos e dígitos verificadores corretos (CPF válido)', () => {
        const cpf = validarCPF('114.364.369-07');
        expect(cpf).toBeTruthy();
    })
    test('Um CPF com 11 dígitos, mas com dígitos verificadores incorretos (CPF inválido)', () => {
        const cpf = validarCPF('114.364.369-08');
        expect(cpf).toBeFalsy();
    })
    test('Um CPF com formato incorreto (por exemplo, menos de 11 dígitos ou contendo caracteres não numéricos)', () => {
        const cpf = validarCPF('114.364.369-0A');
        expect(cpf).toBeFalsy();
    })
})