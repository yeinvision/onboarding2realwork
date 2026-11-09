'use client';

import Link from 'next/link';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';

const cultureItems = [
  {
    icon: '🤝',
    title: '신뢰 기반 협력',
    description: '리얼워크는 팀원 간의 신뢰를 최우선으로 합니다. 각자의 역량을 믿고, 함께 성장합니다.',
    details: [
      '셀 기반의 자율적 팀 운영',
      '투명한 의사소통',
      '상호 존중과 신뢰',
    ],
  },
  {
    icon: '🚀',
    title: '빠른 실행과 학습',
    description: '완벽함보다 빠른 실행을 추구합니다. 실패에서 배우고 지속적으로 개선합니다.',
    details: [
      '비포-애프터 접근',
      '반복적인 개선',
      '용감한 도전',
    ],
  },
  {
    icon: '📚',
    title: '지속적인 성장',
    description: '리얼워크 팀원들은 프로젝트마다 새로운 것을 배웁니다. 학습의 기회는 무한합니다.',
    details: [
      '다양한 프로젝트 경험',
      '멘토링과 피드백',
      '자기 개발 지원',
    ],
  },
  {
    icon: '🎯',
    title: '고객 중심',
    description: '모든 일의 중심에는 고객 가치가 있습니다. 고객의 성공이 우리의 성공입니다.',
    details: [
      '고객 니즈 파악',
      '실제 가치 창출',
      '지속적인 관계 구축',
    ],
  },
  {
    icon: '🌟',
    title: '다양성 존중',
    description: '서로 다른 배경과 경험을 가진 팀원들이 함께 하는 것이 우리의 강점입니다.',
    details: [
      '개인의 개성 존중',
      '다양한 관점 수용',
      '포용적인 문화',
    ],
  },
  {
    icon: '💪',
    title: '오너십과 책임감',
    description: '각 팀원은 자신의 역할에 진정한 오너로서 책임감을 갖습니다.',
    details: [
      '주도적인 참여',
      '결과에 대한 책임',
      '성취감의 공유',
    ],
  },
];

export default function Culture() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
      <Header />
      <section style={{ background: 'var(--card)', padding: '20px 24px', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ margin: '0 0 8px 0', color: 'var(--ink)', fontSize: '24px', fontWeight: 700 }}>
            🌟 리얼워크 문화
          </h1>
          <p style={{ margin: 0, color: 'var(--muted)', fontSize: '14px' }}>
            리얼워크를 만드는 핵심 가치들을 만나보세요
          </p>
        </div>
      </section>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
        {/* 소개 섹션 */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--card2) 0%, var(--card) 100%)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius)',
            padding: '32px',
            marginBottom: '40px',
          }}
        >
          <h2 style={{ marginTop: 0, color: 'var(--accent)', fontSize: '22px', fontWeight: 700 }}>
            리얼워크의 정체성
          </h2>
          <p style={{ color: 'var(--ink)', fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}>
            리얼워크는 단순히 컨설팅 회사가 아닙니다. 우리는 <strong>조직의 변화와 성장을 함께하는 파트너</strong>입니다.
            <br />
            그리고 그 변화의 중심에는 <strong>신뢰, 학습, 성장</strong>이라는 가치가 있습니다.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.8', margin: 0 }}>
            리얼워크 팀원이 되신 여러분은 이제 이 미션의 일부입니다. 
            우리는 함께 고객의 성공을 만들고, 자신의 성장을 이루며, 
            의미 있는 일을 합니다.
          </p>
        </div>

        {/* 문화 카드 그리드 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          {cultureItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 212, 212, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--line)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
              <h3 style={{ margin: '0 0 8px 0', color: 'var(--ink)', fontSize: '18px', fontWeight: 700 }}>
                {item.title}
              </h3>
              <p style={{ margin: '0 0 16px 0', color: 'var(--muted)', fontSize: '14px', lineHeight: '1.6' }}>
                {item.description}
              </p>
              <ul
                style={{
                  margin: 0,
                  padding: '0 0 0 20px',
                  color: 'var(--faint)',
                  fontSize: '13px',
                  listStyle: 'disc',
                }}
              >
                {item.details.map((detail, i) => (
                  <li key={i} style={{ marginBottom: '4px', lineHeight: '1.5' }}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 셀 문화 섹션 */}
        <div
          style={{
            background: 'var(--card)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius)',
            padding: '32px',
            marginBottom: '40px',
          }}
        >
          <h2 style={{ marginTop: 0, color: 'var(--ink)', fontSize: '22px', fontWeight: 700, marginBottom: '20px' }}>
            🎯 리얼워크의 셀 구조
          </h2>

          <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: '1.8', marginBottom: '24px' }}>
            리얼워크는 <strong>6개의 셀(팀)</strong>로 구성되어 있으며, 각 셀은 자율적으로 운영됩니다.
            이것이 우리가 빠르게 움직일 수 있는 이유입니다.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px',
            }}
          >
            {[
              { name: '🎭 마비셀', desc: '리더십 & 전략 담당' },
              { name: '🎨 도미솔셀', desc: '디자인 & 미디어 담당' },
              { name: '💼 원픽셀', desc: '영업 & 수주 담당' },
              { name: '⚙️ 미리미리셀', desc: '프로젝트 기획 담당' },
              { name: '🚀 AtoZ셀', desc: '프로젝트 실행 담당' },
              { name: '💡 액셀', desc: '마케팅 & 성장 담당' },
            ].map((cell, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--card2)',
                  border: '1px solid var(--line)',
                  borderRadius: '8px',
                  padding: '16px',
                }}
              >
                <h4 style={{ margin: '0 0 4px 0', color: 'var(--accent)', fontSize: '15px', fontWeight: 700 }}>
                  {cell.name}
                </h4>
                <p style={{ margin: 0, color: 'var(--muted)', fontSize: '13px' }}>
                  {cell.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 신입 온보딩 안내 */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--accent-soft) 0%, rgba(0, 212, 212, 0.05) 100%)',
            border: '1px solid var(--accent)',
            borderRadius: 'var(--radius)',
            padding: '24px',
            marginBottom: '32px',
          }}
        >
          <h3 style={{ margin: '0 0 12px 0', color: 'var(--accent)', fontSize: '18px', fontWeight: 700 }}>
            ✨ 신입 여러분께
          </h3>
          <p style={{ margin: '0 0 16px 0', color: 'var(--ink)', fontSize: '14px', lineHeight: '1.8' }}>
            이 문화들은 단순히 말이 아닙니다. 매일 프로젝트에서, 팀원들과의 상호작용에서, 
            그리고 우리가 내리는 모든 결정에서 이 가치들이 드러납니다.
          </p>
          <p style={{ margin: 0, color: 'var(--muted)', fontSize: '14px', lineHeight: '1.8' }}>
            <strong>여러분의 성공은 우리의 성공입니다.</strong> 
            편하게 질문하고, 도움을 청하고, 자신의 아이디어를 제시하세요. 
            그것이 바로 리얼워크 문화입니다.
          </p>
        </div>

        {/* 뒤로가기 */}
        <div>
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
