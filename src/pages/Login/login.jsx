import {Container,LoginContainer,Title} from "./styles"
import * as React from "react"
import Input from "../../components/Input/input"
import Button from "../../components/button/button"


import { useForm } from "react-hook-form"

export default function Login() {
  const {
    register,
    handleSubmit
  } = useForm();


  // const onSubmit =(data) => console.log(data)

  return (
    <Container>
      <LoginContainer>
             <Title>Login</Title>
             <form onSubmit={handleSubmit((data)=>{
             console.log(data)
             })}>
             <Input {...register("email",{require:true})} placeholder="Digite seu email" />
         /
             <Input {...register("password",{require:true}) } placeholder="Digite sua senha"/>
          /
             <Button name="Entrar" type="submit"/>
             </form>
      </LoginContainer>
    </Container>
  )
}
