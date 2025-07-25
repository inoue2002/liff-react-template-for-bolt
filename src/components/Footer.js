import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, UserIcon } from '@heroicons/react/24/outline';
export function Footer() {
    const location = useLocation();
    return (_jsx("footer", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 z-10", children: _jsxs("nav", { className: "grid grid-cols-2 h-full", children: [_jsxs(Link, { to: "/", className: `flex flex-col items-center justify-center py-2 transition-colors ${location.pathname === '/'
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'}`, children: [_jsx(HomeIcon, { className: "w-6 h-6 mb-1" }), _jsx("span", { className: "text-xs font-medium", children: "\u30E1\u30A4\u30F3" })] }), _jsxs(Link, { to: "/user", className: `flex flex-col items-center justify-center py-2 transition-colors ${location.pathname === '/user'
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'}`, children: [_jsx(UserIcon, { className: "w-6 h-6 mb-1" }), _jsx("span", { className: "text-xs font-medium", children: "\u30E6\u30FC\u30B6\u30FC" })] })] }) }));
}
