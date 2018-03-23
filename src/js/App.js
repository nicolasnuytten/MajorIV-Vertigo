import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import Test from './Components/Test.jsx';  // eslint-disable-line

const init = () => {
  console.log(`hello world`);
  console.log(`hallo`);
  ReactDOM.render(<Test />, document.getElementById(`reactcontent`));
};


init();
