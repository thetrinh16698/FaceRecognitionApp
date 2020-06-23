import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Project will detect faces in your picture. Give it a try!!!'}
            </p>
            <p>
                {'Use this kind of link to the image to test: https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onPictureSubmit}>Magic!!!</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;