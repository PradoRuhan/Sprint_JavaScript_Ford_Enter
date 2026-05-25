
//class contato

class contato {
    constructor(nome, email, telefone, tipo_contato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipo_contato = tipo_contato;
        this.mensagem = mensagem;
    }
}

function Post(form) {

  let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value, 
        form.elements.namedItem("telefone").value, 
        form.elements.namedItem("tipo_contato").value,
        form.elements.namedItem("mensagem").value
    );

Enviar(data);

form.reset();
  
}

function Enviar(dadosInstanciados) {
    if (dadosInstanciados.nome !== "") {
        alert('Obrigado sr(a) ' + dadosInstanciados.nome + ' os seus dados foram encaminhados com sucesso');
    }

}