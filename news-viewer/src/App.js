import { useState} from 'react';
import axios from 'axios';

import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  const [data, setData] = useState(null);
  const newApiURL = "https://newsapi.org/v2/top-headlines?country=kr&apiKey=";
  const ApiKey = 'b385cdf4f3ce41968dfaaa04b9d83a65';

  const onClick = async () => {
    await axios.get(newApiURL + ApiKey).then(response => {
      setData(response.data);
    });
  };

  // return (
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>
  //     </div>
  //     {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
  //   </div>
  // );
  return (
    <>
    <Categories />
    <NewsList />;
    </>
  )

};

export default App;