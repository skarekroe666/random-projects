import React, { useState } from 'react'
import { data } from '../..';
import './Accordian.css'

const Accordian = () => {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([])

  const handleSingle = (id) => {
    setSelected(id === selected ? null : id);
  }

  const handleMultiple = (id) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(id);

    if (findIndexOfCurrentId === -1){
      cpyMultiple.push(id);
    }else(cpyMultiple.splice(findIndexOfCurrentId, 1))

    setMultiple(cpyMultiple)
  }

  console.log(selected, multiple);

  return (
    <div className='wrapper'>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multiselection</button>
      <div className='accordian'>
        {data ? data.map((item) => (
          <div className='items'>
            <div className='title' onClick={
                                  enableMultiSelection ? 
                                  () => handleMultiple(item.id) : 
                                  () => handleSingle(item.id)
              }>
              <h4>{item.question}</h4>
              <span>+</span>
            </div>
            {
              enableMultiSelection? 
                multiple.indexOf(item.id)!== -1 && 
                <div className='content'>{item.answer}</div> : 
                selected===item.id && <div className='content'>{item.answer}</div>
            }
          </div>
        )) : <div>Invalid</div>}
      </div>
    </div>
  )
}

export default Accordian