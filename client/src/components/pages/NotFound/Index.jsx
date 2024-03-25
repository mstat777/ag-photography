import notfound from '../../../assets/img/404.png';

function NotFound(){
    return <main id="notFound">
                <img src={notfound} alt="The page was not found."/>
            </main>
}

export default NotFound;