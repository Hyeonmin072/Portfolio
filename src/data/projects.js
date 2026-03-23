/**
 * 포트폴리오에 표시할 프로젝트 목록
 */
export const PROJECTS = [
  {
    id: 1,
    title: 'CSPT1 — 헤어살롱 예약 플랫폼',
    description:
      '헤어살롱 찾기, 디자이너 프로필 관리, 예약·결제·리뷰까지 지원하는 풀스택 웹 서비스입니다. Spring Boot 기반 백엔드에 MySQL, Redis, Elasticsearch를 활용하고 React + TanStack Query로 프론트엔드를 구성했습니다.',
    tags: ['React', 'Spring Boot', 'MySQL', 'Redis', 'AWS', 'WebSocket', 'OAuth2'],
    codeUrl: 'https://github.com/Hyeonmin072/CSPT1_F',
    backendUrl: 'https://github.com/Hyeonmin072/CSPT1_B',
  },
  {
    id: 2,
    title: 'GameSnap — 게임 소셜 플랫폼',
    description:
      '게이머들을 위한 소셜 커뮤니티 플랫폼입니다. 사용자 프로필, 게임 라이브러리 관리, 영상 콘텐츠 공유, 포럼 기능을 React와 Spring Boot로 구현했습니다.',
    tags: ['React', 'Spring Boot', 'Java', 'Framer Motion', 'Axios'],
    codeUrl: 'https://github.com/Hyeonmin072/projectT1',
  },
  {
    id: 3,
    title: 'HyeonAutoTrade — 코인 자동매매 봇',
    description:
      'RSI, MACD, 볼린저 밴드 등 기술 지표를 활용한 Python 기반 암호화폐 자동매매 봇입니다. Binance·Upbit 연동, Flask 대시보드, WebSocket 실시간 스트리밍, Docker 배포를 지원합니다.',
    tags: ['Python', 'Flask', 'WebSocket', 'Docker', 'SQLite', 'Binance API'],
    codeUrl: 'https://github.com/Hyeonmin072/HyeonAutoTrade',
  },
];
