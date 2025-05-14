const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/generate-qr', async (req, res) =>{
  const generatePayload = require('promptpay-qr');
  const qrcode = require('qrcode');

  // Get request body
  const { id, amount } = req.body;
  console.log("PromptPay ID:", id, "Amount:", amount)

  try {
    // Generate QR payload
    const payload = generatePayload(id, { amount });

    console.log("Payload", payload)

    // Generate QR code as base64 image
    const qrImage = await new Promise((resolve, reject) => {
      qrcode.toDataURL(payload, (err, url) => {
        if (err) {
          return reject(err);
        }
        resolve(url);
      });
    });

    // Return response
    res.json({
      qrData: payload,
      imageUrl: qrImage
    });

  } catch (err) {
    res.status(400).json({ 
      error: err.message 
    });
  }
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});