import { PortfolioProject } from '../types';

/** Renders WebM (when available) first, then the MP4 fallback. */
export default function VideoSources({ project }: { project: PortfolioProject }) {
  return (
    <>
      {project.videoWebmUrl && <source src={project.videoWebmUrl} type="video/webm" />}
      <source src={project.videoUrl} type="video/mp4" />
    </>
  );
}
