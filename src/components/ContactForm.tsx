"use client";
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
                <option>Light Motor Vehicle (Car)</option>
                <option>Two Wheeler(Bike)</option>
                <option>Two Wheeler(Scooter)</option>
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
}