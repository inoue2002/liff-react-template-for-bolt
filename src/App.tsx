import './App.css';
import { useLiff } from './contexts/LiffProvider';

function App() {
  const { liff, error, isReady, login, profile, isLoggedIn } = useLiff();

  return (
    <div className="App">
      <h1>LIFF React Template!</h1>

      {isReady && isLoggedIn && profile && (
        <div className="user-profile">
          <h2>こんにちは、{profile.displayName}さん！</h2>
          {profile.pictureUrl && (
            <img
              src={profile.pictureUrl}
              alt={profile.displayName}
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
          )}
          {profile.statusMessage && <p style={{ fontStyle: 'italic' }}>{profile.statusMessage}</p>}
        </div>
      )}

      {!isReady && <p>Loading LIFF...</p>}
      
      {isReady && !isLoggedIn && (
        <div>
          <p>ログインが必要です</p>
          <button 
            onClick={() => login()}
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#06c755', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            LINEでログイン
          </button>
        </div>
      )}

      {error && (
        <p>
          <code>{error}</code>
        </p>
      )}
      <p>Environment: {liff && liff.isInClient() ? 'LIFF Client' : 'External Browser'}</p>
      <p>Status: {isReady ? 'Ready' : 'Loading'} | {isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
      <a href="https://developers.line.biz/ja/docs/liff/" target="_blank" rel="noreferrer">
        LIFF Documentation
      </a>
    </div>
  );
}

export default App;
