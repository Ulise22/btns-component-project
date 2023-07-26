import './App.css'

export default function App () {
  return(
    <main>
      <aside>
        <h4><span>Dev</span>challenges.io</h4>

        <ul>
          <li>Colors</li>
          <li>Typography</li>
          <li>Spaces</li>
          <li>Buttons</li>
          <li>Inputs</li>
          <li>Grid</li>
        </ul>
      </aside>

      <section>
        <h1>Buttons</h1>

        <article>
          <div className="btns-container">
            <span>&lt;Button /&gt;</span>
            <button>Default</button>
          </div>
          <div className="btns-container">
            <span>&:hover, &:focus</span>
            <button>Default</button>
          </div>
        </article>

        <article>
          <div className="btns-container">
            <span>&lt;Button variant="outline" /&gt;</span>
            <button>Default</button>
          </div>
          <div className="btns-container">
            <span>&:hover, &:focus</span>
            <button>Default</button>
          </div>
        </article>

        <article>
          <div className="btns-container">
            <span>&lt;Button variant="text" /&gt;</span>
            <button>Default</button>
          </div>
          <div className="btns-container">
            <span>&:hover, &:focus</span>
            <button>Default</button>
          </div>
        </article>

        <article className='btns-container'>
          <span>&lt;Button disableShadow /&gt;</span>
          <button>Default</button>
        </article>

        <article>
          <div className="btns-container">
            <span>&lt;Button disabled /&gt;</span>
            <button>Disabled</button>
          </div>
          <div className="btns-container">
            <span>&lt;Button variant="text" disabled /&gt;</span>
            <button>Disabled</button>
          </div>
        </article>

        <article>
          <div className="btns-container">
            <span>&lt;Button startIcon="local_grocery_store" /&gt;</span>
            <button>Default</button>
          </div>
          <div className="btns-container">
            <span>&lt;Button endIcon="local_grocery_store" /&gt;</span>
            <button>Default</button>
          </div>
        </article>

        <article>
          <div className="btns-container">
            <span>&lt;Button size="sm" /&gt;</span>
            <button>Default</button>
          </div>
          <div className="btns-container">
            <span>&lt;Button size="md" /&gt;</span>
            <button>Default</button>
          </div>
          <div className="btns-container">
            <span>&lt;Button size="lg" /&gt;</span>
            <button>Default</button>
          </div>
        </article>

        <article>
          <div className="btns-container">
            <span>&lt;Button color="default" /&gt;</span>
            <button>Default</button>
          </div>
          <div className="btns-container">
            <span>&lt;Button color="primary" /&gt;</span>
            <button>Default</button>
          </div>
          <div className="btns-container">
            <span>&lt;Button color="secondary" /&gt;</span>
            <button>Default</button>
          </div>
          <div className="btns-container">
            <span>&lt;Button color="danger" /&gt;</span>
            <button>Default</button>
          </div>
        </article>

        <article>
          <div className="btns-container">
            <span>&:hover, &:focus</span>
            <button>Default</button>
          </div>
          <div className="btns-container">
            <button>Default</button>
          </div>
          <div className="btns-container">
            <button>Default</button>
          </div>
          <div className="btns-container">
            <button>Default</button>
          </div>
        </article>

        <p>Icons: https://material.io/resources/icons/?style=round</p>

        <h3>created by <a href=''>Ulises</a> - devChallenges.io</h3>
      </section>
    </main>
  )
}