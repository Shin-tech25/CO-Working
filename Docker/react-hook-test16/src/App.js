import logo from './logo.svg';
import './App.css';

// ReactからcreateContextとuseStateをimport
import React, { createContext, useState } from 'react';
import Context from './components/ContextSample/ContextA'

//createContextを使ってUserContextとHobbyContextを作成
export const UserContext = createContext()
export const HobbyContext = createContext()

function App() {
  // useStateを使ってuserを作成
  const [user, setUser] = useState({
    name: 'セイラ',
    age: '17'
  })
  // useStateを使ってhobbyを作成
  const [hobby, setHobby] = useState('キャンプ')

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <HobbyContext.Provider value={hobby}>
          <Context />
        </HobbyContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
