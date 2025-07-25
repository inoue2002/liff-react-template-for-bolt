import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import QRCode from 'qrcode';
import { useLiff } from '../contexts/LiffProvider';
export function MembershipCard() {
    const { profile } = useLiff();
    const barcodeRef = useRef(null);
    const qrCodeRef = useRef(null);
    useEffect(() => {
        if (profile?.userId && barcodeRef.current) {
            // バーコード生成
            JsBarcode(barcodeRef.current, profile.userId, {
                format: "CODE128",
                width: 2,
                height: 80,
                displayValue: true,
                fontSize: 14,
                margin: 10,
                background: "#ffffff",
                lineColor: "#000000"
            });
        }
    }, [profile?.userId]);
    useEffect(() => {
        if (profile?.userId && qrCodeRef.current) {
            // QRコード生成
            QRCode.toCanvas(qrCodeRef.current, profile.userId, {
                width: 120,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: '#ffffff'
                }
            }).catch(err => {
                console.error('QRコード生成エラー:', err);
            });
        }
    }, [profile?.userId]);
    if (!profile) {
        return (_jsx("div", { className: "flex justify-center items-center p-8", children: _jsx("div", { className: "text-gray-600", children: "\u4F1A\u54E1\u60C5\u5831\u3092\u8AAD\u307F\u8FBC\u307F\u4E2D..." }) }));
    }
    return (_jsxs("div", { className: "max-w-sm mx-auto", children: [_jsxs("div", { className: "bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-2xl overflow-hidden", children: [_jsxs("div", { className: "bg-white/10 backdrop-blur-sm p-4 text-center", children: [_jsx("h2", { className: "text-white text-xl font-bold mb-1", children: "\u4F1A\u54E1\u8A3C" }), _jsx("p", { className: "text-blue-100 text-sm", children: "MEMBERSHIP CARD" })] }), _jsxs("div", { className: "p-6 text-center", children: [_jsx("div", { className: "mb-4", children: _jsx("img", { src: profile.pictureUrl, alt: profile.displayName, className: "w-20 h-20 rounded-full mx-auto border-4 border-white/20 object-cover shadow-lg" }) }), _jsx("h3", { className: "text-white text-xl font-semibold mb-2", children: profile.displayName }), _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4", children: [_jsx("p", { className: "text-blue-100 text-xs mb-1", children: "\u4F1A\u54E1ID" }), _jsx("p", { className: "text-white font-mono text-sm break-all", children: profile.userId })] }), _jsx("div", { className: "bg-white rounded-lg p-3 mb-4", children: _jsx("svg", { ref: barcodeRef, className: "w-full" }) }), _jsx("div", { className: "bg-white rounded-lg p-3 flex justify-center", children: _jsx("canvas", { ref: qrCodeRef, className: "max-w-full" }) })] }), _jsx("div", { className: "bg-white/5 backdrop-blur-sm p-3 text-center", children: _jsxs("p", { className: "text-blue-100 text-xs", children: ["\u767A\u884C\u65E5: ", new Date().toLocaleDateString('ja-JP')] }) })] }), _jsxs("div", { className: "mt-6 bg-white rounded-lg shadow-sm p-4", children: [_jsxs("h4", { className: "text-gray-800 font-semibold mb-3 flex items-center", children: [_jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full mr-2" }), "\u4F7F\u7528\u65B9\u6CD5"] }), _jsxs("ul", { className: "text-gray-600 text-sm space-y-2", children: [_jsxs("li", { className: "flex items-start", children: [_jsx("span", { className: "text-blue-500 mr-2", children: "\u2022" }), "\u30D0\u30FC\u30B3\u30FC\u30C9\u307E\u305F\u306FQR\u30B3\u30FC\u30C9\u3092\u30B9\u30AD\u30E3\u30F3\u3057\u3066\u304F\u3060\u3055\u3044"] }), _jsxs("li", { className: "flex items-start", children: [_jsx("span", { className: "text-blue-500 mr-2", children: "\u2022" }), "\u4F1A\u54E1ID\u306F\u81EA\u52D5\u7684\u306B\u30E6\u30FC\u30B6\u30FCID\u304B\u3089\u751F\u6210\u3055\u308C\u307E\u3059"] }), _jsxs("li", { className: "flex items-start", children: [_jsx("span", { className: "text-blue-500 mr-2", children: "\u2022" }), "\u753B\u9762\u306E\u660E\u5EA6\u3092\u4E0A\u3052\u308B\u3068\u8AAD\u307F\u53D6\u308A\u3084\u3059\u304F\u306A\u308A\u307E\u3059"] })] })] })] }));
}
