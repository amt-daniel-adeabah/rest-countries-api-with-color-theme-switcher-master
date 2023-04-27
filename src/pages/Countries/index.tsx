import * as C from './styles'
import { useEffect, useState } from 'react'
import { CountriesTS } from '../../types/Countries'
import { Input } from '../../components/Input'
import { api } from '../../api'
import { CountryItem } from '../../components/CountryItem'

export const Countries = () => {
    const [countries, setCountries] = useState<CountriesTS[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getAllCountries()
    }, [])

    const getAllCountries = async () => {
        setLoading(true)
        let countries = await api.getCountries()
        setCountries(countries)
        setLoading(false)
    }

    return (
        <C.CountriesArea >
            <Input />
             <div className="countries">
                {loading && 
                    <div className="">Loading...</div>
                }
                {!loading &&
                    countries.map((item) => {
                        <CountryItem
                            name={item.name}
                            population={item.population}
                            region={item.region}
                            capital={item.capital}
                            flag={item.flags.png}
                        />
                    })  
                }
             </div>
        </C.CountriesArea>
    )
}