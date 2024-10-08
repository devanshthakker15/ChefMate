import React from 'react';
import { Link } from 'react-router-dom';
import "./Category.scss";

const CategoryList = ({ categories }) => {
  // Sort categories alphabetically by title
  const sortedCategories = categories.sort((a, b) => 
    a.strCategory.localeCompare(b.strCategory)
  );

  return (
    <div className='section-wrapper bg-whitesmoke'>
      <div className='container'>
        <div className='sc-title'>Categories</div>
        <section className='sc-category grid'>
          {
            sortedCategories.map(category => {
              const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail } = category;

              return (
                <Link to={`/meal/category/${title}`} className="category-itm align-center justify-center" key={id}>
                  <div className='category-itm-img h-80 w-90 flex align-center justify-center'>
                    <img src={thumbnail} alt={title} />
                    <div className='category-itm-title bg-green'>
                      <h3 className='text-white fs-11 fw-6 ls-1 text-uppercase'>{title}</h3>
                    </div>
                  </div>
                </Link>
              );
            })
          }
        </section>
      </div>
    </div>
  );
};

export default CategoryList;
