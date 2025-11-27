import * as React from "react";
import { motion, useInView } from "motion/react";
import siteConfig from "../../data/siteConfig";

const TimelineCard: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="flex flex-col h-full">
      {/* Header */}
      <h3 className="font-mono text-sm text-ghost mb-5">
        <span className="text-matrix">//</span> experience.timeline
      </h3>

      {/* Timeline */}
      <div className="relative flex-1">
        {/* Vertical line */}
        <motion.div
          className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-steel"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: "top" }}
        />

        {/* Timeline items */}
        <div className="space-y-5">
          {siteConfig.jobs.map((job, index) => (
            <motion.div
              key={job.company}
              className="relative pl-6"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.4 }}
            >
              {/* Dot */}
              <div
                className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 ${
                  job.duration === null
                    ? "bg-matrix border-matrix animate-pulse-glow"
                    : "bg-terminal border-steel"
                }`}
              />

              {/* Content */}
              <div>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h4 className="font-mono text-sm font-semibold text-white">
                    {job.company}
                  </h4>
                  <span className="font-mono text-xs text-matrix">
                    {job.occupation}
                  </span>
                </div>
                <p className="font-mono text-xs text-steel mt-0.5">
                  {job.begin.month} {job.begin.year}
                  {job.duration ? ` · ${job.duration}` : " · Present"}
                </p>
                <p className="text-xs text-ghost mt-1.5 leading-relaxed">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
