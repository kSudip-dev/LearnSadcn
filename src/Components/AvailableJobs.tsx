import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";


interface AvailableJobsProps {
  jobTitle: string;
  location: string;
  expiresIn: number; // This could also be a string if you prefer to pass the value as a string
  tags: string[];
  salary:string;
}

function AvailableJobs({ jobTitle, location, expiresIn,tags,salary }: AvailableJobsProps) {
  return (
    <div>
      <Card  className="w-[350px]">
        <CardHeader >
          <div className="h-[48px] w-[48px] bg-slate-200 rounded-full"></div>
          <Button variant={"outline"}>Apply Now</Button>
        </CardHeader>
        <CardContent>
          <CardTitle>{jobTitle}</CardTitle>
          <div className="flex justify-between gap-3">
            <div className="locations flex items-center gap-1">
              <CiLocationOn />
              {location}
            </div>
            <div className="expiresIn flex items-center gap-1">
              <CiClock2 /> <span>Expires In {expiresIn} days</span>
            </div>
          </div>
          <div className="tags">{tags.join(" . ")}</div>
          <div className="salary">Salary: {salary}</div>
        </CardContent>
        <CardFooter className="flex justify-between">
            
          <Button></Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AvailableJobs;
