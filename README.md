# PromptPay Generator Web

A web application for generating PromptPay QR codes for payments in Thailand. This project consists of a React frontend and an Express.js backend.

## Project Structure

```
.
├── promptpaygenerator-web/    # Frontend React application
└── promptpayserver/          # Backend Express.js server
```

## Features

- Generate PromptPay QR codes for payments
- Support for various payment types
- Real-time QR code generation
- Modern and responsive user interface

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd promptpaygenerator-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd promptpayserver
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Development

- Frontend runs on `http://localhost:5173` by default
- Backend runs on `http://localhost:3000` by default

## Building for Production

### Frontend

```bash
cd promptpaygenerator-web
npm run build
```

### Backend

```bash
cd promptpayserver
npm start
```

## Technologies Used

### Frontend
- React
- Vite
- ESLint

### Backend
- Express.js
- promptpay-qr
- qrcode
- cors
- dotenv
- express-rate-limit
