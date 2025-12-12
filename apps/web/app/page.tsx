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
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-semibold">
            {profile.name} · {profile.title}
          </div>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            {["about", "projects", "architecture", "stack", "contact"].map(
              (id) => (
              <Link key={id} href={`#${id}`} className="hover:text-foreground">
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
        className="mx-auto max-w-5xl px-4 py-16 space-y-5 md:py-20"
      >
        <p className="text-sm text-muted-foreground">
          {profile.location} · {profile.years}년 경험
        </p>
        <h1 className="text-3xl font-semibold md:text-4xl">{profile.pitch}</h1>
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
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-12 space-y-6 md:py-14">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Impact Metrics
            </h2>
            <p className="text-sm text-muted-foreground">
              전환·성능·안정성에 집중한 핵심 수치
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

      <section id="projects" className="bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-14 space-y-6 md:py-16">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Projects</h2>
            <p className="text-sm text-muted-foreground">
              임팩트 중심 3~5개 요약
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.title} className="h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.impact}</CardDescription>
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
        className="mx-auto max-w-5xl px-4 py-12 space-y-6 md:py-16"
      >
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">
            프로젝트 구성도
          </h2>
          <p className="text-sm text-muted-foreground">
            원페이지 포트폴리오용 FE 구성과 품질 도구
          </p>
        </div>
        <Card>
          <CardContent className="pt-6">
            <pre className="whitespace-pre-wrap text-sm font-mono leading-7 text-muted-foreground">
              {architecture.join("\n")}
            </pre>
          </CardContent>
        </Card>
      </section>

      <section className="bg-muted/20">
        <div className="mx-auto max-w-5xl px-4 py-12 space-y-6 md:py-14">
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

      <section
        id="stack"
        className="mx-auto max-w-5xl px-4 py-12 space-y-4 md:py-14"
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
        className="mx-auto max-w-5xl px-4 py-12 space-y-4 md:py-16"
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

