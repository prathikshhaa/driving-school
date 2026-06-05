"use client";
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
}