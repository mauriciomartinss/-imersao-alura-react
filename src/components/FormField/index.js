import React from 'react' 

function FormField({label, type, name, values, onChange}) {
    return (
        <div>
        <label>
            {label}:  
          <input
            type={type}
            value={values} //ou pode ser também values['nome']
            onChange={onChange}
            name={name}
          />
        </label>
      </div>
    )
}

export default FormField
