import { Container, SubContainer,Form, FormTitle, AlternativeLogins } from "./style";

export const LoginPage = () => {
    return(
        <Container>
            <SubContainer>
                <FormTitle>Login</FormTitle>
                <Form>
                    <input type="email" className="input" placeholder="Ex:empresa@email.com.br" />
                    <input type="password" className="input" placeholder="********" minLength={8} />
                    <input type="submit" className="submit" value={"Entrar"}/>
                    <span>Esqueci minha senha</span>
                    <span>Junte-se a nós</span>
                </Form>
                <AlternativeLogins>
                    <span>Fazer login com:</span>
                    
                </AlternativeLogins>
            </SubContainer>
            
            
        </Container>
    )
}
