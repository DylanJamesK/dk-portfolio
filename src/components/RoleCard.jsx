export default function RoleCard({ logo: Logo, company, title, years, location, description }) {
    return (
      <div className="flex flex-col items-start gap-4 text-left">
      {/* Circular logo container */}
      <div className="w-24 h-24 rounded-full overflow-hidden bg-sec-dynamic">
        {/* Render logo component here */}
        {Logo && <Logo/>}
      </div>
  
        <div>
          <h3 className="text-[clamp(1.2rem,3vw,3.5rem)] font-semibold txt-dynamic leading-[1]">{company}</h3>
          <p className="text-[clamp(2rem,5vw,10rem)] font-semibold txt-dynamic">
            {title}
          </p>
          <p className="text-md font-semibold txt-dynamic">
            {years}&ensp;{location}
          </p>
          <p className="mt-2 txt-sec-dynamic text-md max-w-xl">
            {description}
          </p>
        </div>
      </div>
    );
  }
  