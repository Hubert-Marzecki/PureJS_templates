export  const notEmpty = (str) => str === "" ? {error: "notEmpty"} : undefined;

 export const validate = (fieldValidations, obj) => {
    return Object.entries(obj)
    .flatMap(([key, value]) => {
      return fieldValidations[key].map(validation => validation(value)) 
      .filter(it => it)   
      .map(err => {
        return Object.assign(err, {field: key})
      }) 
    })      
  }

  export const  showValidationErrorsAlert = (errors) => {
    const emptyFields = errors.filter(err => err.error === "notEmpty").map(err => err.field);
    emptyFields.map(item => {
      document.querySelector(`.${item}__input`).classList.add("input--missing");
    }
      )
    swal("Oops!", `Please enter ${emptyFields.join(" and ")}.`, "warning");
  }
