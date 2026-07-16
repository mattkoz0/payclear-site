import Image from "next/image";

type StoreQrCodeProps = {
  className?: string;
  compact?: boolean;
  dark?: boolean;
};

export function StoreQrCode({
  className = "",
  compact = false,
  dark = false,
}: StoreQrCodeProps) {
  return (
    <a
      aria-label="Scan to download PayClear from the store for your device"
      className={`mx-auto flex w-full max-w-md items-center rounded-2xl border text-left transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2b7cff] ${
        dark
          ? "border-white/15 bg-white/8 hover:bg-white/12"
          : "border-[#d9e7f6] bg-white hover:border-[#9abff3]"
      } ${compact ? "gap-3 p-3" : "gap-4 p-4"} ${className}`}
      href="/get"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="shrink-0 rounded-xl bg-white p-2 shadow-sm">
        <Image
          alt="QR code that opens PayClear in the correct app store"
          className={compact ? "h-24 w-24" : "h-28 w-28"}
          height={320}
          src="/download-qr.png"
          width={320}
        />
      </span>
      <span>
        <span
          className={`block text-xs font-bold uppercase tracking-wide ${
            dark ? "text-[#9db5d8]" : "text-[#6b7d99]"
          }`}
        >
          Scan to download
        </span>
        <span className="mt-1 block text-lg font-black">
          Opens the right store
        </span>
        <span
          className={`mt-1 block text-sm ${
            dark ? "text-[#c7d7ef]" : "text-[#53627a]"
          }`}
        >
          Google Play or App Store
        </span>
      </span>
    </a>
  );
}
