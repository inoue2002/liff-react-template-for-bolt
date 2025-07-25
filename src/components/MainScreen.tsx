import { useLiff } from '../contexts/LiffProvider';
import { MembershipCard } from './MembershipCard';

export function MainScreen() {
  const { liff, error } = useLiff();

  return (
    <div className="flex-1 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <section className="text-center mb-8">
          <h1 className="text-gray-800 text-3xl mb-4 font-bold">デジタル会員証</h1>
          <p className="text-gray-600 leading-relaxed">あなた専用の会員証です</p>
        </section>

        <section className="mb-8 flex justify-center">
          <MembershipCard />
        </section>

        {error && (
          <section className="mb-8">
            <div className="bg-red-50 p-6 rounded-lg shadow-sm border-l-4 border-red-500">
              <h3 className="text-gray-800 text-xl font-medium mb-4">エラー</h3>
              <code className="bg-red-100 p-2 rounded font-mono text-sm text-red-700">{error}</code>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}