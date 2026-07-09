import { ImageResponse } from "next/og";
import { getBlogPost } from "../posts";

export const alt = "PayClear subscription tracking guide";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const title = post?.title ?? "PayClear subscription tracking guide";
  const category = post?.category ?? "PayClear Blog";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#07143f",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ color: "#69ead6", display: "flex", fontSize: 30, fontWeight: 700 }}>
          PAYCLEAR · {category.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 66,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1.08,
            maxWidth: "1040px",
          }}
        >
          {title}
        </div>
        <div style={{ color: "#c7d7ef", display: "flex", fontSize: 30 }}>
          Track. Control. Save.
        </div>
      </div>
    ),
    size,
  );
}
