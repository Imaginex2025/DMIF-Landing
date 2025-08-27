import OverviewSection from '../Section/About/OverviewSection';
import MentorshipSection from '../Section/About/MentorshipSection';
import UniqueSection from '../Section/About/UniqueSection';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <OverviewSection />
      <MentorshipSection />
      <UniqueSection />
    </div>
  );
};

export default About;