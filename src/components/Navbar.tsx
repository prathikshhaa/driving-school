"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, SCHOOL } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          background: "#dc2626",
          color: "white",
          textAlign: "center",
          padding: "6px",
          fontSize: "13px",
        }}
      >
        📞 Call us now: <strong>{SCHOOL.phone}</strong>
      </div>

      {/* Main Navbar */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "14px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div>
          <div
            style={{
              fontSize: "26px",
              fontWeight: 900,
              color: "#dc2626",
              lineHeight: 1,
            }}
          >
            SRI RAM
          </div>

          <div
            style={{
              fontSize: "11px",
              color: "#6b7280",
              letterSpacing: "1px",
              fontWeight: 600,
            }}
          >
            MOTOR DRIVING SCHOOL
          </div>
        </div>

        {/* Desktop Nav */}
        <ul
          className="desktop-nav"
          style={{
            display: "flex",
            gap: "28px",
            listStyle: "none",
            alignItems: "center",
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#111827",
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <a
            href="https://www.rtoexam.com/app"
            target="_blank"
            rel="noopener noreferrer"
            className="enroll-btn"
            style={{
              background: "#0f172a",
              color: "white",
              padding: "10px 20px",
              borderRadius: "50px",
              fontWeight: 700,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
             Mock Test
          </a>

          <a
            href={`https://wa.me/${SCHOOL.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="enroll-btn"
            style={{
              background: "#dc2626",
              color: "white",
              padding: "10px 22px",
              borderRadius: "50px",
              fontWeight: 700,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "26px",
            display: "none",
          }}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            background: "white",
            borderTop: "1px solid #eee",
            padding: "15px 20px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "14px 0",
                background: "none",
                border: "none",
                fontSize: "15px",
                fontWeight: 600,
                color: "#111827",
                borderBottom: "1px solid #f1f5f9",
              }}
            >
              {link.label}
            </button>
          ))}

          <a
            href="https://www.rtoexam.com/app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              marginTop: "15px",
              background: "#0f172a",
              color: "white",
              textAlign: "center",
              padding: "12px",
              borderRadius: "10px",
              fontWeight: 700,
              textDecoration: "none",
              marginBottom: "10px",
            }}
          >
             Mock Test
          </a>

          <a
            href={`https://wa.me/${SCHOOL.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              background: "#dc2626",
              color: "white",
              textAlign: "center",
              padding: "12px",
              borderRadius: "10px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Enroll Now
          </a>
        </div>
      )}

      <style>{`
        @media (min-width:768px){
          .desktop-nav{display:flex !important;}
          .enroll-btn{display:inline-block !important;}
          .hamburger{display:none !important;}
        }

        @media (max-width:767px){
          .desktop-nav{display:none !important;}
          .enroll-btn{display:none !important;}
          .hamburger{display:block !important;}
        }
      `}</style>
    </nav>
  );
}