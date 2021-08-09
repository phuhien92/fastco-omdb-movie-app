import React from 'react';

const Footer = ({ fcolor }) => {
    const style = {
        backgroundColor: fcolor,
        border: '1px solid #000'
    }
    return (
        <div id="footer" className="bg-white border-1 border-gray-800">
            <div className="w-full max-w-6xl py-5 text-center mx-auto">
                <div className="">My favorite color is <span style={style} className="shadow-lg px-5 h-5 rounded-md">&nbsp;&nbsp;</span></div>
            </div>
        </div>
    )
}

export default Footer;