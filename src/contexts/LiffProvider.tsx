import liff, { type Liff } from '@line/liff';
import { LiffMockPlugin } from '@line/liff-mock';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Profile型定義
type Profile = {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
};

type LiffContextType = {
  liff: Liff | null;
  error: string | null;
  isReady: boolean;
  login: (redirectUri?: string) => void;
  profile: Profile | null;
  isLoggedIn: boolean;
  setMockProfile: (profile: Partial<Profile>) => void;
};

const LiffContext = createContext<LiffContextType>({
  liff: null,
  error: null,
  isReady: false,
  login: () => {},
  profile: null,
  isLoggedIn: false,
  setMockProfile: () => {},
});

export const useLiff = () => useContext(LiffContext);

export function LiffProvider({ children }: { children: ReactNode }) {
  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const setMockProfile = (mockProfile: Partial<Profile>) => {
    if (liffObject && import.meta.env.DEV && import.meta.env.VITE_USE_LIFF_MOCK === 'true') {
      // 画像が指定されていない場合はデフォルト画像を設定
      const profileWithDefaultImage = {
        ...profile,
        ...mockProfile,
        pictureUrl: mockProfile.pictureUrl || profile?.pictureUrl || '/vite.svg'
      };
      
      // @ts-ignore
      liffObject.$mock.set((prev) => ({
        ...prev,
        getProfile: profileWithDefaultImage,
      }));
      setProfile(profileWithDefaultImage as Profile);
    }
  };

  // ログイン関数
  const login = (redirectUri?: string) => {
    if (!liffObject) return;

    try {
      liffObject.login({ redirectUri: redirectUri || window.location.href });
    } catch (err) {
      setError(err instanceof Error ? err.message : '不明なログインエラーが発生しました');
    }
  };

  useEffect(() => {
    const initLiff = async () => {
      try {
        const liffId = import.meta.env.VITE_LIFF_ID;
        const useMock = import.meta.env.VITE_USE_LIFF_MOCK === 'true';
        
        if (!liffId) {
          throw new Error('LIFF IDが設定されていません');
        }

        if (useMock && import.meta.env.DEV) {
          liff.use(new LiffMockPlugin());
        }

        await liff.init({
          liffId,
          // @ts-ignore
          mock: useMock && import.meta.env.DEV,
        });

        setLiffObject(liff);

        if (import.meta.env.DEV && useMock) {
          const redirectUri = window.location.href;

          if (!liff.isLoggedIn())
            liff.login({
              redirectUri,
            });

          try {
            const profileData = await liff.getProfile();
            // デフォルトでReactのロゴを設定
            const profileWithImage = {
              ...profileData,
              pictureUrl: profileData.pictureUrl || '/vite.svg'
            };
            setProfile(profileWithImage);
            setIsLoggedIn(true);
            setIsReady(true);
          } catch (profileErr) {
            setError(`Mock プロフィール取得エラー: ${profileErr}`);
            setIsReady(true);
          }
          return;
        }

        liff.ready.then(async () => {
          setIsReady(true);

          const loggedIn = liff.isLoggedIn();
          setIsLoggedIn(loggedIn);

          if (loggedIn) {
            try {
              const profileData = await liff.getProfile();
              setProfile(profileData);
            } catch (profileErr) {
              // エラーは無視
            }
          }
        }).catch((readyErr) => {
          setError(`liff.ready エラー: ${readyErr}`);
          setIsReady(true);
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : '不明なエラーが発生しました');
        setLiffObject(null);
        setIsReady(true);
      }
    };

    initLiff();
  }, []);

  // コンテキスト値
  const contextValue: LiffContextType = {
    liff: liffObject,
    error,
    isReady,
    login,
    profile,
    isLoggedIn,
    setMockProfile,
  };

  return <LiffContext.Provider value={contextValue}>{children}</LiffContext.Provider>;
}