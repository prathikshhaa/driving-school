import { SCHOOL } from "@/lib/constants";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 20px",
        background: "#ffffff",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Left Side Image */}
        <div>
          <img
            src="/images/about.jpg"
            alt="Sri Ram Driving School"
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              borderRadius: "24px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
            }}
          />
        </div>

        {/* Right Side Content */}
        <div>
          <div
            style={{
              color: "#dc2626",
              fontWeight: 700,
              letterSpacing: "2px",
              marginBottom: "12px",
              fontSize: "14px",
            }}
          >
            ABOUT US
          </div>

          <h2
            style={{
              fontSize: "clamp(32px,5vw,52px)",
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#111827",
              marginBottom: "20px",
            }}
          >
            Learn From The Best
            <br />
            <span style={{ color: "#dc2626" }}>
              Driving Experts In Mangalore
            </span>
          </h2>

          <p
            style={{
              color: "#6b7280",
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Sri Ram Motor Driving School has been helping students become safe,
            confident and responsible drivers since {SCHOOL.established}. Our
            experienced instructors provide practical training using modern
            vehicles and personalized guidance for every learner.
          </p>

          <p
            style={{
              color: "#6b7280",
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "35px",
            }}
          >
            From beginner lessons to complete RTO assistance, we ensure every
            student gains the confidence and skills needed to drive safely on
            the road.
          </p>

          {/* Stats Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "15px",
              marginBottom: "35px",
            }}
          >
            {[
              { value: "500+", label: "Students Trained" },
              { value: "98%", label: "Pass Rate" },
              { value: "15+", label: "Years Experience" },
              { value: "100%", label: "RTO Support" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#f8fafc",
                  padding: "20px",
                  borderRadius: "18px",
                  textAlign: "center",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    color: "#dc2626",
                    fontSize: "30px",
                    fontWeight: 800,
                  }}
                >
                  {item.value}
                </div>

                <div
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                    marginTop: "4px",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  }}
>
  <a
    href={"tel:" + SCHOOL.phone}
    style={{
      display: "inline-block",
      background: "#dc2626",
      color: "white",
      padding: "15px 35px",
      borderRadius: "999px",
      textDecoration: "none",
      fontWeight: 700,
      boxShadow: "0 10px 25px rgba(220,38,38,0.25)",
    }}
  >
    📞 Call Us Today
  </a>
</div>
        </div>
      </div>
      {/* Syllabus & Documents */}
<div
  style={{
    maxWidth: "1200px",
    margin: "70px auto 0",
    padding: "0 20px",
    width: "100%",
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "18px",
  }}
>
  {/* Syllabus Card */}
  <div
    className="glass-card"
    style={{
      background: "rgba(255,255,255,0.7)",
      backdropFilter: "blur(15px)",
      WebkitBackdropFilter: "blur(15px)",
      border: "1px solid rgba(220,38,38,0.15)",
      borderRadius: "24px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      boxSizing: "border-box",
      maxWidth: "100%",
    }}
  >
    <div
      style={{
        background: "linear-gradient(135deg,#dc2626,#b91c1c)",
        color: "white",
        padding: "18px 24px",
        fontWeight: 800,
        fontSize: "18px",
      }}
    >
      📚 Training Syllabus
    </div>

    <div style={{ padding: "24px" }}>
      {[
        "Theory Classes",
        "Traffic Signs & Signals",
        "Vehicle Controls",
        "Reverse Parking",
        "Road Safety Rules",
        "Main Road Driving",
        "City Driving Practice",
        "RTO Test Preparation",
      ].map((item) => (
        <div
          key={item}
          style={{
            marginBottom: "14px",
            color: "#374151",
            fontSize: "15px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ color: "#dc2626" }}>✓</span>
          {item}
        </div>
      ))}
    </div>
  </div>

  {/* Documents Card */}
  <div
    className="glass-card"
    style={{
      background: "rgba(255,255,255,0.7)",
      backdropFilter: "blur(15px)",
      WebkitBackdropFilter: "blur(15px)",
      border: "1px solid rgba(17,24,39,0.1)",
      borderRadius: "24px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      boxSizing: "border-box",
      maxWidth: "100%",
    }}
  >
    <div
      style={{
        background: "linear-gradient(135deg,#111827,#1f2937)",
        color: "white",
        padding: "18px 24px",
        fontWeight: 800,
        fontSize: "18px",
      }}
    >
      📄 Documents Required
    </div>

    <div style={{ padding: "24px" }}>
      {[
        "SSLC / Birth Certificate",
        "Aadhaar Card",
        "Passport Size Photos",
        "Eye Test Certificate",
        "Address Proof",
      ].map((item, index) => (
        <div
          key={item}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              background: "#dc2626",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            {index + 1}
          </div>

          <span
            style={{
              color: "#374151",
              fontSize: "15px",
            }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>
    </section>
  );
}