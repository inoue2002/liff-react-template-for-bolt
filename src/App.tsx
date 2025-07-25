import './App.css';
import { useLiff } from './contexts/LiffProvider';
import { Header } from './components/Header';

function App() {
  const { liff, error, isReady, login, isLoggedIn } = useLiff();

  if (!isReady) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="w-10 h-10 border-3 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
        <p>Loading LIFF...</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-500 to-green-600 p-4">
        <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-sm w-full">
          <h1 className="text-gray-800 mb-4 text-3xl font-semibold">LIFF React Template</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">LINEアカウントでログインしてご利用ください</p>
          <button 
            className="bg-green-500 hover:bg-green-600 text-white border-none px-6 py-3 rounded-lg text-base font-semibold cursor-pointer transition-colors w-full"
            onClick={() => login()}
          >
            LINEでログイン
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <section className="text-center mb-12">
            <h1 className="text-gray-800 text-4xl mb-4 font-bold">Welcome to LIFF App</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-2">これは汎用的なLIFFアプリのテンプレートです。</p>
            <p className="text-gray-600 text-lg leading-relaxed">ここにアプリの機能を追加してください。</p>
          </section>

          <section className="mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
              <h3 className="text-gray-800 text-xl font-medium mb-4">環境情報</h3>
              <p className="text-gray-600 my-2">Environment: {liff && liff.isInClient() ? 'LIFF Client' : 'External Browser'}</p>
              <p className="text-gray-600 my-2">Status: Ready & Logged In</p>
            </div>
          </section>

          {error && (
            <section className="mb-8">
              <div className="bg-red-50 p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                <h3 className="text-gray-800 text-xl font-medium mb-4">エラー</h3>
                <code className="bg-red-100 p-2 rounded font-mono text-sm text-red-700">{error}</code>
              </div>
            </section>
          )}

          <section className="text-center mt-12">
            <a 
              href="https://developers.line.biz/ja/docs/liff/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white no-underline rounded-lg font-semibold transition-colors"
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
