import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import SignUp, { action as signUpAction } from './routes/SignUp/index.tsx'
import SignIn, { action as signInAction} from './routes/SignIn/index.tsx'
import Createpost, {action as CreatePostAction} from './routes/CreatePost/index.tsx'
import Index, {loader as indexLoader } from './routes/index.tsx'
import auth from './lib/auth.ts' 
import RequireAuth from './components/RequireAuth.tsx'
import ShowSinglePost, {loader as ShowSinglePostLoader} from './components/ShowSinglePost/index.tsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        loader: indexLoader,
        element: <Index/>
      },
      {
        path: '/posts/:id',
        loader: ShowSinglePostLoader,
        element: <ShowSinglePost/>
      },
      {
        index: true,
        element: <Index />
      },
      {
        path: 'sign-in',
        action: signInAction,
        element: <SignIn />
      },
      {
        path: 'sign-up',
        action: signUpAction,
        element: < SignUp/>
      },
      {
        path: 'sign-out',
        action: () => {
          auth.signOut();
          return redirect('/');
        }
      },
      {
        element: <RequireAuth />,
        children: [
          {
            path: 'create-post',
            action: CreatePostAction,
            element: <Createpost />
          }
        ]
      },
      
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
