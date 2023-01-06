import React, { useEffect, useState } from 'react'

const Nutrition = () => {

  const [endPoint, setEndPoint] = useState("");

  const [container, setContainer] = useState([]);

  const [finalSubmit, setFinalSubmit] = useState('');


  useEffect(() => {
    fetchMe();// eslint-disable-next-line
  }, [finalSubmit]);


  const fetchMe = () => {
    fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${endPoint}`, {
      "method": 'GET',
      "headers": {
        'X-RapidAPI-Key': process.env.REACT_APP_SECRET_NAME,
        'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
      }
    })
      .then(res => {
        return res.json()
      })
      .then(fetched => setContainer(fetched.items))
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));





  }


  const onChangeHandler = (e) => {
    setEndPoint(e.target.value)
    // console.log("clicked")
  }


  const submitHandler = e => {
    e.preventDefault();
    if (container) {
      setFinalSubmit(endPoint);
    } else {
      alert("nothing")
    }

  }

  return (
    <>
      <div className="App">
        <h1 className='thehead'>Enter food to know the calories</h1>
        <span>Know the calories of your food and make your own diet plan</span>
        <form onSubmit={submitHandler}>
          <input className='TheSearch' type="text" value={endPoint} onChange={onChangeHandler}/>
          <button className='TheButton' type='submit'>Search Food</button>
        </form>

        {container.map((item, index) => {
          return (
            <div key={index} className="Body">
              <p className='theTitle'>{item.name}</p>
              <p>protein:- {item.protein_g}</p>
              <p>Carbohydrate:- {item.carbohydrates_total_g}</p>
              <p>Fat:- {item.fat_total_g}</p>
              <p>Fiber:- {item.fiber_g}</p>
            </div>

          )
        })}
      </div>
    </>
  );
}

export default Nutrition
