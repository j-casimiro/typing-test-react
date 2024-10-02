import { generate } from 'random-words';
import { useMemo } from 'react';

const randomWords: string[] | string = generate(30);

function Words() {
  const formattedWords = useMemo(() => {
    return Array.isArray(randomWords) ? randomWords.join(' ') : randomWords;
  }, []);

  return (
    <div className="absolute flex justify-center mt-6 text-5xl text-center mx-52">
      <div>{formattedWords}</div>
    </div>
  );
}

export default Words;
