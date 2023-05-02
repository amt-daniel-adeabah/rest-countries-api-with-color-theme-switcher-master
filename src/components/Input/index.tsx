import { InputTS } from '../../types/Input'
import * as C from './styles'
import { useForm } from '../../contexts/ThemeContext'
import { useState } from 'react'
import useDebounce from './useDebounce'

const delay = 500

export const Input = ({value, search}: InputTS) => {
    const { state } = useForm()

    const [input, setInput] = useState('')
    const [dropdownOpen, setDropdownOpen] = useState(false) // New state for dropdown menu

    const deboucedChange = useDebounce(search, delay)

    const handleChange = (e: string) => {
        deboucedChange(e)
        setInput(e)
    }

    const handleToggleDropdown = () => {
        setDropdownOpen(!dropdownOpen) // Toggle the dropdownOpen state
    }

    return (
        <C.InputArea theme={state.theme}>
            <div className='textAreaDiv'>
            <i className="fa fa-search"></i> <input
                    type="text"
                    placeholder="Search for a country..."
                    value={input}
                    onChange={e => handleChange(e.target.value)}
                />
            </div>

            <div className="dropdown">
                <button className="dropdown-toggle" onClick={handleToggleDropdown}>
                    Filter by Region <i className={dropdownOpen ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i>
                </button>

                {/* Only render the dropdown menu if the dropdownOpen state is true */}
                {dropdownOpen && (
                    <div className="dropdown-menu">
                        <div className="dropdown-item" onClick={() => handleChange('')}>
                            All
                        </div>
                        <div className="dropdown-item" onClick={() => handleChange('Africa')}>
                            Africa
                        </div>
                        <div className="dropdown-item" onClick={() => handleChange('America')}>
                            America
                        </div>
                        <div className="dropdown-item" onClick={() => handleChange('Asia')}>
                            Asia
                        </div>
                        <div className="dropdown-item" onClick={() => handleChange('Europe')}>
                            Europe
                        </div>
                        <div className="dropdown-item" onClick={() => handleChange('Oceania')}>
                            Oceania
                        </div>
                    </div>
                )}
            </div>
        </C.InputArea>
    )
}
