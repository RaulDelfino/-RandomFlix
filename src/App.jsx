import { useState } from 'react'
import '../index.css'
import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'







function App() {

  const [containerfilmes , setContainerFilme] = useState(false)

  const [filme, setFilme] = useState({})


  const onClick = () => {

    if(containerfilmes === false){
      setContainerFilme(true)
    }
    var index = Math.floor(Math.random() * 20)


    dataApi(index)

    
  }

  function dataApi(index){

    fetch(BASE_URL)
    .then(response => response.json())
    .then(data => setFilme(data.results[index]))

}
console.log(filme.backdrop_path)

  const NovoFilme = ()=> (
    <div className='novoFilme'>
      <h2>{filme.title}</h2>

      <div>
        <img src={IMG_URL + filme.backdrop_path}/>    
        <p>{ filme.overview }</p>
      </div>
    </div>
  )
  return (
    <div className='main'>
      <div className='header'>
        <img src='assets/shuffle.svg'/>
        <h1>Não sabe o que assistir?</h1>
      </div>



        {containerfilmes ? <NovoFilme/> : null}    

      <button onClick={onClick}><img src='assets/shuffle.svg'></img>Encontrar filme</button>

      <div className='footer'>
        <p>Clique em "Encontrar filme" que traremos informações <br/> de algum filme para você assistir hoje.</p>
      </div>
    </div>
  )

}

export default App
