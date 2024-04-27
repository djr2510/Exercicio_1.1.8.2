import { personagens } from "./Personagens";

function App() {
  return (
    <div>
      <h1>Personagens Readfield</h1>
      <ul>
        {
          personagens.filter(personagen => {
            return <h1 nome={personagen.nome} url={personagen.url} />
          })
        }
      </ul>
    </div>
  )
}

export default App;
