import React from 'react';
import Dropzone from 'react-dropzone';

export default class UploadPhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      photoFile: null,
      photoUrl: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.hideUploadModal = this.hideUploadModal.bind(this);
    
  }

  handleInput(e) {
    this.setState({title: e.currentTarget.value});
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[user_id]', this.props.currentUser.id)
    formData.append('photo[title]', this.state.title);
    if (this.state.photoFile) {
      formData.append('photo[attachedPhoto]', this.state.photoFile);
    }

    $.ajax({
      url: 'api/photos',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response.message),
      (response) => console.log(response.responseJSON)
    );
  }

  hideUploadModal(e) {
    const modal = document.getElementById('file-upload-modal');
    if (e.target == modal) {
      modal.classList.add('hidden')
    }
  }

  handleDrop(e) {

  }

  render() {

    return (
      <div id='file-upload-modal'
        className='hidden'
        onClick={this.hideUploadModal}>
        <div className='upload-modal-content'>
          <form className='file-upload-form'
            onSubmit={this.handleSubmit}>
            <label htmlFor='file-input'
              className='file-input-button'>Select Photos
            </label>
            <h1 className='drag-drop-label'>
              Or drag & drop photos anywhere on this page
            </h1>
            <input type='file'
              id='file-input'
              className='file-input'
              onChange={this.handleFile}/>
            <input type='text'
              value={this.state.title}
              onChange={this.handleInput}/>
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
