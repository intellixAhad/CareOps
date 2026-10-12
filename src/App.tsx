"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronDown, ClipboardList, Clock3, Headphones, HeartHandshake, LockKeyhole, Menu, MessageCircle, Phone, ShieldCheck, Sparkles, Stethoscope, UsersRound, X } from "lucide-react";

const contactEmail = process.env.NEXT_PUBLIC_CAREOPS_CONTACT_EMAIL || "intellixsolutionsltd@gmail.com";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Who we help", href: "#who-we-help" },
];

const challenges = [
  { icon: Phone, title: "Missed calls, delayed follow-ups", text: "Patient calls and messages can pile up while your staff is helping the people already in front of them." },
  { icon: CalendarDays, title: "Schedules that keep shifting", text: "Appointment changes, caregiver availability, and shift updates call for steady, ongoing coordination." },
  { icon: ClipboardList, title: "Too much work between the work", text: "Routine administrative tasks take time away from supporting patients, clients, and caregivers." },
];

const practiceTasks = ["Patient call handling", "Appointment scheduling", "Confirmations & reminders", "Voicemail and callback management", "Administrative follow-ups", "Referral coordination"];
const homeCareTasks = ["Caregiver scheduling", "Shift confirmation", "Open-shift coordination", "Schedule change communication", "Visit documentation follow-ups", "Daily coverage reporting"];

const benefits = [
  { icon: ClipboardList, title: "Process-driven support", text: "Agree on repeatable tasks, documented procedures, clear ownership, and clean handoffs." },
  { icon: Clock3, title: "Flexible support", text: "Set coverage windows and workload around your operating schedule before launch." },
  { icon: MessageCircle, title: "Clear communication", text: "Define escalation contacts, response expectations, and recurring updates to fit your workflow." },
  { icon: HeartHandshake, title: "Built around your workflow", text: "Use client-approved tools and access, within agreed administrative responsibilities." },
];

const audiences = [
  { icon: Stethoscope, title: "Independent medical practices", text: "Practical front-office capacity for independent teams." },
  { icon: Sparkles, title: "Specialty clinics", text: "Administrative coordination that fits your specialty." },
  { icon: HeartHandshake, title: "Physical therapy practices", text: "Scheduling and follow-up support for busy clinics." },
  { icon: MessageCircle, title: "Behavioral health practices", text: "Thoughtful administrative support around appointments and messages." },
  { icon: UsersRound, title: "Non-medical home care agencies", text: "Help coordinating caregivers, schedules, and daily operations." },
  { icon: ArrowUpRight, title: "Growing healthcare organizations", text: "Flexible operational support as your needs evolve." },
];

const faqs = [
  { q: "What services does CareOps provide?", a: "CareOps provides remote administrative support for medical practices and non-medical home care agencies. This can include patient calls, appointment coordination, caregiver scheduling, follow-ups, and routine operational reporting." },
  { q: "Do you support medical practices and home care agencies?", a: "Yes. We support both US medical practices and non-medical home care agencies, with responsibilities and workflows scoped to the needs of each organization." },
  { q: "How does remote healthcare administrative support work?", a: "We learn how your team works, agree on tasks and communication protocols, and coordinate support remotely through approved systems and documented processes." },
  { q: "Can you work with our existing scheduling or practice management software?", a: "Access depends on the software, your approval, and the appropriate security and contractual arrangements. We discuss system requirements before any work begins." },
  { q: "Can we customize the support around our workflow?", a: "Yes. Responsibilities, coverage arrangements, escalation rules, and reporting can be defined together around your workflow and operational requirements." },
  {
    q: "How do you approach patient privacy and information security?",
    a: "We aim to establish clear access controls, documented procedures, appropriate training, and secure client-approved workflows. Applicable requirements and Business Associate Agreements will be addressed where required before relevant services begin.",
  },
  { q: "How do we get started?", a: "Start by telling us about your organization and where support would be useful. We can discuss your current process, systems, and a practical starting point." },
  { q: "What do we agree on before support starts?", a: "We define the tasks in and out of scope, coverage windows, approved systems and access, escalation contacts, and the updates or reports that are useful to your team." },
  { q: "Who handles clinical questions or decisions?", a: "CareOps provides administrative support only. Clinical judgment, triage, diagnosis, treatment, and care decisions stay with your qualified staff; we follow your agreed routing instructions for clinical questions." },
];

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#top" className="inline-flex items-center no-underline" aria-label="CareOps home">
      <img src={inverse ? "/images/careops-logo-inverse.png" : "/images/careops-logo.png"} alt="" width="1334" height="294" className="brand-logo" decoding="async" />
    </a>
  );
}

function HeroIllustration() {
  return (
    <div className="hero-art" aria-label="Illustration of a weekly administrative schedule and coordination notes" role="img">
      <div className="hero-orbit" />
      <div className="schedule-window">
        <div className="window-top">
          <div className="flex items-center gap-3">
            <span className="window-dot">
              <i />
              <i />
              <i />
            </span>
            <span className="text-[10px] font-bold text-[#28464d]">Weekly coordination</span>
          </div>
          <span className="rounded-full bg-[#CDEFFF] px-2.5 py-1 text-[8px] font-semibold text-[#0E6284]">Illustrative</span>
        </div>
        <div className="schedule-body">
          <div className="schedule-days">
            <span />
            <span>MON</span>
            <span>TUE</span>
            <span>WED</span>
            <span>THU</span>
            <span>FRI</span>
          </div>
          <div className="schedule-row">
            <strong>Front desk</strong>
            <span className="slot">Call backs</span>
            <span className="slot dark">Clinic hours</span>
            <span className="slot">Reminders</span>
            <span />
            <span className="slot">Follow-ups</span>
          </div>
          <div className="schedule-row">
            <strong>Care team</strong>
            <span />
            <span className="slot gold">Confirm shift</span>
            <span className="slot">Coverage</span>
            <span className="slot dark">Schedule</span>
            <span className="slot">Check-in</span>
          </div>
          <div className="schedule-row">
            <strong>Messages</strong>
            <span className="slot">Review</span>
            <span />
            <span className="slot gold">Route</span>
            <span className="slot">Callbacks</span>
            <span />
          </div>
        </div>
      </div>
      <div className="float-card float-appointment">
        <div className="flex items-center justify-between">
          <span className="mini-label">Appointment</span>
          <CalendarDays size={13} className="text-[#0E6284]" />
        </div>
        <p className="mt-2 mb-2 text-[11px] font-bold text-[#193847]">Confirmation needed</p>
        <div className="flex items-center justify-between">
          <span className="text-[8px] text-[#76877f]">Routine follow-up</span>
          <span className="status-pill">Pending</span>
        </div>
      </div>
      <div className="float-card float-shift">
        <div className="flex items-center justify-between">
          <span className="mini-label">Shift coordination</span>
          <span className="status-pill">Confirmed</span>
        </div>
        <div className="mt-3 flex items-center gap-2.5">
          <span className="tiny-person">AM</span>
          <div>
            <p className="m-0 text-[9px] font-bold text-[#193847]">Care team update</p>
            <p className="m-0 mt-1 text-[8px] text-[#76877f]">Schedule noted for Tuesday</p>
          </div>
        </div>
      </div>
      <div className="float-phone" aria-hidden="true">
        <Headphones size={20} />
      </div>
    </div>
  );
}

function PracticeIllustration() {
  return (
    <div className="line-art" role="img" aria-label="Illustrative appointment calendar and patient communication queue">
      <div className="mini-panel mini-calendar">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-[#213f49]">Appointments</span>
          <CalendarDays size={14} className="text-[#0E6284]" />
        </div>
        <div className="week-strip">
          <span>
            MON
            <br />
            <b>12</b>
          </span>
          <span>
            TUE
            <br />
            <b>13</b>
          </span>
          <span>
            WED
            <br />
            <b>14</b>
          </span>
          <span>
            THU
            <br />
            <b>15</b>
          </span>
          <span>
            FRI
            <br />
            <b>16</b>
          </span>
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-[6px] w-[70%] rounded bg-[#CDEFFF]" />
          <div className="h-[6px] w-[86%] rounded bg-[#7AD9FF]/35" />
          <div className="h-[6px] w-[52%] rounded bg-[#CDEFFF]" />
        </div>
      </div>
      <div className="mini-panel queue-card">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[9px] font-bold text-[#213f49]">Message queue</span>
          <span className="status-pill">Illustrative</span>
        </div>
        <div className="thin-row">
          <span>Voicemail follow-up</span>
          <span className="text-[#ac8248]">To route</span>
        </div>
        <div className="thin-row">
          <span>Appointment request</span>
          <span className="text-[#0E6284]">Noted</span>
        </div>
        <div className="thin-row">
          <span>Referral coordination</span>
          <span className="text-[#0E6284]">In process</span>
        </div>
      </div>
    </div>
  );
}

function HomeCareIllustration() {
  return (
    <div className="line-art" role="img" aria-label="Illustrative caregiver schedule showing confirmed, pending, and coverage-needed statuses">
      <div className="mini-panel shift-board">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-[#213f49]">Care team schedule</span>
            <p className="m-0 mt-1 text-[8px] text-[#819088]">Coordination view · example only</p>
          </div>
          <CalendarDays size={16} className="text-[#0E6284]" />
        </div>
        <div className="shift-item font-semibold text-[#87948d]">
          <span>VISIT</span>
          <span>ASSIGNMENT</span>
          <span>STATUS</span>
        </div>
        <div className="shift-item">
          <span>Morning visit</span>
          <span>Caregiver A.</span>
          <span className="status-pill">Confirmed</span>
        </div>
        <div className="shift-item">
          <span>Afternoon</span>
          <span>Caregiver M.</span>
          <span className="status-pill !bg-[#CDEFFF] !text-[#145471]">Pending</span>
        </div>
        <div className="shift-item">
          <span>Evening visit</span>
          <span>Manager review</span>
          <span className="status-pill !bg-[#F3FBFF] !text-[#14384a]">Needs coverage</span>
        </div>
      </div>
    </div>
  );
}

function TaskList({ items }: { items: string[] }) {
  return (
    <ul className="grid list-none grid-cols-1 gap-y-3 p-0 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[13px] text-[#405861]">
          <Check size={15} className="mt-0.5 shrink-0 text-[#0E6284]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const currentYear = 2026;
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top" className="site-shell">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-3">
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-[#CDEFFF]/90 bg-[#F3FBFF]/90 backdrop-blur-md">
        <div className="container-wide flex h-[76px] items-center justify-between">
          <Brand />
          <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-[12px] font-semibold text-[#405861] no-underline transition-colors hover:text-[#0E6284]">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden items-center gap-2 rounded-sm bg-[#14384a] px-5 py-3 text-[11px] font-bold tracking-wide text-[#fffef8] no-underline transition hover:bg-[#0c2d40] md:inline-flex">
            Book a discovery call <ArrowUpRight size={14} />
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md border border-[#CDEFFF] text-[#1b3a49] md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            data-testid="button-mobile-menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="mobile-menu border-t border-[#CDEFFF] bg-[#F3FBFF] px-[18px] py-4 md:hidden">
            <div className="mx-auto flex max-w-[720px] flex-col gap-1">
              {navLinks.map((link) => (
                <a key={link.href} onClick={closeMenu} href={link.href} className="rounded px-3 py-3 text-sm font-semibold text-[#405861] no-underline hover:bg-[#CDEFFF]">
                  {link.label}
                </a>
              ))}
              <a onClick={closeMenu} href="#contact" className="mt-2 flex items-center justify-center gap-2 rounded-sm bg-[#14384a] px-5 py-3 text-sm font-bold text-white no-underline">
                Book a discovery call <ArrowUpRight size={15} />
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="main-content">
        <section className="relative overflow-hidden bg-[#F3FBFF]">
          <div className="pointer-events-none absolute -right-40 -top-60 h-[580px] w-[580px] rounded-full border border-[#CDEFFF] opacity-80" />
          <div className="container-wide hero-grid grid min-h-[640px] items-center gap-5 py-14 lg:grid-cols-[.98fr_1.02fr] lg:py-[62px]">
            <div className="hero-copy relative z-10 reveal">
              <div className="eyebrow mb-7">Healthcare operations, simplified</div>
              <h1 className="display-font mb-6 max-w-[620px] text-[clamp(43px,5.6vw,72px)] font-semibold leading-[1.02] text-[#17384a]">
                Your healthcare operations team, <span className="text-[#0E6284]">without the extra overhead.</span>
              </h1>
              <p className="mb-8 max-w-[530px] text-[16px] leading-[1.8] text-[#556a70]">CareOps helps US medical practices and home care agencies manage calls, appointments, caregiver schedules, and everyday administrative tasks through reliable remote support.</p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="#contact" className="inline-flex min-h-[50px] items-center gap-3 bg-[#14384a] px-6 text-[12px] font-bold text-[#fffef8] no-underline transition hover:bg-[#0c2d40]">
                  Book a discovery call <ArrowRight size={15} />
                </a>
                <a href="#services" className="inline-flex min-h-[50px] items-center gap-2 border border-[#91cde5] px-5 text-[12px] font-bold text-[#274955] no-underline transition hover:border-[#0E6284] hover:bg-white/55">
                  Explore our services <ArrowDownRight size={15} />
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#CDEFFF] pt-5 text-[10px] font-semibold uppercase tracking-[.08em] text-[#5d706d]">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7AD9FF]" />
                  Trained remote support team
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7AD9FF]" />
                  Flexible operational coverage
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7AD9FF]" />
                  Process-driven workflows
                </span>
              </div>
            </div>
            <div className="reveal delay-2">
              <HeroIllustration />
            </div>
          </div>
          <div className="container-wide pb-5 text-right text-[9px] tracking-wide text-[#73847c]">Illustrative workflow mockup — not a CareOps software product.</div>
        </section>

        <section id="about" className="section-pad bg-[#CDEFFF] text-[#17384a]">
          <div className="container-wide">
            <div className="grid items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-14">
              <div>
                <div className="eyebrow mb-5">The CareOps difference</div>
                <h2 className="display-font mb-5 max-w-[500px] text-[clamp(34px,4vw,50px)] font-semibold leading-[1.08]">An extension of your team, not just another vendor.</h2>
                <p className="m-0 max-w-[470px] text-[14px] leading-[1.8] text-[#405b69]">
                  CareOps provides remote administrative support to US medical practices and non-medical home care agencies through a trained team based in Bangladesh. We work within client-approved systems and documented workflows; clinical judgment and patient care remain with your qualified
                  staff.
                </p>
              </div>
              <figure className="about-photo-frame m-0">
                <img src="/images/careops-clinic-coordination.jpg" alt="Two healthcare office colleagues reviewing an appointment schedule together" className="about-photo" loading="lazy" decoding="async" />
              </figure>
            </div>
            <div className="mt-12 grid gap-x-8 gap-y-8 border-t border-[#91cde5] pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="pt-1">
                  <div className="mb-5 flex items-center justify-between">
                    <Icon size={20} strokeWidth={1.5} className="text-[#0E6284]" />
                    <span className="text-[9px] tracking-[.12em] text-[#3f83a0]">0{index + 1}</span>
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold text-[#17384a]">{title}</h3>
                  <p className="m-0 text-[12px] leading-[1.8] text-[#405b69]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#F3FBFF]">
          <div className="container-wide">
            <div className="grid gap-8 md:grid-cols-[.82fr_1.18fr] md:items-end">
              <div>
                <div className="eyebrow mb-5">The operational reality</div>
                <h2 className="display-font max-w-[470px] text-[clamp(34px,4vw,50px)] font-semibold leading-[1.1] text-[#17384a]">Healthcare runs on more than patient care.</h2>
              </div>
              <p className="mb-1 max-w-[480px] text-[15px] leading-[1.8] text-[#657773]">Calls, scheduling changes, follow-ups, and daily coordination can quickly overwhelm an already busy team.</p>
            </div>
            <div className="mt-12 grid border-y border-[#dde5dc] md:grid-cols-3">
              {challenges.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className={`group border-b border-[#dde5dc] px-1 py-8 md:border-b-0 md:px-8 md:py-10 ${index !== 0 ? "md:border-l" : ""}`}>
                  <Icon size={22} strokeWidth={1.5} className="mb-7 text-[#0E6284]" />
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[.12em] text-[#9a7c4e]">0{index + 1}</p>
                  <h3 className="display-font mb-3 max-w-[270px] text-[22px] font-semibold leading-[1.2] text-[#193b49]">{title}</h3>
                  <p className="m-0 max-w-[300px] text-[13px] leading-[1.75] text-[#687b77]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-pad bg-[#CDEFFF]">
          <div className="container-wide">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="eyebrow mb-5">What we do</div>
                <h2 className="display-font max-w-[590px] text-[clamp(34px,4vw,51px)] font-semibold leading-[1.08] text-[#17384a]">Reliable support for your daily operations.</h2>
              </div>
              <p className="mb-1 max-w-[320px] text-[14px] leading-[1.7] text-[#63766f]">Choose the operational support that fits your healthcare business.</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="relative overflow-hidden bg-[#F3FBFF] p-7 sm:p-9">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-[#7AD9FF]/25" />
                <div className="relative">
                  <div className="mb-8 flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center bg-[#CDEFFF] text-[#0E6284]">
                      <Stethoscope size={22} strokeWidth={1.6} />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[.14em] text-[#3f83a0]">01 / Practice support</span>
                  </div>
                  <h3 className="display-font mb-3 text-[30px] font-semibold tracking-[-.04em] text-[#193b49]">Medical practice support</h3>
                  <p className="mb-7 max-w-[455px] text-[13px] leading-[1.8] text-[#667871]">Give your front desk dependable support for patient communication, appointment management, and routine administrative work.</p>
                  <TaskList items={practiceTasks} />
                  <a href="#practice-support" className="mt-8 inline-flex items-center gap-2 border-b border-[#0E6284] pb-1.5 text-[11px] font-bold text-[#0E6284] no-underline">
                    Explore medical practice support <ArrowRight size={14} />
                  </a>
                </div>
              </article>
              <article className="relative overflow-hidden bg-[#17384a] p-7 text-[#f9f8f1] sm:p-9">
                <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full border border-[#52766f]/60" />
                <div className="absolute -right-2 -top-7 h-40 w-40 rounded-full border border-[#52766f]/40" />
                <div className="relative">
                  <div className="mb-8 flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center bg-[#285264] text-[#abd5c4]">
                      <UsersRound size={22} strokeWidth={1.6} />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[.14em] text-[#9fc9b8]">02 / Agency operations</span>
                  </div>
                  <h3 className="display-font mb-3 text-[30px] font-semibold tracking-[-.04em] text-[#f9f8f1]">Home care agency operations</h3>
                  <p className="mb-7 max-w-[455px] text-[13px] leading-[1.8] text-[#c3d1cc]">Keep schedules organized, coordinate caregiver availability, and stay on top of daily home care operations.</p>
                  <ul className="grid list-none grid-cols-1 gap-y-3 p-0 sm:grid-cols-2">
                    {homeCareTasks.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13px] text-[#d5e0db]">
                        <Check size={15} className="mt-0.5 shrink-0 text-[#8ec7b2]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#home-care-support" className="mt-8 inline-flex items-center gap-2 border-b border-[#91c8b4] pb-1.5 text-[11px] font-bold text-[#b4decd] no-underline">
                    Explore home care support <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="practice-support" className="section-pad bg-[#F3FBFF]">
          <div className="container-wide grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div className="order-2 lg:order-1">
              <PracticeIllustration />
              <p className="mt-3 text-right text-[9px] text-[#78877e]">Illustrative coordination mockup</p>
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <div className="eyebrow mb-5">01 — Medical practice support</div>
              <h2 className="display-font mb-5 max-w-[480px] text-[clamp(34px,4vw,49px)] font-semibold leading-[1.08] text-[#17384a]">Give your front desk room to breathe.</h2>
              <p className="mb-7 max-w-[490px] text-[14px] leading-[1.85] text-[#647670]">
                Routine patient calls, scheduling, reminders, callbacks, and administrative coordination all need attention. CareOps can help keep those tasks moving, with communication routed according to your team’s protocols.
              </p>
              <div className="mb-8 border-l-2 border-[#c4dacf] pl-5 text-[12px] leading-[1.8] text-[#63746e]">Support is administrative only. CareOps does not provide medical advice, diagnosis, or clinical care.</div>
              <a href="#contact" className="inline-flex items-center gap-2 text-[12px] font-bold text-[#0E6284] no-underline">
                Discuss practice support <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section id="home-care-support" className="section-pad bg-[#CDEFFF]">
          <div className="container-wide grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="eyebrow mb-5">02 — Home care agency operations</div>
              <h2 className="display-font mb-5 max-w-[500px] text-[clamp(34px,4vw,49px)] font-semibold leading-[1.08] text-[#17384a]">Keep every schedule moving forward.</h2>
              <p className="mb-7 max-w-[495px] text-[14px] leading-[1.85] text-[#647670]">CareOps can help agencies coordinate caregiver availability, follow up on unconfirmed shifts, communicate schedule changes, and bring uncovered shifts to the appropriate manager for escalation.</p>
              <ul className="mb-8 list-none space-y-3 p-0">
                {["Caregiver and client communication", "Schedule monitoring and escalation", "Administrative follow-ups and visit documentation tracking"].map((text) => (
                  <li key={text} className="flex items-center gap-3 text-[12px] text-[#435a60]">
                    <Check size={15} className="text-[#0E6284]" />
                    {text}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 text-[12px] font-bold text-[#0E6284] no-underline">
                Discuss home care support <ArrowRight size={15} />
              </a>
            </div>
            <div>
              <HomeCareIllustration />
              <p className="mt-3 text-right text-[9px] text-[#78877e]">Illustrative schedule mockup — not a live system.</p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section-pad bg-[#F3FBFF]">
          <div className="container-wide">
            <div className="mb-14 max-w-[610px]">
              <div className="eyebrow mb-5">A considered start</div>
              <h2 className="display-font mb-4 text-[clamp(34px,4vw,51px)] font-semibold leading-[1.08] text-[#17384a]">Simple to start. Structured to scale.</h2>
              <p className="m-0 max-w-[490px] text-[14px] leading-[1.8] text-[#657773]">A strong support relationship starts with clarity: what needs doing, how it gets done, and when to bring your team in.</p>
            </div>
            <div className="grid gap-0 md:grid-cols-3">
              {[
                ["01", "Understand your workflow", "We learn about your current processes, workload, systems, and operational challenges."],
                ["02", "Build your support process", "Before launch, we define task boundaries, coverage windows, approved system access, escalation contacts, and reporting expectations."],
                ["03", "Launch and improve", "Our team follows the agreed workflows, routes exceptions as directed, and reviews activity and open items with you."],
              ].map(([number, title, text], index) => (
                <article key={number} className={`relative border-t border-[#cfdcd1] pt-7 pb-3 md:pr-10 ${index > 0 ? "md:pl-8" : ""}`}>
                  <span className="absolute -top-[9px] left-0 h-[17px] w-[17px] rounded-full border-[4px] border-[#F3FBFF] bg-[#0E6284] md:left-auto md:right-auto" />
                  <span className="mb-5 block text-[11px] font-bold tracking-[.14em] text-[#a17e4e]">{number}</span>
                  <h3 className="display-font mb-3 text-[22px] font-semibold text-[#193b49]">{title}</h3>
                  <p className="m-0 max-w-[320px] text-[13px] leading-[1.8] text-[#657773]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="who-we-help" className="section-pad bg-[#F3FBFF]">
          <div className="container-wide">
            <div className="mb-11 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <div className="eyebrow mb-5">Who we help</div>
                <h2 className="display-font max-w-[650px] text-[clamp(34px,4vw,50px)] font-semibold leading-[1.08] text-[#17384a]">Built for healthcare teams that need more capacity.</h2>
              </div>
              <p className="m-0 max-w-[290px] text-[13px] leading-[1.75] text-[#657773]">US-based practices and agencies looking for a dependable operational partner.</p>
            </div>
            <div className="grid border-l border-t border-[#dfe7dd] sm:grid-cols-2 lg:grid-cols-3">
              {audiences.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="group border-b border-r border-[#dfe7dd] p-6 sm:p-7 transition-colors hover:bg-[#f2f5ed]">
                  <div className="mb-5 flex items-center justify-between">
                    <Icon size={20} strokeWidth={1.5} className="text-[#0E6284]" />
                    <span className="text-[9px] text-[#3f83a0]">0{index + 1}</span>
                  </div>
                  <h3 className="mb-2 text-[15px] font-bold text-[#1c3d4a]">{title}</h3>
                  <p className="m-0 text-[12px] leading-[1.7] text-[#687a73]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="privacy-note" className="bg-[#CDEFFF] py-16">
          <div className="container-wide grid gap-7 md:grid-cols-[auto_1fr] md:items-start">
            <div className="privacy-mark">
              <ShieldCheck size={20} strokeWidth={1.5} />
            </div>
            <div className="max-w-[890px]">
              <div className="eyebrow mb-4">Privacy &amp; security</div>
              <h2 className="display-font mb-4 text-[clamp(28px,3.2vw,39px)] font-semibold leading-tight text-[#17384a]">Privacy and security are part of the process.</h2>
              <p className="mb-3 text-[13px] leading-[1.8] text-[#526b68]">
                Healthcare operations require careful handling of sensitive information. CareOps aims to establish clear access controls, documented procedures, appropriate training, and secure client-approved workflows before handling protected information.
              </p>
              <p className="m-0 text-[12px] leading-[1.8] text-[#657773]">Applicable privacy and security requirements, contractual arrangements, and Business Associate Agreements will be addressed where required before relevant services begin. CareOps does not claim HIPAA certification.</p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#F3FBFF]">
          <div className="container-wide grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <div className="eyebrow mb-5">A few helpful answers</div>
              <h2 className="display-font mb-4 text-[clamp(34px,4vw,48px)] font-semibold leading-[1.08] text-[#17384a]">Questions, answered.</h2>
              <p className="max-w-[330px] text-[13px] leading-[1.8] text-[#657773]">Want to talk through a particular workflow? We can start there.</p>
              <a href="#contact" className="mt-3 inline-flex items-center gap-2 text-[12px] font-bold text-[#0E6284] no-underline">
                Talk with our team <ArrowRight size={15} />
              </a>
            </div>
            <div className="border-t border-[#CDEFFF]">
              {faqs.map(({ q, a }, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={q} className="border-b border-[#CDEFFF]">
                    <h3 className="m-0">
                      <button
                        id={`faq-trigger-${index}`}
                        aria-controls={`faq-panel-${index}`}
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-5 py-5 text-left text-[13px] font-bold text-[#274653]"
                        data-testid={`button-faq-${index}`}
                      >
                        <span>{q}</span>
                        <ChevronDown size={17} className={`shrink-0 text-[#0E6284] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </h3>
                    <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-trigger-${index}`} className="accordion-content" data-open={isOpen}>
                      <div>
                        <p className="mb-5 max-w-[690px] pr-8 text-[12px] leading-[1.8] text-[#657773]">{a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#17384a] py-[90px] text-[#f8f7f0]">
          <div className="container-wide grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div className="lg:pt-6">
              <div className="eyebrow !text-[#9dcbb8] mb-5">Start a conversation</div>
              <h2 className="display-font mb-5 max-w-[520px] text-[clamp(38px,4.7vw,57px)] font-semibold leading-[1.04]">Let’s make your healthcare operations easier.</h2>
              <p className="mb-9 max-w-[430px] text-[14px] leading-[1.8] text-[#c4d1cc]">Tell us where your team needs support. We’ll discuss your workflow and identify a practical starting point.</p>
              <div className="flex items-start gap-4 border-t border-[#49616b] pt-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#658279] text-[#add3c2]">
                  <LockKeyhole size={16} />
                </span>
                <div>
                  <p className="mb-1 text-[11px] font-bold text-[#f6f5ee]">A note on your information</p>
                  <p className="m-0 max-w-[310px] text-[11px] leading-[1.7] text-[#b4c4be]">Messages are sent securely through a free form email gateway and delivered to your inbox.</p>
                </div>
              </div>
              <p className="mt-7 text-[11px] text-[#afc1bb]">
                Prefer email?{" "}
                <a href={`mailto:${contactEmail}`} className="font-semibold text-[#b4decd] underline underline-offset-4">
                  {contactEmail}
                </a>
              </p>
            </div>
            <form action="https://formsubmit.co/intellixsolutionsltd@gmail.com" method="POST" className="bg-[#F3FBFF] p-6 text-[#17384a] sm:p-9" noValidate={false}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New CareOps inquiry" />
              <input type="text" name="_honey" style={{ display: "none" }} />
              <div className="mb-7 flex items-center justify-between border-b border-[#CDEFFF] pb-5">
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[.14em] text-[#0E6284]">Tell us about your team</p>
                  <p className="m-0 text-[11px] text-[#78877f]">All fields marked * are required.</p>
                </div>
                <MessageCircle size={19} className="text-[#0E6284]" />
              </div>
              <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-[11px] font-bold text-[#35505a]">
                  Full name *<input required name="name" autoComplete="name" className="h-11 border border-[#a9d9ed] bg-white px-3 text-[12px] font-normal outline-none focus:border-[#0E6284]" placeholder="Your name" data-testid="input-name" />
                </label>
                <label className="grid gap-1.5 text-[11px] font-bold text-[#35505a]">
                  Work email *<input required type="email" name="email" autoComplete="email" className="h-11 border border-[#a9d9ed] bg-white px-3 text-[12px] font-normal outline-none focus:border-[#0E6284]" placeholder="you@organization.com" data-testid="input-email" />
                </label>
                <label className="grid gap-1.5 text-[11px] font-bold text-[#35505a]">
                  Company name *<input required name="company" autoComplete="organization" className="h-11 border border-[#a9d9ed] bg-white px-3 text-[12px] font-normal outline-none focus:border-[#0E6284]" placeholder="Organization" data-testid="input-company" />
                </label>
                <label className="grid gap-1.5 text-[11px] font-bold text-[#35505a]">
                  Company type *
                  <select required name="companyType" defaultValue="" className="h-11 border border-[#a9d9ed] bg-white px-3 text-[12px] font-normal text-[#53666a] outline-none focus:border-[#0E6284]" data-testid="select-company-type">
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Medical practice</option>
                    <option>Home care agency</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="grid gap-1.5 text-[11px] font-bold text-[#35505a] sm:col-span-2">
                  Support needed *<input required name="supportNeeded" className="h-11 border border-[#a9d9ed] bg-white px-3 text-[12px] font-normal outline-none focus:border-[#0E6284]" placeholder="e.g. appointment coordination, caregiver scheduling" data-testid="input-support-needed" />
                </label>
                <label className="grid gap-1.5 text-[11px] font-bold text-[#35505a] sm:col-span-2">
                  Message *
                  <textarea required name="message" rows={4} className="resize-y border border-[#a9d9ed] bg-white px-3 py-3 text-[12px] font-normal outline-none focus:border-[#0E6284]" placeholder="A little about your current workflow and where you need support..." data-testid="input-message" />
                </label>
              </div>
              <button type="submit" className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 bg-[#14384a] px-5 text-[12px] font-bold text-white transition hover:bg-[#0c2d40]" data-testid="button-submit-contact">
                Send inquiry <ArrowRight size={15} />
              </button>
              <p className="mt-3 text-[9px] leading-[1.6] text-[#78877f]">Please do not include patient, client, or other sensitive health information in this form.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#102d3d] text-[#f5f4ec]">
        <div className="container-wide grid gap-10 py-12 md:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <Brand inverse />
            <p className="mt-4 max-w-[300px] text-[11px] leading-[1.8] text-[#b4c3bd]">Remote administrative support for US healthcare organizations, delivered by a trained team based in Bangladesh.</p>
            <p className="mt-4 max-w-[310px] text-[10px] leading-[1.7] text-[#98ada5]">CareOps supports administrative operations only; we do not provide clinical care or medical advice.</p>
          </div>
          <div>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[.14em] text-[#9bcbb7]">Services</h2>
            <ul className="m-0 list-none space-y-3 p-0 text-[11px] text-[#d2ddd7]">
              <li>
                <a href="#practice-support" className="text-inherit no-underline hover:text-white">
                  Medical practice support
                </a>
              </li>
              <li>
                <a href="#home-care-support" className="text-inherit no-underline hover:text-white">
                  Home care operations
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-inherit no-underline hover:text-white">
                  How it works
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[.14em] text-[#7AD9FF]">Explore</h2>
            <ul className="m-0 list-none space-y-3 p-0 text-[11px] text-[#d2ddd7]">
              <li>
                <a href="#who-we-help" className="text-inherit no-underline hover:text-white">
                  Who we help
                </a>
              </li>
              <li>
                <a href="#about" className="text-inherit no-underline hover:text-white">
                  About CareOps
                </a>
              </li>
              <li>
                <a href="#contact" className="text-inherit no-underline hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-wide flex flex-col gap-3 border-t border-[#36505c] py-5 text-[9px] text-[#9db0a9] sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">© {currentYear} CareOps. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#privacy-note" className="text-inherit no-underline hover:text-white">
              Privacy &amp; security
            </a>
            <span>
              Privacy policy <span className="text-[#81968e]">(to be provided)</span>
            </span>
            <span>
              Terms of service <span className="text-[#81968e]">(to be provided)</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
