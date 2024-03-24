import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStudio from './studio/UserStudio';
import LessonStudio from './studio/LessonStudio';
export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStudio(),
    studio: new LessonStudio()
  }}>
 <App />
  </Context.Provider>
 
);


