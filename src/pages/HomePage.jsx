import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const monoFont = "'JetBrains Mono', 'SF Mono', Menlo, monospace";

const matches = [
  { rank: 1, initials: "ST", title: "Senior Frontend Engineer", meta: "Stripe · San Francisco, CA", score: 96 },
  { rank: 2, initials: "LN", title: "Staff Software Engineer, Platform", meta: "Linear · Remote (Americas)", score: 93 },
  { rank: 3, initials: "FG", title: "Product Engineer", meta: "Figma · New York, NY", score: 89 },
];

function MatchScore({ score }) {
  return (
    <div
      className="relative w-9 h-9 rounded-full flex items-center justify-center shrink-0"
      style={{ background: `conic-gradient(#2D5A4F ${score}%, #e5e1d4 0)` }}
    >
      <div className="absolute inset-[3px] rounded-full bg-[#faf8f4] flex items-center justify-center">
        <span className="text-[11px] font-semibold text-[#2D5A4F]">{score}</span>
      </div>
    </div>
  );
}

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
                  <div className="w-8 h-8 rounded-lg bg-[#f5f0e8] border border-[#d6d0c0] flex items-center justify-center text-[11px] font-semibold text-[#4a5a55]">
                    {match.initials}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#1a2e2a]">
                      {match.title}
                    </p>
                    <p className="text-xs text-gray-500">{match.meta}</p>
                  </div>
                  <MatchScore score={match.score} />
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