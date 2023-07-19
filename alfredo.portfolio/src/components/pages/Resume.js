import React from 'react';
import PDF from '../../images/resume.pdf';

export default function Resume() {
    return (
        <div>
            <div>
                <object
                    data={PDF}
                    type="application/pdf"
                    width="100%"
                    height="900"
                >

                    <iframe
                        src={PDF}
                        width="100%"
                        height="900"
                    >
                        <p>This browser does not support PDF!</p>
                    </iframe>
                </object>
            </div>
        </div>
    );
}