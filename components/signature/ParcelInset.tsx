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
      {/* Land — the co-op's, and the only olive on the page. Drawn as a
          survey plate: an outer edge and an inner one, which is what makes it
          read as a parcel rather than a diamond. */}
      <g className="parcel-plate">
        <path
          d="M 28 145 L 100 111 L 172 145 L 100 179 Z"
          fill="var(--color-land)"
          fillOpacity="0.18"
          stroke="var(--color-land)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M 44 145 L 100 121 L 156 145 L 100 169 Z"
          fill="none"
          stroke="var(--color-land)"
          strokeWidth="1"
          strokeOpacity="0.55"
          strokeLinejoin="round"
        />
      </g>

      {/* Structure — a house, not a box. A featureless isometric cube reads as
          clip-art. This is a gabled volume on a 46-unit footprint with 30°
          isometric axes, 22 units of wall and an 18-unit ridge — computed
          rather than eyeballed, which is why the eave, the ridge and the near
          corner actually meet.
          Two nested groups on purpose: the load sequence animates the inner
          one and the scroll moment the outer, so the two never share a
          transform. */}
      <g className="parcel-structure">
        <g className="parcel-structure-in">
          <path
            className="parcel-structure-line"
            d="M 80.1 13.5 L 60.2 43 L 60.2 65 L 100 88 L 139.8 65 L 139.8 43 L 119.9 36.5 Z"
            fill="var(--color-paper-2)"
            stroke="var(--color-ink)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            className="parcel-structure-line"
            d="M 60.2 43 L 100 66 L 139.8 43 M 100 66 L 119.9 36.5 M 80.1 13.5 L 119.9 36.5 M 100 88 L 100 66"
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
          d="M 96 70 H 112 M 104 70 V 111 M 96 111 H 112"
          fill="none"
          stroke="var(--color-ink-50)"
          strokeWidth="1"
        />
        <text x="118" y="82" className="parcel-dim-label parcel-dim-structure">
          house · yours
        </text>
        <text x="118" y="104" className="parcel-dim-label parcel-dim-land">
          land · held in common
        </text>
      </g>
    </svg>
  );
}
