import { useCharacterCounterStore } from '../state/characterCounter';


const Count = () => {
  console.log('zustand/components/Count');

  const count = useCharacterCounterStore(state => state.textInput.length);

  return <>Character Count: {count}</>;
}

export default Count;
