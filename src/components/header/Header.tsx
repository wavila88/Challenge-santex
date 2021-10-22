import './Header.css'

export function Header() {
  return (
    <header className={'header-container'}>
      <div className={'header-container-img'}>
        <img 
          src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
          alt="logo"
          width='200'
        />
      </div>
      <div>$ 0</div>
    </header>
  );
}
