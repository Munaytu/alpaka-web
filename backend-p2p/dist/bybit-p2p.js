"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBybitP2PData = getBybitP2PData;
exports.startBybitPolling = startBybitPolling;
const axios_1 = __importDefault(require("axios"));
const BYBIT_P2P_API_URL = 'https://api.bybit.com/v5/asset/p2p/query-order'; // Corrected endpoint based on documentation review
const POLLING_INTERVAL = 30000; // Poll every 30 seconds
async function getBybitP2PData(side, coin, currency, payment, limit = 10) {
    try {
        const response = await axios_1.default.get(BYBIT_P2P_API_URL, {
            params: {
                side: side,
                coin: coin,
                currency: currency,
                payment: payment, // Assuming "BankTransfer" is the correct parameter value for Bybit
                limit: limit,
            }
        });
        console.log(`Fetched Bybit P2P data for ${side} ${coin}/${currency} (${payment})`);
        return response.data;
    }
    catch (error) {
        console.error(`Error fetching Bybit P2P data for ${side} ${coin}/${currency} (${payment}):`, error);
        // Depending on how you want to handle errors, you might rethrow or return a specific error object
        return null;
    }
}
async function startBybitPolling(sendDataToClients) {
    console.log('Starting Bybit P2P polling...');
    const coin = 'USDT';
    const currency = 'BOB';
    const payment = 'BankTransfer'; // Corrected payment parameter value
    try {
        const buyData = await getBybitP2PData('Buy', coin, currency, payment);
        if (buyData) {
            sendDataToClients({ source: 'bybit', type: 'buy', data: buyData });
        }
        const sellData = await getBybitP2PData('Sell', coin, currency, payment);
        if (sellData) {
            sendDataToClients({ source: 'bybit', type: 'sell', data: sellData });
        }
    }
    finally {
        setTimeout(() => startBybitPolling(sendDataToClients), POLLING_INTERVAL);
    }
}
