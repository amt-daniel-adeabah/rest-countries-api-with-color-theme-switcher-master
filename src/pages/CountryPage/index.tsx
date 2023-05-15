import * as C from './styles'
import { Link, useParams } from 'react-router-dom'
import { SingleCountry } from '../../components/SingleCountry'
import { useEffect, useState } from 'react'
import { CountryTS } from '../../types/Country'
import { api } from '../../api'
import { useForm } from '../../contexts/ThemeContext'

export const CountryPage = () => {
  const { state } = useForm()
  const { name, code } = useParams()

  const [loading, setLoading] = useState(false)
  const [country, setCountry] = useState<CountryTS[]>([])

  useEffect(() => {
    if (name) {
      getCountry(name)
    } else if (code) {
      getCountry(code)
    }
  }, [name, code])

  const getCountry = async (param: string) => {
    setLoading(true)
    try {
      let response = await api.getCountries()
      let country = response.find((item: CountryTS) => item.name === param)
      setCountry(country ? [country] : [])
    } catch (error) {
      console.error('Error fetching country:', error)
      setCountry([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <C.CountryPage theme={state.theme}>
      <div className='container'>
        <Link to="/" className='back--button'><i className="fas fa-long-arrow-alt-left"></i> Back</Link>
        {loading &&
          <div className='loading'>Loading...</div>
        }
        {!loading && country.map((item) => (
          <SingleCountry
            key={item.name}
            flag={item.flags.png}
            name={item.name}
            nativeName={item.nativeName}
            topLevelDomain={item.topLevelDomain[0]}
            population={item.population}
            currencies={item.currencies && item.currencies}
            region={item.region}
            languages={item.languages}
            subregion={item.subregion}
            capital={item.capital}
            borders={item.borders}
          />
        ))}
      </div>
    </C.CountryPage>
  )
}
