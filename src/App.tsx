import './App.css';
import { useLiff } from './contexts/LiffProvider';
import { Header } from './components/Header';

function App() {
  const { liff, error, isReady, login, isLoggedIn } = useLiff();

  if (!isReady) {
    return (
      <div className="app-loading">
        <div className="loading-spinner"></div>
        <p>Loading LIFF...</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="app-login">
        <div className="login-container">
          <h1>LIFF React Template</h1>
          <p>LINEアカウントでログインしてご利用ください</p>
          <button 
            className="login-button"
            onClick={() => login()}
          >
            LINEでログイン
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <section className="welcome-section">
            <h1>Welcome to LIFF App</h1>
            <p>これは汎用的なLIFFアプリのテンプレートです。</p>
            <p>ここにアプリの機能を追加してください。</p>
          </section>

          <section className="info-section">
            <div className="info-card">
              <h3>環境情報</h3>
              <p>Environment: {liff && liff.isInClient() ? 'LIFF Client' : 'External Browser'}</p>
              <p>Status: Ready & Logged In</p>
            </div>
          </section>

          {error && (
            <section className="error-section">
              <div className="error-card">
                <h3>エラー</h3>
                <code>{error}</code>
              </div>
            </section>
          )}

          <section className="links-section">
            <a 
              href="https://developers.line.biz/ja/docs/liff/" 
              target="_blank" 
              rel="noreferrer"
              className="doc-link"
            >
              LIFF Documentation
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
