exports.uploadFile = ({ file }, res) => {
  const { originalname: name, size } = file

  res.json({
    name,
    size,
  })
}
