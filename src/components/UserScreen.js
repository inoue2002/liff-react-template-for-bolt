import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLiff } from '../contexts/LiffProvider';
export function UserScreen() {
    const { profile } = useLiff();
    if (!profile) {
        return (_jsx("div", { className: "flex-1 py-8", children: _jsx("div", { className: "max-w-6xl mx-auto px-4 text-center", children: _jsx("p", { className: "text-gray-600", children: "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u60C5\u5831\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D..." }) }) }));
    }
    return (_jsx("div", { className: "flex-1 py-8", children: _jsx("div", { className: "max-w-6xl mx-auto px-4", children: _jsxs("section", { className: "text-center", children: [_jsx("h1", { className: "text-gray-800 text-3xl mb-6 font-bold", children: "\u30E6\u30FC\u30B6\u30FC\u60C5\u5831" }), _jsxs("div", { className: "bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto", children: [_jsx("img", { src: profile.pictureUrl, alt: profile.displayName, className: "w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-500 object-cover" }), _jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-2", children: profile.displayName }), _jsxs("p", { className: "text-gray-600 mb-2", children: ["User ID: ", _jsx("code", { className: "bg-gray-100 px-2 py-1 rounded text-sm", children: profile.userId })] }), profile.statusMessage && (_jsxs("p", { className: "text-gray-600 italic", children: ["\"", profile.statusMessage, "\""] }))] })] }) }) }));
}
