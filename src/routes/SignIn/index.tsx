import { ActionFunctionArgs, Form, Link, redirect, useActionData } from "react-router-dom"
import auth from "../../lib/auth";
import * as Styles from '../SignUp/SignUp.styles'
import { Button } from "../../components/Button";


export const action = async (args: ActionFunctionArgs) => {
    const { request } = args;

    const formData = await request.formData();

    const username = formData.get('username')
    const password = formData.get('password')

    const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/login', {
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

    const { token } = await response.json()
    auth.signIn(token)

    return redirect('/')
}

const SignIn = () => {
    const error = useActionData() as { message: string } | undefined;

    return (
        <>
        <Link to='/'>
            <Styles.Chevronleft size={24} />
        </Link>
        <Styles.container>
            <Styles.Title>Sign in</Styles.Title>
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

                <Styles.ButtonDiv>
                    <Button type="submit">Login</Button>
                </Styles.ButtonDiv>
            </Form>
            </Styles.container>
            </>
    )
}

export default SignIn