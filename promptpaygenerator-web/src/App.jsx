import { useState } from 'react'
import reactLogo from './assets/react.svg'
import promptpayLogo from './assets/icon-thaiqr.png'
import './App.css'

function App() {
  const [promptpayId, setPromptpayId] = useState('');
  const [Amount, setAmount] = useState('');
  const [genrate, setgenerate] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.bot.or.th/th/financial-innovation/digital-finance/digital-payment/promptpay.html" target="_blank">
          <img src={promptpayLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Promptpay Generator</h1>
      <div className="card">
        <h3>Enter Promptpay ID</h3>
        <input
          type="text"
          placeholder="Phone number or National ID"
          value={promptpayId}
          onChange={(e) => setPromptpayId(e.target.value)}
          className='Input'
        />
        <h3>Amount (THB)</h3>
        <input
          type="text"
          placeholder="THB"
          value={Amount}
          onChange={(e) => setAmount(e.target.value)}
          className='Input'
        />
      </div>
      <button>
        Generate
      </button>
    </>
  )
}

export default App
