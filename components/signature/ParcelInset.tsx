/* The parcel inset. §6.1 — a small hand-authored isometric, roughly 200px
   square: one olive land plate, one ink structure outline above it, a visible
   gap between them. Two shapes. It is a drawing, not a scene, and it must not
   be built with a 3D library.

   Geometry, in the 200-unit box:
     plate      isometric diamond, centre (100,145), half 72 × 34
     structure  isometric volume, silhouette plus its two interior edges,
                bottom vertex at y=96 against a plate top of y=111 — a 15-unit
                gap that is present from the first frame, never closed and
                then opened.

   The scroll moment lifts the structure and draws a dimension line between
   the two. Everything it needs is authored here and left static; the
   animation only changes transforms and dash offsets, so with no JS at all
   this renders as the finished drawing. */

export function ParcelInset() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="parcel"
      role="img"
      aria-label="A structure sitting above a parcel of land, held separately"
    >
      {/* Land — the co-op's, and the only olive on the page. */}
      <path
        className="parcel-plate"
        d="M 28 145 L 100 111 L 172 145 L 100 179 Z"
        fill="var(--color-land)"
        fillOpacity="0.22"
        stroke="var(--color-land)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Structure — an outline, lifting on scroll.
          Two nested groups on purpose: the load sequence animates the inner
          one and the scroll moment the outer, so the two never share a
          transform. Sharing it made the scrub inherit the load tween's
          from-state as its start and park the structure 6 units high. */}
      <g className="parcel-structure">
        <g className="parcel-structure-in">
        <path
          className="parcel-structure-line"
          d="M 56 56 L 100 36 L 144 56 L 144 76 L 100 96 L 56 76 Z"
          fill="var(--color-paper-2)"
          stroke="var(--color-ink)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          className="parcel-structure-line"
          d="M 56 56 L 100 76 L 144 56 M 100 76 L 100 96"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        </g>
      </g>

      {/* The dimension line, drawn only by the scroll moment. Zero-length
          dashes by default would hide it with JS off, so it starts at full
          opacity 0 instead and the timeline fades it in — a static render
          simply never shows it, which is correct: nothing is being measured
          until the structure lifts. */}
      <g className="parcel-dim" opacity="0" aria-hidden="true">
        <path
          d="M 96 78 H 112 M 104 78 V 111 M 96 111 H 112"
          fill="none"
          stroke="var(--color-ink-50)"
          strokeWidth="1"
        />
        <text x="118" y="90" className="parcel-dim-label parcel-dim-structure">
          structure
        </text>
        <text x="118" y="106" className="parcel-dim-label parcel-dim-land">
          land
        </text>
      </g>
    </svg>
  );
}
