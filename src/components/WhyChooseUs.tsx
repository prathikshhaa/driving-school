"use client";
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
}