import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div className='ma4 mt0'>
			<p className='f3'>
				{`This Smart Brain will detect faces in your pictures. Give it a try by pasting the URL of the image you want to test.`}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text'
						   	 onChange={onInputChange}/>
					<button className='w-30 grow f4 link ph3 pv2 dib white bg-navy'
									onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;
