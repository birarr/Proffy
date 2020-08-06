import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return ( <article className="teacher-item">
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/38991074?s=460&u=d4c19763761b5948f944ad80a02b6d9646f12757&v=4" alt="Ubiratan Rodrigues"/>
                            <div>
                                <strong>Ubiratan Rodrigues</strong>
                                <span>História</span>
                            </div>
                        </header>

                        <p>
                            Apaixonado por história, especialmente da <br/> segunda guerra mundial. 
                        </p>

                        <footer>
                            <p>
                                Preço/hora
                                <strong>R$50,00</strong>
                            </p>
                            <button type="button">
                                <img src={whatsappIcon} alt="whatsapp icon"/>
                                Entrar em contato
                            </button>
                        </footer>
                    </article>
    );
};

export default TeacherItem;