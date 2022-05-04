const isValidField = function (value) 
{
    if (typeof value === 'undefined' || value === null) return false;

    if (typeof value === 'string' && value.trim().length === 0) return false;

    return true;
};
  
const isValidRequestBody = function (requestBody) 
{
   return Object.keys(requestBody).length > 0;
};

const isValidMobileNo = function (mobile)
{
    return (/^\d{10}$/.test(mobile));
};

const isValidEmail = function(email)
{
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
};

module.exports={isValidField,isValidRequestBody,isValidEmail,isValidMobileNo};