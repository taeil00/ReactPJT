import React from 'react';
import { useState} from 'react';
import Info1 from './Info1';
import Info2 from './Info2';
import Counter2 from './Counter2';

const App = () => {
  // const [visible, setVisible] = useState(false);

  // return (
  //     <div>
  //       <button onClick ={ () => {
  //         setVisible(!visible);
  //       }}>
  //         {visible ? '숨기기' :'보이기'}
  //       </button>
  //       <hr/>
  //       {visible && <Info1 />}
  //     </div>
  //   )
  
  //return <Counter2 />
  return <Info2 />
};

export default App;
