import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center sm:gap-8 sm:py-10"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="min-w-0">
          <p className="text-xl sm:text-2xl">{title}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-sand sm:text-base">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex min-h-11 items-center gap-2 rounded-lg pr-3 font-medium text-neutral-200 hover-animation"
          aria-label={`Read more about ${title}`}
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" alt="" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
