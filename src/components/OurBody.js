import React from 'react'
import Card from '../components/Card.js'
import ExerciseData from '../components/ExerciseData.js'

function OurBody() {
  return (
    <>
      <div className="my-5">
        <h1 className='text-center ourBody'>OUR BODY</h1>
        <h3 className='my-3 text-center ourBodyDetails'>Details of our Body, Each muscle have different groups to train, click on search to see those exercises on each muscle</h3>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
                ExerciseData.map((val,ind)=>{
                  return <Card key={ind} imgsrc={val.Imgsrc} title={val.title} desc={val.desc} link={val.link}/>
                })
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurBody
