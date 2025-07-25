import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLiff } from '../contexts/LiffProvider';
import { MembershipCard } from './MembershipCard';
export function MainScreen() {
    const { liff, error } = useLiff();
    return (_jsx("div", { className: "flex-1 py-8", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [_jsxs("section", { className: "text-center mb-8", children: [_jsx("h1", { className: "text-gray-800 text-3xl mb-4 font-bold", children: "\u30C7\u30B8\u30BF\u30EB\u4F1A\u54E1\u8A3C" }), _jsx("p", { className: "text-gray-600 leading-relaxed", children: "\u3042\u306A\u305F\u5C02\u7528\u306E\u4F1A\u54E1\u8A3C\u3067\u3059" })] }), _jsx("section", { className: "mb-8 flex justify-center", children: _jsx(MembershipCard, {}) }), error && (_jsx("section", { className: "mb-8", children: _jsxs("div", { className: "bg-red-50 p-6 rounded-lg shadow-sm border-l-4 border-red-500", children: [_jsx("h3", { className: "text-gray-800 text-xl font-medium mb-4", children: "\u30A8\u30E9\u30FC" }), _jsx("code", { className: "bg-red-100 p-2 rounded font-mono text-sm text-red-700", children: error })] }) }))] }) }));
}
