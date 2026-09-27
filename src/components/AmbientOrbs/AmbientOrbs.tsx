import "./AmbientOrbs.css";

function AmbientOrbs() {
  return (
    <div className="ambient-orbs" aria-hidden="true">
      <span className="ambient-orbs__orb ambient-orbs__orb--sky" />
      <span className="ambient-orbs__orb ambient-orbs__orb--blue" />
      <span className="ambient-orbs__orb ambient-orbs__orb--violet" />
    </div>
  );
}

export default AmbientOrbs;
