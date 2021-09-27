import { useRecoilState } from 'recoil';
import { textInput } from '../state/characterCounter';


const TextInput = () => {
  console.log('recoil/components/TextInput');

  const [text, setText] = useRecoilState(textInput);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default TextInput;
