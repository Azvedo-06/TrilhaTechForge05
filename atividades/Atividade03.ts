export function validarCPF(cpf: string): boolean {
    // Remove qualquer caracter não numérico (caso haja)
    cpf = cpf.replace(/\D/g, "");
  
    // Verifica se o CPF possui 11 dígitos
    if (cpf.length !== 11) return false;
  
    // Verifica se todos os dígitos são iguais (caso comum de CPF inválido)
    if (/^(\d)\1{10}$/.test(cpf)) return false;
  
    // Cálculo do primeiro dígito verificador
    let soma1 = 0;
    for (let i = 0; i < 9; i++) {
      soma1 += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto1 = soma1 % 11;
    let digito1 = resto1 < 2 ? 0 : 11 - resto1;
  
    // Cálculo do segundo dígito verificador
    let soma2 = 0;
    for (let i = 0; i < 10; i++) {
      soma2 += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let resto2 = soma2 % 11;
    let digito2 = resto2 < 2 ? 0 : 11 - resto2;
  
    // Compara os dígitos calculados com os informados
    return cpf.charAt(9) === digito1.toString() && cpf.charAt(10) === digito2.toString();
}
