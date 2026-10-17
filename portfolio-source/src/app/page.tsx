import { CopyEmail } from "@/components/CopyEmail";
import { HeroVideo } from "@/components/HeroVideo";
import { Navigation } from "@/components/Navigation";
import { ProfileCard } from "@/components/ProfileCard";
import { achievements, education, experience, profile, projects, skillGroups } from "@/lib/data";

function SectionHeading({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="section-heading" data-reveal>
      <p className="section-label"><span>{index}</span><span aria-hidden="true">—</span>{label}</p>
      <h2>{children}</h2>
    </div>
  );
}

function ProjectSketch({ kind }: { kind: string }) {
  return (
    <figure className={`project-sketch sketch-${kind}`} aria-hidden="true">
      <div className="sketch-top"><span /><span /><i /><i /><i /></div>
      <div className="sketch-body">
        <div className="sketch-rail"><b /><b /><b /><b /><b /></div>
        <div className="sketch-content">
          <div className="sketch-title" />
          <div className="sketch-row"><i /><i /><i /></div>
          <div className="sketch-row"><i /><i /><i /></div>
          <div className="sketch-row"><i /><i /><i /></div>
          <div className="sketch-row"><i /><i /><i /></div>
          <div className="sketch-bottom"><i /><i /><i /><i /></div>
        </div>
      </div>
    </figure>
  );
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="text-link">{children}<span aria-hidden="true">↗</span></a>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <section className="hero-section" id="hero" aria-labelledby="hero-title">
          <div className="hero-ghost" aria-hidden="true">GOPAL</div>
          <div className="hero-copy" data-reveal>
            <p className="eyebrow"><span className="status-dot" />{profile.location}</p>
            <h1 id="hero-title">Research that turns<br /><em>data into direction.</em></h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-description">
              I help teams find the right prospects, keep information accurate, and turn client requirements into sales-ready work.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
              <a className="button button-quiet" href={profile.resume} download>Download résumé <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-proofline"><span>5+ years of experience</span><span className="proof-divider" /><span>US & UK client support</span></div>
          </div>
          <HeroVideo />
          <div className="hero-index"><span>01 — INTRODUCTION</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="content-wrap">
            <SectionHeading index="01" label="A little about me"><span id="about-title">Careful research.<br /><em>Clear results.</em></span></SectionHeading>
            <div className="about-grid">
              <div className="about-copy" data-reveal>
                <p className="lead-copy">{profile.summary}</p>
                <div className="about-links">
                  <a className="button button-primary" href={profile.resume} download>Résumé PDF <span aria-hidden="true">↓</span></a>
                  <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
                  <ExternalLink href={profile.github}>GitHub</ExternalLink>
                </div>
              </div>
              <ProfileCard />
              <div className="quick-facts" data-reveal>
                <p className="micro-label">QUICK FACTS</p>
                <div className="fact-row"><span>Based in</span><strong>{profile.location}</strong></div>
                <div className="fact-row"><span>Experience</span><strong>5+ years</strong></div>
                <div className="fact-row"><span>Client regions</span><strong>United States · United Kingdom</strong></div>
                <div className="fact-row"><span>Education</span><strong>B.Tech. · Civil Engineering</strong></div>
                <p className="fact-note">I turn client requirements into accurate datasets, reliable workflows, and sales-ready deliverables.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="content-wrap">
            <SectionHeading index="02" label="Skills & tools"><span id="skills-title">The work behind<br /><em>the work.</em></span></SectionHeading>
            <div className="skills-layout">
              <p className="skills-intro" data-reveal>
                From prospect discovery to quality checks, I bring together research, data care, and steady operations support.
              </p>
              <div className="skill-groups">
                {skillGroups.map((group, index) => (
                  <article className="skill-group" key={group.title} data-reveal style={{ "--stagger": index } as CSSProperties}>
                    <div className="skill-group-heading"><span>0{index + 1}</span><h3>{group.title}</h3><span aria-hidden="true">↘</span></div>
                    <ul className="skill-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="content-wrap">
            <SectionHeading index="03" label="Selected work"><span id="work-title">Research in<br /><em>practice.</em></span></SectionHeading>
            <p className="section-intro" data-reveal>Five examples of research and operations work drawn from my experience.</p>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project-card" key={project.number} data-reveal style={{ "--stagger": index } as CSSProperties}>
                  <ProjectSketch kind={project.visual} />
                  <div className="project-card-content">
                    <div className="project-meta"><span>{project.number} / 05</span><span>ILLUSTRATIVE VISUAL</span></div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.tools.length > 0 && <ul className="tool-chips" aria-label="Tools named for this project">{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>}
                  </div>
                </article>
              ))}
            </div>
            <p className="visual-note"><span aria-hidden="true">✳</span> The diagrams are illustrative process visuals, not client screenshots or project deliverables.</p>
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="content-wrap">
            <SectionHeading index="04" label="Experience & education"><span id="experience-title">A path built<br /><em>over time.</em></span></SectionHeading>
            <div className="experience-layout">
              <p className="experience-intro" data-reveal>Client support, data research, quality, and team coordination across different kinds of work.</p>
              <div className="timeline">
                {experience.map((item, index) => (
                  <article className="timeline-item" key={item.role} data-reveal style={{ "--stagger": index } as CSSProperties}>
                    <div className="timeline-marker"><span>0{index + 1}</span></div>
                    <div className="timeline-main">
                      <div className="timeline-heading"><div><h3>{item.role}</h3><p>{item.company} · {item.location}</p></div><time>{item.dates}</time></div>
                      <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="education-block" data-reveal>
              <div className="education-heading"><p className="micro-label">EDUCATION</p><span aria-hidden="true">↘</span></div>
              <div className="education-grid">
                {education.map((item) => (
                  <article className="education-card" key={item.school}>
                    <time>{item.dates}</time><h3>{item.degree}</h3><p>{item.school}</p><span>{item.result}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section achievements-section" id="achievements" aria-labelledby="achievements-title">
          <div className="content-wrap">
            <SectionHeading index="05" label="Selected achievements"><span id="achievements-title">Work that<br /><em>made a mark.</em></span></SectionHeading>
            <p className="section-intro" data-reveal>Outcomes and recognition recorded in my résumé.</p>
            <div className="achievement-grid">
              {achievements.map((item, index) => (
                <article className="achievement-card" key={item.title} data-reveal style={{ "--stagger": index } as CSSProperties}>
                  <span className="achievement-index">0{index + 1} / 06</span>
                  <strong className="achievement-value">{item.value}</strong>
                  <div><h3>{item.title}</h3><p>{item.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="content-wrap">
            <p className="section-label" data-reveal><span>06</span><span aria-hidden="true">—</span>Contact</p>
            <div className="contact-main" data-reveal>
              <h2 id="contact-title">Let’s talk about<br /><em>your next project.</em></h2>
              <p>If you’re looking for careful research, clean data, or dependable operations support, I’d be glad to connect.</p>
              <div className="contact-email-row"><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a><CopyEmail email={profile.email} /></div>
            </div>
            <div className="contact-bottom" data-reveal>
              <div><p className="micro-label">CONTACT</p><a href={`tel:${profile.phoneHref}`}>{profile.phone}</a><span>{profile.location}</span></div>
              <div><p className="micro-label">ELSEWHERE</p><ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink><ExternalLink href={profile.github}>GitHub</ExternalLink><ExternalLink href={profile.portfolio}>Portfolio</ExternalLink></div>
              <a className="button button-primary contact-resume" href={profile.resume} download>Download résumé <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="content-wrap"><span>© {new Date().getFullYear()} {profile.name}</span><span>Lead generation · Data research · Operations support</span><a href="#hero">Back to top ↑</a></div></footer>
    </>
  );
}
import type { CSSProperties, ReactNode } from "react";
