'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import EnrollmentModal from '../components/EnrollmentModal';
import CoursesModal from '../components/CoursesModal';
import BrochureModal from '../components/BrochureModal';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import CourseStructuredData from '../components/CourseStructuredData';
import { getAllCourses } from '@/lib/staticCourseData';

const COMPANIES = [
  'TCS', 'Infosys', 'Wipro', 'HCL Technologies', 'Tech Mahindra',
  'Accenture', 'Capgemini', 'IBM', 'Cognizant', 'LTIMindtree',
  'Mphasis', 'Persistent Systems', 'Microsoft', 'Google', 'Amazon',
  'Oracle', 'Deloitte', 'Cisco', 'Salesforce', 'SAP Labs'
];

const FAQS = [
  { q: 'Which is the best AWS training institute in Hyderabad?', a: "We're located in Ameerpet, right next to Satyam Theatre — one of the most convenient spots in the city. Our trainers have real industry experience, not just certifications. We've placed 5,000+ students in companies like TCS, Infosys, Accenture, and many more. You can walk in anytime and talk to us directly.", icon: '🏆' },
  { q: 'How long does the AWS DevOps course take?', a: "Most students finish in 3 to 6 months depending on the course they pick. We have weekday batches, weekend batches, and fast-track options for working professionals. The schedule is flexible — we'll figure out what works best for you.", icon: '⏰' },
  { q: 'Do you actually help with job placements?', a: "Yes, and we take this seriously. Our placement team has direct connections with 50+ companies in Hyderabad. We help with resume prep, mock interviews, and follow up with companies on your behalf. We don't just hand you a certificate and wish you luck.", icon: '💼' },
  { q: 'What salary can I expect after completing the course?', a: "It depends on your background and the role you're targeting. Freshers typically start between ₹6–12 LPA. If you have a couple of years of IT experience, you're looking at ₹15–25 LPA after an AWS DevOps transition. Data Engineering specialists are seeing the highest demand right now, often ₹20–30 LPA.", icon: '💰' },
  { q: 'Is AWS worth learning in 2025?', a: "Hyderabad has Amazon, Microsoft, Google, and hundreds of product companies all hiring AWS engineers. The demand hasn't slowed down — if anything it's accelerated with AI workloads moving to cloud. Yes, it's absolutely worth it.", icon: '📈' },
  { q: 'Do you prepare students for AWS certification exams?', a: "Yes. Certification prep is built into the curriculum — not an add-on. We cover Solutions Architect, DevOps Engineer, and Data Engineer certifications with practice tests and mock exams. We'll support you until you pass.", icon: '🎓' }
];

const courseStyles = {
  'aws-cloud-online-training-in-hyderabad': { accent: '#3b82f6', light: '#eff6ff', border: '#bfdbfe', icon: '☁️', badge: 'Most Popular', students: '1,000+ Trained' },
  'aws-devops-online-training-in-hyderabad': { accent: '#8b5cf6', light: '#f5f3ff', border: '#ddd6fe', icon: '⚙️', badge: 'High Demand', students: '3,500+ Trained' },
  'aws-data-engineering-online-training-in-hyderabad': { accent: '#ec4899', light: '#fdf2f8', border: '#fbcfe8', icon: '📊', badge: 'Highest Salary', students: '500+ Trained' }
};

export default function Home() {
  const [enrollmentModal, setEnrollmentModal] = useState(false);
  const [coursesModal, setCoursesModal] = useState(false);
  const [brochureModal, setBrochureModal] = useState(false);
  const [courseAccessModal, setCourseAccessModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [pendingCourseRoute, setPendingCourseRoute] = useState('');
  const [courses, setCourses] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    try { setCourses(getAllCourses()); } catch (e) { setCourses([]); }
  }, []);

  const handleEnrollment = (courseName = '') => { setSelectedCourse(courseName); setCoursesModal(false); setEnrollmentModal(true); };
  const handleLearnMore = (courseName, courseSlug) => { setSelectedCourse(courseName); if (courseSlug) setPendingCourseRoute(`/courses/${courseSlug}`); setCourseAccessModal(true); };

  return (
    <>
      <LocalBusinessSchema />
      {courses.slice(0, 3).map(c => <CourseStructuredData key={c._id} course={c} />)}

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src="/home-logo.png" alt="AWS DevOps Training Academy Hyderabad Logo" className="h-10 w-auto rounded-lg" />
              <div className="hidden sm:block">
                <div className="text-sm font-bold text-gray-900 leading-tight">AWS DevOps Training</div>
                <div className="text-xs text-blue-600 font-medium">Academy Hyderabad</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+919885543638" className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors text-sm font-medium">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                +91 98855 43638
              </a>
              <button onClick={() => handleEnrollment()} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-colors">Enroll Now</button>
            </div>
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/></svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
              <a href="tel:+919885543638" className="flex items-center gap-2 text-gray-700 text-sm font-medium px-2">+91 98855 43638</a>
              <button onClick={() => { handleEnrollment(); setMenuOpen(false); }} className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold text-sm">Enroll Now</button>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-6">
            📍 Ameerpet, Hyderabad — Near Satyam Theatre
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Learn <span className="text-blue-400">AWS Cloud</span> &amp; DevOps<br/>
            <span className="text-cyan-400">in Hyderabad</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            We've trained 5,000+ students from Hyderabad — freshers and working professionals — and placed them in TCS, Infosys, Wipro, Accenture, and 45+ other companies. Our trainers have worked in the industry, not just studied it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={() => handleEnrollment()} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-900/50">Join Next Batch →</button>
            <button onClick={() => setBrochureModal(true)} className="border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">Download Brochure</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[{ num: '5,000+', label: 'Students Trained' }, { num: '50+', label: 'Hiring Companies' }, { num: '100%', label: 'Placement Support' }, { num: '3–6 Months', label: 'Course Duration' }].map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-extrabold text-blue-400">{s.num}</div>
                <div className="text-sm text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Our AWS Courses</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Three focused programs. Pick the one that matches where you want to go.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course) => {
              const s = courseStyles[course.slug?.current] || { accent: '#6b7280', light: '#f9fafb', border: '#e5e7eb', icon: '🎓', badge: 'New', students: 'New Course' };
              return (
                <div key={course._id} className="bg-white rounded-2xl border-2 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col" style={{ borderColor: s.border }} itemScope itemType="https://schema.org/Course">
                  <div className="h-2 w-full" style={{ backgroundColor: s.accent }} />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl" style={{ backgroundColor: s.light }}>{s.icon}</div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: s.light, color: s.accent }}>{s.badge}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" itemProp="name">{course.title}</h3>
                    <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-1" itemProp="description">{course.subtitle || course.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-5 pb-5 border-b border-gray-100">
                      <span>⏱ {course.duration}</span>
                      <span className="font-semibold" style={{ color: s.accent }}>{s.students}</span>
                    </div>
                    {course.price && (
                      <div className="flex items-center gap-2 mb-5">
                        <span className="text-2xl font-extrabold text-gray-900">₹{course.price?.toLocaleString()}</span>
                        {course.originalPrice > course.price && <span className="text-gray-400 line-through text-sm">₹{course.originalPrice?.toLocaleString()}</span>}
                      </div>
                    )}
                    <button onClick={() => handleLearnMore(course.title, course.slug?.current)} className="w-full py-3 rounded-xl font-bold text-white transition-all hover:opacity-90" style={{ backgroundColor: s.accent }}>
                      View Course Details →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Why Students Choose Us</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">We're not the only AWS institute in Hyderabad. Here's why 5,000+ students picked us anyway.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🧑‍💻', title: 'Trainers with Real Experience', desc: "Our trainers have worked at companies like Infosys, HCL, and AWS partners — not just theoretical knowledge." },
              { icon: '📍', title: 'Prime Ameerpet Location', desc: "Right next to Ameerpet Metro Station and Satyam Theatre. Reachable from anywhere in Hyderabad in under 30 minutes." },
              { icon: '🖥️', title: 'Hands-On from Day 1', desc: "No death by PowerPoint. You'll work on real AWS consoles and live projects from your very first week." },
              { icon: '🤝', title: 'Direct Company Connections', desc: "We have tie-ups with 50+ companies across Hyderabad — HITEC City, Gachibowli, Madhapur. Not just a resume portal." },
              { icon: '📋', title: 'AWS Certification Prep Included', desc: "Solutions Architect, DevOps Engineer, Data Engineer — certification prep is built in, not an extra charge." },
              { icon: '⏰', title: 'Flexible Batch Timings', desc: "Weekday mornings, evenings, and weekend batches. We work around your schedule — not the other way around." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Our Students Work At</h2>
            <p className="text-gray-400 text-lg">5,000+ students placed across India's top IT companies and MNCs</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {COMPANIES.map((company, i) => (
              <div key={i} className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 rounded-xl px-4 py-3 text-center transition-all duration-200">
                <span className="text-gray-300 text-sm font-medium">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[{ num: '3,500+', label: 'AWS DevOps Students' }, { num: '1,000+', label: 'AWS Cloud Students' }, { num: '500+', label: 'Data Engineering Students' }, { num: '₹15–30 LPA', label: 'Avg. Package (Senior)' }].map((s, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl font-extrabold">{s.num}</div>
                <div className="text-blue-100 text-sm mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-gray-500 text-lg">Things people usually ask us before enrolling.</p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden" itemScope itemType="https://schema.org/Question">
                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{faq.icon}</span>
                    <span className="font-semibold text-gray-900" itemProp="name">{faq.q}</span>
                  </div>
                  <svg className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-4 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-gray-600 leading-relaxed pl-9" itemProp="text">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/LocalBusiness">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" itemProp="name">Contact Us</h2>
            <p className="text-gray-500 text-lg">Walk in, call us, or send a message — we respond quickly.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <h3 className="font-bold text-gray-900 mb-1">Our Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <span itemProp="streetAddress">Aditya Enclave, Nilgiri Block, Near Vamsi Installation,<br/>506A/1, Basti Road, Beside Metro Line</span><br/>
                      <span itemProp="addressLocality">Hyderabad</span>, <span itemProp="addressRegion">Telangana</span> <span itemProp="postalCode">500018</span>
                    </p>
                    <p className="text-blue-600 text-sm mt-2 font-medium">5 min walk from Ameerpet Metro Station</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <a href="tel:+919885543638" className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-green-300 hover:shadow-md transition-all text-center block">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  </div>
                  <div className="font-bold text-gray-900 text-sm" itemProp="telephone">+91 98855 43638</div>
                  <div className="text-gray-400 text-xs mt-1">Mon–Sat, 9am–9pm</div>
                </a>
                <a href="mailto:info@awsdevopstraininginhyderabad.com" className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-purple-300 hover:shadow-md transition-all text-center block">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div className="font-bold text-gray-900 text-xs break-all" itemProp="email">info@awsdevops<br/>traininginhyderabad.com</div>
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-64">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4919340384176!2d78.4447854!3d17.4361534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb919a92a31daf%3A0x934cc6531fd1e587!2sAWS%20Devops%20Training%20In%20Hyderabad!5e0!3m2!1sen!2sfr!4v1770299024828!5m2!1sen!2sfr" className="w-full h-full" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
              </div>
              <div className="text-center">
                <a href="https://www.google.com/maps/dir/?api=1&destination=Aditya+enclave,nilgiri+block,near+vamsi+Installation,506A/1,basti+road,beside+metro+line,Hyderabad,Telangana+500018,India" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors">
                  Get Directions →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Send us a message</h3>
              <p className="text-gray-500 text-sm mb-6">Fill this out and we'll reply on WhatsApp within minutes.</p>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.target);
                const msg = `🎓 *Course Inquiry — AWS DevOps Training Hyderabad*\n\n👤 *Name:* ${fd.get('name')}\n📱 *Phone:* ${fd.get('phone')}\n📚 *Course:* ${fd.get('course')}\n💬 *Message:* ${fd.get('message') || '—'}`;
                window.open(`https://wa.me/+919885543638?text=${encodeURIComponent(msg)}`, '_blank');
              }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="Your full name"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input type="tel" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="+91 XXXXX XXXXX"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Course Interest</label>
                  <select name="course" className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                    <option>AWS DevOps Engineering</option>
                    <option>AWS Cloud Fundamentals</option>
                    <option>AWS Data Engineering</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea name="message" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="Batch timings, fees, experience required..."/>
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/></svg>
                  Send on WhatsApp
                </button>
              </form>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-center text-gray-400 text-sm mb-4">Follow us</p>
                <div className="flex justify-center gap-3">
                  <a href="https://www.facebook.com/awsdevopstrainingacademy/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/aws-devops-training-234284137" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/awsdevopstraining/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-100 hover:bg-pink-200 rounded-xl flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/home-logo.png" alt="AWS DevOps Training Academy" className="h-9 w-auto rounded-lg"/>
                <div>
                  <div className="text-white font-bold text-sm">AWS DevOps Training</div>
                  <div className="text-blue-400 text-xs">Academy Hyderabad</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed">Hyderabad's trusted AWS training institute. 5,000+ students trained and placed since 2019.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Our Courses</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/courses/aws-devops-online-training-in-hyderabad" className="hover:text-blue-400 transition-colors">AWS DevOps Engineering</a></li>
                <li><a href="/courses/aws-cloud-online-training-in-hyderabad" className="hover:text-blue-400 transition-colors">AWS Cloud Fundamentals</a></li>
                <li><a href="/courses/aws-data-engineering-online-training-in-hyderabad" className="hover:text-blue-400 transition-colors">AWS Data Engineering</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+919885543638" className="hover:text-green-400 transition-colors">+91 98855 43638</a></li>
                <li><a href="mailto:info@awsdevopstraininginhyderabad.com" className="hover:text-blue-400 transition-colors break-all">info@awsdevopstraininginhyderabad.com</a></li>
                <li className="leading-relaxed">Aditya Enclave, Nilgiri Block,<br/>506A/1, Basti Road, Ameerpet,<br/>Hyderabad, Telangana 500018</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-sm">© 2026 AWS DevOps Training Academy Hyderabad. All rights reserved.</p>
            <p className="text-xs text-gray-600">Designed by <a href="https://www.linkedin.com/in/venkatalokesh" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Devotree</a></p>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-5 left-4 z-50">
        <a href="tel:+919885543638" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-xl transition-all hover:scale-105 text-sm font-semibold">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
          Call Now
        </a>
      </div>
      <button onClick={() => { const msg = `👋 Hi! I'm interested in AWS DevOps training in Hyderabad. Can you share details about batch timings, fees, and placement support?`; window.open(`https://wa.me/+919885543638?text=${encodeURIComponent(msg)}`, '_blank'); }} className="fixed bottom-5 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all hover:scale-110" title="Chat on WhatsApp">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/></svg>
      </button>

      {/* MODALS */}
      <EnrollmentModal isOpen={enrollmentModal} onClose={() => setEnrollmentModal(false)} courseName={selectedCourse}/>
      <CoursesModal isOpen={coursesModal} onClose={() => setCoursesModal(false)} onEnroll={handleEnrollment}/>
      <BrochureModal isOpen={brochureModal} onClose={() => setBrochureModal(false)}/>

      {courseAccessModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Get Course Details</h3>
              <button onClick={() => setCourseAccessModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <p className="text-blue-600 font-semibold mb-1 text-sm">{selectedCourse}</p>
            <p className="text-gray-500 text-sm mb-6">Fill this out and we'll send you the full curriculum, batch schedule, and fee details.</p>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const fd = new FormData(e.target);
              try {
                emailjs.init('nrA3P33HTKo5srFaN');
                await emailjs.send('service_u5pa6mf', 'template_vnz0219', { from_name: fd.get('name'), from_email: fd.get('email'), phone: fd.get('phone'), course: selectedCourse, message: fd.get('message') || 'No message', to_email: 'mevlokia@gmail.com', email_message: `Course inquiry for ${selectedCourse}` });
              } catch (err) { console.error(err); }
              alert("Thanks! We'll send you the course details shortly.");
              setCourseAccessModal(false);
              if (pendingCourseRoute) router.push(pendingCourseRoute);
            }} className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label><input type="text" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="Your name"/></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Email *</label><input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="your@email.com"/></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label><input type="tel" name="phone" required className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="+91 XXXXX XXXXX"/></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Any questions?</label><textarea name="message" rows={3} className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder="Batch timings, fees, experience required..."/></div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setCourseAccessModal(false)} className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors">Cancel</button>
                <button type="submit" className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-colors">Get Details</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
