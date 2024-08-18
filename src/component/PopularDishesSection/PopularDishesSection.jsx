import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PopularDishesSection = () => {
    // Demo dane - lista przepisów
    const dishes = [
        { id: 1, name: 'Spaghetti Bolognese', image: 'link_do_zdjecia_1', description: 'Klasyczne włoskie danie.' },
        { id: 2, name: 'Chicken Curry', image: 'link_do_zdjecia_2', description: 'Aromatyczne curry z kurczakiem.' },
        { id: 3, name: 'Beef Stroganoff', image: 'link_do_zdjecia_3', description: 'Pyszne danie z wołowiny.' },
        { id: 4, name: 'Vegetarian Pizza', image: 'link_do_zdjecia_4', description: 'Pizza z warzywami.' },
        { id: 5, name: 'Tacos', image: 'link_do_zdjecia_5', description: 'Meksykańskie tacos.' },
    ];

    // Ustawienia karuzeli
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section>
            <h2>Popular Dishes of the Week</h2>
            <Slider {...settings}>
                {dishes.map(dish => (
                    <div key={dish.id} className="dish-slide">
                        <img src={dish.image} alt={dish.name} />
                        <h3>{dish.name}</h3>
                        <p>{dish.description}</p>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default PopularDishesSection;