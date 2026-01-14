import './App.css'

function App({text}) {

  return (
    <>
      <p style={{color: 'red'}}>
        {text.toUpperCase()}
      </p>
    </>
  )
}

App.defaultProps = {
  color: 'red',
}

export default App
