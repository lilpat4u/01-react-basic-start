import { differences } from "../data";
import Button from "./Button/Button";
import { useState } from 'react';

export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null);

    function handleclick(type){
      setContentType(type);
  }
  
    return (
        <section>
        <h3>
          Чем мы отличаемся от других
        </h3>
        <Button isActive={contentType =='way'} buttonClicked={() => handleclick('way')}>Подход</Button>
        <Button isActive={contentType =='easy'} buttonClicked={() => handleclick('easy')}>Доступность</Button>
        <Button isActive={contentType =='program'} buttonClicked={() => handleclick('program')}>Концентрация</Button>
        {/* {contentType ? <p>{differences[contentType]}</p> : <p>Tap button</p>} */}
        {/* <p>{differences[contentType]}</p> */}

        {!contentType && <p>Tap button</p>}
        {contentType && <p>{differences[contentType]}</p>}
      </section>
    )
}