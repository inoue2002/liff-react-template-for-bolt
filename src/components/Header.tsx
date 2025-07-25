import { useLiff } from '../contexts/LiffProvider';

export function Header() {
  const { profile, isLoggedIn, isReady } = useLiff();

  if (!isReady || !isLoggedIn || !profile) {
    return null;
  }

  return (
    <header className="bg-gradient-to-r from-green-500 to-green-600 text-white py-4 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4">
          <img
            src={profile.pictureUrl}
            alt={profile.displayName}
            className="w-16 h-16 rounded-full border-3 border-white/20 object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-shadow-sm">{profile.displayName}</h2>
            {profile.statusMessage && (
              <p className="text-sm opacity-90 italic mt-1">{profile.statusMessage}</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}