import * as C from './styles'

export const Input = () => {
    return (
        <C.InputArea>
            <input 
                type="text" 
                placeholder='Search for a Country'
            />
            <select>
                <option value="Filter by Region" disabled selected> Filter by Region</option>
            </select>
        </C.InputArea>
    )
}