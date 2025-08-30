import {Outlet, useNavigation} from 'react-router-dom'
import Loader from './Loader';
import NavBar from './NavBar'
import Footer from './Footer';


function AppLayout()
{
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading'

    console.log(navigation);

    return(
        <div className='layout'>
            {isLoading && <Loader/>}
            <NavBar/>
            <main>
                <Outlet/>
            </main>

            <Footer/>
        </div>
    )
}

export default AppLayout