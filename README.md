# 501px

[Live Demo][heroku]

[heroku]: https://full-stack-501px.herokuapp.com/#/

501px is a photography website for professional and amateur photographers inspired by 500px. It makes use of a Rails/PostgreSQL backend with React.js and Redux on the frontend.

## Features
  * Secure frontend to backend user authentication using BCrypt.
  * Users can upload their favorite photos
  * Users can edit the title (automatically generated from the filename) and add a description.
  * The feed randomly sorts the photos and arranges them into rows.
  * Clicking on a photo in the feed opens it up in a Lightbox that includes a link to the details page which contains additional info about the photo and user who uploaded it.

### Drag and Drop Uploads
![Drag and Drop Upload Demo](app/assets/images/drag-and-drop.png)

  * User can upload images by selecting them from the file explorer or by dragging and dropping an image file onto the upload form.

```javascript
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
```


### Dynamic Justified Photo Gallery

![Justified Photo Gallery Demo](app/assets/images/justified-photo-gallery.png)

  * The photos are arranged into rows with constant height, justified to the full width of the window with constant grid spacing while maintaining the original photos aspect ratio.
  * The number of photos in each row varies depending on to the screen width.

```html
<Gallery images={this.state.photos}
  enableLightbox={true}
  enableImageSelection={false}
  currentImageWillChange={this.onCurrentImageChange}
  rowHeight={280}
  margin={5}
  customControls={[
    <button key="renderShow" 
    onClick={this.renderShow}>Details</button>
  ]}
/>
```

## Project Design

501px was designed to be simple, user friendly and most importantly aesthetically pleasing. Considering the limited timeframe for implementing the project, I chose to prioritize styling and bug free navigation for the core features over cloning the full functionality of the original app in order to have a solid foundation on which to build upon in the future.

## Technologies
Rails was chosen for its built-in support of relational databases and RESTful architecture. Since this project was a small scale portfolio piece completed in a limited amount of time, convenience and speed were given priority over scalability. The selected technologies (Rails, Heroku, AWS S3, etc.) are adequate for the anticipated load.

Frontend Redux states are set up with separate reducers and actions for the photos, users and errors. Thereby normalizing the state, and making it easier to keep everything updated with changes in the database.

### Additional Resources
  * [Wiki Page][Wiki]

[Wiki]: https://github.com/dfloo/501px/wiki

## Possible Future Features

In the future I would like to add:
  * Likes for Photos
  * Follows for Users
  * Ability to edit Photo attributes
  * User profiles/avatars
  * Comments on photos
  * Sorting Photos by popularity rather than randomly
