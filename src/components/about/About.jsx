import React from 'react'
import { Link } from 'react-router-dom';
import { RiFindReplaceLine } from "react-icons/ri";
import me from '../../assets/xz2.jpg'

export const About = () => {
  return (
    <section className='about'>
    <main>
        <h1>About us</h1>
        <article>
            <h4>Khopdi Resto</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra sit amet aliquam id diam maecenas. Ac turpis egestas integer eget aliquet nibh praesent. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Mi proin sed libero enim sed faucibus turpis in eu. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Porttitor rhoncus dolor purus non.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra sit amet aliquam id diam maecenas. Ac turpis egestas integer eget aliquet nibh praesent. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Mi proin sed libero enim sed faucibus turpis in eu.</p>        
            <Link to='/' >
             <RiFindReplaceLine />
            </Link>
        </article>
        <div>
            <h2>Founder</h2>
            <article>
                <div>
                    <img src={me} alt='founder'/>
                    <h3>Saurav Suman</h3>
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra sit amet aliquam id diam maecenas. Ac turpis egestas integer eget aliquet nibh praesent. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Mi proin sed libero enim sed faucibus turpis in eu. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar.
                </p>
            </article>
        </div>
    </main>
    </section>
  )
}
