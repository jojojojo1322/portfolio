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
  metrics,
  profile,
  projects,
  stack,
  workflow,
} from "@/lib/data";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 text-foreground">
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-semibold">
            {profile.name} · {profile.title}
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {["about", "metrics", "projects", "architecture", "stack", "contact"].map(
              (id) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="hover:text-foreground transition-colors"
                >
                  #{id}
                </Link>
              ),
            )}
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
        className="mx-auto max-w-6xl px-4 py-16 md:py-20"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
          <div className="flex-1 space-y-3">
            <p className="text-sm text-muted-foreground">
              {profile.location} · {profile.years}년 경험
            </p>
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
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link href={`mailto:${profile.email}`}>이메일로 연락</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={profile.github}>GitHub</Link>
              </Button>
            </div>
          </div>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-base">Contact</CardTitle>
              <CardDescription>직접 연락 가능한 채널</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Email: {profile.email}</p>
              <p>GitHub: {profile.github}</p>
              <p>LinkedIn: {profile.linkedin || "—"}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="metrics" className="bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-12 space-y-6 md:py-14">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Impact Metrics
            </h2>
            <p className="text-sm text-muted-foreground">
              생산성·재사용성·데이터 안정성에 집중한 핵심 수치
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {metrics.map((item) => (
              <Card key={item.label}>
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
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">
            프로젝트 구성도
          </h2>
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
          <div>
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

      <section id="stack" className="mx-auto max-w-6xl px-4 py-12 space-y-4 md:py-14">
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

