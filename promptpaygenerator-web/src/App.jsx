import { useState } from 'react'
import promptpayLogo from './assets/icon-thaiqr.png'
import './App.css'

function App() {
  const [promptpayId, setPromptpayId] = useState('');
  const [Amount, setAmount] = useState('');
  const [qrCodeImageUrl, setQrCodeImageUrl] = useState('');
  const [idError, setIdError] = useState('');
  const apiUrl = import.meta.env.VITE_SERVER_API_URL || '';

  console.log(apiUrl);

  const handleGenerateQr = async () => {
    const payload = { id: promptpayId };
    if (Amount && !isNaN(parseFloat(Amount))) {
      payload.amount = parseFloat(Amount);
    }

    try {
      const response = await fetch(`${apiUrl}/generate-qr`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('QR code generated:', data);
      setQrCodeImageUrl(data.imageUrl);
    } catch (error) {
      console.error('Error generating QR code:', error);
      setQrCodeImageUrl('');
    }
  };

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
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, ''); // Only allow digits
            // Validate: 10-digit phone starting with 0 or 13-digit national ID
            if (value.length === 0) {
              setPromptpayId('');
              setIdError('');
            } else if ((value.length === 10 && value.startsWith('0')) || value.length === 13) {
              setPromptpayId(value);
              setIdError('');
            } else {
              setPromptpayId(value);
              setIdError('Promptpay ID must be a 10-digit phone number starting with 0 or a 13-digit national ID');
            }
          }}
          className='Input'
        />
        {idError && <div style={{ color: 'red', fontSize: '0.9em' }}>{idError}</div>}
        <h3>Amount (THB)</h3>
        <input
          type="text"
          placeholder="THB"
          value={Amount}
          onChange={(e) => setAmount(e.target.value)}
          className='Input'
        />
      </div>
      <button className='button' onClick={handleGenerateQr} disabled={!!idError || !promptpayId}>
        Generate
      </button>
      {qrCodeImageUrl && (
        <div className="qr-code-container">
          <h3>Your Promptpay QR</h3>
          <img src={qrCodeImageUrl} alt="PromptPay QR Code" />
        </div>
      )}
    </>
  )
}

export default App
