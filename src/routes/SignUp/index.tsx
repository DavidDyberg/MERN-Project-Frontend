import { ActionFunctionArgs, Form, Link, redirect, useActionData } from "react-router-dom"
import * as Styles from './SignUp.styles'
import { Button } from "../../components/Button";
import type { ActionData } from "../../types";


export const action = async (args: ActionFunctionArgs) => {
    const { request } = args;

    const formData = await request.formData();

    const username = formData.get('username')
    const password = formData.get('password')
    const passwordConfirmation = formData.get('password_confirmation')

    if (password !== passwordConfirmation) {
        return { message: 'Passwords don\'t match'}
    }

    const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/register', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({username, password}) 
    })

    if (!response.ok) {
        const { message } = await response.json();

        return { message }
    }

    return redirect('/sign-in')
}

const SignUp = () => {
    const error = useActionData() as ActionData

    return (
        <>
        <Link to='/'>
            <Styles.Chevronleft />
        </Link>
        <Styles.container>
            <Styles.Title>Create new account</Styles.Title>
            
            <Form method="post">
                <Styles.ErrorMessage>
                    { error && <p><b>Error: </b>{error.message}</p>}
                </Styles.ErrorMessage>
                
                <Styles.InputWrapper>
                    <Styles.Label htmlFor="username">Username</Styles.Label>
                    <Styles.Input type="text" name="username" id="username" required/>
                </Styles.InputWrapper>

                <Styles.InputWrapper>
                    <Styles.Label htmlFor="password">Password</Styles.Label>
                    <Styles.Input type="password" name="password" id="password" required/>
                </Styles.InputWrapper>

                <Styles.InputWrapper>
                    <Styles.Label htmlFor="password_confirmation">Password confirmation</Styles.Label>
                    <Styles.Input type="password" name="password_confirmation" id="password_confirmation" required/>
                </Styles.InputWrapper>
                
                <Styles.ButtonDiv>
                    <Button type="submit">Create user</Button>
                </Styles.ButtonDiv>
            </Form>
        </Styles.container>
        </>
    )
}

export default SignUp