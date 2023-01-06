import React, { useState } from 'react'


const BMI = () => {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('male')
  const [bmi, setBmi] = useState('')



  const returnBMI = (e) => {
    e.preventDefault();
    if (height === 0 && weight === 0 && age === 0) {
      alert("Please enter some value")
    } else if (gender.toLowerCase() === 'male') {
      const TheBMI = 10 * weight + 6.25 * height - 5 * age + 5;
      setBmi(TheBMI);

    } else if (gender.toLowerCase() === 'female') {
      const TheBMI = 10 * weight + 6.25 * height - 5 * age - 161;
      setBmi(TheBMI);
    }
  }

  const ClearFunc = () => {
    window.location.reload()


  }

  return (
    <div className="BodyBMI">
      <h1 className='headBMI'>Calculate Your BMI</h1>
      <form onSubmit={returnBMI} className="formBMI">
        <p>Height:</p><input type="text" value={height} placeholder='Enter your Height' onChange={(e) => { setHeight(e.target.value) }} />
        <p>Weight:</p><input type="text" value={weight} placeholder='Enter Your Weight' onChange={(e) => { setWeight(e.target.value) }} />
        <p>Age:</p><input type="text" value={age} placeholder='Enter Your Age' onChange={(e) => { setAge(e.target.value) }} />
        <p>Gender(Male or Female):</p><input type="text" value={gender} placeholder='Enter Your gender' onChange={(e) => { setGender(e.target.value) }} />
        <div className='buttsecBMI'>
          <button className='butt'>Submit</button>
          <button className='butt' onClick={ClearFunc}>Clear</button>
        </div>
      </form>
      <div className='results'>
        <h1>The Results- </h1>
        <p>Your BMI is - <b>{bmi}</b>  Calories</p>
        <p>Your daily calorie intake with no exercise is - <b>{bmi * 1.2}</b> Calories</p>
        <p>Your daily calorie intake with little exercise (3 times a week) is - <b>{bmi * 1.375}</b> Calories</p>
        <p>Your daily calorie intake with Moderate (most of the days in a week) is - <b>{bmi * 1.55}</b> Calories</p>
        <p>Your daily calorie intake with hard exercise is - <b>{bmi * 1.725}</b> Calories</p>
        <p>Your daily calorie intake with very hard exercise (two times a day) is - <b>{bmi * 1.9}</b> Calories </p>
      </div>
    </div>
  );
}

export default BMI
