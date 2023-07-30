import './App.css'

// components imports
import ButtonDefault from './components/ButtonDefault'
import ButtonDefaultHover from './components/ButtonDefaultHover'
import ButtonDisableShadow from './components/ButtonDisableShadow'
import ButtonOutline from './components/ButtonOutline'
import ButtonOutlineHover from './components/ButtonOutlineHover'
import ButtonText from './components/ButtonText'
import ButtonTextHover from './components/ButtonTextHover'
import ButtonDisabled from './components/ButtonDisabled'
import ButtonDisabledText from './components/ButtonDisabledText'
import ButtonStartIcon from './components/ButtonStartIcon'
import ButtonEndIcon from './components/ButtonEndIcon'
import ButtonSm from './components/ButtonSm'
import ButtonMd from './components/ButtonMd'
import ButtonLg from './components/ButtonLg'
import ButtonDefaultCol from './components/ButtonDefaultCol'
import ButtonDefaultBlue from './components/ButtonDefaultBlue'
import ButtonSecondary from './components/ButtonSecondary'
import ButtonDanger from './components/ButtonDanger'
import ButtonDefaultColHover from './components/ButtonDefaultColHover'
import ButtonDefaultBlueHover from './components/ButtonDefaultBlueHover'
import ButtonSecondaryHover from './components/ButtonSecondaryHover'
import ButtonDangerHover from './components/ButtonDangerHover'

export default function App () {
  return(
    <main className='container'>
      <aside className='aside'>
        <h4 className='aside__title'><span>Dev</span>challenges.io</h4>

        <ul className='aside__list'>
          <li>Colors</li>
          <li>Typography</li>
          <li>Spaces</li>
          <li>Buttons</li>
          <li className='aside__list__activeLi'>Inputs</li>
          <li>Grid</li>
        </ul>
      </aside>

      <section className='section'>
        <h1 className='section__title'>Buttons</h1>

        <article className='article'>
          <ButtonDefault />
          <ButtonDefaultHover />
        </article>

        <article className='article'>
          <ButtonOutline />
          <ButtonOutlineHover />
        </article>

        <article className='article'>
          <ButtonText />
          <ButtonTextHover />
        </article>

        <ButtonDisableShadow />

        <article className='article__disabled'>
          <ButtonDisabled />
          <ButtonDisabledText />
        </article>

        <article className='article__shop'>
          <ButtonStartIcon />
          <ButtonEndIcon />
        </article>

        <article className='article__size'>
          <ButtonSm />
          <ButtonMd />
          <ButtonLg />
        </article>

        <article className='btns__colored'>
          <ButtonDefaultCol />
          <ButtonDefaultBlue />
          <ButtonSecondary />
          <ButtonDanger />
        </article>

        <article className='btns__colored'>
          <ButtonDefaultColHover />
          <ButtonDefaultBlueHover />
          <ButtonSecondaryHover />
          <ButtonDangerHover />
        </article>

        <p className='icons__text'>Icons: https://material.io/resources/icons/?style=round</p>

        <h3 className='user__foot'>created by <a href='https://github.com/Ulise22' target='_blank' rel='noreferrer'>Ulises</a> - devChallenges.io</h3>
      </section>
    </main>
  )
}