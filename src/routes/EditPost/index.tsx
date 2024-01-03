import { ActionFunctionArgs, Form, redirect, useActionData } from "react-router-dom";
import { ActionData } from "../../types";
import auth from "../../lib/auth";
import * as Styles from "../../routes/SignUp/SignUp.styles";
import { Button } from "../../components/Button";

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const id = params.id;

  const postData = Object.fromEntries(formData.entries());

  const response = await fetch(
    import.meta.env.VITE_BACKEND_URL + "/posts/" + id + "/edit",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.getJWT()}`,
      },
      body: JSON.stringify(postData),
    }
  );

  if (!response.ok) {
    const { message } = await response.json();

    return { message };
  }

  return redirect("/posts/" + id);
};

const EditPost = () => {
  const error = useActionData() as ActionData;
  return (
    <Styles.container>
      <Styles.Title>Edit post</Styles.Title>

      <Form method="PUT" >
        <Styles.ErrorMessage>
          {error && <p><b>Error: </b>{error.message}</p>}
        </Styles.ErrorMessage>

        <Styles.InputWrapper>
          <Styles.Label htmlFor="Title">Title</Styles.Label>
          <Styles.Input type="text" name="title" id="title" required />
        </Styles.InputWrapper>

        <Styles.InputWrapper>
          <Styles.Label htmlFor="link">Link (Optional)</Styles.Label>
          <Styles.Input type="text" name="link" id="link" />
        </Styles.InputWrapper>

        <Styles.InputWrapper>
          <Styles.Label htmlFor="body">Body (Optional)</Styles.Label>
          <Styles.Input type="text" name="body" id="body" />
        </Styles.InputWrapper>
        
        <Styles.ButtonDiv>
          <Button type="submit">Edit</Button>
        </Styles.ButtonDiv>
      </Form>
    </Styles.container>
  );
};

export default EditPost