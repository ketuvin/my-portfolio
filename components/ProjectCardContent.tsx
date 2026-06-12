import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ProjectPlaceholder from './ProjectPlaceholder';
import { Project, ProjectStatus } from '../lib/projects';
import { CATEGORY_LABELS } from '../lib/projectHelpers';
import { getStatusConfig } from '../lib/projectStatus';

type ProjectCardContentProps = {
  project: Project;
  compact?: boolean;
  reverseImage?: boolean;
  onOpenImageModal: (images: string[], index: number) => void;
  onOpenProjectLink: (link: string, status: ProjectStatus) => void;
};

const MOBILE_VISIBLE_HIGHLIGHTS = 2;
const MOBILE_VISIBLE_TECH = 4;

const ProjectCardContent: React.FC<ProjectCardContentProps> = ({
  project,
  compact = false,
  reverseImage = false,
  onOpenImageModal,
  onOpenProjectLink,
}) => {
  const [expanded, setExpanded] = useState(false);
  const statusConfig = getStatusConfig(project.status);
  const canVisitLive = project.status === 'live' || project.status === 'mvp';
  const showFull = !compact || expanded;

  const metadataLine = [project.year, project.client, CATEGORY_LABELS[project.category]]
    .filter(Boolean)
    .join(' · ');

  const visibleHighlights = showFull
    ? project.highlights
    : project.highlights.slice(0, MOBILE_VISIBLE_HIGHLIGHTS);

  const visibleTech = showFull
    ? project.technologies
    : project.technologies.slice(0, MOBILE_VISIBLE_TECH);

  const hiddenTechCount = project.technologies.length - MOBILE_VISIBLE_TECH;

  const imageBlock = compact ? (
    <div className="relative overflow-hidden rounded-lg border h-[160px]">
      {project.imageUrls.length > 0 ? (
        <>
          <Image
            src={project.imageUrls[0]}
            alt={`${project.title} - Main Image`}
            width={640}
            height={360}
            onClick={(e) => {
              e.stopPropagation();
              onOpenImageModal(project.imageUrls, 0);
            }}
            className="w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          />
          {project.imageUrls.length > 1 && (
            <div
              className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-0.5 rounded-full cursor-pointer z-10 text-xs"
              onClick={(e) => {
                e.stopPropagation();
                onOpenImageModal(project.imageUrls, 0);
              }}
            >
              +{project.imageUrls.length - 1}
            </div>
          )}
        </>
      ) : (
        <ProjectPlaceholder />
      )}
      <div className="absolute top-2 right-2 z-10">
        <span
          className={`${statusConfig.className} px-2 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md`}
        >
          <span className="text-[8px]">{statusConfig.icon}</span>
          {statusConfig.label}
        </span>
      </div>
    </div>
  ) : (
    <div className={`${styles.desktopImageFrame} border aspect-video lg:aspect-auto lg:min-h-[240px]`}>
      {project.imageUrls.length > 0 ? (
        <>
          <Image
            src={project.imageUrls[0]}
            alt={`${project.title} - Main Image`}
            width={1920}
            height={1080}
            onClick={(e) => {
              e.stopPropagation();
              onOpenImageModal(project.imageUrls, 0);
            }}
            className={`w-full h-full object-cover lg:w-auto lg:h-auto lg:max-w-full lg:max-h-full lg:object-contain ${styles.desktopImage}`}
          />
          {project.imageUrls.length > 1 && (
            <div
              className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-0.5 rounded-full cursor-pointer z-10 text-xs"
              onClick={(e) => {
                e.stopPropagation();
                onOpenImageModal(project.imageUrls, 0);
              }}
            >
              +{project.imageUrls.length - 1}
            </div>
          )}
        </>
      ) : (
        <ProjectPlaceholder />
      )}
      <div className="absolute top-2 right-2 z-10">
        <span
          className={`${statusConfig.className} px-2 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md`}
        >
          <span className="text-[8px]">{statusConfig.icon}</span>
          {statusConfig.label}
        </span>
      </div>
    </div>
  );

  const contentBlock = (
    <div className="flex flex-col justify-center overflow-y-auto max-h-full">
      <h3 className={`font-semibold text-left ${compact ? 'text-base leading-snug' : 'text-xl lg:text-2xl'}`}>
        {project.title}
      </h3>
      <p className={`text-gray-500 mt-1 ${compact ? 'text-xs leading-relaxed' : 'text-sm'}`}>{metadataLine}</p>
      {project.proprietary && (
        <span className="inline-block text-xs bg-gray-800 text-white px-2 py-0.5 rounded mt-2 self-start">
          Proprietary &#128274;
        </span>
      )}
      <ul
        className={`text-left list-disc list-outside opacity-90 ${
          compact ? 'text-xs mt-2 ml-4 space-y-1' : 'text-sm mt-3 ml-5 space-y-2'
        }`}
      >
        {visibleHighlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {showFull && (
        <p
          className={`opacity-70 text-left break-words ${
            compact ? 'text-xs mt-2 leading-relaxed' : 'text-sm mt-3'
          }`}
        >
          {project.description}
        </p>
      )}
      <div className={`flex flex-wrap gap-1.5 ${compact ? 'mt-2' : 'mt-3'}`}>
        {visibleTech.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-200"
          >
            {tag}
          </span>
        ))}
        {compact && !showFull && hiddenTechCount > 0 && (
          <span className="px-2 py-0.5 text-xs rounded-full bg-gray-200 text-gray-600">
            +{hiddenTechCount}
          </span>
        )}
      </div>
      {compact && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="text-xs text-orange-600 font-semibold mt-2 self-start hover:underline"
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
      <div className={`flex flex-wrap gap-2 ${compact ? 'mt-3' : 'mt-4'}`}>
        {canVisitLive && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenProjectLink(project.projectLink, project.status);
            }}
            className={`font-semibold rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors ${
              compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
            }`}
          >
            View Live Site
          </button>
        )}
        {project.githubLink && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.githubLink, '_blank');
            }}
            className={`font-semibold rounded-lg border-2 border-gray-300 text-gray-700 hover:border-orange-600 hover:text-orange-600 transition-colors ${
              compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
            }`}
          >
            GitHub
          </button>
        )}
      </div>
    </div>
  );

  if (compact) {
    return (
      <div className="flex flex-col gap-3">
        {imageBlock}
        {contentBlock}
      </div>
    );
  }

  return (
    <div
      className={`grid h-full min-h-0 flex-1 gap-6 md:grid-cols-1 lg:grid-cols-2 lg:items-stretch ${
        reverseImage ? 'lg:[direction:rtl]' : ''
      }`}
    >
      <div className="lg:h-full lg:min-h-0 lg:self-stretch lg:[direction:ltr]">
        {imageBlock}
      </div>
      <div className="lg:flex lg:flex-col lg:justify-center lg:min-h-0 lg:[direction:ltr]">
        {contentBlock}
      </div>
    </div>
  );
};

export default ProjectCardContent;
