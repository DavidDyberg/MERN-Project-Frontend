import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import SignUp, { action as signUpAction } from './routes/SignUp/index.tsx'
import SignIn, { action as signInAction} from './routes/SignIn/index.tsx'
import Createpost, {action as CreatePostAction} from './routes/CreatePost/index.tsx'
import EditPost, {action as editPostAction} from './routes/EditPost/index.tsx' 
import {action as deletePostAction} from './components/DeletePost/index.tsx'
import {action as createCommentAction} from './components/CommentForm/index.tsx'
import {action as deleteCommentAction} from './components/DeleteComment/index.tsx'
import {action as votesAction} from './components/Votes/index.tsx'
import Index, {loader as indexLoader } from './routes/index.tsx'
import auth from './lib/auth.ts' 
import RequireAuth from './components/RequireAuth.tsx'
import ShowSinglePost, {loader as ShowSinglePostLoader} from './routes/ShowSinglePost/index.tsx'

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
          },
          {
            path: '/posts/:id/edit',
            action: editPostAction, 
            element: <EditPost />
          },
          {
            path: '/posts/:postId/comments',
            action: createCommentAction
          },
          {
            path: '/posts/:id/delete-post',
            action: deletePostAction
          },
          {
            path: '/posts/:postId/comments/:commentId',
            action: deleteCommentAction
          },
          {
            path: '/posts/:postId/vote',
            action: votesAction
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
