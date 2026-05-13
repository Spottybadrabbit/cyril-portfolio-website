import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";

export default function PublicationsSection() {
  return (
    <section id="publications" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Publications</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Peer-Reviewed Research
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              {DATA.publications.length} papers published across IEEE and ACM in robotics, HCI, and medical AI.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          {DATA.publications.map((pub) => (
            <div
              key={pub.title}
              className="flex items-start justify-between gap-4 rounded-xl border bg-card p-4 shadow-sm"
            >
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <p className="font-semibold leading-snug">{pub.title}</p>
                <p className="text-xs text-muted-foreground">{pub.authors}</p>
                <p className="text-xs text-muted-foreground italic">{pub.venue}</p>
                <p className="text-xs text-muted-foreground">
                  {pub.year}
                  {pub.citations > 0 && ` · ${pub.citations} citations`}
                </p>
              </div>
              <Link
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                  <Icons.globe className="size-3" />
                  Read
                </Badge>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
