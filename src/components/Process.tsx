"use client";

import { useEffect, useState } from "react";

export default function Process() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 5);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: "01",
      title: "ENROLL",
      description:
        "Call us or walk in. Choose your course and batch timing that works for you.",
    },
    {
      number: "02",
      title: "LEARNER LICENSE",
      description:
        "We guide you through the learner license application process.",
    },
    {
      number: "03",
      title: "TRAINING",
      description:
        "Hands-on driving sessions with our experienced instructors.",
    },
    {
      number: "04",
      title: "RTO TEST",
      description:
        "Complete preparation and assistance for your driving test.",
    },
    {
      number: "05",
      title: "GET LICENSE",
      description:
        "Receive your driving license and hit the road confidently.",
    },
  ];

  return (
    <section
      id="process"
      style={{
        background: "#050505",
        padding: "90px 20px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#fbbf24",
            color: "#111",
            padding: "6px 16px",
            borderRadius: "4px",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "2px",
            marginBottom: "18px",
          }}
        >
          THE PROCESS
        </div>

        <h2
          style={{
            fontSize: "clamp(28px,4vw,56px)",
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: "15px",
          }}
        >
          FROM ENROLL
          <br />
          TO LICENSE
        </h2>

        <p
          style={{
            color: "#9ca3af",
            fontSize: "15px",
            maxWidth: "600px",
            marginBottom: "70px",
          }}
        >
          We make the journey to your driving license smooth and
          straightforward.
        </p>

        <div
          style={{
            position: "relative",
          }}
        >
          {/* Desktop Line */}
          <div className="timeline-line" />

          {/* Animated Line */}
          <div
            className="timeline-progress"
            style={{
              width: `${(active / 4) * 84}%`,
            }}
          />

          <div className="process-grid">
            {steps.map((step, index) => {
              const isActive = active >= index;

              return (
                <div
                  key={step.number}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <div
  style={{
    position: "relative",
    zIndex: 5,

    width: "78px",
    height: "78px",

    borderRadius: "50%",
    margin: "0 auto 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontWeight: 800,
    fontSize: "22px",

    transition: "all .4s ease",

    border: isActive
      ? "2px solid #f59e0b"
      : "2px solid #dc2626",

    background: "#050505",

    color: isActive
      ? "#f59e0b"
      : "#dc2626",

    transform: isActive
      ? "scale(1.08)"
      : "scale(1)",

    boxShadow: isActive
      ? "0 0 25px rgba(245,158,11,.35)"
      : "none",
  }}
>
                    {step.number}
                  </div>

                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      marginBottom: "12px",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      color: "#9ca3af",
                      fontSize: "14px",
                      lineHeight: 1.8,
                      maxWidth: "220px",
                      margin: "0 auto",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          .process-grid{
            display:grid;
            grid-template-columns:repeat(5,1fr);
            gap:30px;
          }

          .timeline-line{
            position:absolute;
            top:42px;
            left:8%;
            right:8%;
            height:3px;
            background:#333;
            z-index:0;
          }

          .timeline-progress{
            position:absolute;
            top:42px;
            left:8%;
            height:3px;
            background:linear-gradient(90deg,#dc2626,#f59e0b);
            transition:all .15s ease;
            z-index:1;
          }

          @media (max-width: 768px){

            .process-grid{
              grid-template-columns:1fr;
              gap:45px;
            }

            .timeline-line,
            .timeline-progress{
              display:none;
            }
          }
        `}</style>
      </div>
    </section>
  );
}