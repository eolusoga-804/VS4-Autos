import "./AmbientOrbs.css";

function AmbientOrbs() {
  return (
    <div className="ambient-orbs" aria-hidden="true">
      <span className="ambient-orbs__orb ambient-orbs__orb--sky" />
      <span className="ambient-orbs__orb ambient-orbs__orb--blue" />
      <span className="ambient-orbs__orb ambient-orbs__orb--violet" />
      <span className="ambient-orbs__orb ambient-orbs__orb--mint" />
      <span className="ambient-orbs__orb ambient-orbs__orb--rose" />
    </div>
  );
}

export default AmbientOrbs;
