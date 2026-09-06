import { Suspense } from 'react';
import { Section, Cols, Col } from '@/components/primitives';
import { JoinForm } from '@/components/interactive/JoinForm';
import { OPENING } from '@/content/join';

export const metadata = {
  title: 'Join',
  description:
    'We are onboarding a small number of members and shops in the Redlands corridor first. Tell us which one you are.',
};

export default function Join() {
  return (
    <Section rail={OPENING.rail}>
      <Cols>
        <Col span={7}>
          <h1 className="page-title">{OPENING.heading}</h1>
          <p className="t-lede" style={{ marginTop: 'var(--spacing-3)' }}>
            {OPENING.lede}
          </p>
        </Col>
        <Col span={10}>
          {/* The mode is read from ?as=, so the form suspends while the search
              params resolve. Without the boundary the whole route opts out of
              static rendering. */}
          <Suspense fallback={<div className="join-fallback" aria-hidden="true" />}>
            <JoinForm />
          </Suspense>
        </Col>
      </Cols>
    </Section>
  );
}
