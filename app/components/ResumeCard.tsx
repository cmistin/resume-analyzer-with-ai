import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({
  resume: { id, companyName, jobTitle, feedback, imagePath },
}: {
  resume: Resume;
}) => {
  return (
    <Link
      to={`/resume/${id}`}
      className="animate-in duration-1000 resume-card fade-in"
    >
      <div className="resume-card-header">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold !text-black break-words">{companyName}</h2>
          <h3 className="text-gray-500 text-lg break-words">{jobTitle}</h3>
        </div>

        <div className="flex-shrink-0">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>
      <div className="gradient-border animate-in duration-1000 fade-in">
        <div className="w-full h-full">
          <img
            src={imagePath}
            alt="resume"
            className="w-full h-[352px] max-sm:h-[200px] object-cover object-top"
          />
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;
