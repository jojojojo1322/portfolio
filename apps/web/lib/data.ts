type Project = {
  title: string;
  impact: string;
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

export const profile = {
  name: "조현재",
  title: "Frontend Developer",
  location: "Seoul, KR",
  years: 5,
  email: "bobob935@gmail.com",
  github: "https://github.com/jojojojo1322",
  linkedin: "",
  pitch: "스케줄·운항·글로벌 서비스에서 UI 일관성과 생산성을 끌어올린 프론트엔드 개발자",
  summary:
    "항공 스케줄/운항통제, 글로벌 서비스까지 Typescript·React 기반으로 리딩하며 Monorepo와 디자인 시스템을 적용해 재사용성과 개발 공수 효율을 크게 높였습니다. 대규모 데이터 시각화, 실시간 렌더링 최적화, pre-push 자동화로 품질 문화를 정착시킨 경험을 갖고 있습니다.",
  highlights: [
    "개발 공수 70% 절감(ETS-OMS FE 리딩)",
    "항공 데이터 실시간 렌더링 최적화",
    "Monorepo+DS로 재사용성·품질 체계화",
  ],
};

export const metrics: Metric[] = [
  {
    label: "생산성",
    value: "개발 공수 -70%",
    desc: "ETS-OMS 프론트 리딩, 공통 모듈·워크플로 재구성",
  },
  {
    label: "재사용/일관성",
    value: "DS/Monorepo 정착",
    desc: "KE Design System 1.0 + Monorepo로 컴포넌트/테마 공통화",
  },
  {
    label: "데이터/안정성",
    value: "대규모 데이터 최적화",
    desc: "운항/스케줄 대시보드의 실시간 렌더링 최적화와 품질 자동화",
  },
];

export const experiences: Experience[] = [
  {
    company: "대한항공 ETS-OMS",
    role: "Frontend Lead",
    period: "2023 - 2024",
    location: "Seoul",
    description:
      "항공 스케줄링/운항 도메인 전반을 리딩하며 재사용 컴포넌트와 공통 워크플로를 재설계하고 디자인 시스템을 도입했습니다.",
    highlights: [
      "개발 공수 70% 절감: 공통 UI/비즈니스 모듈화 및 릴리즈 리듬 정립",
      "KE Design System 1.0 + Monorepo로 테마/컴포넌트 일관성 확보",
      "pre-push 자동화(lint/test/e2e)로 품질 게이트와 코드 리뷰 효율화",
    ],
    stack: [
      "TypeScript",
      "React",
      "MUI",
      "styled-components",
      "KE Design System",
      "Monorepo",
      "Playwright",
    ],
  },
  {
    company: "대한항공 RSES",
    role: "Frontend Engineer",
    period: "2021 - 2023",
    location: "Seoul",
    description:
      "대규모 항공 스케줄 데이터를 시각화하고 실시간 렌더링 성능을 최적화하며 반응형 UI를 고도화했습니다.",
    highlights: [
      "실시간 대시보드 렌더링 최적화로 체감 성능 개선",
      "Grid/차트 인터랙션 표준화로 사용자 온보딩 비용 감소",
      "국제화·반응형 대응으로 다양한 단말기 품질 확보",
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
    period: "2020 - 2021",
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
    company: "AI 기반 문제집 생성 플랫폼 (Solves)",
    role: "Tech Lead / FE",
    period: "2024",
    location: "Seoul",
    description:
      "LangChain.js 기반 모듈형 AI 파이프라인을 설계하고 Zod/템플릿 표준화로 검증 가능성을 높였습니다.",
    highlights: [
      "챗봇 파이프라인 모듈화로 기능 실험 속도 향상",
      "Zod 스키마·프롬프트 템플릿 표준화로 품질 일관성 확보",
      "모노레포 기반 재사용 패키지 설계",
    ],
    stack: ["LangChain.js", "Node.js", "TypeScript", "Zod", "Monorepo"],
  },
  {
    company: "MeiTalk 스트리밍 플랫폼",
    role: "Frontend Lead",
    period: "2019 - 2020",
    location: "Seoul",
    description:
      "글로벌 타겟 반응형 스트리밍 웹/앱을 리딩하며 사용자 설정 기능과 반응형 그리드를 설계했습니다.",
    highlights: [
      "반응형 레이아웃·다국어 대응으로 글로벌 UX 강화",
      "팀 리딩 및 태스크 분배로 일정·품질 관리",
      "실시간 스트리밍 뷰 최적화",
    ],
    stack: ["React", "styled-components", "Responsive UI", "Team Lead"],
  },
];

export const projects: Project[] = [
  {
    title: "AI 기반 문제집 생성 플랫폼 (Solves)",
    impact: "모듈형 AI 에이전트 파이프라인 설계",
    summary:
      "LangChain.js·Node.js로 문제 생성/검증 챗봇 파이프라인을 구축하고 Zod 스키마, Prompt 템플릿 표준화, 모듈형 Monorepo로 확장성·재사용성을 확보했습니다.",
    stack: ["LangChain.js", "Node.js", "TypeScript", "Zod", "Monorepo"],
    links: {},
  },
  {
    title: "대한항공 ETS-OMS (스케줄링)",
    impact: "FE 리딩 · 개발 공수 70% 절감",
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
];

export const stack = [
  "TypeScript",
  "React",
  "React Native",
  "styled-components",
  "MUI",
  "TailwindCSS",
  "Monorepo",
  "LangChain.js",
  "Node.js",
  "AWS (S3/EC2/Code/Amplify/Lambda)",
  "Jenkins",
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
  " ├─ Routing: 섹션 앵커 원페이지 (#about, #projects, #stack, #contact)",
  " ├─ UI: shadcn/ui + Tailwind, 다크모드 변수 기반",
  " ├─ Data: 정적 데이터(manifest) + CSR 링크/버튼",
  " ├─ State: 경량 전역 상태(zustand) + 서버 데이터 캐싱(TanStack Query 경험)",
  " ├─ Perf: prefetch/preconnect, image priority/lazy, font subset",
  " ├─ QA: Playwright e2e, Vitest + Testing Library",
  " └─ Telemetry: GA4, Sentry",
];

