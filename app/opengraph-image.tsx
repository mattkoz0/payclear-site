import { ImageResponse } from "next/og";

export const alt = "PayClear private subscription tracker without bank linking";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f7fbff",
          color: "#07143f",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: "24px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "#07143f",
                borderRadius: "32px",
                color: "#69ead6",
                display: "flex",
                fontSize: 54,
                fontWeight: 900,
                height: "112px",
                justifyContent: "center",
                width: "112px",
              }}
            >
              P
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 58, fontWeight: 900 }}>PayClear</div>
              <div style={{ color: "#2b7cff", fontSize: 26, fontWeight: 800 }}>
                Track. Control. Save.
              </div>
            </div>
          </div>
          <div style={{ fontSize: 66, fontWeight: 900, lineHeight: 1.04 }}>
            Private subscription tracker without bank linking.
          </div>
          <div style={{ color: "#415574", fontSize: 30, lineHeight: 1.35 }}>
            Track renewals, free trials, shared bills and recurring spending on Android.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
