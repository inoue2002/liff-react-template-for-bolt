import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import liff from '@line/liff';
import { useEffect, useState } from 'react';
import './App.css';
function App() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isInClient, setIsInClient] = useState(false);
    useEffect(() => {
        const initializeLiff = async () => {
            const liffId = import.meta.env.VITE_LIFF_ID || '';
            const useMock = import.meta.env.VITE_USE_LIFF_MOCK === 'true';
            // Development環境でMockを使用する場合
            if (useMock && import.meta.env.DEV) {
                const { LiffMockPlugin } = await import('@line/liff-mock');
                liff.use(new LiffMockPlugin());
                setMessage('LIFF Mock mode enabled.');
            }
            try {
                await liff.init({
                    liffId,
                    // @ts-ignore
                    mock: useMock && import.meta.env.DEV,
                });
                setMessage(`LIFF init succeeded${useMock && import.meta.env.DEV ? ' (Mock mode)' : ''}.`);
                setIsInClient(liff.isInClient());
            }
            catch (e) {
                setMessage('LIFF init failed.');
                setError(`${e}`);
            }
        };
        initializeLiff();
    }, []);
    return (_jsxs("div", { className: "App", children: [_jsx("h1", { children: "LIFF React Template!" }), message && _jsx("p", { children: message }), error && (_jsx("p", { children: _jsx("code", { children: error }) })), _jsxs("p", { children: ["Environment: ", isInClient ? 'LIFF Client' : 'External Browser'] }), _jsx("a", { href: "https://developers.line.biz/ja/docs/liff/", target: "_blank", rel: "noreferrer", children: "LIFF Documentation!" })] }));
}
export default App;
