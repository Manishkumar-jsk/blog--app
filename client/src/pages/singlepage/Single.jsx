import Sidebar from '../../components/sidebar/Sidebar'
import SinglePst from '../../components/singlepst/SinglePst'
import './single.css'

export default function Single() {
  return (
    <div className='single'>
        <SinglePst/>
        <Sidebar />
    </div>
  )
}

