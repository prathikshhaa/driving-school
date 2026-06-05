const fs = require('fs');

const files = {
  'src/app/globals.css': `@import "tailwindcss";

html { scroll-behavior: smooth; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Segoe UI', sans-serif; }

.gradient-hero {
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
}
.card-hover {
  transition: all 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}
`,

  'src/components/Navbar.tsx': `"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS, SCHOOL } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
      background: scrolled ? 'white' : 'rgba(255,255,255,0.97)',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ background: '#dc2626', color: 'white', textAlign: 'center', padding: '6px', fontSize: '13px' }}>
        📞 Call us now: <strong>{SCHOOL.phone}</strong> &nbsp;|&nbsp; Padavinangady, Mangalore
      </div>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '20px', fontWeight: 900, color: '#dc2626', lineHeight: 1 }}>SRI RAM</div>
          <div style={{ fontSize: '11px', color: '#555', fontWeight: 600, letterSpacing: '1px' }}>MOTOR DRIVING SCHOOL</div>
        </div>

        <ul style={{ display: 'flex', gap: '28px', listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button onClick={() => handleNavClick(link.href)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 600, color: '#333', transition: 'color 0.2s' }}
                onMouseOver={e => (e.currentTarget.style.color = '#dc2626')}
                onMouseOut={e => (e.currentTarget.style.color = '#333')}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a href={"https://wa.me/" + SCHOOL.whatsapp} target="_blank" rel="noopener noreferrer"
          style={{ background: '#dc2626', color: 'white', padding: '10px 22px', borderRadius: '50px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', display: 'none' }}
          className="enroll-btn">
          Enroll Now
        </a>

        <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '26px', display: 'none' }} className="hamburger">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <div style={{ background: 'white', borderTop: '1px solid #eee', padding: '16px 20px' }}>
          {NAV_LINKS.map((link) => (
            <button key={link.href} onClick={() => handleNavClick(link.href)}
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 0', background: 'none', border: 'none', fontSize: '15px', fontWeight: 600, color: '#333', cursor: 'pointer', borderBottom: '1px solid #f0f0f0' }}>
              {link.label}
            </button>
          ))}
          <a href={"https://wa.me/" + SCHOOL.whatsapp} target="_blank" rel="noopener noreferrer"
            style={{ display: 'block', marginTop: '12px', background: '#dc2626', color: 'white', textAlign: 'center', padding: '12px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none' }}>
            Enroll Now on WhatsApp
          </a>
        </div>
      )}

      <style>{
        \`@media (min-width: 768px) { .desktop-nav { display: flex !important; } .enroll-btn { display: inline-block !important; } .hamburger { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } .enroll-btn { display: none !important; } .hamburger { display: block !important; } }\`
      }</style>
    </nav>
  );
}`,

  'src/components/Hero.tsx': `"use client";
import { SCHOOL } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #1a1a2e 100%)',
      position: 'relative', overflow: 'hidden', paddingTop: '80px'
    }}>
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: 'rgba(220,38,38,0.08)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-100px', width: '600px', height: '600px', background: 'rgba(99,102,241,0.06)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #dc2626, #f97316, #eab308)' }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'inline-block', background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.3)', color: '#fca5a5', padding: '6px 18px', borderRadius: '50px', fontSize: '13px', fontWeight: 600, marginBottom: '24px', letterSpacing: '1px' }}>
          🏆 MANGALORE'S MOST TRUSTED DRIVING SCHOOL
        </div>

        <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, color: 'white', lineHeight: 1.1, marginBottom: '20px' }}>
          Learn to Drive with<br /><span style={{ color: '#ef4444' }}>Confidence</span>
        </h1>

        <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.7 }}>
          Expert certified trainers, modern vehicles, and complete RTO assistance — all at <strong style={{ color: 'white' }}>Padavinangady, Mangalore</strong>.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
          {[{ value: '500+', label: 'Students Trained' }, { value: '15+', label: 'Years Experience' }, { value: '98%', label: 'Pass Rate' }].map(stat => (
            <div key={stat.label} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '16px', padding: '16px 28px', backdropFilter: 'blur(10px)' }}>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#ef4444' }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={"https://wa.me/" + SCHOOL.whatsapp} target="_blank" rel="noopener noreferrer"
            style={{ background: '#dc2626', color: 'white', padding: '16px 36px', borderRadius: '50px', fontWeight: 800, fontSize: '16px', textDecoration: 'none', boxShadow: '0 8px 32px rgba(220,38,38,0.4)', transition: 'all 0.3s' }}>
            📲 Enroll via WhatsApp
          </a>
          <button onClick={() => document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ background: 'transparent', color: 'white', padding: '16px 36px', borderRadius: '50px', fontWeight: 700, fontSize: '16px', border: '2px solid rgba(255,255,255,0.3)', cursor: 'pointer', transition: 'all 0.3s' }}>
            View Courses →
          </button>
        </div>

        <div style={{ marginTop: '32px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
          📞 Or call: <a href={"tel:" + SCHOOL.phone} style={{ color: 'white', fontWeight: 700, textDecoration: 'none' }}>{SCHOOL.phone}</a>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.4)', fontSize: '12px', textAlign: 'center', animation: 'bounce 2s infinite' }}>
        ↓ scroll down
        <style>{'@keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }'}</style>
      </div>
    </section>
  );
}`,

  'src/components/About.tsx': `import { SCHOOL } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" style={{ padding: '80px 20px', background: '#f8fafc' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ background: 'linear-gradient(135deg, #dc2626, #991b1b)', borderRadius: '24px', height: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 60px rgba(220,38,38,0.3)' }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: '80px', marginBottom: '12px' }}>🚗</div>
              <div style={{ fontSize: '22px', fontWeight: 800 }}>Est. {SCHOOL.established}</div>
              <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '4px' }}>Serving Mangalore with Pride</div>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'white', borderRadius: '16px', padding: '16px 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: '#fef2f2', borderRadius: '50%', padding: '10px', fontSize: '24px' }}>🏅</div>
            <div>
              <div style={{ fontWeight: 800, color: '#111', fontSize: '14px' }}>RTO Certified</div>
              <div style={{ color: '#888', fontSize: '12px' }}>Government Licensed</div>
            </div>
          </div>
        </div>

        <div>
          <div style={{ color: '#dc2626', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', marginBottom: '10px' }}>ABOUT US</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, color: '#111', lineHeight: 1.2, marginBottom: '20px' }}>
            Mangalore's Most Trusted <span style={{ color: '#dc2626' }}>Driving School</span>
          </h2>
          <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '16px', fontSize: '15px' }}>
            Sri Ram Motor Driving School has been training safe and confident drivers since {SCHOOL.established}. Located opposite Koragajja Katte, Padavinangady, we've helped thousands of students get their driving licenses with ease.
          </p>
          <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '32px', fontSize: '15px' }}>
            Our RTO-certified instructors use a patient, step-by-step approach ensuring every student — beginner or refresher — drives away with confidence.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
            {['RTO Licensed School', 'Experienced Instructors', 'Modern Vehicles', 'License Assistance'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: '#333' }}>
                <span style={{ color: '#16a34a', fontSize: '18px' }}>✓</span> {item}
              </div>
            ))}
          </div>
          <a href={"tel:" + SCHOOL.phone} style={{ display: 'inline-block', background: '#dc2626', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '15px', boxShadow: '0 4px 20px rgba(220,38,38,0.3)' }}>
            📞 Call Us Today
          </a>
        </div>
      </div>
    </section>
  );
}`,

  'src/components/Courses.tsx': `import { COURSES, SCHOOL } from "@/lib/constants";

export default function Courses() {
  return (
    <section id="courses" style={{ padding: '80px 20px', background: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ color: '#dc2626', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', marginBottom: '10px' }}>WHAT WE OFFER</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, color: '#111' }}>Our <span style={{ color: '#dc2626' }}>Courses</span></h2>
          <p style={{ color: '#888', marginTop: '12px', maxWidth: '500px', margin: '12px auto 0', fontSize: '15px' }}>Practical training, theory classes, and full RTO test preparation included in every course.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
          {COURSES.map((course, i) => (
            <div key={course.id} className="card-hover" style={{ border: '2px solid #f1f5f9', borderRadius: '24px', padding: '32px', background: i === 1 ? 'linear-gradient(135deg, #dc2626, #991b1b)' : 'white', color: i === 1 ? 'white' : 'inherit', position: 'relative', overflow: 'hidden' }}>
              {i === 1 && <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(255,255,255,0.2)', color: 'white', padding: '4px 12px', borderRadius: '50px', fontSize: '11px', fontWeight: 700 }}>MOST POPULAR</div>}
              <div style={{ fontSize: '52px', marginBottom: '16px' }}>{course.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '10px', color: i === 1 ? 'white' : '#111' }}>{course.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, marginBottom: '24px', color: i === 1 ? 'rgba(255,255,255,0.85)' : '#666' }}>{course.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ background: i === 1 ? 'rgba(255,255,255,0.2)' : '#fef2f2', color: i === 1 ? 'white' : '#dc2626', padding: '6px 14px', borderRadius: '50px', fontSize: '13px', fontWeight: 600 }}>⏱ {course.duration}</span>
                <span style={{ fontSize: '22px', fontWeight: 900, color: i === 1 ? 'white' : '#111' }}>{course.price}</span>
              </div>
              <a href={"https://wa.me/" + SCHOOL.whatsapp + "?text=Hi, I am interested in the " + course.title + " course."} target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center', padding: '13px', borderRadius: '50px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', background: i === 1 ? 'white' : '#dc2626', color: i === 1 ? '#dc2626' : 'white', transition: 'all 0.3s' }}>
                Enroll Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  'src/components/WhyChooseUs.tsx': `"use client";
import { FEATURES } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section id="why-us" style={{ padding: '80px 20px', background: '#0f172a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ color: '#f87171', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', marginBottom: '10px' }}>WHY SRI RAM</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, color: 'white' }}>Why <span style={{ color: '#ef4444' }}>Choose Us?</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '12px', fontSize: '15px' }}>We go beyond teaching — we make you road-ready and license-ready.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {FEATURES.map((feature) => (
            <div key={feature.title} className="card-hover" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '28px' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'white', marginBottom: '8px' }}>{feature.title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{feature.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)', borderRadius: '24px', padding: '48px', textAlign: 'center' }}>
          <h3 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 900, color: 'white', marginBottom: '12px' }}>Ready to Get Your Driving License?</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '28px', fontSize: '15px' }}>Join hundreds of students who passed their RTO test with us.</p>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{ display: 'inline-block', background: 'white', color: '#dc2626', padding: '14px 40px', borderRadius: '50px', fontWeight: 800, textDecoration: 'none', fontSize: '15px' }}>
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}`,

  'src/components/Testimonials.tsx': `"use client";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '80px 20px', background: '#f8fafc' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ color: '#dc2626', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', marginBottom: '10px' }}>STUDENT REVIEWS</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, color: '#111' }}>What Our <span style={{ color: '#dc2626' }}>Students Say</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card-hover" style={{ background: 'white', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color: '#f59e0b', fontSize: '20px' }}>★</span>
                ))}
              </div>
              <p style={{ color: '#444', fontSize: '15px', lineHeight: 1.8, marginBottom: '20px', fontStyle: 'italic' }}>"{t.review}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #dc2626, #991b1b)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '16px' }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#111', fontSize: '14px' }}>{t.name}</div>
                  <div style={{ color: '#999', fontSize: '12px' }}>Verified Student</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  'src/components/ContactForm.tsx': `"use client";
import { useState } from "react";
import { SCHOOL } from "@/lib/constants";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", course: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    if (!form.name || !form.phone) { alert("Please enter your name and phone number."); return; }
    const text = "Hi Sri Ram Motor Driving School!%0AName: " + form.name + "%0APhone: " + form.phone + "%0ACourse: " + (form.course || "Not specified") + "%0AMessage: " + (form.message || "I want to enquire about admission.");
    window.open("https://wa.me/" + SCHOOL.whatsapp + "?text=" + text, "_blank");
  };

  const inputStyle = { width: '100%', border: '2px solid #e2e8f0', borderRadius: '12px', padding: '13px 16px', fontSize: '14px', outline: 'none', transition: 'border 0.2s', fontFamily: 'inherit', background: '#f8fafc' };

  return (
    <section id="contact" style={{ padding: '80px 20px', background: 'white' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
        <div>
          <div style={{ color: '#dc2626', fontWeight: 700, fontSize: '13px', letterSpacing: '2px', marginBottom: '10px' }}>CONTACT US</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 900, color: '#111', marginBottom: '16px' }}>Get in <span style={{ color: '#dc2626' }}>Touch</span></h2>
          <p style={{ color: '#666', marginBottom: '40px', lineHeight: 1.7, fontSize: '15px' }}>Ready to start your driving journey? We respond quickly on WhatsApp!</p>

          {[
            { icon: '📍', title: 'Address', value: SCHOOL.address, href: null },
            { icon: '📞', title: 'Phone', value: SCHOOL.phone, href: 'tel:' + SCHOOL.phone },
            { icon: '💬', title: 'WhatsApp', value: 'Chat with us instantly', href: 'https://wa.me/' + SCHOOL.whatsapp },
            { icon: '🕐', title: 'Hours', value: 'Mon–Sat: 7:00 AM – 7:00 PM', href: null },
          ].map(item => (
            <div key={item.title} style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start' }}>
              <div style={{ background: '#fef2f2', borderRadius: '12px', padding: '12px', fontSize: '22px', flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontWeight: 700, color: '#111', fontSize: '14px', marginBottom: '2px' }}>{item.title}</div>
                {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: '#dc2626', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>{item.value}</a>
                  : <div style={{ color: '#666', fontSize: '14px' }}>{item.value}</div>}
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: '#f8fafc', borderRadius: '24px', padding: '36px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#111', marginBottom: '24px' }}>Send an Enquiry</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#444', display: 'block', marginBottom: '6px' }}>Your Name *</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter your full name" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#444', display: 'block', marginBottom: '6px' }}>Phone Number *</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#444', display: 'block', marginBottom: '6px' }}>Course Interested In</label>
              <select name="course" value={form.course} onChange={handleChange} style={inputStyle}>
                <option value="">Select a course</option>
                <option>Two Wheeler</option>
                <option>Light Motor Vehicle (Car)</option>
                <option>Heavy Motor Vehicle</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#444', display: 'block', marginBottom: '6px' }}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Any questions or preferred batch timing..." style={{ ...inputStyle, resize: 'none' }} />
            </div>
            <button onClick={handleWhatsApp} style={{ background: '#16a34a', color: 'white', border: 'none', padding: '15px', borderRadius: '12px', fontWeight: 800, fontSize: '15px', cursor: 'pointer', boxShadow: '0 4px 20px rgba(22,163,74,0.3)', transition: 'all 0.3s' }}>
              📲 Send via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}`,

  'src/components/MapEmbed.tsx': `import { SCHOOL } from "@/lib/constants";

export default function MapEmbed() {
  return (
    <section style={{ width: '100%' }}>
      <div style={{ background: '#1e293b', padding: '16px', textAlign: 'center' }}>
        <p style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>📍 {SCHOOL.address}</p>
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d74.856!3d12.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzE4LjAiTiA3NMKwNTEnMjEuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" title="Sri Ram Motor Driving School Location"
        />
      </div>
    </section>
  );
}`,

  'src/components/Footer.tsx': `"use client";
import { SCHOOL, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: '#94a3b8' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <div style={{ marginBottom: '12px' }}>
              <span style={{ color: '#ef4444', fontWeight: 900, fontSize: '22px' }}>SRI RAM </span>
              <span style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}>Motor Driving School</span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>Mangalore's trusted driving school since {SCHOOL.established}. Training safe drivers for over a decade.</p>
            <a href={"https://wa.me/" + SCHOOL.whatsapp} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#16a34a', color: 'white', padding: '10px 22px', borderRadius: '50px', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>
              💬 WhatsApp Us
            </a>
          </div>

          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '16px', fontSize: '15px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none' }}>
              {NAV_LINKS.map(link => (
                <li key={link.href} style={{ marginBottom: '10px' }}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                    style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}
                    onMouseOver={e => (e.currentTarget.style.color = '#ef4444')}
                    onMouseOut={e => (e.currentTarget.style.color = '#94a3b8')}>
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', fontWeight: 700, marginBottom: '16px', fontSize: '15px' }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <p>📍 {SCHOOL.address}</p>
              <p>📞 <a href={"tel:" + SCHOOL.phone} style={{ color: '#94a3b8', textDecoration: 'none' }}>{SCHOOL.phone}</a></p>
              <p>🕐 Mon–Sat: 7AM – 7PM</p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', fontSize: '13px' }}>
          <p>© {new Date().getFullYear()} Sri Ram Motor Driving School. All rights reserved.</p>
          <p>Mangalore, Karnataka, India</p>
        </div>
      </div>
    </footer>
  );
}`,
};

Object.entries(files).forEach(([path, content]) => {
  fs.writeFileSync(path, content, { encoding: 'utf8' });
  console.log('Written: ' + path);
});
console.log('\nAll files written! Run: npm run dev');