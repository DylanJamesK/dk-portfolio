import RoleCard from './RoleCard';
import BsiLogo from './Icons/BsiLogo';
import NasaLogo from './Icons/NasaLogo';
import LuminosityLogo from './Icons/LuminosityLogo';
import MyLogo from './Icons/MyLogo';

export default function Background() {
  return (
    <section id="background" className="pt-34 pb-32 pr-10">
      {/* Intro Paragraph */}
      <p className="text-md txt-dynamic dark:text-gray-300 mb-30 pl-10 md:pr-[40%] md:pl-10 xl:pl-[25%] xl:pr-[35%]">
      With a foundation in industrial design and UX design, including a focus on virtual reality, my career began by designing for innovation. Over the past six years, I've consistently sought opportunities to expand my knowledge beyond defined roles, establishing myself as a versatile designer capable of adapting and adding significant value in any environment. My experience spans companies of all sizes, with continuous involvement in the tech startup scene. While I'm currently leveraging my skills as a freelance creative developer for various AI and semiconductor startups, I am eager to join a company and collaborate within a dedicated team environment.
      </p>

      {/* Role Cards */}
      <div className="space-y-20 pl-10 md:pl-10 xl:pl-[25%]">

        <RoleCard
          logo={MyLogo}
          company="Freelance"
          title="Creative Developer"
          years="Now"
          location="Arizona"
          description="I empower tech startups by shaping their brand strategy, crafting intuitive UI/UX, conducting insightful user research, and rapidly bringing ideas to life through prototyping."
        />
        <RoleCard
          logo={BsiLogo}
          company="BSI Group"
          title="Innovation Analyst"
          years="2021 - Dec 2024"
          location="United Kingdom [Remote]"
          description="I was responsible for user research and the creation of web interfaces and interactive dashboards to support a team focused on applying AI to international standards certifications."
        />
        <RoleCard
          logo={NasaLogo}
          company="NASA MSFC"
          title="AR/VR Design Intern"
          years="2021"
          location="Alabama [Remote]"
          description="I developed a multiplayer VR experience connecting multiple NASA bases with the goal of experimenting with remote astronaut training and assisted with the integration of its networking API."
        />
        <RoleCard
          logo={LuminosityLogo}
          company="The Luminosity Lab"
          title="Product Designer"
          years="2018 - 2021"
          location="Arizona"
          description="I mentored design students in UX case studies and applied product design methodologies to diverse projects (robotics, web apps, mixed reality) while pursuing my BS and MA."
        />
        {/* Add more roles if needed */}
      </div>
    </section>
  );
}
