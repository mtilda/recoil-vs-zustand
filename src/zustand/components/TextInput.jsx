import { useCharacterCounterStore } from '../state/characterCounter';


const TextInput = () => {
  console.log('zustand/components/TextInput');

  const { textInput, setTextInput } = useCharacterCounterStore();

  const onChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={textInput} onChange={onChange} />
      <br />
      Echo: {textInput}
    </div>
  );
}

export default TextInput;
