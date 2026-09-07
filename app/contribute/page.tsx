import { Section, Band, Cols, Col, Steps, Panel, Note, Button, TextLink, FigureXL } from '@/components/primitives';
import { ForkDiagram } from '@/components/visuals/ForkDiagram';
import { OPENING, FORK, HOW, DOWNSIDES, WHO, CLOSE } from '@/content/contribute';

export const metadata = {
  title: 'Contribute land',
  description:
    'Contribute rental property or land to Clear Properties in exchange for units under section 721, rather than selling it and paying tax on the whole gain this year.',
};

export default function Contribute() {
  return (
    <>
      {/* S1 — Opening. */}
      <Section rail={OPENING.rail}>
        <Cols>
          <Col span={7}>
            <h1 className="page-title">{OPENING.heading}</h1>
            <p className="d-sub" style={{ marginTop: 'var(--spacing-3)' }}>{OPENING.sub}</p>
            <p className="t-lede" style={{ marginTop: 'var(--spacing-3)' }}>
              {OPENING.lede}
            </p>
          </Col>
          <Col span={3}>
            <Panel variant="mark" title={OPENING.panel.title}>
              <p>{OPENING.panel.body}</p>
            </Panel>
          </Col>
        </Cols>
      </Section>

      {/* S2 — The decision this page exists to inform, drawn rather than
          argued, on this page's one ink band (§3). */}
      <Band tone="ink" rhythm="open" id="the-decision">
        <div className="grid12">
          <p className="rail rail-note">{FORK.rail}</p>
          <div className="content">
            <Cols>
              <Col span={6}>
                <h2 className="d2 section-head">{FORK.heading}</h2>
              </Col>
              <Col span={4}>
                <p className="d-sub">{FORK.sub}</p>
              </Col>
              <Col span={9}>
                <ForkDiagram />
                <Note>{FORK.note}</Note>
              </Col>
            </Cols>
          </div>
        </div>
      </Band>

      {/* S3 — How it works. Steps 3-9, Panel 10-12. */}
      <Section rail={HOW.rail}>
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{HOW.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{HOW.sub}</p>
          </Col>
          <Col span={7}>
            <Steps items={[...HOW.steps]} />
            <Note>{HOW.note}</Note>
          </Col>
          <Col span={3}>
            <Panel title={DOWNSIDES.title}>
              <ul className="panel-list">
                {DOWNSIDES.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>
          </Col>
        </Cols>
      </Section>

      {/* S4 — Who this is for. Three columns. */}
      <Section rail={WHO.rail} rhythm="tight">
        <Cols>
          <Col span={6}>
            <h2 className="d2 section-head">{WHO.heading}</h2>
          </Col>
          <Col span={4}>
            <p className="d-sub">{WHO.sub}</p>
          </Col>
          {WHO.columns.map((c) => (
            <Col span={3} key={c.heading}>
              <h3 className="d3">{c.heading}</h3>
              <p className="t-body prose" style={{ marginTop: 'var(--spacing-2)' }}>
                {c.body}
              </p>
            </Col>
          ))}
        </Cols>
      </Section>

      {/* S5 — The honest close. */}
      <Section rail={CLOSE.rail}>
        <Cols>
          <Col span={7}>
            <h2 className="d2 section-head">{CLOSE.heading}</h2>
            <p className="d-sub" style={{ marginTop: 'var(--spacing-3)' }}>{CLOSE.sub}</p>
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <FigureXL figure={CLOSE.figure.value} caption={CLOSE.figure.caption} />
            </div>
            <p className="t-body prose" style={{ marginTop: 'var(--spacing-4)' }}>
              {CLOSE.prose}
            </p>
            <div style={{ marginTop: 'var(--spacing-4)' }}>
              <Button href={CLOSE.cta.href}>{CLOSE.cta.label}</Button>
            </div>
            <p className="t-sm onward">
              {CLOSE.onward.before}
              <TextLink href={CLOSE.onward.link.href}>{CLOSE.onward.link.label}</TextLink>
              {CLOSE.onward.after}
            </p>
          </Col>
        </Cols>
      </Section>
    </>
  );
}
