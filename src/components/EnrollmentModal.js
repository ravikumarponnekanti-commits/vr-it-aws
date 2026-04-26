'use client';
import { useState } from 'react';

export default function EnrollmentModal({ isOpen, onClose, courseName = 'AWS DevOps Engineering' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: courseName,
    experience: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `🎓 *New Enrollment — AWS DevOps Training Hyderabad*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
📚 *Course:* ${formData.course}
💼 *Experience:* ${formData.experience || 'Not specified'}
💬 *Message:* ${formData.message || '—'}

Please confirm my enrollment and share next batch details!`;

    window.open(`https://wa.me/+919885543638?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
    setFormData({ name: '', email: '', phone: '', course: courseName, experience: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}>
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl">🎓</div>
            <div>
              <h2 className="text-xl font-bold text-white">Enroll Now</h2>
              <p className="text-blue-100 text-sm">We&apos;ll confirm your seat on WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="px-6 py-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
              <input type="text" name="name" required value={formData.name} onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Your full name"/>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="+91 XXXXX XXXXX"/>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
              <input type="email" name="email" required value={formData.email} onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="your@email.com"/>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Course</label>
              <select name="course" value={formData.course} onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                <option value="AWS DevOps Engineering">AWS DevOps Engineering</option>
                <option value="AWS Cloud Fundamentals">AWS Cloud Fundamentals</option>
                <option value="AWS Data Engineering">AWS Data Engineering</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Experience Level</label>
              <select name="experience" value={formData.experience} onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                <option value="">Select your level</option>
                <option value="Fresher — No IT experience">Fresher — No IT experience</option>
                <option value="Beginner — Basic IT knowledge">Beginner — Basic IT knowledge</option>
                <option value="Intermediate — 1-3 years IT">Intermediate — 1-3 years IT</option>
                <option value="Experienced — 3+ years IT">Experienced — 3+ years IT</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Any questions? (Optional)</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={2}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Batch timings, fees, EMI options..."/>
            </div>

            <button type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 mt-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              Send Enrollment on WhatsApp
            </button>
          </form>

          <p className="text-center text-gray-400 text-xs mt-4">
            📍 Aditya Enclave, Ameerpet, Hyderabad · +91 98855 43638
          </p>
        </div>
      </div>
    </div>
  );
}
