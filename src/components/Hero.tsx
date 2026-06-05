"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  const slides = [
    "/images/car1.jpg",
    "/images/bike1.jpg",
    "/images/scooter1.jpg",
  ];

  return (
    <section id="home">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        style={{ height: "100vh" }}
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                height: "100vh",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.6)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "#fff",
                  zIndex: 2,
                  padding: "20px",
                }}
              >
                <h1
                  style={{
                    fontSize: "clamp(28px, 5vw, 60px)",
                    fontWeight: 900,
                    lineHeight: 1.2,
                    marginBottom: "16px",
                  }}
                >
                  Start Your
                  <br />
                  <span style={{ color: "#ef4444" }}>
                    Driving Journey
                  </span>
                  <br />
                  With Confidence
                </h1>

                <p
                  style={{
                    fontSize: "clamp(14px, 1.5vw, 18px)",
                    color: "rgba(255,255,255,0.9)",
                    marginBottom: "35px",
                    maxWidth: "700px",
                  }}
                >
                  Expert Driving Training • Modern Vehicles • Complete RTO Assistance
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      background: "#dc2626",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "0 40px",
                      height: "55px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50px",
                      fontSize: "17px",
                      fontWeight: 700,
                      boxShadow: "0 8px 20px rgba(220,38,38,0.35)",
                    }}
                  >
                    Enroll Now
                  </a>

                  <a
                    href="#courses"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#courses")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      border: "2px solid white",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "16px 40px",
                      borderRadius: "50px",
                      fontSize: "17px",
                      fontWeight: 700,
                    }}
                  >
                    View Courses
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}