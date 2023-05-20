import * as C from './styles';
import { SingleCountryTS } from '../../types/SingleCountry';
import { Link } from 'react-router-dom';
import { useForm } from '../../contexts/ThemeContext';
import { api } from '../../api';
import { useEffect, useState } from 'react';

export const SingleCountry = ({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
  flag
}: SingleCountryTS) => {
  const { state } = useForm();
  const [borderFullNames, setBorderFullNames] = useState<string[]>([]);

  useEffect(() => {
    const getBorderFullNames = async (borderCodes: string[]): Promise<string[]> => {
      try {
        const response = await api.getCountries();
        const borderCountries = response.filter((country: any) => borderCodes.includes(country.alpha3Code));
        const borderCountryNames = borderCountries.map((country: any) => country.name);
        return borderCountryNames;
      } catch (error) {
        console.error('Failed to retrieve border countries:', error);
        return [];
      }
    };

    const fetchBorderFullNames = async () => {
      if (borders && borders.length > 0) {
        const fullNames = await getBorderFullNames(borders);
        setBorderFullNames(fullNames);
      }
    };

    fetchBorderFullNames();
  }, [borders]);

  return (
    <C.CountryData theme={state.theme}>
      <img src={flag} alt={`Country: ${name}`} />
      <div className='data--area'>
        <h1>{name}</h1>
        <div className='data--firstArea'>
          <p><span>Native Name: </span>{nativeName}</p>
          <p className='topLevel'><span>Top Level Domain: </span>{topLevelDomain}</p>
          <p><span>Population: </span>{' '}{population.toLocaleString()}</p>
          {currencies &&
            <p><span>Currencies: </span>{currencies.map(item => item.name)}</p>
          }
          <p><span>Region: </span>{region}</p>
          <p><span>Languages: </span>{languages.map((item, index)=>(<span className='language' key={index}>{item.name}</span>))}</p>
          <p><span>Sub Region: </span>{subregion}</p>
          {capital &&
            <p><span>Capital: </span>{capital}</p>
          }
        </div>
        <div className='border--area'>
          <p>
            Border Countries:
          </p>
          <div className='borders'>
            {borderFullNames.length > 0 ? (
              borderFullNames.map((fullName: string, index: number) => (
                <Link to={`/country/${fullName}`} className="border" key={index}>
                  {fullName}
                </Link>
              ))
            ) : (
              'No borders!'
            )}
          </div>
        </div>
      </div>
    </C.CountryData>
  );
};
