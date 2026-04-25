'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import EnrollmentModal from '@/components/EnrollmentModal';
import CourseStructuredData from '@/components/CourseStructuredData';
import { getCourseBySlug } from '@/lib/staticCourseData';

const CURRICULUM = [
  { module: 'Module 1', title: 'AWS Cloud Fundamentals', topics: ['Cloud Computing Concepts', 'AWS Global Infrastructure', 'IAM Users, Groups, and Roles', 'AWS Management Console', 'Billing and Cost Management'] },
  { module: 'Module 2', title: 'Compute Services', topics: ['Amazon EC2 Instances and AMIs', 'Auto Scaling Groups', 'Elastic Load Balancing', 'AWS Lambda Functions', 'Elastic Beanstalk Deployments'] },
  { module: 'Module 3', title: 'Storage Services', topics: ['Amazon S3 Buckets and Policies', 'S3 Storage Classes and Lifecycle', 'Amazon EBS and EFS', 'AWS Storage Gateway', 'Amazon Glacier for Archival'] },
  { module: 'Module 4', title: 'Networking and VPC', topics: ['VPC Design and Subnets', 'Security Groups and NACLs', 'Route 53 DNS Management', 'CloudFront CDN', 'VPN and Direct Connect'] },
  { module: 'Module 5', title: 'Database Services', topics: ['Amazon RDS Setup and Management', 'Aurora MySQL and PostgreSQL', 'DynamoDB NoSQL Design', 'ElastiCache for Redis', 'Database Migration Service'] },
  { module: 'Module 6', title: 'Security and Compliance', topics: ['AWS Shield and WAF', 'KMS Key Management', 'CloudTrail Audit Logging', 'AWS Config for Compliance', 'Inspector and GuardDuty'] },
  { module: 'Module 7', title: 'Monitoring and Operations', topics: ['CloudWatch Metrics and Alarms', 'CloudWatch Logs and Dashboards', 'AWS Systems Manager', 'CloudFormation Basics', 'Trusted Advisor'] },
  { module: 'Module 8', title: 'Solutions Architecture', topics: ['High Availability Design', 'Disaster Recovery Strategies', 'Cost Optimization Techniques', 'Well-Architected Framework', 'Migration Strategies (6 Rs)'] },
];

const PROJECTS = [
  { title: 'Three-Tier Web Application', desc: 'Deploy a production-grade web app on AWS — EC2, RDS, S3, CloudFront, and Route 53. Includes auto-scaling and load balancing for high availability.', tools: ['EC2', 'RDS', 'S3', 'CloudFront', 'Route 53'] },
  { title: 'Serverless API Backend', desc: 'Build a completely serverless REST API using Lambda, API Gateway, and DynamoDB. No servers to manage, scales automatically with traffic.', tools: ['Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudWatch'] },
  { title: 'Multi-Region Disaster Recovery', desc: 'Design and implement a DR setup across two AWS regions with automated failover, data replication, and RTO under 15 minutes.', tools: ['Route 53', 'RDS', 'S3', 'CloudFormation', 'CloudWatch'] },
];

const BLOGS = [
  { title: 'AWS Solutions Architect Associate: Is It Still Worth It in 2025?', date: 'March 2025', read: '5 min read', excerpt: 'The SAA-C03 exam is one of the most recognized cloud certifications in Hyderabad. But with so many certifications out there, is it still the one to get? We share what our placed students say, and what actually moved the needle in their job searches.', tag: 'Certification' },
  { title: 'EC2 vs Lambda: When to Use Which (With Real Examples from Hyderabad Projects)', date: 'February 2025', read: '6 min read', excerpt: 'This is one of the most common architecture questions in AWS interviews across Hyderabad. We break it down with practical examples from projects our students have built at companies in HITEC City.', tag: 'Technical' },
  { title: 'From Non-IT Background to AWS Cloud Engineer: It Took 5 Months', date: 'January 2025', read: '7 min read', excerpt: 'Priya had a commerce degree and was working as an accountant in Hyderabad. She joined our Ameerpet batch with zero technical background. Five months later she got placed at a cloud consulting firm at ₹8 LPA. Here\'s her story.', tag: 'Career' },
];

export default function AWSCloud() {
  const [enrollmentModal, setEnrollmentModal] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const [openModule, setOpenModule] = useState(0);
  const router = useRouter();

  useEffect(() => {
    try { const data = getCourseBySlug('aws-cloud-online-training-in-hyderabad'); setCourseData(data); } catch (e) { setCourseData(null); }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { if (document.body.contains(script)) document.body.removeChild(script); };
  }, []);

  return (
    <>
      {courseData && <CourseStructuredData course={courseData} />}
      <EnrollmentModal isOpen={enrollmentModal} onClose={() => setEnrollmentModal(false)} courseName="AWS Cloud Fundamentals" />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => router.push('/')} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            Back to Home
          </button>
          <div className="flex items-center gap-4">
            <a href="tel:+919885543638" className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm font-medium transition-colors">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              +91 98855 43638
            </a>
            <button onClick={() => setEnrollmentModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-colors">Enroll Now</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-900 via-sky-900 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/Course">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-6">
              ☁️ Most Popular — AWS Cloud Course in Hyderabad
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6" itemProp="name">
              AWS Cloud Fundamentals<br/>
              <span className="text-blue-400">Online Training in Hyderabad</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8" itemProp="description">
              The most popular starting point for anyone entering cloud computing in Hyderabad. This course covers the full AWS ecosystem — from EC2 and S3 to VPC design and architecture best practices — and prepares you for the AWS Solutions Architect Associate exam.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <button onClick={() => setEnrollmentModal(true)} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
                Enroll Now →
              </button>
              <a href="tel:+919885543638" className="border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
                Call Us
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              {[{ label: 'Duration', val: '60 Days' }, { label: 'Level', val: 'Beginner Friendly' }, { label: 'Fee', val: '₹18,000' }, { label: 'Location', val: 'Ameerpet, Hyderabad' }].map((s, i) => (
                <div key={i}>
                  <div className="text-blue-400 font-bold text-lg">{s.val}</div>
                  <div className="text-gray-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU LEARN */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">What This Course Covers</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We designed this course for people who are new to cloud — whether you're a fresher, a developer looking to add cloud skills, or someone switching careers. You don't need a deep technical background to start.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                By the end, you'll understand AWS architecture well enough to design, deploy, and manage cloud infrastructure — and you'll be ready to sit the Solutions Architect Associate exam.
              </p>
              <div className="space-y-3">
                {['Set up and manage AWS accounts and IAM', 'Launch and configure EC2 instances', 'Design secure VPC architectures', 'Work with S3, EBS, and EFS storage', 'Deploy RDS databases and DynamoDB', 'Configure CloudFront and Route 53', 'Monitor with CloudWatch and CloudTrail', 'Prepare for AWS Solutions Architect Associate certification'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Course Details</h3>
              <div className="space-y-5">
                {[
                  { label: 'Duration', val: '60 Days (2 months)', icon: '⏱' },
                  { label: 'Batch Timings', val: 'Weekday & Weekend batches available', icon: '📅' },
                  { label: 'Mode', val: 'Classroom + Online (Ameerpet, Hyderabad)', icon: '📍' },
                  { label: 'Prerequisites', val: 'No prior cloud experience needed', icon: '📋' },
                  { label: 'Certification', val: 'AWS Solutions Architect Associate prep', icon: '🎓' },
                  { label: 'Placement', val: '100% placement assistance', icon: '💼' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</div>
                      <div className="text-gray-900 font-semibold text-sm mt-0.5">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => setEnrollmentModal(true)} className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-sm transition-colors">
                Enroll in This Course →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Course Curriculum</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">8 modules covering all core AWS services. Beginner friendly, but thorough enough to get you job-ready in Hyderabad's cloud market.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {CURRICULUM.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors" onClick={() => setOpenModule(openModule === i ? null : i)}>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">{item.module}</span>
                    <span className="font-semibold text-gray-900">{item.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">{item.topics.length} topics</span>
                    <svg className={`w-4 h-4 text-gray-400 transition-transform ${openModule === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </button>
                {openModule === i && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    <ul className="space-y-2 mt-4">
                      {item.topics.map((t, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"/>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Hands-On Projects</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">3 real projects you build during the course — each one demonstrates a different AWS architecture pattern.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-sm mb-4">0{i+1}</div>
                <h3 className="font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t, j) => (
                    <span key={j} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-lg font-medium">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-gray-500 text-lg">Real reviews from AWS Cloud students who trained with us in Ameerpet, Hyderabad.</p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex text-yellow-400">
                {'★★★★★'.split('').map((s, i) => <span key={i} className="text-2xl">★</span>)}
              </div>
              <span className="text-gray-600 font-semibold">4.9 / 5 on Google</span>
            </div>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="elfsight-app-6d80956e-8ad0-41ad-8330-ec91a4114c76" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">From Our Blog</h2>
            <p className="text-gray-500 text-lg">Practical insights on AWS Cloud, certifications, and building a cloud career in Hyderabad.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOGS.map((b, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:shadow-md transition-all">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">{b.tag}</span>
                <h3 className="font-bold text-gray-900 mt-4 mb-3 leading-snug">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{b.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>{b.date}</span><span>·</span><span>{b.read}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Start Your AWS Cloud Journey Today</h2>
          <p className="text-blue-100 text-lg mb-8">Join our next batch in Ameerpet, Hyderabad. No prior experience needed — just the drive to learn.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setEnrollmentModal(true)} className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all">Enroll Now →</button>
            <a href="tel:+919885543638" className="border-2 border-white text-white hover:bg-blue-700 px-8 py-4 rounded-xl font-bold text-lg transition-all">Call +91 98855 43638</a>
          </div>
          <p className="text-blue-200 text-sm mt-6">📍 Aditya Enclave, Nilgiri Block, 506A/1, Basti Road, Ameerpet, Hyderabad 500018</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
        <p className="text-sm">© 2026 AWS DevOps Training Academy Hyderabad. All rights reserved.</p>
        <p className="text-xs text-gray-600 mt-2">
          <a href="/" className="hover:text-gray-400 transition-colors">Home</a> · <a href="/courses/aws-devops-online-training-in-hyderabad" className="hover:text-gray-400 transition-colors">AWS DevOps</a> · <a href="/courses/aws-data-engineering-online-training-in-hyderabad" className="hover:text-gray-400 transition-colors">AWS Data Engineering</a>
        </p>
      </footer>

      {/* FLOATING */}
      <div className="fixed bottom-5 left-4 z-50">
        <a href="tel:+919885543638" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-xl text-sm font-semibold transition-all">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
          Call Now
        </a>
      </div>
      <button onClick={() => { const msg = `👋 Hi! I'm interested in the AWS Cloud Fundamentals course in Hyderabad. Can you share batch timings and fee details?`; window.open(`https://wa.me/+919885543638?text=${encodeURIComponent(msg)}`, '_blank'); }} className="fixed bottom-5 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all hover:scale-110">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/></svg>
      </button>
    </>
  );
}
