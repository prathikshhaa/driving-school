"use client";
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
}