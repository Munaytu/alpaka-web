"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startBinancePolling = startBinancePolling;
const axios_1 = __importDefault(require("axios"));
const BINANCE_P2P_API_URL = 'https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search';
async function getBinanceP2PData(tradeType, asset, fiat, payTypes) {
    const requestBody = {
        proMerchantAds: false,
        page: 1,
        rows: 10,
        payTypes: payTypes,
        countries: [],
        publisherType: null,
        asset: asset,
        fiat: fiat,
        tradeType: tradeType,
    };
    console.log(`Fetching Binance P2P data for ${tradeType} ${asset}/${fiat} with payment types: ${payTypes.join(', ')}`);
    // console.log('Request Body:', requestBody); // Uncomment for debugging
    try {
        const response = await axios_1.default.post(BINANCE_P2P_API_URL, {
            proMerchantAds: false,
            page: 1,
            rows: 10,
            payTypes: payTypes,
            countries: [],
            publisherType: null,
            asset: asset,
            fiat: fiat,
            tradeType: tradeType,
        });
        if (response.data && response.data.data && response.data.data.length > 0) {
            console.log(`Successfully fetched Binance P2P ${tradeType} data.`);
            // console.log('Binance Data:', response.data.data[0]); // Log the first result for brevity
            return response.data;
        }
        else {
            console.log(`No Binance P2P ${tradeType} data found for the specified criteria.`);
            return undefined;
        }
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            console.error(`Error fetching Binance P2P ${tradeType} data:`, error.message);
            // console.error('Binance Error Details:', error.response?.data); // Log error response data if available
        }
        else {
            console.error(`An unexpected error occurred while fetching Binance P2P ${tradeType} data:`, error);
        }
        return undefined;
    }
}
async function startBinancePolling(sendDataToClients) {
    const pollingInterval = 30000; // 30 seconds
    setInterval(async () => {
        const buyData = await getBinanceP2PData('BUY', 'USDT', 'BOB', ['BankTransfer']);
        if (buyData)
            sendDataToClients({ source: 'binance', tradeType: 'BUY', data: buyData.data });
        const sellData = await getBinanceP2PData('SELL', 'USDT', 'BOB', ['BankTransfer']);
        if (sellData)
            sendDataToClients({ source: 'binance', tradeType: 'SELL', data: sellData.data });
    }, pollingInterval);
}
// Note: Polling logic will be handled in index.ts to integrate with WebSocket
// This file now just provides the data fetching function.
