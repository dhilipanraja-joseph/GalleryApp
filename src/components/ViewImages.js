let imagesRow = this.state.albums.map(image=>{
return (
  <tr key={image._id}>
    <td><img src={image.imgurl} width="150px" alt="NO IMAGE"/></td>
    <td>{image.createdAt}</td>
    <td><button onClick={this.deletePet.bind(null,image._id)}>Delete</button>
    </td>
  </tr>
)
});
return (
<div>
  <table className="table">
    <thead>
      <tr>
        <th>Image</th>
        <th>CreatedAt</th>
        <th>Options</th>
      </tr>
    </thead>
    <tbody>
      {petRow}
    </tbody>
  </table>

</div>
)
