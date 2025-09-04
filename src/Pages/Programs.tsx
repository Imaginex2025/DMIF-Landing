
import EntrepreneurshipProgramInfo from '../Section/Programs/EntrepreneurshipProgramInfo'
import ProgramInfo from '../Section/Programs/PatentTrack'
import ProgramCards from '../Section/Programs/ProgramCards'
import ResearchInfo from '../Section/Programs/ResearchTrack'

const Programs = () => {
  return (
    <div>
      
      <ProgramCards />
      <ProgramInfo/>
      <ResearchInfo/>
      <EntrepreneurshipProgramInfo/>
    </div>
  )
}

export default Programs