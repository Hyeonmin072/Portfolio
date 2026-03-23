/**
 * 포트폴리오에 표시할 프로젝트 목록
 * isTeam: true → 대학 팀 프로젝트 배지 표시
 */
export const PROJECTS = [
  {
    id: 1,
    title: 'Hairism — 헤어살롱 예약 플랫폼',
    description:
      '헤어살롱 검색, 디자이너 프로필·예약·결제·리뷰를 통합한 풀스택 웹 서비스. Figma 화면 설계부터 프론트엔드 전반 구현, ERD 설계, 팀장 역할을 담당했습니다.',
    tags: ['React', 'Spring Boot', 'MySQL', 'Redis', 'AWS', 'WebSocket', 'OAuth2', 'Figma'],
    codeUrl: 'https://github.com/Hyeonmin072/CSPT1_F',
    backendUrl: 'https://github.com/Hyeonmin072/CSPT1_B',
    isTeam: true,
    role: 'Frontend 전반 / 팀장',
    period: '2025.01 ~ 2025.06',
  },
  {
    id: 2,
    title: 'GameSnap — 게임 소셜 플랫폼',
    description:
      '게이머를 위한 소셜 커뮤니티 플랫폼. 사용자 친화적 UI/UX 설계·구현, ERD 설계, AWS EC2 배포 및 발표를 주도했습니다.',
    tags: ['React', 'Spring Boot', 'Java', 'MySQL', 'AWS EC2', 'Figma'],
    codeUrl: 'https://github.com/Hyeonmin072/projectT1',
    isTeam: true,
    role: 'Frontend / 기획 · ERD 설계',
    period: '2024.08 ~ 2024.11',
  },
  {
    id: 3,
    title: 'HyeonAutoTrade — 코인 자동매매 봇',
    description:
      'RSI, MACD, 볼린저 밴드 등 기술 지표 기반 Python 암호화폐 자동매매 봇. Binance API 연동, Flask 대시보드, WebSocket 실시간 스트리밍, Docker 배포를 지원합니다.',
    tags: ['Python', 'Flask', 'WebSocket', 'Docker', 'SQLite', 'Binance API'],
    codeUrl: 'https://github.com/Hyeonmin072/HyeonAutoTrade',
    isTeam: false,
    period: '2024',
  },
  {
    id: 4,
    title: 'BGHChatBot — Discord AI 챗봇',
    description:
      'Discord 서버용 AI 챗봇. LSTM 모델로 채팅 확률 예측, 임베딩 기반 문서 유사도 검색, 대화 자동 요약 기능을 제공합니다. Supabase DB와 연동.',
    tags: ['Python', 'Discord.py', 'LSTM', 'AI/ML', 'Supabase'],
    codeUrl: 'https://github.com/Hyeonmin072/BGHChatBot',
    isTeam: false,
    period: '2024',
  },
  {
    id: 5,
    title: 'BGHDashboard — 이터널리턴 전적 분석',
    description:
      '이터널리턴 게임의 유저 전적·캐릭터 통계·랭크 현황을 시각화하는 대시보드. React + TypeScript + Tailwind CSS로 구현했습니다.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    codeUrl: 'https://github.com/Hyeonmin072/BGHDashboard',
    isTeam: false,
    period: '2024',
  },
  {
    id: 6,
    title: 'ERGG — 이터널리턴 게임 백엔드 API',
    description:
      '이터널리턴 게임 데이터를 처리하는 Spring Boot 백엔드 API 서버. Spring Security 인증, JPA + MySQL 데이터 관리.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'JPA', 'Docker'],
    codeUrl: 'https://github.com/Hyeonmin072/ERGG',
    isTeam: false,
    period: '2024',
  },
  {
    id: 7,
    title: 'culcom_app — 커뮤니티 관리 앱',
    description:
      'Flutter + Firebase 기반 커뮤니티 관리 모바일 앱. 회원 인증, 게시판, 채팅, 출석 관리, 지점 관리, 관리자 기능을 포함한 종합 플랫폼.',
    tags: ['Flutter', 'Firebase', 'Riverpod', 'Firestore', 'Dart'],
    codeUrl: 'https://github.com/Hyeonmin072/culcom_app',
    isTeam: false,
    period: '2024',
  },
];
