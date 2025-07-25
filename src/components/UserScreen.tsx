import { useLiff } from '../contexts/LiffProvider';

export function UserScreen() {
  const { profile } = useLiff();

  if (!profile) {
    return (
      <div className="flex-1 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600">プロフィール情報を読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <section className="text-center">
          <h1 className="text-gray-800 text-3xl mb-6 font-bold">ユーザー情報</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-md mx-auto">
            <img
              src={profile.pictureUrl}
              alt={profile.displayName}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-500 object-cover"
            />
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {profile.displayName}
            </h2>
            
            <p className="text-gray-600 mb-2">
              User ID: <code className="bg-gray-100 px-2 py-1 rounded text-sm">{profile.userId}</code>
            </p>
            
            {profile.statusMessage && (
              <p className="text-gray-600 italic">
                "{profile.statusMessage}"
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}