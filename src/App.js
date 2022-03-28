import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'

const App = () => {

  const [file, setFile] = useState('')

  const onClick = () => {
    console.log(file)

    const data = new FormData()
    data.append('file', file)
    axios.post('/test/upload', data)
      .then(res => {
        console.log(res)
      })
  }

  const onChange = (e) => {
    console.log(e.target)
    setFile(e.target.files[0])
  }


  useEffect(() => {
    console.log('hit on use effect')
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <input type='file' onChange={onChange}/>
        <button onClick={onClick}>test</button>
      </header>
    </div>
  );
}
export default App;
