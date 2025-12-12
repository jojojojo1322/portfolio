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
  name: "홍길동",
  title: "Frontend Engineer",
  location: "Seoul, KR",
  years: 5,
  email: "me@example.com",
  github: "https://github.com/you",
  linkedin: "https://linkedin.com/in/you",
  pitch: "전환과 성능을 동시에 챙기는 프론트엔드 엔지니어",
  summary:
    "커머스·SaaS에서 LCP 개선, 전환율 상승, 오류율 감소를 반복적으로 만들어낸 경험을 가지고 있습니다. 데이터 기반 가설 수립과 A/B 실험, 접근성/성능 체크리스트를 습관화합니다.",
  highlights: ["LCP 4.5s→2.1s", "전환율 +8.3%", "에러율 -30%"],
};

export const metrics: Metric[] = [
  {
    label: "성능",
    value: "LCP 4.5s→2.1s",
    desc: "이미지 프리로드, edge SSR, 폰트 서브셋, hydration 분리",
  },
  {
    label: "전환",
    value: "폼 완료율 +12%",
    desc: "모바일 퍼널 분리, 실시간 검증, 실패 이벤트 추적/리커버리",
  },
  {
    label: "안정성",
    value: "에러율 -30%",
    desc: "Sentry 이슈 라우팅·자동 triage, 재시도/폴백 규칙화",
  },
];

export const projects: Project[] = [
  {
    title: "커머스 웹 리뉴얼",
    impact: "LCP 4.5s→2.1s, 전환 +8.3%",
    summary:
      "이미지 프리로드와 edge SSR, TanStack Query 캐싱으로 초기 로드를 최적화하고, 모바일 결제 플로우를 단순화해 퍼널 이탈을 줄였습니다.",
    stack: ["Next.js", "TypeScript", "TanStack Query", "shadcn/ui"],
    links: {
      demo: "https://demo.example.com",
      repo: "https://github.com/you/commerce",
    },
  },
  {
    title: "폼 전환 A/B 실험",
    impact: "완료율 +12%, 오류율 -25%",
    summary:
      "모바일 퍼널 분할, 실시간 밸리데이션, Sentry 이슈 트리아지 자동화를 통해 폼 이탈을 줄이고 장애 대응 속도를 높였습니다.",
    stack: ["React", "Zustand", "Sentry", "Playwright"],
    links: {
      repo: "https://github.com/you/form-ab",
    },
  },
  {
    title: "Design System MVP",
    impact: "UI 불일치 40%↓, 배포 리드타임 -1일",
    summary:
      "shadcn 기반 토큰/컴포넌트 세트를 만들고 Storybook 캡처·시각 회귀 테스트를 붙여 디자인 핸드오프 오류를 줄였습니다.",
    stack: ["Storybook", "shadcn/ui", "TailwindCSS", "Chromatic"],
    links: {
      demo: "https://design.example.com",
    },
  },
];

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "TailwindCSS",
  "shadcn/ui",
  "TanStack Query",
  "Zustand",
  "Playwright",
  "Vitest",
  "Sentry",
];

export const workflow: WorkflowItem[] = [
  {
    title: "데이터 기반",
    points: [
      "Lighthouse/Profiler로 병목 식별 → 개선안 A/B → 리포트 공유",
      "GA4/Sentry 이벤트를 스펙에 포함해 릴리즈 품질 가시화",
    ],
  },
  {
    title: "협업",
    points: [
      "Figma 핸드오프 체크리스트 + Storybook 캡처로 불일치 방지",
      "API 계약서: 스키마·에러코드·리트라이·타임아웃을 사전 정의",
    ],
  },
  {
    title: "품질",
    points: [
      "Playwright 플로우 스모크, Vitest + Testing Library로 단위/통합",
      "Feature flag/rollback 플랜을 기본값으로 설정",
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

