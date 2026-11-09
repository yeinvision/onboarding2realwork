'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';

interface OnboardingData {
  newbieeName: string;
  mentorName: string;
  startDate: string;
  department: string;
  role: string;
  notes: string;
}

export default function OnboardingPrep() {
  const [data, setData] = useState<OnboardingData>({
    newbieeName: '',
    mentorName: '',
    startDate: '',
    department: '',
    role: '',
    notes: '',
  });

  const [saved, setSaved] = useState(false);
  const [newbieeName, setNewbieeName] = useState('');

  // 페이지 로드 시 저장된 데이터 복원
  useEffect(() => {
    const savedData = localStorage.getItem('onboarding-prep');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setData(parsedData);
      setNewbieeName(parsedData.newbieeName);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem('onboarding-prep', JSON.stringify(data));
    setNewbieeName(data.newbieeName);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    localStorage.removeItem('onboarding-prep');
    setData({
      newbieeName: '',
      mentorName: '',
      startDate: '',
      department: '',
      role: '',
      notes: '',
    });
    setNewbieeName('');
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
      <Header />
      <section style={{ background: 'var(--card)', padding: '20px 24px', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ margin: '0 0 8px 0', color: 'var(--ink)', fontSize: '24px', fontWeight: 700 }}>
            🎉 온보딩 준비하기
          </h1>
          <p style={{ margin: 0, color: 'var(--muted)', fontSize: '14px' }}>
            선임이 신입 멤버의 정보를 미리 준비하세요
          </p>
        </div>
      </section>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'start' }}>
          {/* 입력 폼 */}
          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              padding: '24px',
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: '20px', color: 'var(--ink)', fontSize: '18px' }}>
              신입 정보 입력
            </h2>

            <div style={{ display: 'grid', gap: '16px' }}>
              {/* 신입 이름 */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
                  신입 이름 *
                </label>
                <input
                  type="text"
                  name="newbieeName"
                  value={data.newbieeName}
                  onChange={handleChange}
                  placeholder="예: 이안"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'var(--card2)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    color: 'var(--ink)',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* 선임 이름 */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
                  선임 이름
                </label>
                <input
                  type="text"
                  name="mentorName"
                  value={data.mentorName}
                  onChange={handleChange}
                  placeholder="예: 줄리"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'var(--card2)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    color: 'var(--ink)',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* 입사일 */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
                  입사일
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={data.startDate}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'var(--card2)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    color: 'var(--ink)',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* 부서 */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
                  부서
                </label>
                <select
                  name="department"
                  value={data.department}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'var(--card2)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    color: 'var(--ink)',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="">선택하세요</option>
                  <option value="퍼실리테이션">퍼실리테이션</option>
                  <option value="컨설팅">컨설팅</option>
                  <option value="미디어">미디어</option>
                  <option value="신사업">신사업</option>
                </select>
              </div>

              {/* 직책 */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
                  직책
                </label>
                <input
                  type="text"
                  name="role"
                  value={data.role}
                  onChange={handleChange}
                  placeholder="예: 컨설턴트"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'var(--card2)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    color: 'var(--ink)',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* 선임의 한마디 */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', color: 'var(--muted)', fontSize: '13px', fontWeight: 600 }}>
                  선임의 한마디 (메모)
                </label>
                <textarea
                  name="notes"
                  value={data.notes}
                  onChange={handleChange}
                  placeholder="신입 멤버에게 해주고 싶은 말, 역할 소개, 첫 프로젝트 안내 등..."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'var(--card2)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    color: 'var(--ink)',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                    minHeight: '100px',
                    resize: 'vertical',
                  }}
                />
              </div>

              {/* 버튼 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '12px' }}>
                <button
                  onClick={handleSave}
                  style={{
                    padding: '12px 16px',
                    background: 'var(--accent)',
                    color: '#000',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  {saved ? '✅ 저장됨' : '💾 저장하기'}
                </button>
                <button
                  onClick={handleReset}
                  style={{
                    padding: '12px 16px',
                    background: 'var(--card2)',
                    color: 'var(--muted)',
                    border: '1px solid var(--line)',
                    borderRadius: '6px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  🔄 초기화
                </button>
              </div>
            </div>
          </div>

          {/* 미리보기 */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--card2) 0%, var(--card) 100%)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              padding: '40px 24px',
              textAlign: 'center',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ marginBottom: '24px', fontSize: '48px' }}>👋</div>

            {newbieeName ? (
              <>
                <h2 style={{ margin: '0 0 8px 0', color: 'var(--accent)', fontSize: '28px', fontWeight: 700 }}>
                  {newbieeName}님
                </h2>
                <p style={{ margin: '0 0 16px 0', color: 'var(--ink)', fontSize: '16px', fontWeight: 500 }}>
                  RealWork에 오신 것을 환영합니다! 🎉
                </p>

                {data.mentorName && (
                  <div
                    style={{
                      marginTop: '20px',
                      paddingTop: '20px',
                      borderTop: '1px solid var(--line)',
                    }}
                  >
                    <p style={{ margin: '0 0 8px 0', color: 'var(--muted)', fontSize: '12px' }}>선임:</p>
                    <p style={{ margin: 0, color: 'var(--ink)', fontSize: '14px', fontWeight: 600 }}>
                      {data.mentorName}
                    </p>
                  </div>
                )}

                {data.notes && (
                  <div
                    style={{
                      marginTop: '20px',
                      paddingTop: '20px',
                      borderTop: '1px solid var(--line)',
                      textAlign: 'left',
                      width: '100%',
                    }}
                  >
                    <p style={{ margin: '0 0 8px 0', color: 'var(--muted)', fontSize: '12px' }}>선임의 한마디:</p>
                    <p
                      style={{
                        margin: 0,
                        color: 'var(--ink)',
                        fontSize: '13px',
                        lineHeight: '1.6',
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                      {data.notes}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <>
                <h2 style={{ margin: '0 0 16px 0', color: 'var(--muted)', fontSize: '18px' }}>
                  신입 이름을 입력하면 미리보기가 나타납니다
                </h2>
                <p style={{ margin: 0, color: 'var(--faint)', fontSize: '13px' }}>
                  좌측에서 신입 정보를 입력한 후 저장해주세요.
                </p>
              </>
            )}
          </div>
        </div>

        {/* 안내 메시지 */}
        <div
          style={{
            marginTop: '32px',
            padding: '16px',
            background: 'var(--accent-soft)',
            border: '1px solid var(--accent)',
            borderRadius: '8px',
            color: 'var(--ink)',
          }}
        >
          <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>
            💡 <strong>팁:</strong> 이 정보는 브라우저에 저장되며, 신입이 온보딩을 시작할 때 개인화된 인사말을 보게 됩니다. 
            정보를 저장한 후 신입에게 이 페이지의 링크를 공유하세요!
          </p>
        </div>

        {/* 뒤로가기 */}
        <div style={{ marginTop: '24px' }}>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '8px 12px',
              color: 'var(--accent)',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 600,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            ← 홈으로 돌아가기
          </Link>
        </div>
      </main>
      </div>
    </div>
  );
}
