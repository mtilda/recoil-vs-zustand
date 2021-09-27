import { useRecoilValue } from 'recoil';
import { characterCount } from '../state/characterCounter';


const Count = () => {
  console.log('recoil/components/Count');

  const count = useRecoilValue(characterCount);

  return <>Character Count: {count}</>;
}

export default Count;
