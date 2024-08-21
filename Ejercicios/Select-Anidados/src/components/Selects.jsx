import { SelectList } from "./SelectsList"

export const  Selects = () => {
    return (
        <>
         <div className="select-list-container">
                <SelectList title="Estado" />
            </div>
            <div className="select-list-container">
                <SelectList title="Municipio" />
            </div>
            <div className="select-list-container">
                <SelectList title="Ciudad" />
            </div>
        </>
    )
}