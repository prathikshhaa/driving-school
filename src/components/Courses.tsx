"use client";

import { COURSES, SCHOOL } from "@/lib/constants";

export default function Courses() {
  return (
    <section
      id="courses"
      style={{
        padding: "50px 20px 90px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#dc2626",
              color: "white",
              padding: "6px 14px",
              borderRadius: "4px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              marginBottom: "15px",
            }}
          >
            OUR COURSES
          </div>

          <h2
            style={{
              fontSize: "clamp(30px,4vw,46px)",
              fontWeight: 900,
              color: "#111827",
              marginBottom: "15px",
            }}
          >
            Choose Your Course
          </h2>

          <p
            style={{
              color: "#6b7280",
              fontSize: "15px",
              maxWidth: "550px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Professional training programs designed to help you become a safe
            and confident driver.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
          }}
        >
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="course-card"
              style={{
                background: "#ffffff",
                borderRadius: "22px",
                padding: "30px",
                borderTop: "4px solid #dc2626",
                boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginBottom: "16px",
                }}
              >
                {course.icon}
              </div>

              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#111827",
                  marginBottom: "12px",
                }}
              >
                {course.title}
              </h3>

              <p
                style={{
                  color: "#6b7280",
                  lineHeight: 1.8,
                  fontSize: "14px",
                  marginBottom: "20px",
                }}
              >
                {course.description}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "22px",
                }}
              >
                <span
                  style={{
                    background: "#fef2f2",
                    color: "#dc2626",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  ⏱ {course.duration}
                </span>

                <span
                  style={{
                    color: "#dc2626",
                    fontWeight: 900,
                    fontSize: "24px",
                  }}
                >
                  {course.price}
                </span>
              </div>

              <a
                href={`https://wa.me/${SCHOOL.whatsapp}?text=Hi, I am interested in the ${course.title} course`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "#dc2626",
                  color: "white",
                  padding: "13px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                Enroll Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}