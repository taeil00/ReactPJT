import React from 'react';
import { useState} from 'react';
import Info1 from './Info1';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
      <div>
        <button onClick ={ () => {
          setVisible(!visible);
        }}>
          {visible ? '숨기기' :'보이기'}
        </button>
        <hr/>
        {visible && <Info1 />}
      </div>
    )
};

export default App;
