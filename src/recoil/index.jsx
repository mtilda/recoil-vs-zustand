import { RecoilRoot } from 'recoil';
import CharacterCounter from './components/CharacterCounter';


function App() {
  console.log('recoil/App');

  return (
    <section>
      <RecoilRoot>
        <h1>recoil</h1>
        <CharacterCounter />
      </RecoilRoot>
    </section>
  );
}

export default App;