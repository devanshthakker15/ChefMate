import React, { useState, useEffect } from 'react';
import "./Meal.scss";
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const MealList = ({ meals }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mealsPerPage] = useState(10); // Number of meals per page

  // Sort meals alphabetically by meal name
  const sortedMeals = meals?.sort((a, b) => a.strMeal.localeCompare(b.strMeal));

  // Get current meals based on pagination
  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = sortedMeals?.slice(indexOfFirstMeal, indexOfLastMeal);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='section-wrapper'>
      <div className='container'>
        <div className='sc-title'>Meals</div>
        <section className='sc-meal grid'>
          {
            currentMeals?.map(mealItem => {
              const { idMeal: id, strArea: area, strCategory: category, strMeal: meal, strMealThumb: thumbnail } = mealItem;

              return (
                <Link to={`/meal/${id}`} className="meal-itm align-center justify-center" key={id}>
                  <div className='meal-itm-img'>
                    <img src={thumbnail} alt={meal} />
                    <div className='meal-itm-cat bg-green text-green fw-6'>{category}</div>
                  </div>

                  <div className='meal-itm-body'>
                    <div className='meal-itm-body-info flex flex-column'>
                      <div className='area fs-14 ls-1 fw-5'>{area}</div>
                      <div className='meal fw-15 fw-7 op-09'>{meal}</div>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </section>
        <Pagination
          mealsPerPage={mealsPerPage}
          totalMeals={sortedMeals?.length}
          paginate={paginate}
        />
      </div>
    </div>
  )
}

export default MealList;
