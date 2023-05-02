import * as C from './styles'
import { SingleCountryTS } from '../../types/SingleCountry'
import countryCodes from '../../utilities/countryCodes';
import { Link } from 'react-router-dom'
import { useForm } from '../../contexts/ThemeContext'

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
    const { state } = useForm()
    return (
        <C.CountryData theme={state.theme}>
            <img src={flag} alt={`Country: ${name}`} />
            <div className='data--area'>
                <h1>{name}</h1>
                <div className='data--firstArea'>
                    <p><span>Native Name: </span>{nativeName}</p>
                    <p className='topLevel'><span>Top Level Domain: </span>{topLevelDomain}</p>
                    <p><span>Population: </span><span>Population:</span>{' '}{population.toLocaleString()}</p>
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
                            {borders
                                ? borders.map(
                                    (border: string, index: number) => (
                                        <Link
                                            to={`/code/${border}`}
                                            className="border"
                                            key={index}
                                        >
                                            {countryCodes[border]}
                                        </Link>
                                    ),
                                ): 'No, border!'}
                            </div>
                    </div>
            </div>
        </C.CountryData>
    )
}