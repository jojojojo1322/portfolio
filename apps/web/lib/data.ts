type Project = {
  title: string;
  role?: string;
  period?: string;
  impact?: string;
  summary: string;
  stack: string[];
  links: {
    demo?: string;
    repo?: string;
  };
};

type Metric = {
  label: string;
  value: string;
  desc: string;
};

type WorkflowItem = {
  title: string;
  points: string[];
};

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  stack: string[];
};

type SkillGroup = {
  title: string;
  items: string[];
  note?: string;
};

type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

export const profile = {
  name: "조현재",
  title: "Frontend Developer",
  location: "Seoul, KR",
  years: 5,
  experienceStart: "2020-06-01",
  email: "bobob935@gmail.com",
  workEmail: "hjcho@hist.co.kr",
  phone: "010-6684-8467",
  github: "https://github.com/jojojojo1322",
  linkedin: "",
  pitch: "Typescript/React로 항공·글로벌 서비스 FE를 리딩하며 재사용 컴포넌트와 타입 강제화로 효율과 안정성을 높였습니다.",
  summary:
    "항공·실시간 데이터 도메인에서 FE 리딩을 하며 디자인 시스템·Monorepo로 재사용성과 일관성을 확보했습니다. 타입스크립트 강제화와 pre-push 자동화로 품질을 끌어올리고, 실시간 대규모 데이터 렌더링을 안정화하는 데 강점이 있습니다.",
  highlights: [
    "타입스크립트 강제화로 런타임 이슈 감소",
    "재사용 컴포넌트/그리드 표준화로 신규 요구 대응 속도 향상",
    "실시간·대규모 데이터 렌더링 최적화",
  ],
};

export const metrics: Metric[] = [
  {
    label: "총 경력",
    value: "자동 계산",
    desc: "현재 기준, 항공/글로벌 서비스 FE",
  },
  {
    label: "재사용/일관성",
    value: "Design System + Monorepo",
    desc: "KE Design System 1.0, MUI 커스터마이징, 공통 Grid/컴포넌트",
  },
  {
    label: "품질/효율",
    value: "릴리즈·품질 자동화",
    desc: "pre-push 자동화(lint/test/e2e)와 릴리즈 리듬 정착",
  },
];

export const experiences: Experience[] = [
  {
    company: "대한항공 ETS-OMS (스케줄링 시스템)",
    role: "Frontend 개발 리딩",
    period: "2025.07 ~ 2025.12",
    location: "Seoul",
    description:
      "스케줄링/운항 FE 리딩. Typescript 강제화, 공통 워크플로, 재사용 Grid 컴포넌트로 생산성과 일관성을 확보.",
    highlights: [
      "공통 UI/비즈니스 모듈화와 릴리즈 리듬 정립으로 생산성 향상",
      "MUI + KE Design System 1.0 커스터마이징으로 재사용 컴포넌트 표준화",
      "Grid Library 커스텀/공통화로 대시보드 품질·속도 개선",
    ],
    stack: [
      "TypeScript",
      "React",
      "styled-components",
      "MUI",
      "KE Design System",
      "Monorepo",
      "Playwright",
    ],
  },
  {
    company: "대한항공 RSES",
    role: "Frontend 개발 리딩",
    period: "2024.09 ~ 2025.05",
    location: "Seoul",
    description:
      "대규모 스케줄 데이터 실시간 시각화, 렌더링 성능 최적화, 반응형·i18n 대응 고도화.",
    highlights: [
      "실시간 대시보드 렌더링 최적화로 체감 성능 개선",
      "Grid/차트 인터랙션 표준화로 사용자 온보딩 비용 감소",
      "반응형·i18n 대응으로 다양한 단말기 품질 확보",
    ],
    stack: [
      "TypeScript",
      "React",
      "styled-components",
      "MUI",
      "Performance",
      "i18n",
    ],
  },
  {
    company: "대한항공 운항통제 시스템",
    role: "Frontend Engineer",
    period: "2023.10 ~ 2024.09",
    location: "Seoul",
    description:
      "운항 통제 UI와 Form UX를 개선하며 운영 효율과 안정성을 높이는 컴포넌트 체계를 구축했습니다.",
    highlights: [
      "Form UX 개선과 상태 검증 강화로 운영 실수 감소",
      "모듈형 컨트롤 패널로 기능 추가 속도 향상",
      "MUI/사내 DS 병행 적용으로 디자인 일관성 확보",
    ],
    stack: ["React", "styled-components", "MUI", "Form UX", "Design System"],
  },
  {
    company: "MeiTalk 스트리밍 플랫폼",
    role: "Frontend Lead",
    period: "2021.11 ~ 2022.04",
    location: "Seoul",
    description:
      "글로벌 타겟 반응형 스트리밍 웹/앱 리딩, 사용자 설정 기능과 반응형 그리드 설계.",
    highlights: [
      "반응형 레이아웃·다국어 대응으로 글로벌 UX 강화",
      "팀 리딩 및 태스크 분배로 일정·품질 관리",
      "실시간 스트리밍 뷰 최적화",
    ],
    stack: ["React", "styled-components", "Responsive UI", "Team Lead"],
  },
  {
    company: "Buyaladdin 코인 쇼핑몰",
    role: "Frontend Lead",
    period: "2020.12 ~ 2022.03",
    location: "Seoul",
    description:
      "React Native로 암호화폐 결제 UX와 쇼핑/장바구니 흐름을 설계, 글로벌 다국어 대응.",
    highlights: [
      "React Native로 글로벌 결제/쇼핑 UX 설계",
      "검색·장바구니 흐름 개선으로 전환율 향상",
      "다국어 대응 및 스토어 퍼블리싱 경험",
    ],
    stack: ["React Native", "styled-components", "Payments", "Global UX"],
  },
  {
    company: "Real Research 리서치 앱",
    role: "Frontend Engineer",
    period: "2020.12 ~ 2021.02",
    location: "Seoul",
    description:
      "모바일 설문 흐름 인터페이스와 실시간 응답 시각화, 결과 공유 화면을 개발.",
    highlights: [
      "모바일 설문 플로우/UX 최적화",
      "실시간 응답 데이터 시각화",
      "결과 공유 화면 구현",
    ],
    stack: ["React Native", "styled-components", "Charts"],
  },
  {
    company: "Buyaladdin 사내 어드민",
    role: "Frontend Engineer",
    period: "2020.10 ~ 2021.01",
    location: "Seoul",
    description:
      "권한/역할 기반 접근제어 구조 설계, 관리자 테이블/폼 컴포넌트 구축.",
    highlights: [
      "권한/역할 기반 접근 제어 설계",
      "관리자용 데이터 테이블/폼 컴포넌트 구축",
      "운영 배포/유지보수 경험",
    ],
    stack: ["React", "styled-components", "Admin", "RBAC"],
  },
];

export const projects: Project[] = [
  {
    title: "AI 기반 문제집 생성 플랫폼 (Solves)",
    impact: "AI 문제 생성·검증 파이프라인",
    summary:
      "LangChain.js·Node.js로 입력 분석→요구사항 분류→문제 생성→품질 평가까지 이어지는 멀티스텝 파이프라인을 설계. Zod 검증과 템플릿 표준화, Monorepo 모듈화로 확장성 확보.",
    stack: ["LangChain.js", "Node.js", "TypeScript", "Zod", "Monorepo"],
    links: {},
  },
  {
    title: "대한항공 ETS-OMS (스케줄링)",
    impact: "FE 리딩 · 재사용 기반 생산성 개선",
    summary:
      "Typescript·React 기반으로 공통 컴포넌트와 워크플로를 재구성하고 Monorepo/KE Design System 1.0을 적용해 개발 생산성과 일관성을 높였습니다.",
    stack: [
      "TypeScript",
      "React",
      "styled-components",
      "MUI",
      "KE Design System 1.0",
      "Monorepo",
    ],
    links: {},
  },
  {
    title: "대한항공 RSES (스케줄링)",
    impact: "대규모 항공 데이터 시각화·최적화",
    summary:
      "스케줄 시각화 인터페이스와 대규모 데이터 렌더링 최적화를 리딩하고, 디자인 시스템 기반 재사용 컴포넌트로 UI 일관성을 확보했습니다.",
    stack: [
      "TypeScript",
      "React",
      "styled-components",
      "MUI",
      "KE Design System 1.0",
      "Monorepo",
    ],
    links: {},
  },
  {
    title: "대한항공 운항통제 시스템",
    impact: "실시간 운항 통제 UI·Form UX 개선",
    summary:
      "운항 통제 화면을 React/styled-components로 구성하고, 사용자 편의 중심 Form UX를 개선해 운항 관리 효율을 높였습니다.",
    stack: ["React", "styled-components", "MUI", "KE Design System 1.0"],
    links: {},
  },
  {
    title: "MeiTalk 스트리밍 플랫폼",
    impact: "글로벌 타겟 반응형 스트리밍 웹/앱",
    summary:
      "반응형 UI와 사용자 설정 기능을 설계·구현하고 팀 리딩 및 태스크 분배를 총괄했습니다.",
    stack: ["React", "styled-components"],
    links: {},
  },
  {
    title: "Buyaladdin 코인 쇼핑몰 앱",
    impact: "암호화폐 기반 커머스 UX 구축",
    summary:
      "React Native로 결제/장바구니 UX를 설계하고 글로벌 사용자 대상 다국어 대응을 진행했습니다.",
    stack: ["React Native", "styled-components", "Payments"],
    links: {},
  },
  {
    title: "Real Research 리서치 앱",
    impact: "모바일 설문 흐름 및 데이터 시각화",
    summary:
      "설문 흐름 기반 인터페이스와 실시간 응답 시각화를 구현하고 결과 공유 화면을 제공했습니다.",
    stack: ["React Native", "styled-components", "Charts"],
    links: {},
  },
  {
    title: "Buyaladdin 사내 어드민",
    impact: "권한 기반 관리자 UI 구축",
    summary:
      "권한/역할 기반 접근 제어를 설계하고 데이터 테이블/폼 중심의 관리자 페이지를 개발했습니다.",
    stack: ["React", "styled-components", "Admin", "RBAC"],
    links: {},
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "React Native",
      "TypeScript",
      "Vanilla JS",
      "CSS",
      "styled-components",
      "MUI",
    ],
    note: "디자인 시스템·반응형·다국어 경험",
  },
  {
    title: "CI/CD · 품질",
    items: ["pre-push hook", "lint/test/e2e 자동화", "Jenkins"],
  },
  {
    title: "Infra / Cloud",
    items: ["Git", "AWS CodeCommit", "AWS S3", "EC2", "Code 시리즈", "Amplify", "Lambda"],
  },
  {
    title: "Design System",
    items: ["KE Design System 1.0", "Atomic Design", "MUI 커스터마이징"],
  },
  {
    title: "기타",
    items: ["Monorepo", "공통 모듈화", "Grid 커스텀", "pre-commit/pre-push"],
  },
];

export const workflow: WorkflowItem[] = [
  {
    title: "리딩/재사용",
    points: [
      "Monorepo + KE Design System 1.0으로 컴포넌트/테마 공통화",
      "Grid/재사용 컴포넌트 표준화로 스케줄·운항 도메인 UI 일관성 확보",
    ],
  },
  {
    title: "품질/자동화",
    points: [
      "pre-push 기반 코드 검토 자동화, lint/test 표준화",
      "Jenkins·AWS 파이프라인과 연계한 배포 자동화 경험",
    ],
  },
  {
    title: "실시간/데이터",
    points: [
      "대규모 항공 스케줄/운항 데이터 실시간 렌더링 최적화",
      "글로벌/다국어 대응, 반응형 UI로 다양한 디바이스 대응",
    ],
  },
];

export const architecture = [
  "[Client] Next.js (App Router, shadcn/ui)",
  " ├─ Routing: 섹션 앵커 원페이지 (#about, #projects, #skills, #contact)",
  " ├─ UI: shadcn/ui + Tailwind, 다크모드 변수 기반",
  " ├─ Data: 정적 데이터(manifest) + CSR 링크/버튼",
  " ├─ State: 경량 전역 상태(zustand) + 서버 데이터 캐싱(TanStack Query 경험)",
  " ├─ Perf: prefetch/preconnect, image priority/lazy, font subset",
  " ├─ QA: Playwright e2e, Vitest + Testing Library",
  " └─ Telemetry: GA4, Sentry",
];

export const contacts: ContactItem[] = [
  {
    label: "Email (개인)",
    value: "bobob935@gmail.com",
    href: "mailto:bobob935@gmail.com",
  },
  {
    label: "Email (회사)",
    value: "hjcho@hist.co.kr",
    href: "mailto:hjcho@hist.co.kr",
  },
  {
    label: "GitHub",
    value: "github.com/jojojojo1322",
    href: "https://github.com/jojojojo1322",
  },
  {
    label: "Phone",
    value: "010-6684-8467",
  },
];

