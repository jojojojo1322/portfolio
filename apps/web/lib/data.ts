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

