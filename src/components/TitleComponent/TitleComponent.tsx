import type { TitleData } from "../../types/Title"
import './TitleComponent.css'

interface TitleProps {
    data: TitleData;
}

const TitleComponent: React.FC<TitleProps> = ({ data }) => {
  return (
    <div className="title-comp">
        <h2 className="fs-68">{data.title}</h2>
        <p className="fs-24">{data.desc}</p>
    </div>
  )
}

export default TitleComponent