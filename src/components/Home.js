import React from 'react'
import { Link } from 'react-router-dom'
import fitHome from '../img/fitHome.png'
import BMIImg from '../img/fitImgBMI.png'
import calImg from '../img/calImg.jpg'
import WT from '../img/weightTrain.png'
import yoga from '../img/yoga.png'
import cardio from '../img/cardio.png'

const Home = () => {
    return (
        <>
            <div className="landPage">
                <div className="leftProfile">
                    <h1>The Creative Body</h1>
                    <span>Right place to explore more about your body <br />get your BMI calculated and know calories of foods</span>

                    <Link className='lndButt' to="/ourbody">Explore Now</Link>
                </div>
                <div className="rightProfile">
                    <img src={fitHome} alt="" />
                </div>
            </div>
            <div className="sec2">
                <div className="leftProfile2">
                    <img src={BMIImg} alt="" />
                </div>
                <div className="rightProfile2">
                    <h1>Grow Yourself</h1>
                    <p>No matter your age, it is important to take part in sport and fitness activities on a regular basis. Of course, it becomes more important to stay active in our older years in order to stay fit and healthy.

                        The NHS reports that a lot of adults over the age of 65 spend around 10 hours a day either sitting or laying down. This lack of activity is causing serious health problems for many older people. 
                        So it is important to transform your body, click below to check your BMI and make your own diet plan and start working out.
                    </p>
                    <Link className='BmiButt' to="/BMI">Calculate BMI</Link>
                </div>
            </div>
            <div className='sec3'>
                <div className="leftProfile3">
                    <h1>Take Care of Nutrition</h1>
                    <p>Nutrients provide nourishment. Proteins, carbohydrates, fat, vitamins, minerals, fiber, and water are all nutrients. If people do not have the right balance of nutrients in their diet, their risk of developing certain health conditions increases.
                    Macronutrients are nutrients that people need in relatively large quantities, such as carbohydrates, fat, protein etc.
                    Sugar, starch, and fiber are types of carbohydrates. Proteins consist of amino acids, which are organic compounds that occur naturally.
                    fats are of two types unsaturated and saturated. The type of fat a person eats makes a difference. Unsaturated fats, such as olive oil, are more healthful than saturated fats, which tend to come from animals. find out the macros of different foods by clicking on the button below
                    </p>
                    <Link className='BmiButt' to="/nutrition">Know food Calories</Link>
                </div>
                <div className="rightProfile3">
                    <img src={calImg} alt="" />
                </div>
            </div>
            <div className="exerciseP">
                <div className="weighttrain">
                    <img src={WT} alt="" className='imgofex' />
                    <h1>Weight training</h1>
                </div>
                <div className="yoga" >
                    <img src={yoga} alt="" className='imgofex' />
                    <h1>Yoga</h1>
                </div>
                <div className="cardio">
                    <img src={cardio} alt="" className='imgofex' />
                    <h1>Cardio</h1>
                </div>
            </div>
            <div className="Searchex">
                <h1>Exercises You Should Know</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni beatae nostrum harum vel, quia, error cupiditate, aliquid itaque vitae voluptatem accusantium quaerat? Unde obcaecati modi commodi porro adipisci reprehenderit repellendus veniam nemo distinctio nisi, provident fugit. Esse dolorem aut vitae! Eum enim, earum inventore quis harum assumenda doloremque voluptatem illo!</p>
                <Link className='BmiButt' to="/ourbody">Search Ecercises</Link>
            </div>
        </>
    )
}

export default Home
