import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import companyLogo from "../assets/companyLogo.png";

const monoFont = "'JetBrains Mono', 'SF Mono', Menlo, monospace";

const matches = [
  { rank: 1, title: "Senior Frontend Engineer", meta: "Stripe · San Francisco, CA" },
  { rank: 2, title: "Staff Software Engineer, Platform", meta: "Linear · Remote (Americas)" },
  { rank: 3, title: "Product Engineer", meta: "Figma · New York, NY" },
];

function HomePage(){
  const navigate = useNavigate();

  const dateString = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).toUpperCase();

  return(
    <section className="flex items-center gap-16 pt-16 pb-24">
      <div className="w-[520px] shrink-0">
        <p
          className="text-xs text-gray-400 uppercase tracking-wide mb-4"
          style={{ fontFamily: monoFont }}
        >
          For tech &amp; engineering roles
        </p>

        <h1 className="text-[48px] leading-[1.1] text-[#1a2e2a] font-bold">
          Your daily shortlist of engineering jobs that actually fit.
        </h1>

        <p className="text-gray-600 text-base mt-5 max-w-[460px]">
          Stop doom-scrolling job boards. We connect to the boards you trust,
          read your resume and preferences, and deliver the three
          best-matched roles every morning with a clear match score and
          reasoning.
        </p>

        <div className="flex items-center gap-3 mt-8">
          <Button
            variant="filled"
            label="Get my daily 3"
            color="#1a2e2a"
            className="py-[12px] px-5 rounded-xl text-sm"
            onClick={() => navigate("/getStarted")}
          />
          <Button
            variant="filled"
            label="Browse jobs publicly"
            color="#faf8f4"
            textColor="#1a2e2a"
            className="py-[12px] px-5 rounded-xl text-sm border border-[#d6d0c0]"
            onClick={() => navigate("/browse")}
          />
        </div>

        <p className="text-xs text-gray-500 mt-5">
          ✓ 14-day Pro trial &nbsp; ✓ Cancel anytime &nbsp; ✓ No card required
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-[420px] border border-[#d6d0c0] rounded-2xl bg-[#faf8f4] p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p
              className="text-[11px] text-gray-400 uppercase tracking-wide"
              style={{ fontFamily: monoFont }}
            >
              {dateString}
            </p>
            <span className="text-[11px] px-2 py-1 rounded-full bg-[#2D5A4F14] text-[#2D5A4F] border border-[#2D5A4F40]">
              Ranked by fit
            </span>
          </div>

          <h3 className="text-lg font-semibold text-[#1a2e2a] mt-1 mb-4">
            Your daily three
          </h3>

          <div className="flex flex-col">
            {matches.map((match, i) => (
              <div key={match.rank}>
                <div className="flex items-center gap-3 py-3">
                  <span className="text-xs text-gray-400 w-5">
                    #{match.rank}
                  </span>
                  <img
                    src={companyLogo}
                    alt={match.title}
                    className="w-8 h-8 rounded-lg object-cover border border-[#d6d0c0]"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#1a2e2a]">
                      {match.title}
                    </p>
                    <p className="text-xs text-gray-500">{match.meta}</p>
                  </div>
                </div>
                {i !== matches.length - 1 && (
                  <hr className="border-t border-[#e5e1d4]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomePage;