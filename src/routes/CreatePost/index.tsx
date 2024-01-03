import { ActionFunctionArgs, Form, redirect, useActionData } from 'react-router-dom'
import { Button } from '../../components/Button'
import * as Styles from '../SignUp/SignUp.styles'
import type { ActionData } from '../../types'
import auth from '../../lib/auth'

export const action = async ({request}: ActionFunctionArgs) => {
    const formData = await request.formData();

    const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/posts',  {
        method: 'POST',
        headers: {
            'Authorization' : `Bearer ${auth.getJWT()}`
        },
        body: formData,
    });
    if (!response.ok) {
        const { message } = await response.json();

        return { message }
    }
    return redirect('/')
}

const Createpost = () => {
    const error = useActionData() as ActionData
    return (
        <Styles.container>
            <Styles.Title>Create post</Styles.Title>
            
            <Form method="post" encType="multipart/form-data">
                <Styles.ErrorMessage>
                    { error && <p><b>Error: </b>{error.message}</p>}
                </Styles.ErrorMessage>
                
                <Styles.InputWrapper>
                    <Styles.Label htmlFor="Title">Title</Styles.Label>
                    <Styles.Input type="text" name="title" id="title" required/>
                </Styles.InputWrapper>

                <Styles.InputWrapper>
                    <Styles.Label htmlFor="link">Link (Optional)</Styles.Label>
                    <Styles.Input type="text" name="link" id="link"/>
                </Styles.InputWrapper>

                <Styles.InputWrapper>
                    <Styles.Label htmlFor="body">Body (Optinoal)</Styles.Label>
                    <Styles.Input type="text" name="body" id="body"/>
                </Styles.InputWrapper>
                <Styles.ButtonDiv>
                    <Button type="submit">Post</Button>
                </Styles.ButtonDiv>
            </Form>
        </Styles.container>
    )
}

export default Createpost