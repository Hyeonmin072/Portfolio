/**
 * 포트폴리오 프로필 정보
 */
export const PROFILE = {
  email: 'gusals072@gmail.com',
  github: 'https://github.com/Hyeonmin072',
  linkedin: null,

  /** 이력서 기준 기술 스택 */
  skills: [
    'React',
    'JavaScript',
    'Java',
    'Python',
    'Spring Boot',
    'MySQL',
    'Docker',
    'Git',
    'Tailwind CSS',
    'Bootstrap',
    'RestAPI',
    'Figma',
    'Flutter',
    'Adobe Photoshop',
    'Adobe Premiere',
  ],

  /** 학력 */
  education: [
    {
      school: '영진전문대학교',
      major: '컴퓨터정보계열',
      period: '2023.03 ~ 현재',
      status: '재학중',
      gpa: '3.3 / 4.5',
    },
    {
      school: '순심고등학교',
      major: '문과계열',
      period: '',
      status: '졸업',
      gpa: null,
    },
  ],

  /** 자격/어학/수상 */
  certifications: [
    { name: '정보처리산업기사', org: '한국산업인력공단', year: '2025.06', type: '자격증' },
    { name: 'JPT 635점', org: '일본어', year: '2024.12', type: '어학' },
    { name: 'JLPT N2 / PASS', org: '일본어', year: '2021.01', type: '어학' },
    { name: 'GTQ(그래픽기술자격) 1급', org: '한국생산성본부', year: '2017.01', type: '자격증' },
  ],

  /** 경험/활동/교육 */
  activities: [
    {
      name: '코드잇 — JavaScript 프로그래밍 기초·중급',
      org: '코드잇',
      period: '2024.12 ~ 2025.01',
      type: '교육',
      description: '자바스크립트 기초 문법, 제어 구조, 함수, 배열·객체, DOM 조작 과정 이수',
    },
    {
      name: '소프트웨어직군 알고리즘 코딩테스트 (C언어)',
      org: '윤성컴퓨터디자인아카데미',
      period: '2024.07 ~ 2024.09',
      type: '교육',
      description: 'C언어 기반 큐, 스택, 정렬·탐색 알고리즘 교육 이수',
    },
    {
      name: 'Python 프로그래밍 기초부터 활용까지',
      org: '윤성컴퓨터디자인아카데미',
      period: '2024.05 ~ 2024.06',
      type: '교육',
      description: '파이썬 기반 자료구조 및 알고리즘 교육 이수',
    },
    {
      name: '한일 공동 고등학교 유학생 교류 참가',
      org: '교내활동',
      period: '2023.08',
      type: '활동',
      description: '일본 유학생들과 4주간 언어교환 및 한국 문화 소개 활동',
    },
  ],
};
