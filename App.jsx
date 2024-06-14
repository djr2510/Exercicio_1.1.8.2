import { personagens } from "./Personagens";

function App() {
  const Personagens_Redfield = personagens.filter(personagen =>
    personagen.nome.includes('Redfield')
  );
  return (
    <div>
      <h1>Personagens Redfield</h1>
      <ul>
        {
          Personagens_Redfield.map(personagen => {
            return (
              <div>
                <h4>{personagen.nome}</h4>
                <img src={personagen.url.toString()}/>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App;
