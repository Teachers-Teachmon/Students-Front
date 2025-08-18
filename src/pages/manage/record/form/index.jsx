import {useParams} from "react-router-dom";
import Location from "../../../../components/form/location/index.jsx"
import Write from "../../../../components/form/write"
import Time from "../../../../components/form/time/index.jsx";

export default function Form(){
  const params = useParams();

  if(params.id === 'location'){
    return(
      <Location />
    )
  }
  else if (params.id === 'time'){
    return(
      <Time />
    )
  }
  else if(params.id === 'write'){
    return(
      <Write />
    )
  }
  return(
    <div>존재하지 않는 페이지 입니다.</div>
  )
}