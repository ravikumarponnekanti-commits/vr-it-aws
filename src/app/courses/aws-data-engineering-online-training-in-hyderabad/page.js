'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import EnrollmentModal from '@/components/EnrollmentModal';
import CourseStructuredData from '@/components/CourseStructuredData';
import { getCourseBySlug } from '@/lib/staticCourseData';

const CURRICULUM = [
  { module: 'Module 1', title: 'Data Architecture Fundamentals', topics: ['Data Engineering Principles', 'Data Lake vs Data Warehouse', 'AWS Data Services Overview', 'Data Governance and Security', 'Cost Optimization Strategies'] },
  { module: 'Module 2', title: 'Data Storage & Management', topics: ['S3 Data Lake Design Patterns', 'Data Partitioning Strategies', 'AWS Lake Formation', 'Data Catalog and Metadata', 'Storage Classes and Lifecycle Policies'] },
  { module: 'Module 3', title: 'Data Processing with AWS Glue', topics: ['Glue ETL Jobs and Workflows', 'Data Crawlers and Schema Discovery', 'PySpark Programming', 'Data Transformation Patterns', 'Job Monitoring and Optimization'] },
  { module: 'Module 4', title: 'Data Warehousing with Redshift', topics: ['Redshift Architecture and Design', 'Data Modeling for Analytics', 'Performance Optimization Techniques', 'Redshift Spectrum for Data Lakes', 'Backup and Disaster Recovery'] },
  { module: 'Module 5', title: 'Real-time Data Streaming', topics: ['Amazon Kinesis Data Streams', 'Kinesis Data Firehose', 'Kinesis Analytics and SQL', 'Real-time Processing Patterns', 'Stream Monitoring and Troubleshooting'] },
  { module: 'Module 6', title: 'Analytics and Querying', topics: ['Amazon Athena Serverless Queries', 'Query Optimization Techniques', 'Data Formats (Parquet, ORC, Avro)', 'Federated Queries', 'Cost Management for Analytics'] },
  { module: 'Module 7', title: 'Big Data with EMR & Spark', topics: ['Amazon EMR Clusters', 'Apache Spark on AWS', 'Hadoop Ecosystem Integration', 'Serverless Analytics Options', 'Performance Tuning and Scaling'] },
  { module: 'Module 8', title: 'Machine Learning Integration', topics: ['Amazon SageMaker for ML Pipelines', 'Feature Engineering at Scale', 'Model Training and Deployment', 'MLOps on AWS', 'AI Services Integration'] },
];

const PROJECTS = [
  { title: 'Retail Data Lake Platform', desc: 'Build a complete data lake for a retail company — S3, Glue, Athena, and QuickSight dashboards showing real-time sales analytics.', tools: ['S3', 'Glue', 'Athena', 'QuickSight', 'Lambda'] },
  { title: 'Real-time IoT Data Pipeline', desc: 'Design a streaming pipeline for IoT sensor data using Kinesis. Set up real-time monitoring and automated alerts for anomalies.', tools: ['Kinesis', 'Lambda', 'DynamoDB', 'CloudWatch', 'SNS'] },
  { title: 'Enterprise Data Warehouse', desc: 'Build a production-grade Redshift warehouse with dimensional modeling, automated ETL pipelines, and self-service reporting.', tools: ['Redshift', 'Glue', 'S3', 'Step Functions', 'QuickSight'] },
];

const BLOGS = [
  {
    title: 'Why Hyderabad is Becoming India\'s Data Engineering Hub',
    date: 'March 2025',
    read: '5 min read',
    excerpt: 'Companies like Amazon, Microsoft, and Google have set up large data engineering teams in Hyderabad\'s HITEC City. Here\'s what that means for job seekers and why learning AWS Data Engineering in Hyderabad makes practical sense right now.',
    tag: 'Industry'
  },
  {
    title: 'AWS Glue vs Apache Spark: What Should You Learn First?',
    date: 'February 2025',
    read: '7 min read',
    excerpt: 'One question we get a lot from students in Ameerpet: should I start with AWS Glue or raw Spark? The honest answer depends on the kind of roles you\'re targeting in Hyderabad\'s job market. We break it down.',
    tag: 'Technical'
  },
  {
    title: 'From SQL Developer to AWS Data Engineer: A Realistic Timeline',
    date: 'January 2025',
    read: '6 min read',
    excerpt: 'Several of our students in Hyderabad made this transition in 4-6 months. We share what actually worked, what took longer than expected, and the salary jumps they saw after switching.',
    tag: 'Career'
  },
];

export default function AWSDataEngineering() {
  const [enrollmentModal, setEnrollmentModal] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const [openModule, setOpenModule] = useState(0);
  const router = useRouter();

  useEffect(() => {
    try {
      const data = getCourseBySlug('aws-data-engineering-online-training-in-hyderabad');
      setCourseData(data);
    } catch (e) { setCourseData(null); }
  }, []);

  return (
    <>
      {courseData && <CourseStructuredData course={courseData} />}
      <EnrollmentModal isOpen={enrollmentModal} onClose={() => setEnrollmentModal(false)} courseName="AWS Data Engineering" />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => router.push(&apos;/&apos;)} className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            Back to Home
          </button>
          <div className="flex items-center gap-4">
            <a href="tel:+919885543638" className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm font-medium transition-colors">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              +91 98855 43638
            </Link>
            <button onClick={() => setEnrollmentModal(true)} className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-colors">Enroll Now</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-pink-900 via-rose-900 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/Course">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-400/30 rounded-full px-4 py-1.5 text-pink-300 text-sm font-medium mb-6">
              📊 Highest Salary — AWS Data Engineering Course in Hyderabad
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6" itemProp="name">
              AWS Data Engineering<br/>
              <span className="text-pink-400">Online Training in Hyderabad</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8" itemProp="description">
              Data engineering is the fastest-growing AWS specialisation in Hyderabad right now. Companies in HITEC City are hiring data engineers at ₹20–30 LPA — and there aren&apos;t enough trained people to fill the roles. This course, taught in Ameerpet, prepares you to build real data pipelines from day one.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <button onClick={() => setEnrollmentModal(true)} className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
                Enroll Now →
              </button>
              <a href="tel:+919885543638" className="border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
                Call Us
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              {[{ label: 'Duration', val: '75 Days' }, { label: 'Level', val: 'Advanced' }, { label: 'Fee', val: '₹25,000' }, { label: 'Location', val: 'Ameerpet, Hyderabad' }].map((s, i) => (
                <div key={i}>
                  <div className="text-pink-400 font-bold text-lg">{s.val}</div>
                  <div className="text-gray-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">What This Course Covers</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                This isn&apos;t a theoretical course. Every module is built around what Hyderabad companies actually ask for in interviews. You&apos;ll work with the same AWS services used by data teams at Amazon, Deloitte, and Cognizant — Glue, Redshift, Kinesis, Athena, SageMaker, and more.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                By the end, you&apos;ll have three complete projects on your resume — not toy examples, but real architectures that demonstrate you can handle production data workloads.
              </p>
              <div className="space-y-3">
                {['Build data lakes with S3 and AWS Lake Formation', 'Create ETL pipelines using AWS Glue and PySpark', 'Design Redshift warehouses for analytics workloads', 'Stream real-time data with Amazon Kinesis', 'Query data serverlessly using Amazon Athena', 'Integrate ML workflows with SageMaker', 'Visualize insights with Amazon QuickSight', 'Prepare for AWS Data Engineer Associate certification'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-pink-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-pink-50 rounded-2xl p-8 border border-pink-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Course Details</h3>
              <div className="space-y-5">
                {[
                  { label: 'Duration', val: '75 Days (3 months)', icon: '⏱' },
                  { label: 'Batch Timings', val: 'Weekday & Weekend batches available', icon: '📅' },
                  { label: 'Mode', val: 'Classroom + Online (Ameerpet, Hyderabad)', icon: '📍' },
                  { label: 'Prerequisites', val: 'SQL knowledge helpful, not mandatory', icon: '📋' },
                  { label: 'Certification', val: 'AWS Data Engineer Associate prep included', icon: '🎓' },
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
              <button onClick={() => setEnrollmentModal(true)} className="w-full mt-8 bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-bold text-sm transition-colors">
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
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">8 modules covering everything from data architecture basics to ML integration. Updated regularly based on what Hyderabad companies are hiring for.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {CURRICULUM.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors" onClick={() => setOpenModule(openModule === i ? null : i)}>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-pink-600 bg-pink-50 px-2 py-1 rounded-lg">{item.module}</span>
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
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full flex-shrink-0"/>
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
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">You&apos;ll graduate with 3 real projects — the kind that make interviewers in Hyderabad take notice.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:border-pink-200 hover:bg-pink-50 transition-all">
                <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 font-bold text-sm mb-4">0{i+1}</div>
                <h3 className="font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t, j) => (
                    <span key={j} className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-lg font-medium">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">From Our Blog</h2>
            <p className="text-gray-500 text-lg">Practical insights on AWS Data Engineering, Hyderabad&apos;s job market, and career transitions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOGS.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-gray-200 hover:shadow-md transition-all">
                <span className="text-xs font-bold text-pink-600 bg-pink-50 px-2 py-1 rounded-lg">{b.tag}</span>
                <h3 className="font-bold text-gray-900 mt-4 mb-3 leading-snug">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{b.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>{b.date}</span>
                  <span>·</span>
                  <span>{b.read}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Start Your Data Engineering Career?</h2>
          <p className="text-pink-100 text-lg mb-8">Join our next batch in Ameerpet, Hyderabad. Limited seats — we keep batches small so every student gets attention.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setEnrollmentModal(true)} className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Enroll Now →
            </button>
            <a href="tel:+919885543638" className="border-2 border-white text-white hover:bg-pink-700 px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Call +91 98855 43638
            </a>
          </div>
          <p className="text-pink-200 text-sm mt-6">📍 Aditya Enclave, Nilgiri Block, 506A/1, Basti Road, Ameerpet, Hyderabad 500018</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
        <p className="text-sm">© 2026 AWS DevOps Training Academy Hyderabad. All rights reserved.</p>
        <p className="text-xs text-gray-600 mt-2">
          <Link href="/" className="hover:text-gray-400 transition-colors">Home</a> · <a href="/courses/aws-devops-online-training-in-hyderabad" className="hover:text-gray-400 transition-colors">AWS DevOps</a> · <a href="/courses/aws-cloud-online-training-in-hyderabad" className="hover:text-gray-400 transition-colors">AWS Cloud</a>
        </p>
      </footer>

      {/* FLOATING */}
      <div className="fixed bottom-5 left-4 z-50">
        <a href="tel:+919885543638" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-xl text-sm font-semibold transition-all">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
          Call Now
        </a>
      </div>
      <button onClick={() => { const msg = `👋 Hi! I'm interested in the AWS Data Engineering course in Hyderabad. Can you share batch timings and fee details?`; window.open(`https://wa.me/+919885543638?text=${encodeURIComponent(msg)}`, '_blank'); }} className="fixed bottom-5 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all hover:scale-110">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/></svg>
      </button>
    </>
  );
}
