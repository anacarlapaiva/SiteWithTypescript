import * as Yup from "yup";

export interface RegisterForm {
    name: string;
    email: string;
    password: string;
}

const register = Yup.object().shape({
    name: Yup.string().required("Este campo é obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Este campo é obrigatório"),
    password: Yup.string().required("Este campo é obrigatório").min(8, "Esta senha é muito curta"),
});

export default register;

