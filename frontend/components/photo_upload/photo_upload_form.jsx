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
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideUploadModal = this.hideUploadModal.bind(this);
  }

  handleInput(e) {
    this.setState({title: e.currentTarget.value});
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photoFile: file,
        photoUrl: fileReader.result,
        title: file.name.split('.').slice(0, -1).join('.')
      });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleDrop(files) {
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photoFile: file,
        photoUrl: fileReader.result,
        title: file.name.split('.').slice(0, -1).join('.')
      })
    }
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

    this.setState({
      title: "",
      photoFile: null,
      photoUrl: null
    }, () => {
      const fileInput = document.getElementById('file-input');
      fileInput.value = ''
    });

    const modal = document.getElementById('file-upload-modal');
    modal.classList.add('hidden');
  }

  hideUploadModal(e) {
    const modal = document.getElementById('file-upload-modal');
    if (e.target == modal) {
      modal.classList.add('hidden')
    }
  }



  render() {

    return (
      <div id='file-upload-modal'
        className='hidden'
        onClick={this.hideUploadModal}>
        <div className='upload-modal-content'>

          <Dropzone className="dropzone"
            onDrop={this.handleDrop}
            disableClick={true}>
            <h1 className='drag-drop-label'>
              Or drag & drop photos anywhere on this page
            </h1>
          </Dropzone>

          <form className='file-upload-form'
            onSubmit={this.handleSubmit}>

            <label htmlFor='file-input'
              className='file-input-button'>Select Photos
            </label>
            <input type='file'
              id='file-input'
              className='file-input hidden'
              onChange={this.handleFile}/>

            <div className='input-pos-div'>
              <label htmlFor='upload-title-input'
                className='upload-title-label'>Title
              </label>
              <input className='upload-title-input'
                id='upload-title-input'
                type='text'
                value={this.state.title}
                onChange={this.handleInput}
                value={this.state.title}/>
            </div>

            <button className='upload-submit-btn'
              onClick={this.handleSubmit}>Submit</button>

            <div className='img-pos-div'>
              <div className='img-align-div'>
                <img className='img-preview' src={this.state.photoUrl} />
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}
