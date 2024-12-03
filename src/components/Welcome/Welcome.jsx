import './Welcome.css'

function Welcome() {


    return (
        <>
            <div className='main welcomepg'>
            <img className={'logo'} src="/public/images/logo_hd_transparent.webp" alt="logo" width={'400px'}/>
            <p className="paragraph">Hello everyone</p>
            <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus sit ipsa aspernatur repudiandae <br/> excepturi rerum iusto sapiente repellat nostrum, ad placeat adipisci eius quas temporibus pariatur id iure impedit. Enim?</p>
            <a href="https://youtu.be/vyg5jJrZ42s?si=Cbw_CeiR0dCB_HLW">Music</a>
            </div>  
        </>
    )
}

export default Welcome