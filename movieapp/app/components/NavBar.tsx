type NavBar = {
  pageTitle : string;
  link : string;
}


export default function Navbar({
  pageTitle,
  link,
} : NavBar) {
  return (
    <div>
      <a href={link}>{pageTitle}</a>
    </div>
  )
}
