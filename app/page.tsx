import Link from 'next/link';

const services = [
  {
    title: 'Red Team Operations',
    description: 'Simulate real adversaries to harden critical systems and expose gaps before attackers do.',
  },
  {
    title: 'Cloud Security Posture',
    description: 'Secure AWS, Azure, and hybrid environments with continuous monitoring and policy enforcement.',
  },
  {
    title: 'SOC & Incident Response',
    description: 'Deploy high-velocity detection and rapid response playbooks for executive-level recovery.',
  },
];

const industries = ['Finance', 'Healthcare', 'Critical Infrastructure', 'Government', 'Technology', 'Manufacturing'];

const reasons = [
  'Board-ready reporting and measurable outcomes',
  'Specialists with deep enterprise and regulated industry experience',
  'Operational resilience built into every engagement',
  'Fast, actionable insights that empower decisive action',
];

const process = [
  'Scope & discovery',
  'Attack surface mapping',
  'Validation & exploitation',
  'Executive reporting',
  'Remediation guidance',
];

const certifications = ['ISO 27001', 'NIST CSF', 'SOC 2 Readiness', 'PCI DSS', 'CMMC-aligned'];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(220,38,38,0.2),_transparent_35%)]">
      <header className="section-shell flex items-center justify-between py-6">
        <Link href="/" className="text-xl font-semibold tracking-[0.24em] text-white">
          VKARE
        </Link>
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#services" className="transition hover:text-white">
            Services
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      <section className="section-shell grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-brand-600/30 bg-brand-600/10 px-4 py-2 text-sm font-medium text-brand-100">
            Enterprise security, engineered for resilience
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            Defend what matters with elite cybersecurity leadership.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70 sm:text-xl">
            VKARE Security helps high-growth and regulated organizations reduce risk, uncover blind spots,
            and strengthen operations with precision-led testing and advisory services.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-brand-600 px-6 py-3 font-medium text-white transition hover:bg-brand-700">
              Book a consultation
            </a>
            <a href="#services" className="rounded-full border border-white/15 px-6 py-3 font-medium text-white/80 transition hover:border-brand-600 hover:text-white">
              Explore services
            </a>
          </div>
        </div>

        <div className="panel p-8 shadow-soft">
          <div className="rounded-2xl border border-white/10 bg-black/70 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-400">Threat readiness</p>
            <div className="mt-6 space-y-4">
              {[
                ['Attack surface visibility', '94%'],
                ['Detection coverage', '99.1%'],
                ['Mean time to contain', '11 min'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-white/70">{label}</span>
                  <span className="font-semibold text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell py-16">
        <div className="panel p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">About VKARE</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Security that scales with ambition.
              </h2>
            </div>
            <p className="text-lg leading-8 text-white/70">
              We combine adversarial testing, architecture review, and executive advisory to help security teams
              move from reactive defense to measurable resilience. Our engagements blend technical depth with
              business clarity so leaders can act with confidence.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section-shell py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Built for modern enterprise risk.</h2>
          </div>
          <p className="max-w-2xl text-white/70">
            From offensive testing to governance and response, every service is tailored to your environment,
            maturity, and business priorities.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="panel p-8">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-white/70">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">Industries</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Trusted across regulated and high-value sectors.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span key={industry} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  {industry}
                </span>
              ))}
            </div>
          </div>
          <div className="panel p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">Why VKARE</p>
            <ul className="mt-6 space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white/80">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-600" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="panel p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">Security testing process</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">A disciplined path from assessment to action.</h2>
              <p className="mt-4 max-w-2xl text-white/70">
                Our methodology emphasizes clarity, rigor, and business alignment so stakeholders receive a roadmap
                they can execute immediately.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/50 p-6">
              <ol className="space-y-4">
                {process.map((step, index) => (
                  <li key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="text-white/80">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">Certifications</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Standing aligned with the strongest frameworks.</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <span key={cert} className="rounded-full border border-brand-600/30 bg-brand-600/10 px-4 py-2 text-sm text-brand-100">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div id="contact" className="panel p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Ready to strengthen your security posture?</h2>
            <p className="mt-4 text-white/70">
              Let’s discuss your priorities, compliance needs, and the most effective next step for your team.
            </p>
            <a href="mailto:contact@vkaresecurity.com" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-brand-100">
              contact@vkaresecurity.com
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        <div className="section-shell flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 VKARE Security. All rights reserved.</p>
          <p>Protecting modern organizations with clarity, control, and confidence.</p>
        </div>
      </footer>
    </main>
  );
}
