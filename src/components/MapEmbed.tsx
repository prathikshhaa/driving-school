import { SCHOOL } from "@/lib/constants";

export default function MapEmbed() {
  return (
    <section style={{ width: '100%' }}>
      <div style={{ background: '#1e293b', padding: '16px', textAlign: 'center' }}>
        <p style={{ color: 'white', fontSize: '14px', fontWeight: 600 }}>📍 {SCHOOL.address}</p>
      </div>
      <div style={{ width: '100%', height: '400px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.902302206772!2d74.86641817454574!3d12.914000416139578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba351b81e73628f%3A0x3c2b8979e361f7a4!2sSRI%20RAM%20MOTOR%20DRIVING%20SCHOOL!5e0!3m2!1sen!2sin!4v1780661078119!5m2!1sen!2sin"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" title="Sri Ram Motor Driving School Location"
        />
      </div>
    </section>
  );
}