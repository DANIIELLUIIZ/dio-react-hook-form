import { useForm } from 'react-hook-form'

import './App.css'

import Button from './components/button/button'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className="App">
      <div className="LoginContainer">
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="InputContainer">
            <input
              {...register('email', { required: 'Email necessário' })}
              aria-invalid={errors.email ? 'true' : 'false'}
              type="email"
              placeholder="E-mail"
            />
            {errors.email ? <p role="alert">{errors.email.message}</p> : null}
          </div>

          <div className="InputContainer">
            <input
              type="password"
              {...register('password', {
                required: 'Campo obrigatório',
                minLength: {
                  value: 8,
                  message: `Mínimo 8 caractéres`
                }
              })}
              aria-invalid={errors.password ? 'true' : 'false'}
              placeHolder="Password"
            />
            {errors.password ? (
              <p role="alert">{errors.password.message}</p>
            ) : null}
          </div>

          {isValid ? (
            <Button name="SUBMIT" type="submit" variant={isValid} />
          ) : (
            <Button name="SUBMIT" type="submit" variant={isValid} />
          )}
        </form>
      </div>
    </div>
  )
}

export default App
