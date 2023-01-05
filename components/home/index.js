import Profile from './Profile'
import Repository from './Repository'

function Content() {
  return (
    <div className="container h-full bg-gray-700  flex  xl:flex-row flex-col">
        <Profile/>
        <Repository/>
    </div>
  )
}

export default Content
