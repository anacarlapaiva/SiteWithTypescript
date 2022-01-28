import img from './images/svg-1.svg'
import profile from './images/profilepicture.svg'
import sec3 from './images/svg-2.svg'
import sec4 from './images/teste.svg'

export interface PropsObj {
    ligthBg: boolean
    imgStart: string
    primary: boolean
    topLine: string
    lightTopLine: boolean
    lightText: boolean
    lightTextDesc: boolean
    headline: string
    description: string
    buttonLabel: string
    img?: string
    alt: string
    start: any
    profile?: string
    sec3?: string
    sec4?: string
}

export const homeObjOne: PropsObj = {
    ligthBg: false,
    imgStart: '',
    primary: true,
    topLine: 'Junte-se a nós!',
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    headline: 'Comece sua carreira como desenvolvedor da forma correta!',
    description: 'Aprenda de forma rápida e direta, organizada por carreiras e curadas por profissionais da área.',
    buttonLabel: 'Cadastre-se',
    img,
    alt: 'imagem',
    start: true,
}

export const homeObjTwo: PropsObj = {
    ligthBg: true,
    imgStart: 'start',
    primary: true,
    topLine: 'Ensino Digital',
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    headline: 'Cursos 100% online para você!',
    description: 'Acesse nossa grade de cursos e encontre a tecnologia que procura',
    buttonLabel: 'Pacotes',
    img: profile,
    alt: 'imagem',
    start: true,
}

export const homeObjThree: PropsObj = {
    ligthBg: false,
    imgStart: '',
    primary: true,
    topLine: 'Comprovado',
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    headline: 'Aumente sua produtividade',
    description: 'Nossos cursos são essenciais para quem quer começar agora.',
    buttonLabel: 'Conheça os produtos',
    img: sec3,
    alt: 'imagem',
    start: true,
}


export const homeObjFour: PropsObj = {
    ligthBg: true,
    imgStart: 'start',
    primary: true,
    topLine: 'Confira',
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    headline: 'Veja o feedback de nossos alunos',
    description: '',
    buttonLabel: '',
    img: sec4,
    alt: 'imagem',
    start: true,
}

