export default (() => {
    const esTexto = (value) => {
        let regex = new RegExp("^[a-zA-Z ]+$");
        return regex.test(value) || value.length === 0;
    };

    const esCorreo = (value) => {
        var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(value) || value.length === 0;
    };

    const esNumero = (value) => {
        var reg = new RegExp("^[0-9]+$");
        return reg.test(value) || value.length === 0;
    };
    
    return{
        esTexto,
        esCorreo,
        esNumero
    }
})();