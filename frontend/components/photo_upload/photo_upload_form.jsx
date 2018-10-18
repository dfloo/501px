import React from 'react';
import Dropzone from 'react-dropzone';

export default class UploadPhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      photoFile: null,
      src: null
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hideUploadModal = this.hideUploadModal.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  componentDidUpdate() {

  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    let photoTitle = file.name.split('.').slice(0, -1).join('.');
    photoTitle = photoTitle.replace(/_/g, ' ');
    photoTitle = photoTitle.replace(/-/g, ' ');
    photoTitle = photoTitle.replace(/[0-9]/g, '');
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photoFile: file,
        src: fileReader.result,
        title: photoTitle
      });
    };

    if (file) {
      fileReader.readAsDataURL(file);
      this.toggleHidden();
    }
  }

  handleDrop(files) {
    const file = files[0];
    let photoTitle = file.name.split('.').slice(0, -1).join('.');
    photoTitle = photoTitle.replace(/_/g, ' ');
    photoTitle = photoTitle.replace(/-/g, ' ');
    photoTitle = photoTitle.replace(/[0-9]/g, '');
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photoFile: file,
        src: fileReader.result,
        title: photoTitle
      })
    }
    if (file) {
      fileReader.readAsDataURL(file);
      this.toggleHidden();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[user_id]', this.props.currentUser.id);
    formData.append('photo[title]', this.state.title);
    formData.append('photo[description]', this.state.description);
    if (this.state.photoFile) {
      formData.append('photo[attachedPhoto]', this.state.photoFile);
    }
    debugger
    this.props.createPhoto(formData);

    // this.setState({
    //   title: "",
    //   description: "",
    //   photoFile: null,
    //   src: null
    // }, () => {
    //   const fileInput = document.getElementById('file-input');
    //   fileInput.value = ''
    // });

    const modal = document.getElementById('file-upload-modal');
    modal.classList.add('hidden');

    this.toggleHidden();
  }

  hideUploadModal(e) {
    const modal = document.getElementById('file-upload-modal');
    if (e.target == modal) {
      if (
        confirm(`This photo has not been uploaded to 501px yet
          \nAre you sure you want to continue?`)
      ) {
        modal.classList.add('hidden')
      }
    }
  }

  toggleHidden() {
    const fileInputBtn = document.getElementById('file-input-button');
    const dragDropLabel = document.getElementById('drag-drop-label');
    const imgPosDiv = document.getElementById('img-pos-div');
    const uploadSubmitBtn = document.getElementById('upload-submit-btn');
    const inputPosDiv = document.getElementById('input-pos-div');

    fileInputBtn.classList.toggle('hidden');
    dragDropLabel.classList.toggle('hidden');
    imgPosDiv.classList.toggle('hidden');
    uploadSubmitBtn.classList.toggle('hidden');
    inputPosDiv.classList.toggle('hidden');
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
            <h1 id='drag-drop-label'
              className='drag-drop-label'>
              Or drag & drop photos anywhere on this page
            </h1>
          </Dropzone>

          <form className='file-upload-form'
            onSubmit={this.handleSubmit}>

            <label htmlFor='file-input'
              id='file-input-button'
              className='file-input-button'>Select Photos
            </label>
            <input type='file'
              id='file-input'
              className='file-input hidden'
              onChange={this.handleFile}/>

            <div id='input-pos-div'
              className='input-pos-div hidden'>
              <label htmlFor='upload-title-input'
                className='upload-title-label'>Title
              </label>
              <input id='upload-title-input'
                className='upload-title-input'
                type='text'
                onChange={this.handleInput('title')}
                value={this.state.title}/>

              <label htmlFor='upload-description-input'
                className='upload-description-label'>Description
              </label>
              <textarea id='upload-description-input'
                className='upload-description-input'
                onChange={this.handleInput('description')}
                value={this.state.description}>
              </textarea>
            </div>

            <button id='upload-submit-btn'
              className='upload-submit-btn hidden'
              onClick={this.handleSubmit}>Submit</button>

            <div id='img-pos-div'
              className='img-pos-div hidden'>
              <div className='img-align-div'>
                <img className='img-preview' src={this.state.src} />
              </div>
              <input className='img-title-input'
                onChange={this.handleInput}
                value={this.state.title}/>
            </div>

          </form>
        </div>
      </div>
    );
  }
}
