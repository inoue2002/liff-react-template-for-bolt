import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import liff from '@line/liff';
import './App.css';
function App() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    useEffect(() => {
        liff
            .init({
            liffId: import.meta.env.VITE_LIFF_ID || ''
        })
            .then(() => {
            setMessage('LIFF init succeeded.');
        })
            .catch((e) => {
            setMessage('LIFF init failed.');
            setError(`${e}`);
        });
    }, []);
    return (_jsxs("div", { className: "App", children: [_jsx("h1", { children: "LIFF React Template" }), message && _jsx("p", { children: message }), error && (_jsx("p", { children: _jsx("code", { children: error }) })), _jsx("a", { href: "https://developers.line.biz/ja/docs/liff/", target: "_blank", rel: "noreferrer", children: "LIFF Documentation" })] }));
}
export default App;
