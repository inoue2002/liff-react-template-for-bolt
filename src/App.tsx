import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLiff } from './contexts/LiffProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainScreen } from './components/MainScreen';
import { UserScreen } from './components/UserScreen';

function App() {
  const { isReady, login, isLoggedIn } = useLiff();

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
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 pb-16">
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/user" element={<UserScreen />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
