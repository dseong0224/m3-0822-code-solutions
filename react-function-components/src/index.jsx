import React from 'react';
import * as ReactDOM from 'react-dom/client';

function CustomButton() {
  return <button>Click me!</button>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton/>);
