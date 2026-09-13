import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./Loader.scss";

function Loader({ onComplete }) {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = setTimeout(() => {
      setIsLeaving(true);
    }, 2200);

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 2850);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`loader ${isLeaving ? "loader--leaving" : ""}`}
      aria-label="Loading Namo Restro"
      role="status"
    >
      {/* Background */}
      <div className="loader__grain" />
      <div className="loader__glow loader__glow--one" />
      <div className="loader__glow loader__glow--two" />

      {/* Top Location */}
      <div className="loader__top">
        <span>JAIPUR</span>
        <div className="loader__top-line" />
        <span>RAMNAGARIYA</span>
      </div>

      {/* Main Brand */}
      <div className="loader__center">
        <div className="loader__mark">
          <span>N</span>
        </div>

        <div className="loader__brand">
          <h1>NAMO</h1>
          <span>RESTRO</span>
        </div>

        <div className="loader__line">
          <span />
        </div>

        <p>
          <span>GOOD FOOD</span>
          <i />
          <span>GOOD PEOPLE</span>
        </p>
      </div>

      {/* Bottom */}
      <div className="loader__bottom">
        <div className="loader__message">
          <span>PREPARING YOUR EXPERIENCE</span>

          <div className="loader__progress">
            <span />
          </div>
        </div>

        <div className="loader__year">
          <span>EST.</span>
          <strong>2026</strong>
        </div>

        <div className="loader__arrow">
          <ArrowUpRight size={15} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

export default Loader;