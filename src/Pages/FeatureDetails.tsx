import { useNavigate, useParams } from "react-router-dom";
import { APPROUTES } from "../Routes/appRoutes";
import IconButton from "../Components/Common/Button";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Users, Globe, BookOpen, Lightbulb, Brain } from "lucide-react";

export const features = [
  {
    id: 1,
    title: "Patents",
    description:
      "Gain in-depth knowledge of how to create, draft, and file patents that safeguard innovative ideas, ensuring intellectual property rights and long-term impact.",
    footer: "Protect Ideas",
    image: "/Programs/image1.png",
    icon: CheckCircle,
    detailedContent: {
      overview: "Master the complete patent process from ideation to publication. Our comprehensive patent program equips you with the knowledge and skills to protect intellectual property effectively in today's competitive innovation landscape.",
      keyLearnings: [
        "Patent Law Fundamentals: Understanding the legal framework, types of patents (utility, design, plant), and international patent systems including PCT applications.",
        "Prior Art Research: Advanced techniques for conducting thorough patent searches using professional databases like USPTO, Google Patents, and international patent offices.",
        "Patent Writing & Drafting: Learn to write clear, comprehensive patent applications including claims, specifications, and technical drawings that withstand legal scrutiny.",
        "IP Strategy Development: Develop strategic approaches to building patent portfolios, licensing agreements, and competitive intelligence analysis.",
        "Patent Prosecution: Navigate the examination process, respond to office actions, and work effectively with patent examiners and attorneys.",
        "Global Patent Systems: Understanding patent laws across major jurisdictions including US, EU, China, Japan, and emerging markets."
      ],
      practicalApplications: [
        "Draft actual patent applications for real innovations under expert guidance",
        "Conduct comprehensive prior art searches and freedom-to-operate analyses",
        "Participate in mock patent prosecution scenarios and examiner interviews",
        "Develop IP strategies for startups and established companies",
        "Analyze patent landscapes in emerging technologies like AI, biotech, and clean energy"
      ],
      careerOpportunities: "Patent law, IP consulting, technology transfer, innovation management, patent analysis, and entrepreneurship in deep-tech sectors.",
      duration: "12-week intensive program with ongoing mentorship opportunities"
    }
  },
  {
    id: 2,
    title: "Research",
    description:
      "Work directly on academic and industry-level research projects, developing critical thinking and analytical skills through practical, real-world experience.",
    footer: "Human Ideas",
    image: "/Programs/image2.svg",
    icon: BookOpen,
    detailedContent: {
      overview: "Engage in cutting-edge research across multiple disciplines, working alongside leading academics and industry professionals. Develop sophisticated research methodologies and contribute to advancing human knowledge.",
      keyLearnings: [
        "Research Methodology: Master quantitative and qualitative research methods, experimental design, statistical analysis, and data interpretation techniques.",
        "Literature Review & Analysis: Advanced techniques for comprehensive literature searches, critical analysis of existing research, and identifying knowledge gaps.",
        "Data Collection & Management: Learn professional data collection methods, database management, and ensure research integrity and reproducibility.",
        "Academic Writing & Publication: Develop skills in writing research papers, grant proposals, and presenting findings at conferences and peer-reviewed journals.",
        "Interdisciplinary Collaboration: Work across disciplines including STEM, social sciences, humanities, and emerging interdisciplinary fields.",
        "Ethics in Research: Understand research ethics, IRB processes, data privacy, and responsible conduct of research."
      ],
      practicalApplications: [
        "Lead independent research projects in your area of interest",
        "Collaborate on ongoing faculty research across partner universities",
        "Present findings at national and international student research conferences",
        "Co-author research papers with potential for peer-reviewed publication",
        "Develop and execute research proposals with real-world applications"
      ],
      careerOpportunities: "Academic research, R&D in industry, policy analysis, consulting, graduate school preparation, and research-intensive careers.",
      duration: "16-week research immersion with options for extended engagement"
    }
  },
  {
    id: 3,
    title: "Global Exposure",
    description:
      "Build a strong global network by engaging with peers, mentors, and experts across different cultures, enhancing both collaboration and cross-cultural learning.",
    footer: "Global Network",
    image: "/Programs/image3.svg",
    icon: Globe,
    detailedContent: {
      overview: "Develop a truly global perspective through immersive cultural exchanges, international collaborations, and cross-border project work. Build lasting connections with future leaders from around the world.",
      keyLearnings: [
        "Cross-Cultural Communication: Master effective communication strategies across different cultural contexts, including non-verbal communication and cultural sensitivity.",
        "Global Business Practices: Understand international business etiquette, negotiation styles, and market dynamics across major economic regions.",
        "International Relations: Explore geopolitics, international law, trade agreements, and global governance structures that shape our interconnected world.",
        "Language & Cultural Immersion: Intensive language learning opportunities and cultural immersion experiences in multiple countries.",
        "Global Problem Solving: Collaborative approaches to addressing worldwide challenges like climate change, poverty, and technological inequality.",
        "Digital Global Citizenship: Navigate international digital platforms, understand global digital rights, and engage in responsible global online communities."
      ],
      practicalApplications: [
        "Participate in international virtual and in-person exchanges with partner institutions",
        "Lead cross-cultural team projects addressing global challenges",
        "Attend international conferences, summits, and cultural festivals",
        "Engage in diplomatic simulations like Model UN and international negotiations",
        "Complete cultural immersion experiences in at least three different continents"
      ],
      careerOpportunities: "International business, diplomacy, global NGOs, international law, global consulting, and leadership roles in multinational organizations.",
      duration: "Year-long program with seasonal international experiences"
    }
  },
  {
    id: 4,
    title: "Ivy League Readiness",
    description:
      "Develop the academic rigor, leadership mindset, and personal discipline required to compete for admission to Ivy League and other top universities.",
    footer: "Future Ready",
    image: "/Programs/image4.svg",
    icon: Users,
    detailedContent: {
      overview: "Comprehensive preparation for admission to the world's most competitive universities. Develop not just academic excellence, but the leadership qualities, personal character, and unique perspectives that top institutions seek.",
      keyLearnings: [
        "Academic Excellence: Advanced coursework in core subjects, college-level writing, critical thinking, and analytical reasoning that exceeds high school standards.",
        "Standardized Test Mastery: Comprehensive SAT/ACT preparation with personalized strategies, plus preparation for subject tests and international equivalents.",
        "Leadership Development: Practical leadership experience through organizing events, leading teams, and taking initiative in community projects.",
        "Personal Brand Building: Develop a compelling personal narrative, identify unique strengths, and create a cohesive application profile.",
        "Extracurricular Excellence: Strategic involvement in activities that demonstrate passion, commitment, and impact rather than just participation.",
        "Interview & Communication Skills: Master college interviews, public speaking, and articulating your vision and goals convincingly."
      ],
      practicalApplications: [
        "Complete mock college applications with feedback from admissions consultants",
        "Lead significant community service or entrepreneurial projects",
        "Participate in prestigious competitions and summer programs",
        "Develop independent research projects suitable for college applications",
        "Build relationships with mentors who can provide meaningful recommendation letters"
      ],
      careerOpportunities: "Access to elite university networks, exclusive internships, leadership roles in top organizations, and accelerated career trajectories.",
      duration: "18-month comprehensive preparation program with continued support through application process"
    }
  },
  {
    id: 5,
    title: "Innovation Thinking",
    description:
      "Learn structured methods and design-thinking approaches to generate creative, practical, and impactful solutions for today's global challenges.",
    footer: "Creative Problem Solving",
    image: "/Programs/image 24.png",
    icon: Lightbulb,
    detailedContent: {
      overview: "Transform your approach to problem-solving with cutting-edge innovation methodologies used by leading companies and research institutions. Learn to identify opportunities, generate breakthrough ideas, and bring innovations to market.",
      keyLearnings: [
        "Design Thinking Process: Master the complete design thinking framework from empathy and ideation to prototyping and testing.",
        "Systems Thinking: Understand complex systems, identify leverage points, and design interventions that create sustainable change.",
        "Creative Problem Solving: Advanced brainstorming techniques, lateral thinking methods, and approaches to overcome mental blocks.",
        "Innovation Management: Learn to foster innovation within organizations, manage creative teams, and navigate the innovation lifecycle.",
        "Technology Trends Analysis: Stay ahead of emerging technologies, assess their potential impact, and identify innovation opportunities.",
        "Entrepreneurial Mindset: Develop the skills to identify market opportunities, validate ideas, and build viable business models around innovations."
      ],
      practicalApplications: [
        "Lead innovation challenges addressing real-world problems for partner organizations",
        "Develop and prototype innovative solutions using design thinking methodologies",
        "Participate in innovation competitions and pitch events",
        "Create innovation frameworks and toolkits for specific industries",
        "Collaborate with startups and established companies on innovation projects"
      ],
      careerOpportunities: "Product management, innovation consulting, entrepreneurship, R&D leadership, design strategy, and venture capital.",
      duration: "14-week intensive program with ongoing innovation project mentorship"
    }
  },
 {
    id: 6,
    title: "Brain Science",
    description: "...",
    footer: "Mind Science",
    image: "/Programs/image 23.png",
    icon: Brain,
    detailedContent: {
      overview: "Unlock the power of your mind through evidence-based neuroscience applications. Learn how to optimize cognitive performance, enhance memory, and apply brain science principles to accelerate learning and personal development.",
      keyLearnings: [
        "Neuroscience Fundamentals: Understanding brain structure, neural networks, neuroplasticity, and how the brain processes and stores information.",
        "Memory Enhancement Techniques: Advanced memory strategies including spaced repetition, memory palaces, chunking, and evidence-based study methods.",
        "Cognitive Optimization: Learn to enhance focus, attention, and mental clarity through neurofeedback, mindfulness, and cognitive training exercises.",
        "Learning Science: Understand how learning occurs at the neural level and apply this knowledge to accelerate skill acquisition and knowledge retention.",
        "Brain Health & Performance: Explore the connections between nutrition, exercise, sleep, and cognitive performance for optimal brain function.",
        "Applied Neuroscience: Use brain science principles in education, workplace productivity, sports performance, and personal development."
      ],
      practicalApplications: [
        "Conduct EEG and neuroimaging experiments to understand brain function",
        "Design and test cognitive training programs for specific learning outcomes",
        "Apply memory techniques to master complex academic subjects",
        "Develop personalized brain optimization protocols based on individual neural patterns",
        "Research the neuroscience behind peak performance in various fields"
      ],
      careerOpportunities: "Neuroscience research, educational technology, cognitive training, neurofeedback therapy, and brain-computer interface development.",
      duration: "16-week comprehensive program with ongoing cognitive coaching support"
    }}
];


export const FeatureContent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // find the feature based on id
  const feature = features.find((f) => f.id.toString() === id);

  if (!feature) {
    return (
      <div className="p-12 text-center">
        <h2 className="text-2xl font-bold text-red-500">Feature not found</h2>
        <button
          onClick={() => navigate(APPROUTES.PROGRAMS)}
          className="mt-4 px-6 py-2 bg-[#003579] text-white rounded-lg"
        >
          Back to Programs
        </button>
      </div>
    );
  }




  return (
    <section className="w-full bg-gradient-to-br from-[#F9FBFD] to-[#E8F4F8] py-12 px-4 sm:py-16 sm:px-8 lg:px-[88px]">
      <div className="max-w-[1366px] mx-auto">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#003579] hover:text-[#002347] transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to Programs</span>
          </button>
        </motion.div>

        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading text-left mb-4">{feature.title}</h1>
          <p className="para text-start max-w-3xl leading-relaxed">
            {feature.description}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Image Section */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>

          {/* Overview Section */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-8 h-full">
              <h2 className="text-2xl font-bold text-[#003579] mb-6">Program Overview</h2>
              <p className="text-[#404040] leading-7 para">
                {feature.detailedContent.overview}
              </p>
              <div className="mt-8 p-6 bg-[#F0F8FF] rounded-xl border-l-4 border-[#003579]">
                <h3 className="font-bold text-[#003579] mb-2">Duration</h3>
                <p className="text-[#404040] ">{feature.detailedContent.duration}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Learnings Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 ">
            <h2 className="heading mb-4 text-left">Key Learning Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {feature.detailedContent.keyLearnings.map((learning, index) => {
                const [title, description] = learning.split(": ");
                return (
                  <motion.div
                    key={index}
                    className="bg-[#F9FBFD] rounded-xl p-6 border-l-4 border-[#003579]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <h3 className="font-bold text-[#003579] mb-3">{title}</h3>
                    <p className="para">{description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Practical Applications Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white rounded-2xl p-8 ">
            <h2 className="heading mb-4 text-left">Hands-On Experience</h2>
            <div className="space-y-4">
              {feature.detailedContent.practicalApplications.map((application, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-[#F0F8FF] rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="w-6 h-6 bg-[#003579] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-[#404040] leading-relaxed">{application}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Career Opportunities Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#003579] to-[#004A94] rounded-2xl p-8  text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">Future Opportunities</h3>
                <p className="leading-relaxed text-blue-100">
                  {feature.detailedContent.careerOpportunities}
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Why Choose This Program?</h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-200" />
                    Expert mentorship from industry leaders
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-200" />
                    Real-world project experience
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-200" />
                    Global peer network
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-200" />
                    Certificate of completion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center bg-white rounded-2xl p-8 "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="heading mb-4 text-center">Ready to Begin Your Journey?</h2>
          <p className="para mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students who have transformed their futures through our comprehensive{" "}
            {feature.title.toLowerCase()} program. Take the first step towards excellence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <IconButton
              label="Apply Now"
              onClick={() => navigate(APPROUTES.CONTACT_US)}
              className="bg-[#003579] text-white hover:bg-[#002347] px-8 py-3 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            />
          </div>
          <p className="text-sm text-[#666] mt-6">
            Questions? Contact our admissions team for personalized guidance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
