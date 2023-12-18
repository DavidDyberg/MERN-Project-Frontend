import { Link, useFetcher } from 'react-router-dom'
import auth from '../../lib/auth'
import * as Styles from './Header.styles'
import { Button } from '../Button'

const Header = () => {
    const isAuthenticated = auth.isSignedIn();
    const fetcher = useFetcher();

    return (
        <Styles.HeaderContainer>
            <Styles.Title>ChangedIt</Styles.Title>
            <div>
                {isAuthenticated ?
                <>
                <Link to='/create-post'>
                    <Button>New post</Button>
                </Link>
                <fetcher.Form method='post' action='/sign-out'>
                    <Button type='submit'>Sign out</Button>
                </fetcher.Form>
                </>
                :
                    <>
                <Link to='sign-up'>
                    <Button>Sign up</Button>
                </Link>
                <Link to='sign-in'>
                    <Button>Sign in</Button>
                </Link>
                </>
                }
            </div>
        </Styles.HeaderContainer>
    )
}

export default Header