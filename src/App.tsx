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
      } catch (e: unknown) {
        setMessage('LIFF init failed.');
        setError(`${e}`);
      }
    };

    initializeLiff();
  }, []);

  return (
    <div className="App">
      <h1>LIFF React Template!</h1>
      {message && <p>{message}</p>}
      {error && (
        <p>
          <code>{error}</code>
        </p>
      )}
      <p>Environment: {isInClient ? 'LIFF Client' : 'External Browser'}</p>
      <a href="https://developers.line.biz/ja/docs/liff/" target="_blank" rel="noreferrer">
        LIFF Documentation!
      </a>
    </div>
  );
}

export default App;
