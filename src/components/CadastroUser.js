import './cadastroUser.css'

function CadastroUser(){
    return(
        <div id='formulario'>
            <h2>Cadastra-se</h2>
            <form>
                <label form='nome'>Nome</label>
                <input type='text' name='nome' id = 'nome'/>

                <label form='email'>Email</label>
                <input type='email' name='email' id = 'email'/>

                <label form='cpf'>CPF/CNPJ</label>
                <input type='text' name='cpf' id = 'cpf'/>

                <label form='senha'>Senha</label>
                <input type='password' name='senha' id = 'senha'/>

                <input type='button' value= 'Cadastrar'/>

                
            </form>
        </div>
    )
}

export default CadastroUser;