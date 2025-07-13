"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const ws_1 = require("ws");
const PORT = 8080;
const wss = new ws_1.WebSocketServer({ port: PORT });
const clients = [];
wss.on('connection', (ws) => {
    console.log('WebSocket client connected');
    clients.push(ws);
    ws.on('close', () => {
        console.log('Client disconnected');
        clients.splice(clients.indexOf(ws), 1);
    });
});
console.log('Starting P2P price monitoring backend...');
const pollingInterval = 30000; // Poll every 30 seconds (adjust as needed)
// The polling functions should now accept the sendDataToClients callback
const sendDataToClients = (data) => {
    clients.forEach(client => {
        if (client.readyState === client.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
};
const CRIPTOYA_API_BASE_URL = 'https://criptoya.com/api';
async function pollCriptoYaData() {
    const volume = 0.1; // Hardcoded volume as per requirement
    const binanceUrl = `${CRIPTOYA_API_BASE_URL}/binancep2p/USDT/BOB/${volume}`;
    const bybitUrl = `${CRIPTOYA_API_BASE_URL}/bybitp2p/USDT/BOB/${volume}`;
    try {
        console.log('Fetching P2P data from CriptoYa...');
        const [binanceResponse, bybitResponse] = await Promise.all([
            axios_1.default.get(binanceUrl),
            axios_1.default.get(bybitUrl)
        ]);
        // Process Binance data
        if (binanceResponse.data && (binanceResponse.data.ask !== undefined || binanceResponse.data.bid !== undefined)) {
            console.log('Successfully fetched Binance P2P data.');
            sendDataToClients({ source: 'binance', data: { ask: binanceResponse.data.ask, bid: binanceResponse.data.bid } });
        }
        else {
            console.log('No Binance P2P data found for the specified criteria.');
        }
        // Process Bybit data
        if (bybitResponse.data && (bybitResponse.data.ask !== undefined || bybitResponse.data.bid !== undefined)) {
            console.log('Successfully fetched Bybit P2P data.');
            sendDataToClients({ source: 'bybit', data: { ask: bybitResponse.data.ask, bid: bybitResponse.data.bid } });
        }
        else {
            console.log('No Bybit P2P data found for the specified criteria.');
        }
    }
    catch (error) {
        console.error('Error fetching data from CriptoYa:', error.message);
    }
    finally {
        setTimeout(pollCriptoYaData, pollingInterval);
    }
}
pollCriptoYaData();
