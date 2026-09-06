import { notFound } from 'next/navigation';
import { LogoMark, Logo, OUTLINE_FLOOR } from '@/components/marks/Logo';
import { PhoneFrame, TabletFrame, Crop, Mock } from '@/components/app/frames';
import { CycleCard } from '@/components/app/member/CycleCard';
import { TermPlansCard, DAY_ONE_ROWS } from '@/components/app/member/TermPlansCard';
import { ClearsFromFooter } from '@/components/app/member/ClearsFromFooter';
import { ApproveScreen } from '@/components/app/member/ApproveScreen';
import { ChargeNotification } from '@/components/app/member/ChargeNotification';
import { HomeScreen } from '@/components/app/member/HomeScreen';
import { CreditCard } from '@/components/app/member/CreditCard';
import { MoveMoneyModal } from '@/components/app/member/MoveMoneyModal';
import { MilestoneRow } from '@/components/app/member/MilestoneRow';
import { PermissionsPane } from '@/components/app/member/PermissionsPane';
import {
  CounterHome,
  NewCharge,
  ShowTheCode,
  WaitingState,
  ConfirmedState,
} from '@/components/app/merchant/CounterScreens';
import {
  ChargesList,
  PayoutsPanel,
  TermsCards,
  RefundStep,
  DirectoryListing,
} from '@/components/app/merchant/Panels';
import { CHARGE, LIMITS } from '@/components/app/data';

/* Dev only (§3). Absent from the sitemap, disallowed in robots.txt, never
   linked, and 404 in production — Next has no way to drop a route from the
   build itself, so the guard is the exclusion. Set KITCHEN_SINK=1 to expose
   it on a preview deploy, which is how Phase 2.5 gets reviewed without
   shipping it to useclear.org. */

const VISIBLE = process.env.NODE_ENV !== 'production' || process.env.KITCHEN_SINK === '1';

export const metadata = { title: 'Kitchen sink', robots: { index: false, follow: false } };

const SIZES = [16, 21, 28, 40, 64, 120, 220];

export default function KitchenSink() {
  if (!VISIBLE) notFound();

  return (
    <div className="wrap section">
      <div className="grid12">
        <p className="rail rail-note">dev / kitchen sink</p>
        <div className="content" style={{ display: 'grid', gap: 'var(--spacing-6)' }}>
          <div>
            <h1 className="d2">Kitchen sink</h1>
            <p className="t-lede" style={{ marginTop: 'var(--spacing-2)' }}>
              The mark, and every screen in <code>components/app/</code>. Ported from the three
              references; the app&rsquo;s own palette, type and density are preserved inside every
              frame.
            </p>
          </div>

          {/* ── Mark ──────────────────────────────────────────────── */}
          <Section title="Mark" note={`solid below ${OUTLINE_FLOOR}px, outline at and above it`}>
            <Row>
              {SIZES.map((s) => (
                <Cell key={s} label={`${s}px`}>
                  <LogoMark size={s} />
                </Cell>
              ))}
            </Row>
            <Row>
              {[21, 40, 64].map((s) => (
                <Cell key={s} label={`lockup ${s}px`}>
                  <Logo size={s} />
                </Cell>
              ))}
            </Row>
          </Section>

          {/* ── Member ────────────────────────────────────────────── */}
          <Section
            title="Member — cycle card, four states"
            note="border carries the state · green only when everything is at zero"
          >
            <Row>
              <Cell label="carrying unsecured, deposit short">
                <Crop label="Cycle card, deposit falls short"><CycleCard state="short" /></Crop>
              </Cell>
              <Cell label="carrying unsecured, deposit covers it">
                <Crop label="Cycle card, deposit covers it"><CycleCard state="covered" /></Crop>
              </Cell>
            </Row>
            <Row>
              <Cell label="carrying only your own savings">
                <Crop label="Cycle card, own savings drawn"><CycleCard state="own-savings" /></Crop>
              </Cell>
              <Cell label="nothing carried — the only green">
                <Crop label="Cycle card, all clear"><CycleCard state="clear" /></Crop>
              </Cell>
            </Row>
          </Section>

          <Section title="Member — term plans and the clears-from footer">
            <Row>
              {/* 400px rather than the 340px card width: at 340 the footer
                  ellipsises to "Clears from C…", which is what the app really
                  does on a phone but defeats a spec sheet whose whole job is
                  to show the line in full. The phone mockups keep the
                  truncation, because that is the truth there. */}
              <Mock caption="Term plans · shelf with the locked ELPA">
                <Crop label="Term plans shelf" width={400}>
                  <TermPlansCard used={CHARGE.amount} rows={DAY_ONE_ROWS} />
                </Crop>
              </Mock>
              <Mock caption="Clears-from footer · the quietest thing on the card">
                <Crop label="Clears-from footer" width={400}>
                  <ClearsFromFooter />
                </Crop>
              </Mock>
              <Mock caption="Credit line · drawn cheapest first">
                <Crop label="Credit line, drawn cheapest first">
                  <CreditCard />
                </Crop>
              </Mock>
            </Row>
          </Section>

          <Section title="Member — day one, two arrivals" note="same components, reversed order">
            <Row>
              <Mock caption="Home · signed up at a shop">
                <PhoneFrame label="Member home on day one, signed up at a shop">
                  <HomeScreen arrival="counter" />
                </PhoneFrame>
              </Mock>
              <Mock caption="Home · signed up directly">
                <PhoneFrame label="Member home on day one, signed up directly">
                  <HomeScreen arrival="direct" />
                </PhoneFrame>
              </Mock>
              <Mock caption="The charge arrives · text, email and push">
                <PhoneFrame label="The text a member receives when a charge is raised">
                  <ChargeNotification />
                </PhoneFrame>
              </Mock>
            </Row>
          </Section>

          <Section
            title="Member — approve a charge"
            note="the split is chosen here, never on the merchant device · interactive on the right"
          >
            <Row>
              <Mock caption="Approve · static, split in 4">
                <PhoneFrame label="Approve a charge">
                  <ApproveScreen />
                </PhoneFrame>
              </Mock>
              <Mock caption="Approve · the split chooser, live">
                <PhoneFrame label="Approve a charge, with a working split chooser">
                  <ApproveScreen interactive />
                </PhoneFrame>
              </Mock>
            </Row>
          </Section>

          <Section
            title="Member — move money"
            note="keypad in its own 216px column so amount, route and summary stay one read"
          >
            <div className="wide-only">
              <Mock caption="Move money · desktop">
                <div className="app app-crop" role="img" aria-label="Move money modal, desktop" style={{ width: 640 }}>
                  <MoveMoneyModal />
                </div>
              </Mock>
            </div>
            <Row>
              <Mock caption="Move money · phone">
                <PhoneFrame label="Move money modal on a phone">
                  <MoveMoneyModal layout="phone" />
                </PhoneFrame>
              </Mock>
              <Mock caption="Credits · the five milestones">
                <PhoneFrame label="Equity credits and the five milestones">
                  <MilestoneRow />
                </PhoneFrame>
              </Mock>
              <Mock caption="Settings › Advanced › Permissions">
                <PhoneFrame label="Standing permissions">
                  <PermissionsPane />
                </PhoneFrame>
              </Mock>
            </Row>
          </Section>

          {/* ── Merchant ──────────────────────────────────────────── */}
          <Section
            title="Merchant — counter home, three states"
            note="guidance retires itself · each panel is replaced by the activity it stood in for"
          >
            <Mock caption="Counter home · day one">
              <TabletFrame label="Merchant counter home on day one"><CounterHome state="day-one" /></TabletFrame>
            </Mock>
            <Mock caption="Counter home · early">
              <TabletFrame label="Merchant counter home, a few charges in"><CounterHome state="early" /></TabletFrame>
            </Mock>
            <Mock caption="Counter home · running">
              <TabletFrame label="Merchant counter home, running"><CounterHome state="running" /></TabletFrame>
            </Mock>
          </Section>

          <Section title="Merchant — raising a charge" note="QR is real and scannable, pointing at useclear.org">
            <Mock caption="New charge · the fee is visible before it is raised">
              <TabletFrame label="New charge" height={400}><NewCharge /></TabletFrame>
            </Mock>
            <Row>
              <Mock caption="Showing the code">
                <div className="app app-crop" role="img" aria-label="Showing the charge code" style={{ width: 400 }}>
                  <ShowTheCode />
                </div>
              </Mock>
            </Row>
            <Mock caption="Waiting · with delivery receipts">
              <TabletFrame label="Waiting for the customer, with delivery receipts" height={260}><WaitingState /></TabletFrame>
            </Mock>
            <Mock caption="Confirmed">
              <TabletFrame label="Charge confirmed" height={180}><ConfirmedState /></TabletFrame>
            </Mock>
          </Section>

          <Section title="Merchant — charges, payouts, terms">
            <Mock caption="Charges · waiting sorts to the top, expired stays visible">
              <TabletFrame label="Charges list" height={420}><ChargesList /></TabletFrame>
            </Mock>
            <Mock caption="Payouts · available today, and what caps it">
              <TabletFrame label="Payouts panel" height={430}><PayoutsPanel /></TabletFrame>
            </Mock>
            <Mock caption="Terms · six lines an owner will actually read">
              <TabletFrame label="Merchant terms" height={260}><TermsCards /></TabletFrame>
            </Mock>
          </Section>

          <Section
            title="Merchant — refund, three steps"
            note="the writer sees what the customer gets back; the owner sees what it does to his payout"
          >
            <Row>
              {([1, 2, 3] as const).map((n) => (
                <Mock key={n} caption={`Refund · step ${n}`}>
                  <Crop label={`Refund step ${n}`} width={300}><RefundStep step={n} /></Crop>
                </Mock>
              ))}
            </Row>
            <Row>
              <Mock caption="How members see you · the partner directory">
                <PhoneFrame label="Clear Partners directory listing"><DirectoryListing /></PhoneFrame>
              </Mock>
            </Row>
          </Section>

          {/* ── Audit ─────────────────────────────────────────────── */}
          <Section title="Mockup audit — §8" note="checked against the canonical table in §5">
            <ul className="t-sm" style={{ display: 'grid', gap: 'var(--spacing-1)', maxWidth: '70ch' }}>
              <li className="mono">
                term plan rows {CHARGE.amount} sum to header {CHARGE.amount} of {LIMITS.termPlan} · within limit
              </li>
              <li className="mono">per cycle {CHARGE.perCycle} · cycle limit {LIMITS.cycle} · within limit</li>
              <li className="mono">ELPA excluded from the header total, shown under its own rule</li>
              <li className="mono">no dollar total set beside a per-cycle rate</li>
              <li className="mono">cycle-card green appears in one state only</li>
              <li className="mono">QR decodes to https://useclear.org/c/8QK2</li>
              <li className="mono">no screen states a rate of return</li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ display: 'grid', gap: 'var(--spacing-3)', minWidth: 0 }}>
      <div>
        <h2 className="d4">{title}</h2>
        {note && <p className="t-note" style={{ marginTop: 4 }}>{note}</p>}
      </div>
      {children}
    </section>
  );
}

const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 'var(--spacing-4)', flexWrap: 'wrap', alignItems: 'flex-start', minWidth: 0 }}>
    {children}
  </div>
);

const Cell = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <figure style={{ margin: 0, display: 'grid', gridTemplateColumns: 'minmax(0, max-content)', gap: 'var(--spacing-1)', minWidth: 0 }}>
    {children}
    <figcaption className="t-note">{label}</figcaption>
  </figure>
);
