import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        return (_jsxs("div", { className: "min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-500 to-green-600 text-white", children: [_jsx("div", { className: "w-10 h-10 border-3 border-white/30 border-t-white rounded-full animate-spin mb-4" }), _jsx("p", { children: "Loading LIFF..." })] }));
    }
    if (!isLoggedIn) {
        return (_jsx("div", { className: "min-h-screen flex justify-center items-center bg-gradient-to-br from-green-500 to-green-600 p-4", children: _jsxs("div", { className: "bg-white p-8 rounded-xl shadow-2xl text-center max-w-sm w-full", children: [_jsx("h1", { className: "text-gray-800 mb-4 text-3xl font-semibold", children: "LIFF React Template" }), _jsx("p", { className: "text-gray-600 mb-8 leading-relaxed", children: "LINE\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u30ED\u30B0\u30A4\u30F3\u3057\u3066\u3054\u5229\u7528\u304F\u3060\u3055\u3044" }), _jsx("button", { className: "bg-green-500 hover:bg-green-600 text-white border-none px-6 py-3 rounded-lg text-base font-semibold cursor-pointer transition-colors w-full", onClick: () => login(), children: "LINE\u3067\u30ED\u30B0\u30A4\u30F3" })] }) }));
    }
    return (_jsx(Router, { children: _jsxs("div", { className: "min-h-screen flex flex-col bg-gray-50 pb-16", children: [_jsx(Header, {}), _jsx("main", { className: "flex-1", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(MainScreen, {}) }), _jsx(Route, { path: "/user", element: _jsx(UserScreen, {}) })] }) }), _jsx(Footer, {})] }) }));
}
export default App;
