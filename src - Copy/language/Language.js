import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function Language() {

    const [selectLang, setSelectLang] = useState("")
    console.log(selectLang)

    const lang = [
        {
            id: 1,
            label: "uz",
            title: "Uzbek"
        },
        {
            id: 2,
            label: "ru",
            title: "Russian"
        },
        {
            id: 3,
            label: "en",
            title: "English"
        }
    ]


    useEffect(() => {
        let local = localStorage.getItem("i18nextLng")
    }, [])

    const { i18n } = useTranslation()

    const changelanguage = (e) => {
        let language = e.target.value
        i18n.changeLanguage(language)
    }

    return (
        <div>
            <select name="" id="" onChange={changelanguage}>
                <option value="">select language</option>
                {
                    lang.map(language => (
                        <option key={language.id} value={language.label}>{language.title}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Language