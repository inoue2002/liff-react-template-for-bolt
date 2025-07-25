import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import QRCode from 'qrcode';
import { useLiff } from '../contexts/LiffProvider';

export function MembershipCard() {
  const { profile } = useLiff();
  const barcodeRef = useRef<SVGSVGElement>(null);
  const qrCodeRef = useRef<HTMLCanvasElement>(null);

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
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-gray-600">会員情報を読み込み中...</div>
      </div>
    );
  }

  return (
    <div className="max-w-sm mx-auto">
      {/* 会員証カード */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-2xl overflow-hidden">
        {/* カードヘッダー */}
        <div className="bg-white/10 backdrop-blur-sm p-4 text-center">
          <h2 className="text-white text-xl font-bold mb-1">会員証</h2>
          <p className="text-blue-100 text-sm">MEMBERSHIP CARD</p>
        </div>

        {/* プロフィール情報 */}
        <div className="p-6 text-center">
          <div className="mb-4">
            <img
              src={profile.pictureUrl}
              alt={profile.displayName}
              className="w-20 h-20 rounded-full mx-auto border-4 border-white/20 object-cover shadow-lg"
            />
          </div>
          
          <h3 className="text-white text-xl font-semibold mb-2">
            {profile.displayName}
          </h3>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4">
            <p className="text-blue-100 text-xs mb-1">会員ID</p>
            <p className="text-white font-mono text-sm break-all">
              {profile.userId}
            </p>
          </div>

          {/* バーコード */}
          <div className="bg-white rounded-lg p-3 mb-4">
            <svg ref={barcodeRef} className="w-full"></svg>
          </div>

          {/* QRコード */}
          <div className="bg-white rounded-lg p-3 flex justify-center">
            <canvas ref={qrCodeRef} className="max-w-full"></canvas>
          </div>
        </div>

        {/* カードフッター */}
        <div className="bg-white/5 backdrop-blur-sm p-3 text-center">
          <p className="text-blue-100 text-xs">
            発行日: {new Date().toLocaleDateString('ja-JP')}
          </p>
        </div>
      </div>

      {/* 使用方法 */}
      <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
        <h4 className="text-gray-800 font-semibold mb-3 flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          使用方法
        </h4>
        <ul className="text-gray-600 text-sm space-y-2">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            バーコードまたはQRコードをスキャンしてください
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            会員IDは自動的にユーザーIDから生成されます
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            画面の明度を上げると読み取りやすくなります
          </li>
        </ul>
      </div>
    </div>
  );
}