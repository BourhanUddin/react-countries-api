import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>{
            // console.log(data);//check the api data
            setCountries(data)//load the data

        })
    },[])
    return (
        <div className='countries'>
            {
                countries.map(country => <Country 
                    country ={country}
                    key = {country.cca3}
                    
                ></Country>)
            }
        </div>
    );
};

export default Countries;