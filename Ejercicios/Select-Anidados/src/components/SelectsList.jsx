export const SelectList = ({ title }) => {
    const key = `select-${title}`;
    const label = title.toUpperCase();
    const options = ["Cund", "Anti", "Cald"];
  
    return (
      <>
        <div className="select-list-container">
            <label className="label-select" htmlFor={key}>{label}</label>
            <select name={key} id={key}>
                <option value="">Seleccione un {title}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
      </>
    );
  };