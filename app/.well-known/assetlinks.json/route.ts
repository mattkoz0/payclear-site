const fingerprint = process.env.ANDROID_APP_SHA256_CERT_FINGERPRINT;

export function GET() {
  if (!fingerprint) {
    return new Response(null, { status: 404 });
  }

  return Response.json(
    [
      {
        relation: ["delegate_permission/common.handle_all_urls"],
        target: {
          namespace: "android_app",
          package_name: "com.payclear.app",
          sha256_cert_fingerprints: [fingerprint],
        },
      },
    ],
    {
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=3600",
      },
    },
  );
}
