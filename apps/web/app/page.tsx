import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  architecture,
  experiences,
  metrics,
  profile,
  projects,
  stack,
  workflow,
} from "@/lib/data";

const navItems = [
  { id: "about", label: "소개" },
  { id: "metrics", label: "임팩트" },
  { id: "experience", label: "경력" },
  { id: "projects", label: "프로젝트" },
  { id: "architecture", label: "구성도" },
  { id: "stack", label: "스택" },
  { id: "contact", label: "컨택" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 text-foreground">
      <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-semibold">
            {profile.name} · {profile.title}
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="hover:text-foreground transition-colors"
              >
                #{item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2">
            <Button size="sm" asChild>
              <Link href={`mailto:${profile.email}`}>Email</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href={profile.github}>GitHub</Link>
            </Button>
          </div>
        </div>
      </header>

      <section
        id="about"
        className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:pb-20 md:pt-16"
      >
        <div className="grid items-start gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-2 text-sm text-muted-foreground shadow-sm">
              <span className="font-semibold text-foreground">{profile.name}</span>
              <span>· {profile.title}</span>
              <span>· {profile.location}</span>
              <span>· {profile.years}년</span>
            </div>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              {profile.pitch}
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.highlights.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
            <Card className="border-dashed border-border/70 bg-card/60 shadow-sm">
              <CardContent className="space-y-2 pt-5 text-sm text-muted-foreground">
                <p className="text-foreground font-semibold">
                  대기업 프론트엔드 포트폴리오 포커스
                </p>
                <p>· 재사용성/일관성: 디자인 시스템·Monorepo로 통일된 UX</p>
                <p>· 품질: pre-push 자동화, 릴리즈 게이트, e2e/테스트 습관</p>
                <p>· 실시간/대규모 데이터: 항공 도메인 최적화 경험</p>
              </CardContent>
            </Card>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href={`mailto:${profile.email}`}>이메일로 연락하기</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={profile.github}>GitHub</Link>
              </Button>
              {profile.linkedin ? (
                <Button size="lg" variant="ghost" asChild>
                  <Link href={profile.linkedin}>LinkedIn</Link>
                </Button>
              ) : null}
            </div>
          </div>

          <Card className="w-full border-border/70 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Contact · Ready to Engage</CardTitle>
              <CardDescription>
                빠른 의사결정이 가능한 채널과 핵심 수치
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-3 sm:grid-cols-3">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border bg-muted/40 px-4 py-3"
                  >
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-base font-semibold text-foreground">
                      {item.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex justify-between text-foreground">
                  <span>Email</span>
                  <Link
                    className="hover:text-primary underline-offset-4 hover:underline"
                    href={`mailto:${profile.email}`}
                  >
                    {profile.email}
                  </Link>
                </p>
                <p className="flex justify-between">
                  <span>GitHub</span>
                  <Link
                    className="hover:text-primary underline-offset-4 hover:underline"
                    href={profile.github}
                  >
                    {profile.github}
                  </Link>
                </p>
                <p className="flex justify-between">
                  <span>LinkedIn</span>
                  <span>{profile.linkedin || "준비 중"}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="metrics" className="bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-12 space-y-6 md:py-14">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold md:text-3xl">Impact Metrics</h2>
            <p className="text-sm text-muted-foreground">
              생산성, 재사용성, 대규모 데이터 안정성을 입증하는 지표
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {metrics.map((item) => (
              <Card key={item.label} className="border-border/70 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">{item.label}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    {item.value}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-6xl px-4 py-14 space-y-6 md:py-16"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold md:text-3xl">Experience</h2>
          <p className="text-sm text-muted-foreground">
            대기업 기준으로 검증된 리딩/협업/품질 경험
          </p>
        </div>
        <div className="grid gap-4">
          {experiences.map((exp) => (
            <Card
              key={`${exp.company}-${exp.period}`}
              className="border-border/70 shadow-sm"
            >
              <CardHeader className="flex flex-col gap-1 pb-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{exp.company}</CardTitle>
                  <CardDescription className="text-sm font-medium text-foreground">
                    {exp.role}
                  </CardDescription>
                </div>
                <div className="text-sm text-muted-foreground">
                  {exp.period} · {exp.location}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                  <div className="space-y-2">
                    {exp.highlights.map((point) => (
                      <p
                        key={point}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        • {point}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 self-start">
                    {exp.stack.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-14 space-y-6 md:py-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold md:text-3xl">Projects</h2>
            <p className="text-sm text-muted-foreground">
              항공 스케줄/운항, 글로벌 서비스, AI 파이프라인까지 주요 리딩/개발 경험
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="h-full border-border/70 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm font-medium text-foreground">
                    {project.impact}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.links.demo ? (
                      <Button size="sm" asChild>
                        <Link href={project.links.demo}>Live</Link>
                      </Button>
                    ) : null}
                    {project.links.repo ? (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.links.repo}>Code</Link>
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="architecture"
        className="mx-auto max-w-6xl px-4 py-12 space-y-6 md:py-16"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold md:text-3xl">프로젝트 구성도</h2>
          <p className="text-sm text-muted-foreground">
            원페이지 포트폴리오용 FE 구성과 품질 도구
          </p>
        </div>
        <Card className="border-border/70 shadow-sm">
          <CardContent className="pt-6">
            <pre className="whitespace-pre-wrap rounded-lg bg-muted px-4 py-3 text-sm font-mono leading-7 text-muted-foreground">
              {architecture.join("\n")}
            </pre>
          </CardContent>
        </Card>
      </section>

      <section className="bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-12 space-y-6 md:py-14">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold md:text-3xl">워크플로</h2>
            <p className="text-sm text-muted-foreground">
              대기업 환경을 기준으로 한 협업/품질 습관
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {workflow.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {item.points.map((point) => (
                    <p
                      key={point}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      • {point}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stack"
        className="mx-auto max-w-6xl px-4 py-12 space-y-4 md:py-14"
      >
        <h2 className="text-2xl font-semibold md:text-3xl">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl px-4 py-12 space-y-4 md:py-16"
      >
        <h2 className="text-2xl font-semibold md:text-3xl">Contact</h2>
        <p className="text-sm text-muted-foreground">
          빠른 답변은 이메일이 가장 확실합니다.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <Link href={`mailto:${profile.email}`}>Email</Link>
          </Button>
          {profile.linkedin ? (
            <Button variant="outline" asChild>
              <Link href={profile.linkedin}>LinkedIn</Link>
            </Button>
          ) : null}
          <Button variant="outline" asChild>
            <Link href={profile.github}>GitHub</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

