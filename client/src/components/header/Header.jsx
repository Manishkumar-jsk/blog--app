import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src="https://images.pexels.com/photos/14700009/pexels-photo-14700009.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="headerImg" />
    </div>
  )
}
