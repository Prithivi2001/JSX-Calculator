import useLocalStorage from '../hooks/useLocalStorage'

function Calculator() {
  const [process, setProcess] = useLocalStorage('process', '')
  const [output, setOutput] = useLocalStorage('output', '')
  const [list, setList] = useLocalStorage('history', [])
  const arith = ['+', '-', '*', '/', '.']
  //const name = localStorage.getItem('username');
  const [name, setName] = useLocalStorage(
    'username',
    localStorage.getItem('username')
  )

  const newval = (value) => {
    if (
      (arith.includes(value) && process === '') ||
      (arith.includes(value) && arith.includes(process.slice(-1)))
    ) {
      return
    }

    setProcess(process + value)

    if (!arith.includes(value)) {
      setOutput(eval(process + value).toString())
    }
  }

  //function to create buttons for numbers to be added
  function numcheck() {
    const numdigits = []
    for (let n = 0; n < 10; n++) {
      numdigits.push(
        <button key={n} onClick={() => newval(n.toString())}>
          {n}
        </button>
      )
    }
    return numdigits
  }

  const getnum = () => {
    const listItem = { process, output }
    setList([...list, listItem])
    //console.log('Hello World')
    console.log(list)
    setProcess(eval(process).toString())
  }

  const deletenum = () => {
    if (process === '') {
      return
    }
    const value = process.slice(0, -1)
    setProcess(value)
  }

  return (
    <>
      <div align='center' className='pageHeader'>
        <h1>Welcome {name}</h1>

        <div className='history_section'>
          <h2>History</h2>
          <div className = 'history_items'>
            {list.map((item, idx) => (
            
              <li key={idx}><span>
              {item.process}={item.output}
              </span></li>
            
            ))}
          </div>
          <button className = "clear" onClick = {() => setList([])}>Clear</button>
          
        </div>
        <div className='Calculator'>
          <div className='calculator'>
            <div className='interface'>
              {output ? <span>({output})</span> : ''}
              {process || '0'}
            </div>

            <div className='arithops'>
              <button className='sum' onClick={() => newval('+')}>
                +
              </button>
              <button className='diff' onClick={() => newval('-')}>
                -
              </button>
              <button className='prod' onClick={() => newval('*')}>
                *
              </button>
              <button className='quo' onClick={() => newval('/')}>
                /
              </button>
              <button className='ce' onClick={deletenum}>
                CE
              </button>
            </div>

            <div className='nums'>
              {numcheck()}
              <button className='dec' onClick={() => newval('.')}>
                .
              </button>
              <button className='eq' onClick={getnum}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default Calculator