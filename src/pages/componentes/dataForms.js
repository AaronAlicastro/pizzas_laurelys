export default function dataFrom(ID_frm) {
    let camposLlenos = true, campos = {};
    for (let campo of new FormData(document.querySelector(ID_frm)).entries()) {
        if (campo[1].trim() == "") camposLlenos = false;
        campos[campo[0]] = campo[1].trim();
    }
    return { camposLlenos, campos };
}