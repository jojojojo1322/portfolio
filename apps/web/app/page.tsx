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
  contacts,
  experiences,
  metrics,
  profile,
  projects,
  skillGroups,
  workflow,
} from "@/lib/data";

function getExperienceInfo(startDateStr: string) {
  const start = new Date(startDateStr);
  const now = new Date();
  const isValidStart = !Number.isNaN(start.getTime());
  const baseMonths = isValidStart
    ? (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth()) -
      (now.getDate() < start.getDate() ? 1 : 0)
    : 0;
  const totalMonths = Math.max(baseMonths, 0);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const nowLabel = `${now.getFullYear()}.${String(
    now.getMonth() + 1
  ).padStart(2, "0")}`;

  return {
    experienceText: `${years}년 ${months}개월 (${nowLabel} 기준)`,
    experienceDesc: `항공/글로벌 서비스 FE`,
  };
}

const navItems = [
  { id: "about", label: "소개" },
  { id: "metrics", label: "임팩트" },
  { id: "skills", label: "스킬" },
  { id: "experience", label: "경력" },
  { id: "projects", label: "프로젝트" },
  { id: "operating", label: "구성·워크플로" },
  { id: "contact", label: "컨택" },
];

export default function Page() {
  const experienceInfo = getExperienceInfo(
    profile.experienceStart ?? "2020-06-01"
  );
  const computedMetrics = metrics.map((item) =>
    item.label === "총 경력"
      ? {
          ...item,
          value: experienceInfo.experienceText,
          desc: experienceInfo.experienceDesc,
        }
      : item
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 text-foreground">
      <header className="sticky top-0 z-20 border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-semibold">
            {profile.name} · {profile.title} · {experienceInfo.experienceText}
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
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-2 text-sm shadow-sm">
                <span className="font-semibold text-foreground">{profile.name}</span>
                <span>· {profile.title}</span>
                <span>· {profile.location}</span>
              </span>
              <span className="rounded-full border bg-card px-3 py-2 shadow-sm">
                {experienceInfo.experienceText}
              </span>
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
                  주요 포커스
                </p>
                <p>· 재사용성/일관성: KE Design System 1.0 + Monorepo</p>
                <p>· 품질: pre-push 자동화, lint/test/e2e 게이트, 릴리즈 리듬</p>
                <p>· 실시간/대규모 데이터: 항공 스케줄·운항 도메인 최적화</p>
              </CardContent>
            </Card>
          </div>

          <Card className="w-full border-border/70 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Contact · Ready to Engage</CardTitle>

            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-3 sm:grid-cols-3">
                {computedMetrics.map((item) => (
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
                  <span>Email(회사)</span>
                  <Link
                    className="hover:text-primary underline-offset-4 hover:underline"
                    href={`mailto:${profile.workEmail}`}
                  >
                    {profile.workEmail}
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
                  <span>Phone</span>
                  <span className="text-foreground">{profile.phone}</span>
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
              경력, 재사용성, 품질 자동화의 핵심 지표
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {computedMetrics.map((item) => (
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
        id="skills"
        className="mx-auto max-w-6xl px-4 py-14 space-y-6 md:py-16"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold md:text-3xl">Skills</h2>
          <p className="text-sm text-muted-foreground">
            항공/글로벌 서비스에 맞춰 검증된 스택과 도구
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title} className="border-border/70 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">{group.title}</CardTitle>
                {group.note ? (
                  <CardDescription className="text-xs text-muted-foreground">
                    {group.note}
                  </CardDescription>
                ) : null}
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-6xl px-4 py-14 space-y-6 md:py-16"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold md:text-3xl">Experience</h2>
          <p className="text-sm text-muted-foreground">
            실무 리딩/협업/품질 경험
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
                  {project.impact ? (
                    <CardDescription className="text-sm font-medium text-foreground">
                      {project.impact}
                    </CardDescription>
                  ) : null}
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
        id="contact"
        className="mx-auto max-w-6xl px-4 py-12 space-y-4 md:py-16"
      >
        <h2 className="text-2xl font-semibold md:text-3xl">Contact</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border-border/70 shadow-sm">
            <CardContent className="space-y-3 pt-4">
              {contacts.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  {item.href ? (
                    <Link
                      className="font-medium text-foreground underline-offset-4 hover:underline"
                      href={item.href}
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <span className="font-medium text-foreground">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="border-border/70 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">바로 연락하기</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={`mailto:${profile.email}`}>개인 이메일</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`mailto:${profile.workEmail}`}>회사 이메일</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href={profile.github}>GitHub</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

