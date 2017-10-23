import React from 'react';
import PropTypes from 'prop-types';
interface ValicValidationMessageProps {
    formErrors: ErrorMessage[];
    className?: string;
}
interface ErrorMessage {
    errorMessage: string;
    fieldName: string;    
}

class ValicValidationMessage extends React.Component<ValicValidationMessageProps, {}>{   
    render(){      
        const {formErrors}   = this.props;
        return (<div className='form-errors'>
            {formErrors !== undefined && formErrors.length >0 ? formErrors.map((field, i) => {
      if(field.errorMessage !== ""){
        return (          
		  <p  key={i}><label key={i} className="tooltip-text form-error">{ field.errorMessage} </label></p>
        )        
      } else {
        return '';
      }
    }):''}
  </div>);
    }
    static PropTypes = {
        formErrors: PropTypes.arrayOf(PropTypes.shape({            
            fieldName: PropTypes.string.isRequired,
            errorMessage: PropTypes.string.isRequired
        }).isRequired).isRequired        
    }
}

export default ValicValidationMessage;