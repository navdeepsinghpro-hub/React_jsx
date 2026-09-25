import axios from 'axios'

const App = () => {

  const getdata = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

    console.log(response)

  }

  return (
    <div>
      <button onClick={getdata}>Get Data</button>
    </div>
  )
}

export default App