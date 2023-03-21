
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDateTime] = useState('');
  const [description, setDescription] = useState('');
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/transaction';
    const price = name.split(' ')[0];
       fetch(url, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({name:name.substring(price.length+1),
      description,
      datetime})
   }).then(response => {
    response.json().then(json => {
      setName(' ')
      setDescription(' ')
      setDateTime(' ')
      console.log('result', json)
    })
   })
  }
  return (
   <main>
    <h1>$400<span>.00</span></h1>
    <form onSubmit={addNewTransaction}> 
      <div className="basic">
        <input type="text" 
        value={name}
        onChange={ev => setName(ev.target.value)}
        placeholder={`+200 new Tv`} />
      <input type="datetime-local"
      value={datetime}
      onChange={ev => setDateTime(ev.target.value)}
      />
      </div>
      <div className="description">
        <input
        value={description}
        onChange={ev => setDescription(ev.target.value)}
        type="text" placeholder={`description`} />
      </div>
      <button type="submit">Add new transactions</button>
    </form>
    <div className="transactions">
      <div className="transaction">
        <div className="left">
          <div className="name">
            New Tv
          </div>
          <div className='description'>
            It was time for a new tv
          </div>
        </div>
        <div className="right">
          <div className="price red">-$500</div>
          <div className="datetime">2022-12-18 15:45</div>
        </div>
      </div>

      <div className="transaction">
        <div className="left">
          <div className="name">
            Gig Job new website
          </div>
          <div className='description'>
            website created for local business
          </div>
        </div>
        <div className="right">
          <div className="price green">+$400</div>
          <div className="datetime">2022-12-18 15:45</div>
        </div>
      </div>

      <div className="transaction">
        <div className="left">
          <div className="name">
            IPhone
          </div>
          <div className='description'>
            New phone
          </div>
        </div>
        <div className="right">
          <div className="price red">-$800</div>
          <div className="datetime">2022-12-18 15:45</div>
        </div>
      </div>

     
    </div>
   </main>
  );
}

export default App;
