import "./Logo.css";

export function Logo() {
  return (
    <div className="logo">
      <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt="logo" />
    </div>
  )
}