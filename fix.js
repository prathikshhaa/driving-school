const fs = require('fs');

const files = [
  'src/components/WhyChooseUs.tsx',
  'src/components/Testimonials.tsx', 
  'src/components/Footer.tsx',
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (!content.startsWith('"use client"')) {
    fs.writeFileSync(f, '"use client";\n' + content, 'utf8');
    console.log('Fixed: ' + f);
  } else {
    console.log('Already fine: ' + f);
  }
});

console.log('Done!');