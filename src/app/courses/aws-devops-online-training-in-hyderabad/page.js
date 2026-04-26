'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import EnrollmentModal from '@/components/EnrollmentModal';
import CourseStructuredData from '@/components/CourseStructuredData';
import { getCourseBySlug } from '@/lib/staticCourseData';

const CURRICULUM = [
  { module: 'Module 1', title: 'DevOps Fundamentals & AWS Overview', topics: ['DevOps Culture and Principles', 'AWS DevOps Services Overview', 'Version Control with AWS CodeCommit', 'Development Workflow Best Practices', 'Agile and DevOps Integration'] },
  { module: 'Module 2', title: 'Continuous Integration with CodeBuild', topics: ['CodeBuild Project Configuration', 'Build Specifications (buildspec.yml)', 'Automated Testing Integration', 'Artifact Management with S3', 'Build Environment Optimization'] },
  { module: 'Module 3', title: 'Continuous Deployment with CodeDeploy', topics: ['Deployment Strategies (Blue/Green, Rolling)', 'Application and Deployment Groups', 'EC2 and Lambda Deployments', 'Rollback and Recovery Procedures', 'Deployment Hooks and Scripts'] },
  { module: 'Module 4', title: 'CI/CD Orchestration with CodePipeline', topics: ['Pipeline Design and Configuration', 'Source, Build, and Deploy Stages', 'Multi-Environment Deployments', 'Approval Actions and Gates', 'Pipeline Monitoring and Troubleshooting'] },
  { module: 'Module 5', title: 'Infrastructure as Code with CloudFormation', topics: ['CloudFormation Templates and Stacks', 'Resource Dependencies and Parameters', 'Nested Stacks and Cross-Stack References', 'Change Sets and Stack Updates', 'Best Practices for IaC'] },
  { module: 'Module 6', title: 'Container DevOps with ECS and EKS', topics: ['Docker Containerization on AWS', 'Amazon ECS Task Definitions', 'Amazon EKS Cluster Management', 'Container CI/CD Pipelines', 'Container Security and Monitoring'] },
  { module: 'Module 7', title: 'Serverless DevOps with Lambda', topics: ['Serverless Application Model (SAM)', 'Lambda Function Deployments', 'API Gateway Integration', 'Event-driven Architectures', 'Serverless Monitoring and Debugging'] },
  { module: 'Module 8', title: 'Monitoring, Logging & Security', topics: ['CloudWatch Metrics and Alarms', 'CloudTrail for Audit Logging', 'X-Ray for Distributed Tracing', 'DevSecOps Principles', 'IAM Roles and Policies for Automation'] },
];

const PROJECTS = [
  { title: 'End-to-End CI/CD Pipeline', desc: 'Build a complete pipeline from GitHub commit to production deployment using CodePipeline, CodeBuild, and CodeDeploy — zero manual steps.', tools: ['CodePipeline', 'CodeBuild', 'CodeDeploy', 'S3', 'CloudWatch'] },
  { title: 'Kubernetes Microservices on EKS', desc: 'Containerize a microservices application and deploy it on Amazon EKS with auto-scaling, load balancing, and automated rollbacks.', tools: ['Docker', 'EKS', 'ECR', 'ALB', 'Helm'] },
  { title: 'Infrastructure Automation with Terraform', desc: 'Provision a complete AWS environment — VPC, EC2, RDS, S3 — using Terraform and manage it through a GitOps workflow.', tools: ['Terraform', 'CloudFormation', 'IAM', 'VPC', 'GitHub Actions'] },
];

const BLOGS = [
  { title: 'Why Hyderabad Companies Are Desperate for AWS DevOps Engineers in 2025', date: 'March 2025', read: '5 min read', excerpt: 'HITEC City has over 1,500 open DevOps positions right now. Companies like Amazon Development Centre, Microsoft IDC, and dozens of startups in Gachibowli can\'t hire fast enough. We break down why and what skills actually matter.', tag: 'Industry' },
  { title: 'Docker vs Kubernetes: What Should You Focus on First?', date: 'February 2025', read: '6 min read', excerpt: 'Every student in our Ameerpet batches asks this. The short answer: start with Docker, then move to EKS. Here\'s the reasoning, and what Hyderabad interviewers actually test you on.', tag: 'Technical' },
  { title: 'How Our Students Are Getting DevOps Jobs Without Prior Experience', date: 'January 2025', read: '7 min read', excerpt: 'Three of our recent Hyderabad students had zero DevOps background — one was a manual tester, one a Java developer, one fresh out of college. All three got placed within 2 months of completing the course. Here\'s how.', tag: 'Career' },
];

export default function AWSDevOps() {
  const [enrollmentModal, setEnrollmentModal] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const [openModule, setOpenModule] = useState(0);
  const router = useRouter();

  useEffect(() => {
    try { const data = getCourseBySlug('aws-devops-online-training-in-hyderabad'); setCourseData(data); } catch (e) { setCourseData(null); }
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
      <EnrollmentModal isOpen={enrollmentModal} onClose={() => setEnrollmentModal(false)} courseName="AWS DevOps Engineering" />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => router.push('/')} className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            Back to Home
          </button>
          <div className="flex items-center gap-4">
            <a href="tel:+919885543638" className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm font-medium transition-colors">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              +91 98855 43638
            </Link>
            <button onClick={() => setEnrollmentModal(true)} className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-colors">Enroll Now</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-900 via-violet-900 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/Course">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-1.5 text-purple-300 text-sm font-medium mb-6">
              ⚙️ High Demand — AWS DevOps Course in Hyderabad
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6" itemProp="name">
              AWS DevOps Engineering<br/>
              <span className="text-purple-400">Online Training in Hyderabad</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8" itemProp="description">
              DevOps is the most in-demand skill in Hyderabad&apos;s tech market right now. Every company — from Amazon&apos;s development centre in Hyderabad to the hundreds of startups in Gachibowli — is hiring. This course, taught in Ameerpet, gets you interview-ready in 3 months.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <button onClick={() => setEnrollmentModal(true)} className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
                Enroll Now →
              </button>
              <a href="tel:+919885543638" className="border-2 border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
                Call Us
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              {[{ label: 'Duration', val: '90 Days' }, { label: 'Level', val: 'Beginner to Advanced' }, { label: 'Fee', val: '₹20,000' }, { label: 'Location', val: 'Ameerpet, Hyderabad' }].map((s, i) => (
                <div key={i}>
                  <div className="text-purple-400 font-bold text-lg">{s.val}</div>
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
                This course is built around what Hyderabad companies actually test in DevOps interviews — not just theory. You&apos;ll learn the AWS DevOps toolchain from scratch: CodePipeline, CodeBuild, CodeDeploy, ECS, EKS, Terraform, and more.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We&apos;ve placed 3,500+ DevOps engineers from our Ameerpet centre. The curriculum is updated every quarter based on what our placed students tell us interviewers are asking.
              </p>
              <div className="space-y-3">
                {['Build CI/CD pipelines with AWS CodePipeline', 'Master Docker and Kubernetes on EKS', 'Automate infrastructure with Terraform and CloudFormation', 'Deploy applications using Blue/Green and Canary strategies', 'Monitor systems with CloudWatch, X-Ray, and ELK', 'Secure pipelines with DevSecOps practices', 'Work with microservices and serverless architectures', 'Prepare for AWS DevOps Engineer Professional certification'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Course Details</h3>
              <div className="space-y-5">
                {[
                  { label: 'Duration', val: '90 Days (3 months)', icon: '⏱' },
                  { label: 'Batch Timings', val: 'Weekday & Weekend batches available', icon: '📅' },
                  { label: 'Mode', val: 'Classroom + Online (Ameerpet, Hyderabad)', icon: '📍' },
                  { label: 'Prerequisites', val: 'Basic Linux knowledge helpful', icon: '📋' },
                  { label: 'Certification', val: 'AWS DevOps Engineer Professional prep', icon: '🎓' },
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
              <button onClick={() => setEnrollmentModal(true)} className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-bold text-sm transition-colors">
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
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">8 modules covering the full AWS DevOps toolchain. Updated every quarter based on what Hyderabad companies are hiring for.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {CURRICULUM.map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors" onClick={() => setOpenModule(openModule === i ? null : i)}>
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-lg">{item.module}</span>
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
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"/>
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
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">3 real projects that go on your resume — not toy examples, but production-level architectures.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:border-purple-200 hover:bg-purple-50 transition-all">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 font-bold text-sm mb-4">0{i+1}</div>
                <h3 className="font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t, j) => (
                    <span key={j} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-lg font-medium">{t}</span>
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
            <p className="text-gray-500 text-lg">Real reviews from DevOps students who trained with us in Ameerpet, Hyderabad.</p>
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
            <p className="text-gray-500 text-lg">Practical insights on AWS DevOps, Hyderabad&apos;s job market, and career transitions.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOGS.map((b, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:shadow-md transition-all">
                <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-lg">{b.tag}</span>
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
      <section className="bg-purple-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Start Your DevOps Career in Hyderabad</h2>
          <p className="text-purple-100 text-lg mb-8">Join our next batch in Ameerpet. Small batches, personal attention, real projects.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setEnrollmentModal(true)} className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-bold text-lg transition-all">Enroll Now →</button>
            <a href="tel:+919885543638" className="border-2 border-white text-white hover:bg-purple-700 px-8 py-4 rounded-xl font-bold text-lg transition-all">Call +91 98855 43638</a>
          </div>
          <p className="text-purple-200 text-sm mt-6">📍 Aditya Enclave, Nilgiri Block, 506A/1, Basti Road, Ameerpet, Hyderabad 500018</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
        <p className="text-sm">© 2026 AWS DevOps Training Academy Hyderabad. All rights reserved.</p>
        <p className="text-xs text-gray-600 mt-2">
          <Link href="/" className="hover:text-gray-400 transition-colors">Home</a> · <a href="/courses/aws-data-engineering-online-training-in-hyderabad" className="hover:text-gray-400 transition-colors">AWS Data Engineering</a> · <a href="/courses/aws-cloud-online-training-in-hyderabad" className="hover:text-gray-400 transition-colors">AWS Cloud</a>
        </p>
      </footer>

      {/* FLOATING */}
      <div className="fixed bottom-5 left-4 z-50">
        <a href="tel:+919885543638" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-xl text-sm font-semibold transition-all">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
          Call Now
        </a>
      </div>
      <button onClick={() => { const msg = `👋 Hi! I'm interested in the AWS DevOps Engineering course in Hyderabad. Can you share batch timings and fee details?`; window.open(`https://wa.me/+919885543638?text=${encodeURIComponent(msg)}`, '_blank'); }} className="fixed bottom-5 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all hover:scale-110">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/></svg>
      </button>
    </>
  );
}
