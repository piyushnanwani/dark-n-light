import { useState, createContext } from 'react'
import { Layout } from './Layout';
import { Header } from './Header';

export const ThemeContext = createContext('light');

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={isDark? 'dark': 'light'}>
     <Layout>
      <Header/>
      <div className="settings">
        <input type="checkbox" id="dark-option"
        onChange={e => setIsDark(e.target.checked) }
        checked={isDark}
        />
        <label htmlFor="dark-option">Dark mode</label>
      </div>
     </Layout>
    </ThemeContext.Provider>
  )
}

export default App
