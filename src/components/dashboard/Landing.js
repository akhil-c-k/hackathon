import React,{Profiler} from 'react'
import './landing.scss'
import Header from '../header/Header'
import ChartBox from '../chart/ChartBox'

const Landing = () =>  {
       return (
           <div className="landing-warpper">
            <Profiler>
              <Header/>
              <ChartBox/>
              </Profiler>
           </div>
       )
}

export default Landing;
