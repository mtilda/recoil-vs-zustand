import { useRecoilValue } from 'recoil';
import { characterCount } from '../state/characterCounter';


const Count = () => {
  const count = useRecoilValue(characterCount);

  return <>Character Count: {count}</>;
}

export default Count;
