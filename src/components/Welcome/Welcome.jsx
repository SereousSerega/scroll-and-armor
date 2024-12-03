import './Welcome.css'
import { useSelector } from 'react-redux';

function Welcome() {
    const value = useSelector((state) => state.example.value);


    return (
        <>
            <div className='main welcomepg'>
            <img className={'logo'} src="/public/images/logo_hd_transparent.webp" alt="logo" width={'400px'}/>
            <p className="paragraph">Hello everyone</p>
            <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sit ipsa aspernatur repudiandae <br/> excepturi rerum iusto sapiente repellat nostrum, ad placeat adipisci eius quas temporibus pariatur id iure impedit. Enim?</p>
            <a href="https://www.youtube.com/watch?v=vyg5jJrZ42s&t=54s&ab_channel=DaydreamingofPersephone">Music</a>
            <h1>Value: {value}</h1>
            </div>  
        </>
    )
}

export default Welcome