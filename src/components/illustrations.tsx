import { CalendarDays, Check, Headphones } from "lucide-react";

export function HeroIllustration() {
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

export function PracticeIllustration() {
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
          <div className="h-1.5 w-[70%] rounded bg-[#CDEFFF]" />
          <div className="h-1.5 w-[86%] rounded bg-[#7AD9FF]/35" />
          <div className="h-1.5 w-[52%] rounded bg-[#CDEFFF]" />
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

export function HomeCareIllustration() {
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
          <span className="status-pill bg-[#CDEFFF]! text-[#145471]!">Pending</span>
        </div>
        <div className="shift-item">
          <span>Evening visit</span>
          <span>Manager review</span>
          <span className="status-pill bg-[#F3FBFF]! text-[#14384a]!">Needs coverage</span>
        </div>
      </div>
    </div>
  );
}

export function TaskList({ items }: { items: string[] }) {
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
