import { FC } from 'react';
import IText from '../types/Text';
import CopiedText from './CopiedText';

interface Props {
  textArray: Array<IText>;
}

const TextList: FC<Props> = ({ textArray }) => {
  return (
    <div className='copied-text'>
      {textArray.map((text, index) => (
        <CopiedText key={index} text={text} />
      ))}
    </div>
  );
};
export default TextList;
