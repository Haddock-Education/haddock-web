import React from 'react'
import './question.css'

import TitleBox from '../Titlebox'
import FormDf from '../Form'

function Question(){
    return(
        <div className="question-container">
            <div className="question-section">
                <TitleBox title="Fazer uma pergunta"/>
                <FormDf />
            </div>
        </div>
    )
}

export default Question