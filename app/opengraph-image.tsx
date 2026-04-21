import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Michael Do — Product Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const headshotBuf = await readFile(
    join(process.cwd(), "public/michael-headshot.jpg")
  );
  const headshotSrc = `data:image/jpeg;base64,${headshotBuf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          background: "#07090f",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Blue radial glow — left */}
        <div
          style={{
            position: "absolute",
            left: "-80px",
            top: "80px",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(26,86,255,0.13) 0%, transparent 68%)",
          }}
        />

        {/* Headshot — right panel */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "460px",
            height: "630px",
            display: "flex",
          }}
        >
          <img
            src={headshotSrc}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center",
            }}
          />
          {/* Left fade */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "220px",
              height: "100%",
              background: "linear-gradient(to right, #07090f, transparent)",
            }}
          />
          {/* Bottom fade */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "180px",
              background: "linear-gradient(to top, #07090f, transparent)",
            }}
          />
        </div>

        {/* Content — left */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 80px",
            width: "780px",
            height: "100%",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Label row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "36px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#1a56ff",
                fontWeight: 600,
              }}
            >
              Product Manager
            </span>
            <div
              style={{
                width: "28px",
                height: "1px",
                background: "#1a56ff",
                opacity: 0.5,
              }}
            />
            <span
              style={{
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#555",
              }}
            >
              Toronto
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "86px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 0.88,
              letterSpacing: "-2.5px",
              marginBottom: "20px",
            }}
          >
            Michael Do
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "26px",
              fontWeight: 600,
              color: "#1a56ff",
              letterSpacing: "-0.3px",
              marginBottom: "44px",
              lineHeight: 1.25,
            }}
          >
            Product Leader — Open to new roles.
          </div>

          {/* Divider */}
          <div
            style={{
              width: "48px",
              height: "2px",
              background: "#1a56ff",
              marginBottom: "36px",
              opacity: 0.6,
            }}
          />

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "44px",
              marginBottom: "48px",
            }}
          >
            {[
              { value: "8+", label: "Years in product" },
              { value: "5M+", label: "Users reached" },
              { value: "5", label: "Global markets" },
            ].map((s) => (
              <div
                key={s.label}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <span
                  style={{
                    fontSize: "34px",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#555",
                    marginTop: "7px",
                    letterSpacing: "0.03em",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: "13px",
              color: "#333",
              letterSpacing: "0.08em",
            }}
          >
            michaeldo.com
          </div>
        </div>

        {/* Blue bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background:
              "linear-gradient(to right, #1a56ff 0%, #6e9dff 50%, transparent 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
