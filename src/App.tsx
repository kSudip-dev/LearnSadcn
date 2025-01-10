import './App.css'
import AvailableJobs from './Components/AvailableJobs'
import CardSkeleton from './Components/CardSkeleton'
import Companies from './Components/Companies'
import FeaturedClasses from './Components/FeaturedClasses'
import FeaturedCompany from './Components/FeaturedCompany'
import NextSkeleton from './Components/NextSkeleton'
import TopJobOpening from './Components/TopJobOpening'
import TrainingProgram from './Components/TrainingProgram'


function App() {

  return (
    <>
      <h2 className='text-blue-600'>Card1</h2>
      <AvailableJobs jobTitle={"Deep Learning"} location={"Sydney,Australia"} expiresIn={21} tags={["Remote","Entry Level","Full Time"]} salary={'50K - 80K AUD(Yearly)'}/>
      <h2 className='text-lg text-red-600 font-bold'>Apply Job Skeleton</h2>
      <CardSkeleton/>
      <h2>Apply Now second</h2>
      <NextSkeleton/>
      <h1>Training Program</h1>
      <TrainingProgram/>
      <h1>Featured Classes</h1>
      <FeaturedClasses/>
      <h1>Company</h1>
      <Companies/>
      <h1>Top Job Openings</h1>
      <TopJobOpening/>
      <h1>Featured Company</h1>
      <FeaturedCompany/>
    </>
  )
}

export default App
