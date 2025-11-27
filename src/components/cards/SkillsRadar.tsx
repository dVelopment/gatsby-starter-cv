import * as React from "react";
import { motion, useInView } from "motion/react";
import siteConfig from "../../data/siteConfig";

// Color constants
const COLORS = {
  steel: "#21262D",
  matrix: "#00FF41",
  cyber: "#00D9FF",
  ghost: "#8B949E",
};

const SkillsRadar: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = siteConfig.skills;
  const numSkills = skills.length;
  const angleStep = (2 * Math.PI) / numSkills;
  const centerX = 180;
  const centerY = 180;
  const maxRadius = 110;

  // Generate points for the skill polygon
  const skillPoints = skills.map((skill, index) => {
    const angle = angleStep * index - Math.PI / 2; // Start from top
    const radius = (skill.level / 100) * maxRadius;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      labelX: centerX + (maxRadius + 30) * Math.cos(angle),
      labelY: centerY + (maxRadius + 30) * Math.sin(angle),
      name: skill.name,
      level: skill.level,
    };
  });

  const polygonPath = skillPoints.map((p) => `${p.x},${p.y}`).join(" ");

  // Generate grid circles
  const gridLevels = [25, 50, 75, 100];

  return (
    <div ref={ref} className="flex flex-col h-full">
      {/* Header */}
      <h3 className="font-mono text-sm text-ghost mb-4">
        <span className="text-matrix">//</span> skills.radar
      </h3>

      {/* Radar Chart */}
      <div className="flex-1 flex items-center justify-center">
        <svg viewBox="0 0 360 360" className="w-full max-w-[300px]">
          {/* Grid circles */}
          {gridLevels.map((level) => (
            <circle
              key={level}
              cx={centerX}
              cy={centerY}
              r={(level / 100) * maxRadius}
              fill="none"
              stroke={COLORS.steel}
              strokeWidth="1"
              opacity="0.5"
            />
          ))}

          {/* Grid lines from center */}
          {skills.map((_, index) => {
            const angle = angleStep * index - Math.PI / 2;
            const endX = centerX + maxRadius * Math.cos(angle);
            const endY = centerY + maxRadius * Math.sin(angle);
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={endX}
                y2={endY}
                stroke={COLORS.steel}
                strokeWidth="1"
                opacity="0.3"
              />
            );
          })}

          {/* Gradient definition */}
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={COLORS.matrix} />
              <stop offset="100%" stopColor={COLORS.cyber} />
            </linearGradient>
          </defs>

          {/* Skill polygon */}
          <motion.polygon
            points={polygonPath}
            fill="url(#skillGradient)"
            fillOpacity={isInView ? 0.2 : 0}
            stroke={COLORS.matrix}
            strokeWidth="2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformOrigin: `${centerX}px ${centerY}px` }}
          />

          {/* Skill points */}
          {skillPoints.map((point, index) => (
            <motion.circle
              key={point.name}
              cx={point.x}
              cy={point.y}
              r="5"
              fill={COLORS.matrix}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
              style={{ filter: "drop-shadow(0 0 6px rgba(0, 255, 65, 0.6))" }}
            />
          ))}

          {/* Skill labels */}
          {skillPoints.map((point) => (
            <text
              key={`label-${point.name}`}
              x={point.labelX}
              y={point.labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={COLORS.ghost}
              fontSize="10"
              fontFamily="JetBrains Mono, monospace"
            >
              {point.name}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default SkillsRadar;
