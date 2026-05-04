import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Safetek — Software & AI for businesses across Africa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(60% 60% at 80% 20%, rgba(232,90,39,0.55), transparent 60%), radial-gradient(50% 50% at 10% 90%, rgba(255,136,0,0.35), transparent 60%), linear-gradient(180deg, #100806 0%, #1a0d09 60%, #2a120a 100%)",
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              background: "#e85a27",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                background: "white",
              }}
            />
          </div>
          <span style={{ fontSize: 32, fontWeight: 600, letterSpacing: -0.5 }}>
            Safetek
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 86,
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: -2,
              maxWidth: 950,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            We build software hundreds of operators&nbsp;
            <span
              style={{
                background:
                  "linear-gradient(90deg, #e85a27, #ff8800, #fbd3c4)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              run on.
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 880,
              lineHeight: 1.4,
            }}
          >
            Software and AI for businesses across Africa. Built in Nairobi
            since 2018.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "rgba(255,255,255,0.6)",
            fontSize: 22,
          }}
        >
          <span>safetek.co.ke</span>
          <span>Software · AI · Engineering</span>
        </div>
      </div>
    ),
    size,
  );
}
