import React, { useRef, useEffect } from 'react';
import { Users, Filter, Crosshair, ExternalLink, Github, Activity, Database } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Adaptive Trading Protocol (ATP)",
    tech: ["Python", "PyTorch", "FastAPI", "Streamlit"],
    description: "Architected an end-to-end MLOps trading platform using Time-Series GANs for synthetic data generation and a Reinforcement Learning (PPO) agent for algorithmic trading.",
    impact: "Implemented real-time drift detection (KL-Divergence) and Explainable AI (XAI) to securely monitor production performance and trigger an automated 'Kill Switch' during market anomalies.",
    repoLink: "https://github.com/divyanshuyadav715-ship-it/SynthMarket",
    demoLink: "https://locustfilepy-6trvjqjzvgxc7caucx6xbe.streamlit.app/#agent-performance-live-p-l",
    icon: <Activity className="w-10 h-10 text-white mb-6" />
  },
  {
    title: "InferX - Scalable AI Serving Engine",
    tech: ["Java", "Spring Boot", "Python", "PyTorch", "Redis"],
    description: "Engineered a high-performance, distributed deep learning inference gateway to bridge Systems Engineering and ML. Decoupled client-facing APIs from heavy GPU workers via an event-driven Redis architecture.",
    impact: "Eliminated client timeouts and skyrocketed inference throughput by efficiently routing high-volume HTTP traffic to scalable Python workers using Redis streams and Dynamic Batching.",
    repoLink: "https://github.com/divyanshuyadav715-ship-it/inferx",
    icon: <Database className="w-10 h-10 text-white mb-6" />
  },
  {
    title: "Predictive Customer Churn & Intervention Engine",
    tech: ["Python", "XGBoost", "SQLite", "Streamlit"],
    description: "Engineered an end-to-end ML pipeline analyzing 50k+ users. Bypassed standard purely-predictive models by implementing a custom Customer Acquisition Cost (CAC) vs. Lifetime Value (LTV) routing logic.",
    impact: "Projected to reduce wasted retention spend by 30% and save ₹45L in annualized revenue.",
    demoLink: "https://huggingface.co/spaces/divyanshujaat/churn-intervention-engine",
    icon: <Users className="w-10 h-10 text-white mb-6" />
  },
  {
    title: "E-Commerce Conversion Funnel & Drop-Off Analysis",
    tech: ["Advanced SQL", "Python", "Tableau"],
    description: "Simulated and analyzed 100k+ web traffic logs to identify bottlenecks. Built an interactive dashboard to visualize conversion rates across the entire user journey.",
    impact: "Identified a critical mobile UI drop-off, recommending a UX redesign projected to recapture ₹25 Lakhs in monthly revenue.",
    demoLink: "https://ecommerce-conversion-funnel-xy4ajysrncyatj3rqyxave.streamlit.app/",
    icon: <Filter className="w-10 h-10 text-white mb-6" />
  },
  {
    title: "MediGuide Predictive Healthcare",
    tech: ["Support Vector Machines (SVM)", "Scikit-Learn"],
    description: "Developed a classification model using SVM to predict disease probability based on user-inputted symptoms.",
    impact: "",
    icon: <Crosshair className="w-10 h-10 text-white mb-6" />
  }
];

const Projects = () => {
  const containerRef = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    // Disable horizontal scroll on mobile for better UX
    if (window.innerWidth < 768) return;

    const sections = gsap.utils.toArray('.project-card');
    
    let ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + scrollRef.current.offsetWidth
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="py-24 bg-[#000] overflow-hidden">
      <div className="px-6 max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-white tracking-tighter">The Proof.</h2>
      </div>

      <div ref={scrollRef} className="flex flex-col md:flex-row w-full md:w-[300vw] h-auto md:h-[75vh] px-6 gap-8 pb-12">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="project-card w-full md:w-[100vw] h-full flex flex-col justify-center px-0 md:px-12"
          >
            <div className="bg-[#050505] rounded-3xl p-8 md:p-12 border border-[#1a1a1a] flex flex-col h-full max-w-5xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              {project.icon}
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter leading-tight">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-4 py-1.5 bg-[#111] text-gray-300 text-xs font-mono tracking-widest uppercase rounded-full border border-[#222]">
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed text-lg md:text-2xl">
                {project.description}
              </p>

              {project.impact && (
                <div className="mt-auto mb-10 bg-white/5 border-l-2 border-white p-6 rounded-r-xl">
                  <p className="text-gray-200 text-lg md:text-xl font-medium">
                    {project.impact}
                  </p>
                </div>
              )}
              
              <div className="mt-auto">
                {project.repoLink && (
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[#333] text-white font-semibold rounded-full hover:bg-[#111] transition-colors duration-300 text-sm">
                    <Github className="w-4 h-4" /> View GitHub Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
