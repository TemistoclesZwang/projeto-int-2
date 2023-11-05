import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'qrcode.react';

export function GenQrCode() {
    return (
        <QRCode value="https://reactjs.org/" bgColor='rgb(231, 231, 201)' 
            fgColor='rgb(21, 39, 33)'/>
    );
}

