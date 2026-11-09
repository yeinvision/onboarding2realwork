'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { JSX } from 'react';

const navigation = [
  { name: '홈', href: '/', icon: 'home' },
  { name: 'Stage 1', href: '/stage-1', icon: 'start' },
  { name: 'Stage 2', href: '/stage-2', icon: 'target' },
  { name: 'Stage 3', href: '/stage-3', icon: 'flag' },
  { name: 'FAQ', href: '/faq', icon: 'help' },
  { name: '용어사전', href: '/glossary', icon: 'book' },
  { name: '팀 소개', href: '/team', icon: 'people' },
  { name: '리얼워크 문화', href: '/culture', icon: 'star' },
  { name: '온보딩 준비', href: '/onboarding-prep', icon: 'celebrate' },
];

function SVGIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    home: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    start: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20"></path>
      </svg>
    ),
    target: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
    flag: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 5-1 5 2 10 0V4s-1 1-5 1-5-2-10 0"></path>
        <path d="M4 22v-7"></path>
      </svg>
    ),
    help: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4M12 8h.01"></path>
      </svg>
    ),
    book: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
    people: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 10.26 23.77 11.27 17.88 17.14 19.54 25.98 12 21.77 4.46 25.98 6.12 17.14 0.22 11.27 8.9 10.26 12 2"></polygon>
      </svg>
    ),
    celebrate: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
        <line x1="12" y1="12" x2="20" y2="7.5"></line>
        <line x1="12" y1="12" x2="12" y2="21"></line>
        <line x1="12" y1="12" x2="4" y2="7.5"></line>
      </svg>
    ),
  };

  return icons[name] || null;
}

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // 메뉴가 열려 있을 때 Esc 키로 닫기
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <>
      <button
        className="menu-btn"
        onClick={toggleSidebar}
        aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={isOpen}
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <aside className={`side ${isOpen ? 'open' : ''}`}>
        <div className="brand">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
            <Image 
              src="/realwork-logo.png" 
              alt="RealWork 로고" 
              width={216}
              height={78}
              priority
            />
          </div>
          <div className="title">🚀 RealWork</div>
          <div className="subtitle">셀프 온보딩</div>
        </div>

        <nav className="nav">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setIsOpen(false)}
            >
              <SVGIcon name={item.icon} />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        <div style={{ flex: 1 }}></div>

        <div className="text-faint" style={{ fontSize: '12px', padding: '0 8px' }}>
          <p style={{ margin: '0 0 8px 0' }}>RealWork 신입 온보딩 플랫폼</p>
          <p style={{ margin: 0 }}>2024 © RealWork</p>
        </div>
      </aside>

      {isOpen && (
        <div
          className="side-overlay"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
