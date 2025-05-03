import { FaInstagram, FaLinkedin, FaFileAlt } from "react-icons/fa"; // Font Awesome

export default function Contact() {
  return (
    <div className="pl-10  md:pl-10 xl:pl-[25%] pr-10 pb-3 text-[clamp(2rem,7vw,8rem)] flex flex-col md:flex-row items-start gap-10 txt-dynamic">
      
      <div className="flex-1 flex flex-col justify-between h-100 2xl:h-125"> {/* Set a height to enable spacing */}
        {/* Top Content */}
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="relative w-5 h-5 flex items-center justify-center">
                    <div
                    className="absolute w-full h-full rounded-full bg-tir-dynamic opacity-75"
                    style={{ animation: "pulse-beacon 2s infinite" }}
                    ></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-tir-dynamic z-10"></div>
                </div>
            <span className="text-base font-bold pl-5">Open to new job opportunities</span>
            </div>

            <div className="flex items-center gap-3">
            <span className="text-base">Located in Phoenix, AZ - Open to relocation</span>
            </div>
        </div>

        {/* Bottom Content */}
        <div className="space-y-2">
            <div className="flex items-center gap-5 pt-10">
            <a
                href="https://www.instagram.com/dylanjkerrdesign/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaInstagram className="w-6 h-6 txt-link-dynamic transition" />
            </a>
            <a
                href="https://www.linkedin.com/in/dylan-kerr-b97866132/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin className="w-6 h-6 txt-link-dynamic transition" />
            </a>
            <a
                href="/DKResume_2025_.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaFileAlt className="w-6 h-6 txt-link-dynamic transition" />
            </a>
            </div>
            <div className="flex items-center gap-3">
                <a
                    href="mailto:dyljameskerr@gmail.com?subject=I Saw Your Website&body=Hey Dylan,"
                    className="text-base pt-1 txt-link-dynamic transition"
                >
                    dyljameskerr@gmail.com
                </a>
            </div>
        </div>
    </div>


      {/* Right Column - Photo */}
      <div className="w-100 h-100 2xl:w-125 2xl:h-125 flex-shrink-0 rounded-xl overflow-hidden bg-dynamic">
        <img
          src="../DK_Profile.jpg"
          alt="Dylan Kerr"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
