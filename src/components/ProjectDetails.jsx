import { useEffect, useState } from "react";
import { motion } from "motion/react";

const TechnologyTag = ({ tag }) => {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <div
      className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10"
      title={tag.name}
    >
      {hasImageError ? (
        <span className="px-1 text-center text-[10px] font-semibold leading-tight text-neutral-300">
          {tag.name}
        </span>
      ) : (
        <img
          src={tag.path}
          alt={tag.name}
          className="size-8 object-contain"
          onError={() => setHasImageError(true)}
        />
      )}
    </div>
  );
};

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-primary/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <motion.div
        className="relative flex h-[calc(100svh-1rem)] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-gradient-to-l from-midnight to-navy shadow-2xl sm:h-[min(46rem,calc(100vh-2rem))] sm:rounded-2xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 rounded-md bg-midnight/90 p-2 transition-colors hover:bg-gray-600"
        >
          <img src="/assets/close.svg" alt="" className="size-6" />
        </button>
        <img
          src={image}
          alt={`${title} preview`}
          className="h-44 w-full shrink-0 object-cover sm:h-70"
        />
        <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-5">
          <div className="hide-scrollbar min-h-0 flex-1 overflow-y-auto pr-2">
            <h5 className="mb-2 pr-8 text-xl font-bold text-white sm:text-2xl">{title}</h5>
            <p className="mb-3 font-normal text-neutral-400">{description}</p>
            {subDescription.map((subDesc, index) => (
              <p key={index} className="mb-3 font-normal text-neutral-400">
                {subDesc}
              </p>
            ))}
          </div>
          <div className="mt-3 flex shrink-0 flex-col items-stretch gap-3 border-t border-white/10 pt-3 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between sm:mt-4 sm:pt-4">
            <div className="hide-scrollbar flex min-w-0 gap-2 overflow-x-auto py-1">
              {tags.map((tag) => (
                <TechnologyTag key={tag.id} tag={tag} />
              ))}
            </div>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-1 rounded-lg bg-white/5 px-3 font-medium hover-animation min-[420px]:bg-transparent min-[420px]:px-0"
              >
                View Project
                <img src="/assets/arrow-up.svg" alt="" className="size-4" />
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex shrink-0 items-center gap-1 font-medium opacity-40"
              >
                View Project
                <img src="/assets/arrow-up.svg" alt="" className="size-4" />
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
