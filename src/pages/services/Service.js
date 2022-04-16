import React from 'react'
import Navbarr from '../../components/navbar/Navbar'
import './service.css'
import CarouselHome from '../../components/carousel/CarouselHome'
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn
} from 'react-scroll-motion'
import Footer from '../../components/footer/Footer'

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
const FadeUp = batch(Fade(), Move(), Sticky())

export default function Service () {
  return (
    <div>
      <Navbarr />

      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: '30px' }}>
              Let me show you scroll animation 😀
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: '40px' }}>
              {' '}
              {/* <CarouselHome /> */}
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <span style={{ fontSize: '40px' }}>
              <iframe
                width='892'
                height='502'
                src='https://www.youtube.com/embed/TF9I1GxNdJQ'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%'
            }}
          >
            <span style={{ fontSize: '40px' }}>
              <Animator animation={MoveIn(-1000, 0)}>
                Bienvenue a SolivreX 👋🏻
              </Animator>
              <Animator animation={MoveIn(1000, 0)}>Inscrivez vous 🙋🏻‍♀️</Animator>
              - Pour suivre vos colis -
              <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
              <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: '40px' }}>Done</span>
            <br />
            <span style={{ fontSize: '30px' }}>hello</span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>

    <Footer/>
    </div>
  )
}
