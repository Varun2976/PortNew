import { useState } from 'react';
import { techStack } from './TechStackData';
import skillsBackground from './assets/Skills.avif';
import './SkillsPage.css';

function SkillsPage() {
  const [revealedSkills, setRevealedSkills] = useState(() => new Set());
  const showAll = revealedSkills.size === techStack.length;

  const toggleAll = () => {
    if (showAll) {
      setRevealedSkills(new Set());
      return;
    }

    setRevealedSkills(new Set(techStack.map((_, index) => index)));
  };

  const toggleSkill = (index) => {
    setRevealedSkills((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="skills-screen">
      <div
        className="skills-screen__backdrop"
        style={{ backgroundImage: `url(${skillsBackground})` }}
        aria-hidden="true"
      />
      <div className="skills-screen__shade" aria-hidden="true" />

      <div className="skills-screen__content">
        <header className="skills-screen__header">
          <div>
            
            <h1 className="skills-screen__title">Skills</h1>
            <p className="skills-screen__subtitle">Hover over the boxes to view !!</p>
          </div>
          <button
            type="button"
            className="skills-reveal-all"
            onClick={toggleAll}
            aria-pressed={showAll}
          >
            {showAll ? 'Hide all' : 'Reveal all'}
          </button>
        </header>

        <ul className={`skills-grid${showAll ? ' is-revealing-all' : ''}`}>
          {techStack.map((tech, index) => {
            const isRevealed = revealedSkills.has(index);
            const needsInvert = tech.name === 'Solidity' || tech.name === 'Ether.js';

            return (
              <li key={tech.name} className="skills-grid__item">
                <button
                  type="button"
                  className={`skills-tile${isRevealed ? ' is-revealed' : ''}`}
                  onClick={() => toggleSkill(index)}
                  aria-label={`${isRevealed ? 'Hide' : 'Reveal'} ${tech.name}`}
                  aria-pressed={isRevealed}
                  style={{ '--tile-index': index }}
                >
                  <span className="skills-tile__logo-wrap">
                    <img
                      src={tech.logo}
                      alt=""
                      className={`skills-tile__logo${needsInvert ? ' invert' : ''}`}
                    />
                    <span className="skills-tile__name">{tech.name}</span>
                  </span>
                  <span className="skills-tile__cover" aria-hidden="true">?</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default SkillsPage;