import { useLiff } from '../contexts/LiffProvider';
import './Header.css';

export function Header() {
  const { profile, isLoggedIn, isReady } = useLiff();

  if (!isReady || !isLoggedIn || !profile) {
    return null;
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="user-info">
          <img
            src={profile.pictureUrl}
            alt={profile.displayName}
            className="user-avatar"
          />
          <div className="user-details">
            <h2 className="user-name">{profile.displayName}</h2>
            {profile.statusMessage && (
              <p className="user-status">{profile.statusMessage}</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}